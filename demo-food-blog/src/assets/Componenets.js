import React from 'react';
import './Componenets.css';
import pics from './pictures/Pics';

const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };


export function SiteMenu() {
    return(
        <div className="vertical-container" style={{alignItems:'center'}}>                
            <img className ="square-profile " src={pics.grayIcon} alt="Download"/>
            <div className='menu-banner' style={{marginTop:'-75px', fontSize: '20px'}}>

            <button>PDF File</button>
            <button>Portfolio</button>
            <button>Github</button>
            <button>LinkedIn</button>
            </div>
        </div>
    );   
}


export function SiteBanner() {
    return(
        <div>
            <p className=""style={{marginLeft:'55px', bold:'True', fontSize:'32px'}}> Welcome! </p>
            <div className="site-bar"></div>
        </div>
    );
}

export function CommentBlock({userName, comment}) {
    return(
        <div className="">

            <p className=""> {userName}</p>
            <p className=""> {comment}</p>

        <p className="" style={{marginLeft:'55px'}}>
        </p>
    </div>
    );
}

export function EmojiButton({emojiData}) {
    return(
        <div className="">

        <img className ="" src={emojiData.name} alt="Emoji"/>
        <p className=""> {emojiData.numReactions}</p>
    </div>
    );
}
