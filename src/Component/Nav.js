import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default Nav