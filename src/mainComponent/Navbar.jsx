import React from 'react'
import "./mainComponent.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
       
            <div className='main_nav'>
                <div className='d-flex justify-content-between p-4'>
                    <div className='nav_logo'><h4>Fine-Dine</h4></div>
                    <div><ul className='d-flex'>
                        <li className='list-group-item px-2 mx-1 '><NavLink activeClassName="active" className="nav_link" to="/">Home</NavLink></li>
                        <li className='list-group-item  px-2 mx-1'><NavLink activeClassName="active" className="nav_link" to="/search_recipe">Search Food</NavLink></li>
                        <li className='list-group-item  px-2 mx-1'><NavLink activeClassName="active" className="nav_link" to="/contact">Contact us</NavLink></li>
                    </ul></div>
                    <div><ul className='d-flex'>
                        <li className='list-group-item  px-2 mx-1'>Login</li>/
                        <li className='list-group-item  px-2 mx-1'>Logout</li>
                    </ul></div>
                </div>
            </div>
       
    )
}
