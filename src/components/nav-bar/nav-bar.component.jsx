import React from "react";
import {ReactComponent as NavBarIcon} from '../../assets/images/bars-solid.svg';
import "./nav-bar.styles.css";

class NavBar extends React.Component{
  constructor(){
    super();
    this.state = {
      isOpen: false,
      prevHeight: null,
      height: null
    }
    this.navBar = React.createRef();
  }

  componentDidMount(){
    this.setState({
      prevHeight:this.navBar.current.scrollHeight
    },()=>console.log(this.state.prevHeight))
  }

  toggleNavigation = ()=>{
    this.setState((prevState)=>({
      isOpen: !prevState.isOpen
    }),()=>{
      if(!this.state.height){

        this.setState({
          height:this.navBar.current.scrollHeight
        })
      }else{
        this.setState((prevState)=>({
          prevHeight: prevState.height,
          height:this.navBar.current.scrollHeight
        }))
      }
      // console.log(this.state.height)
    })
  }

  render(){
    return(
      <div className={`nav-bar ${this.state.isOpen?"navbar-open":"navbar-close"}`}
      style={{"--prevHeight":`${this.state.prevHeight}px`,"--height":`${this.state.height}px`}}
      ref={this.navBar}
      >
        <div className="logo-div">
          <h1 className="logo">Mentor <span className="red-logo">Plus</span></h1>
          <NavBarIcon onClick={this.toggleNavigation} className={`nav-bar-icon ${this.state.isOpen?"active":""}`} />
        </div>
        <div className={`nav-bar-button-div ${this.state.isOpen?"open":"close"}`}>
          <div className="nav-bar-button active-navbar-button">
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
