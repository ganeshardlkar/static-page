import React from 'react';
import './TopSellers.css';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function TopSellers() {
    return (
        <div className='top-sellers'>
            <div className='outer-top-part'>
                <div className="top-part">
                    <h1>Our Top Sellers</h1>
                    <div><hr /></div>
                    <div className="arrows">
                        <div className="left-arrow"><ChevronLeftIcon /></div>
                        <div className="right-arrow"><ChevronRightIcon/></div>
                    </div>
                    <button>View all<ArrowRightAltIcon className="inside-right-arrow"/></button>
                </div>
            </div>
            <div className='bottom-part'>
                <div className='box'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY9ESvMJJ4iJ0xWcr41E0JP6JAA6FGDtajw&usqp=CAU" alt="" />
                    <div className='text-info'>
                        <h4>Jim Jecob</h4>
                        <p>$12.453</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY9ESvMJJ4iJ0xWcr41E0JP6JAA6FGDtajw&usqp=CAU" alt="" />
                    <div className='text-info'>
                        <h4>Jim Jecob</h4>
                        <p>$12.453</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY9ESvMJJ4iJ0xWcr41E0JP6JAA6FGDtajw&usqp=CAU" alt="" />
                    <div className='text-info'>
                        <h4>Jim Jecob</h4>
                        <p>$12.453</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY9ESvMJJ4iJ0xWcr41E0JP6JAA6FGDtajw&usqp=CAU" alt="" />
                    <div className='text-info'>
                        <h4>Jim Jecob</h4>
                        <p>$12.453</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY9ESvMJJ4iJ0xWcr41E0JP6JAA6FGDtajw&usqp=CAU" alt="" />
                    <div className='text-info'>
                        <h4>Jim Jecob</h4>
                        <p>$12.453</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY9ESvMJJ4iJ0xWcr41E0JP6JAA6FGDtajw&usqp=CAU" alt="" />
                    <div className='text-info'>
                        <h4>Jim Jecob</h4>
                        <p>$12.453</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSellers;