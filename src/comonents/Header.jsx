import React from 'react'

import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className="display-4">Quickest<strong style={{ color: "#c40976", fontStyle: "italic" }}>WAY</strong></h1>
            <p className="lead">Compare <span style={{ color: "#4284F7" }}>G</span>
                                        <span style={{ color: "#EF4239" }}>o</span>
                                        <span style={{ color: "#FFBD06" }}>o</span>
                                        <span style={{ color: "#4284F7" }}>g</span>
                                        <span style={{ color: "#31AB52" }}>l</span>
                                        <span style={{ color: "#EF4239" }}>e</span> Maps, 
                                        <span style={{ color: "#008170" }}>Bing</span> Maps and 
                                        <span style={{ color: "black" }}> MapQuest</span> for quickest directions
                
            </p>
        </div>    
    );
}
 
export default Header;