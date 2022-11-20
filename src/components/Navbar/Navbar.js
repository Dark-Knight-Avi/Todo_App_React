import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
function Navbar(props) {
    return (
        <nav className="todos__navbar bg-[#333] py-2 px-8 bg-[#333] text-white flex items-center">
            <div className="logo cursor-pointer flex flex-1 items-center">
                <img className="mr-5" src={logo} alt="logo" />
                <h1 className="font-bold text-2xl">Todos</h1>
            </div>
            <ul className="todos__navbar-links flex">
                <li className="todos__navbar-links_link py-2 px-4 mx-2 border border-white cursor-pointer hover:bg-slate-500 active:bg-slate-400 text-lg rounded-md">Home</li>
                <li className="todos__navbar-links_link py-2 px-4 mx-2 border border-white cursor-pointer hover:bg-slate-500 active:bg-slate-400 text-lg rounded-md">About</li>
            </ul>
        </nav>
    )
}

export default Navbar