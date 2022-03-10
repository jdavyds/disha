import React from "react";
import logo from './../assets/logo.png'
import { Instagram, Facebook, Phone, Twitter,  WhatsappOutlined } from '@mui/icons-material';
function Header() {
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <nav>
                <Facebook sx={{ fontSize: 35, color: '#202B8F',marginRight: 2, padding: 1, borderRadius: '50%', border: '1px solid #202B8F' }}/>
                <Twitter sx={{ fontSize: 35, color: '#202B8F',marginRight: 2, padding: 1, borderRadius: '50%', border: '1px solid #202B8F' }}/>
                <Instagram sx={{ fontSize: 35, color: '#202B8F',marginRight: 2, padding: 1, borderRadius: '50%', border: '1px solid #202B8F' }}/>
                <Phone sx={{ fontSize: 35, color: '#202B8F',marginRight: 2, padding: 1, borderRadius: '50%', border: '1px solid #202B8F' }}/>
                <WhatsappOutlined sx={{ fontSize: 35, color: '#202B8F', marginRight: 2, padding: 1, borderRadius: '50%', border: '1px solid #202B8F' }}/>
            </nav>
        </div>
    )
}
export default Header;