import React from "react";
import './CardsSection.css';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function CardsSection() {
    return (
        <div className="hot-collections-section">
            <div className="top-part">
                <h1>Hot Collections</h1>
                <div><hr /></div>
                <div className="arrows">
                    <div className="left-arrow"><ChevronLeftIcon /></div>
                    <div className="right-arrow"><ChevronRightIcon/></div>
                </div>
                <button>View all<ArrowRightAltIcon className="inside-right-arrow"/></button>
            </div>
            
            <div className="cards">
                <div className="card-1">
                    <div className="card-top-part">
                        <div className="one-img">
                            <img className="one-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq20t4abrdZWp83ws7_oMnTTkAxqBJdtwzsg&usqp=CAU" alt="" />
                        </div>
                        <div className="three-imgs">
                            <img className="small-images small-img-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCE4YmpnqDPtlUEeTOBRp-UOgUfOxOD_p5w&usqp=CAU" alt="" />
                            <img className="small-images middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqABDmF_eEeNFfV1yGKetoqol64PbD12d6A&usqp=CAU" alt="" />
                            <img className="small-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxpqn3_jy7wdaxJNCTcd7qt4P5zjngK6J_JkhuexCpYP-hxVege4eSXo761B7oFuu2iU&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <div className="card-bottom-part">
                        <h5>Sounds of Silence</h5>
                        <p>236 in Collection</p>
                    </div>
                </div>
                <div className="card-2">
                <div className="card-top-part">
                        <div className="one-img">
                            <img className="one-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq20t4abrdZWp83ws7_oMnTTkAxqBJdtwzsg&usqp=CAU" alt="" />
                        </div>
                        <div className="three-imgs">
                            <img className="small-images small-img-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCE4YmpnqDPtlUEeTOBRp-UOgUfOxOD_p5w&usqp=CAU" alt="" />
                            <img className="small-images middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqABDmF_eEeNFfV1yGKetoqol64PbD12d6A&usqp=CAU" alt="" />
                            <img className="small-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxpqn3_jy7wdaxJNCTcd7qt4P5zjngK6J_JkhuexCpYP-hxVege4eSXo761B7oFuu2iU&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <div className="card-bottom-part card-bottom-part-2">
                        <h5>Sounds of Silence</h5>
                        <p>236 in Collection</p>
                    </div>
                </div>
                <div className="card-3">
                    <div className="card-top-part">
                        <div className="one-img">
                            <img className="one-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq20t4abrdZWp83ws7_oMnTTkAxqBJdtwzsg&usqp=CAU" alt="" />
                        </div>
                        <div className="three-imgs">
                            <img className="small-images small-img-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCE4YmpnqDPtlUEeTOBRp-UOgUfOxOD_p5w&usqp=CAU" alt="" />
                            <img className="small-images middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqABDmF_eEeNFfV1yGKetoqol64PbD12d6A&usqp=CAU" alt="" />
                            <img className="small-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxpqn3_jy7wdaxJNCTcd7qt4P5zjngK6J_JkhuexCpYP-hxVege4eSXo761B7oFuu2iU&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <div className="card-bottom-part card-bottom-part-3">
                        <h5>Sounds of Silence</h5>
                        <p>236 in Collection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection;