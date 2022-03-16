import React, { useState } from "react";
import logo from './../assets/logo.png'
import { Instagram, Facebook, Phone, Twitter,  WhatsappOutlined, Menu } from '@mui/icons-material';
function Header() {
    const [display, setDisplay] = useState(false)
    function handleClick(e) {
        e.preventDefault()
        setDisplay(!display)
    }
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <nav>
                <Facebook id='header-soc'/>
                <Twitter id='header-soc'/>
                <Instagram id='header-soc'/>
                <Phone id='header-soc'/>
                <WhatsappOutlined id='header-soc'/>
            </nav>
            <nav>
                <Menu id="hambuger" onClick={handleClick}/>
                <div className={display ? 'hamNav' : 'hamNone'}>
                    <Facebook id='header-soc'/>
                    <Twitter id='header-soc'/>
                    <Instagram id='header-soc'/>
                    <Phone id='header-soc'/>
                    <WhatsappOutlined id='header-soc'/>
                </div>
            </nav>
        </div>
    )
}
export default Header;