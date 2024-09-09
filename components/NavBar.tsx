import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import LogoSimplificado from '../public/logo-simplificado.svg';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 z-50">
            <div className="navbar-start justify-items-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost px-2 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow z-50">
                        <li><a href="/">Inicio</a></li>
                        <li>
                            <a>Blog</a>
                            <ul className="p-2">
                                <li><a>Urología</a></li>
                                <li><a>Salud masculina</a></li>
                            </ul>
                        </li>
                        <li><a href='/acercade'>Contacto</a></li>
                    </ul>
                </div>
                <a href="/" className="h-14">
                    <Image src={Logo} alt="Logo" className="hidden w-2/5 object-contain ml-4 sm:flex" />
                    <Image src={LogoSimplificado} alt="Logo" className="flex h-14 sm:hidden" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-50">
                    <li><a className="mx-1" href="/">Inicio</a></li>
                    <li className="mx-1">
                        <details>
                            <summary>Blog</summary>
                            <ul className="p-2">
                                <li><a>Urología</a></li>
                                <li><a>Salud masculina</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className="mx-1"><a href='/acercade'>Contacto</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mx-1 sm:mx-2" href="#">Iniciar sesión</a>
                <a className="btn btn-info mx-1 sm:mx-2" href="#">Registrarte</a>
            </div>
        </div>
    );
}

export default NavBar;
