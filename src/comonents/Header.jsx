import React from 'react'

import './Header.css';
import Map from '../images/map5.jpg'

const Header = () => {
    return (  
        <div className="jumbotron jumbotron-fluid bg-light py-4">
  
            <div className="jumbotron-background">
                <img src={Map} className="blur" />
            </div>

            <div className="container text-white">
                <h1 className="display-2">Quickest<strong style={{ color: "#fe5f55", fontStyle: "italic", fontWeight: 700 }}>Way</strong></h1>
                <p className="lead">Compare Google Maps, Bing Maps and MapQuest for quickest directions</p>
            </div>
            <form>
                
                <input type="text" placeholder="start" />
                <input type="text" placeholder="end" />
            </form>
        </div>
    );
}
 
export default Header;