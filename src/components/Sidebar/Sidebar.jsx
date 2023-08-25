import React, { useState } from 'react';
import "./Sidebar.css";
import hamburger from "../../imgs/hamburger.png"
import Logo from "../../imgs/logo.png"
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from '../../Data/Data';
import useWindowResize from '../../useWindowResize';

const Sidebar = () => {

    const { width } = useWindowResize();

    const [selected, setSelected] = useState(0);
    const [clicked, setClicked] = useState(true);
    return (
        <div className="sidebar">
            <div style={width < 1200 && clicked? { transform:" translate(-1000px)"}: {transform:" translate(-15px)"}}>

                <div className="logo">
                    <img src={Logo} alt='This is a logo'/>
                    <span>
                        <span>S</span>hops
                    </span>
                </div>
                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div className={selected === index ? "menuitem active" : "menuitem"}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span className={selected === index ? "activespan" : ""}>{item.heading}</span>
                            </div>

                        )
                    })}
                    <div className="signout">
                        <UilSignOutAlt />
                        <div id='signout'>
                            <div>SignOut</div>

                        </div>
                    </div>
                </div>
            </div>
<img className='image' onClick={()=>{
    clicked? setClicked(false) :setClicked(true);
    console.log(clicked);
}} style={clicked? { transform:" translate(-250px)"} : {transform:" translate(-65px)"}} src={hamburger} alt='This is a icon'/>
        </div>
    )
}

export default Sidebar