import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Encuentra al usuario por email
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email },
                });

                // Verifica la contraseña
                if (user && bcrypt.compareSync(credentials!.password, user.password)) {
                    // Retorna el objeto de usuario que NextAuth espera
                    return {
                        id: user.id.toString(),  // Convierte el id a string
                        email: user.email,
                        name: user.name,
                        image: user.image,
                    };
                }

                // Retorna null si no se encuentra el usuario o la contraseña es incorrecta
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
