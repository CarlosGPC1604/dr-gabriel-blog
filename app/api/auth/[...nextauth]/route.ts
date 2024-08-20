// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email },
                });

                if (user && bcrypt.compareSync(credentials!.password, user.password)) {
                    return { id: user.id, email: user.email, name: user.name, image: user.image };
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.image = user.image;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.image = token.image;
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
