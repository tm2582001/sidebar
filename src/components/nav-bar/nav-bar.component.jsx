import React from "react";
import {ReactComponent as NavBarIcon} from '../../assets/images/bars-solid.svg';
import "./nav-bar.styles.css";

class NavBar extends React.Component{
  constructor(){
    super();
    this.state = {
      isOpen: false,
     }
  }


  toggleNavigation = ()=>{
    this.setState((prevState)=>({
      isOpen: !prevState.isOpen
    }))
  }
  

  render(){
    return(
      <div className={"nav-bar"}>
        <div className="logo-div">
          <h1 className="logo">Mentor Plus</h1>
          <NavBarIcon onClick={this.toggleNavigation} className={`nav-bar-icon ${this.state.isOpen?"active":""}`} />
        </div>
        <div className={`nav-bar-button-div ${this.state.isOpen?"open":""}`}>
          <div className="nav-bar-button">
            <h3>Home</h3>
          </div>
          <div className="nav-bar-button">
            <h3>Profile</h3>
          </div>
          <div className="nav-bar-button">
            <h3> </h3>
          </div>
          <div className="nav-bar-button">
            <h3> </h3>
          </div>
          <div className="nav-bar-button">
            <h3> </h3>
          </div>
        </div>
      </div>
    )
  }
} 

export default NavBar;
