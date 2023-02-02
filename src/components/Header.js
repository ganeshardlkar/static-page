import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
    return (
        <div className="navbar">
            {/* Left side div  */}
            <div className="left-navbar">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IOqLlbbioybxYCzObbyQx5djqD54cft0NA&usqp=CAU" alt="nft-logo"  className="logo"/>
                </div>
                <h4>P2E Pro</h4>
                <div className="search-bar">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <input className="input-element" type="text" placeholder="Collection, item or user" />
                </div>
            </div>
            {/* Rigth side div  */}
            <div className="right-navbar">
                <div>Home</div>
                <div>Explore</div>
                <div>Create</div>
                <div>Blog</div>
                <div>Contact</div>

                <div className="dark-mode">
                    <WbSunnyIcon />
                    <DarkModeIcon />
                </div>

                <div className="profile-photo">
                    <img src="https://yt3.ggpht.com/yti/AHXOFjW2nz1XXA3RxhVjNifFh1-kjB5aXpZV4l6r_rDLGQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="ashok-photo" />
                </div>

                <div>
                    <button className="btn"><LoginIcon className="login-icon"/>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header;