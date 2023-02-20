import React from 'react'
import './styles.css'


const Header = () => {
    return (
        <div>
            <header className='App-header-parent'>
                <a className='App-header-menu App-link'>
                    <i className="ri-menu-line"></i>
                </a>
                <a className='App-header-link App-link'>Sanjay Choudary</a>
            </header>
        </div>

    )
}

export default Header