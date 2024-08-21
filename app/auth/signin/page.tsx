"use client"; // Asegúrate de que el componente sea del lado del cliente

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/admin';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: true,
            email,
            password,
            callbackUrl,
        });

        if (!result?.ok) {
            console.error(result?.error);
        }
    };

    return (
        <div>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label-text">Email:</label>
                    <input type="email" className="input input-bordered grow" value={email} onChange={(e) => setEmail(e.target.value)} required title="Email"/>
                </div>
                <div>
                    <label className="label-text">Contraseña:</label>
                    <input type="password" className="input input-bordered grow" value={password} onChange={(e) => setPassword(e.target.value)} required title="Contraseña" />
                </div>
                <button className="btn btn-info" type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}
