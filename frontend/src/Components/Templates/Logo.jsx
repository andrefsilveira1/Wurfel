import './Logo.css'
import React from 'react'
import wurfel from '../../assets/images/wurfel.png'
import { Link } from 'react-router-dom'

export default props =>
<aside className = "logo">
    <Link to="/" className="logo">
        <img src={wurfel} alt = "logo"/>
    </Link>
</aside>