import React, { Component } from 'react'
import "./Header.css";
//import { TextField } from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
//import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { BsList } from "react-icons/bs"
import { MdCancel } from "react-icons/md"




class Header extends Component {
    constructor(props) {
      super(props);
      this.state={
        show: true,
      }
    }
    state = {  }
    render() { 
      return (<>
        <nav class="navbar navbar-expand-lg  fixed-top navbar-dark" aria-label="Main navigation">
          <div class="container">
            <a class="navbar-brand logo-text"href='/#'>Navbar</a>
    <button class="navbar-toggler border border-info text-info"
     onClick={ ()=>{ this.setState({show: !this.state.show})}}>
       {this.state.show ? <BsList /> : <MdCancel />}
       
        
     </button> 
  
    <div class={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <a class="nav-link text-light" href="/##">Home</a> 
        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#plans">Plans</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        <div>
  <input id="input" color="none" /><button id="button" className='searchicon'><AiOutlineSearch id="navicon"  /></button>
  </div>       
      </ul>
      

    </div>

    <div>
        
    </div>
          </div>
          
        </nav>
        </>  );
    }
  }
   
  export default Header;


/*<nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
            <div class="container">


                <a class="navbar-brand logo-text" href="#">Name</a>
        
                <button class="navbar-toggler border border-info text-info"
   onClick={ ()=>{ this.setState({show: !this.state.show})}} id="navicon">
     {this.state.show ? <BsList /> : <MdCancel />}
      </button>         
                <div class={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                    <ul class="navbar-nav ms-auto navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#header">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#plans">Plans</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                  </div>
<div>
  <input id="input" color="none" /><button id="button" className='searchicon'><AiOutlineSearch id="navicon"  /></button>
  </div>

            </div> 
            
        


        </nav>
       
      <h1>{this.state.show}</h1>

 */