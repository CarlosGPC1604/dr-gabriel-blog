import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href="/">Dr. Gabriel</a>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>Blogs</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Urología</a></li>
                                <li><a>Salud Masculina</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <div className="form-control">
                    <input type="text" placeholder="Búsqueda" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
