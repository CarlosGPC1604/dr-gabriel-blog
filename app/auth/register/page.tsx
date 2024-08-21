"use client"; // Indica que este componente es un Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, password }),
        });

        if (response.ok) {
            router.push('/auth/signin'); // Redirigir a la página de inicio de sesión
        } else {
            const data = await response.json();
            setError(data.error);
        }
    };

    return (
        <div>
            <h1>Registro</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label-text">Nombre:</label>
                    <input type="text" className="input input-bordered grow" value={name} onChange={(e) => setName(e.target.value)} required title="Nombre"/>
                </div>
                <div>
                    <label className="label-text">Email:</label>
                    <input type="email" className="input input-bordered grow" value={email} onChange={(e) => setEmail(e.target.value)} required title="Email"/>
                </div>
                <div>
                    <label className="label-text">Contraseña:</label>
                    <input type="password" className="input input-bordered grow" value={password} onChange={(e) => setPassword(e.target.value)} required title="Contraseña"/>
                </div>
                <button type="submit" className="btn btn-info">Registrar</button>
            </form>
        </div>
    );
}
