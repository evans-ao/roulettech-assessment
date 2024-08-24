import React from 'react';
import * as Layout from '../assets/Componenets';
import pics from '../assets/pictures/Pics';

//<Componenets.SiteMenu/>
//            <Componenets.SiteBanner/>
export default function Home () {
    //const navigate = useNavigate()
    return (
        <div> 
            
            <div className='horizontal-container'> 
                <Layout.SiteMenu/>
                <div className='vertical-container'> 
                    <Layout.SiteBanner/>
                    <HomeContent/>
                </div>

                
            </div>
        </div>
    );
}

export function HomeContent() {
    return (
        <div className="vertical-container" style={{alignItems: 'center', minHeight: '175px', maxHeight: '800px'}}>
            
            <img className ="square-profile" src={pics.pestoGalette} alt="Download"/>

            <div className="intro-banner">
                <div className="vertical-container paragraph-description" 
                    style={{ fontSize: '18px', alignItems: 'center'}}>
                    

                    <h1 style={{fontFamily: 'Courier New, monospace'}}>
                        Feta, Tomatoes & Pesto Gallete!
                    </h1>

                    <p>
                        Hello, I'm a 2024 Worcester Polytechnic Institute Graduate. 
                        I have a curious mind that reflects my main focus, human-centric design! 
                        As a result, I'm an experienced programmer and designer in the subjects above!
                    </p>

                </div>
            </div>

            <div className='pdf-btn'>
                <h1>
                    Click Here for the PDF Explination
                </h1>
            </div>

        </div>
    );
}