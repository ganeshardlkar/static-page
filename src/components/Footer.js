import React from "react";
import './Footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="first">
                    <div className="logo-text">
                        <img className="nft-logo" src="data:image/png;base64,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" alt="" />
                        <p>P2E Pro</p>
                    </div>
                    <p>P2E Pro NFT is a shared liquidity NFT market smart contract</p>
                    <div className="dropdown">
                        <p>Language</p>
                        <button className="btn">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAFVBMVEX////OESTMAAPtvb/uwcPNABXhjZHwlm9FAAABiUlEQVR4nO3asQ3DMBAEQVqk1H/JdgcTPgTvVHDY+Naata8PXHt44rQSUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRHSc6Exv3KPOcyvR/ZzZjeuaxUK/RsMTlyf+uxJRiahEVCIqEZWISkQlohJRiahEVCIqEZWISkQlohJRiahEVCIqEZWISkQlohJRiahEVCIqEZWISkRdsKgjH01fLd9wBx3WqZhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiFyT6AlXQRZ39U6PdAAAAAElFTkSuQmCC" alt="" />
                            <p>English</p>
                            <KeyboardArrowDownIcon />
                            {/* dropdown icon */}
                        </button>
                    </div>
                </div>
                <div className="second">
                    <h5>Market place</h5>
                    <p href="">Profile</p>
                    <p href="">Marketplace</p>
                    <p href="">Creators</p>
                    <p href="">Activity</p>
                    <p href="">Collections</p>
                </div>
                <div className="third">
                    <h5>Company</h5>
                    <p href="">Upload</p>
                    <p href="">Connect wallet</p>
                    <p href="">Our blog</p>
                    <p href="">Item details</p>
                    <p href="">Contact us</p>
                </div>
                <div className="fourth">
                    <h5>Join Newsletter</h5>
                    <div className="email-submit">
                        <input type="text" placeholder="Your email" className="email-input"/>
                        <button>Subscribe</button>
                    </div>
                    <div className="social-media">
                        <TwitterIcon className="single-social-media"/>
                        <InstagramIcon className="single-social-media"/>
                        <YouTubeIcon className="single-social-media"/>
                        <GitHubIcon className="single-social-media"/>
                        <AcUnitIcon className="single-social-media"/>
                    </div>
                </div>
            </footer>
            <hr />
            <div className="copyright-section">
                <p className="copyright-content">Copyright &copy; Created with love by <span className="copyright-link">P2E Pro NFT</span></p>
            </div>
        </>
    )
}

export default Footer;