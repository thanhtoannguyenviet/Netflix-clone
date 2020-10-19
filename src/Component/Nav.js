import React, { useEffect, useState } from 'react'
import "../Css/maincontent.scss"
function Nav(){
    const [show,handleShow ] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY> 100){
                handleShow(true)
            }else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    },[])
    return(
        <div className={`nav ${show ? "nav__black":""}`}>
            <img className="nav__logo"
                src={require('../logo.png')} alt="Netflix Logo">
            </img>
            <img className="nav__avatar"
                src={require('../logo.png')} alt="Netflix Logo">
            </img>
        </div>
    )
}
export default Nav