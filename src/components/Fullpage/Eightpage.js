import React from 'react'
import contact from "../images/contact.jpg"
import {BsPhone, BsEnvelope } from "react-icons/bs";
import {FaMap} from "react-icons/fa";
import {FiClock} from "react-icons/fi";

const Eightpage = () => {
  return (
      <>
      <section class="contact d-flex align-items-center py-5" id="contact">
            <div class="container-fluid text-light">
                <div class="row">
                    <div class="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center px-lg-5" data-aos="fade-right">
                        <div styles={"width:90%"}>
                            <div class="text-center text-lg-start py-4 pt-lg-0">
                                <p>DIFRA</p>
                                <h2 class="py-2">Dicta mollitia totam</h2>
                                <p class="para-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta mollitia totam explicabo obcaecati quia laudantium repudiandae.</p>
                            </div>
                            <div>
                                <div class="row" >
                                    <div class="col-lg-6">
                                        <div class="form-group py-2">
                                            <input type="text" class="form-control form-control-input" id="exampleFormControlInput1" placeholder="Enter name" />
                                        </div>                                
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group py-2">
                                            <input type="email" class="form-control form-control-input" id="exampleFormControlInput2" placeholder="Enter phone number" />
                                        </div>                                 
                                    </div>
                                </div>
                                <div class="form-group py-1">
                                    <input type="email" class="form-control form-control-input" id="exampleFormControlInput3" placeholder="Enter email" />
                                </div>  
                                <div class="form-group py-2">
                                    <textarea class="form-control form-control-input" id="exampleFormControlTextarea1" rows="6" placeholder="Message"></textarea>
                                </div>                            
                            </div>
                            <div class="my-3">
                                <a class="btn form-control-submit-button" href="#your-link">Submit</a>
                            </div>
                        </div>
                                            </div>
                    <div class="col-lg-6 d-flex align-items-center" data-aos="fade-down">
                        <img class="img-fluid d-none d-lg-block" src={contact} alt="contact" />        
                    </div>
                </div> 
                            </div> 
        </section> 


        <section class="location text-light py-5">
            <div class="container" data-aos="zoom-in">
                <div class="row">
                    <div class="col-lg-3 d-flex align-items-center">
                        <div class="p-2"><FaMap className='metericons' /></div>
                        <div class="ms-2">
                            <h6>LOREMIP</h6>
                            <p>Teuku Umar ST. 1919</p>
                        </div>
                    </div>
                    <div class="col-lg-3 d-flex align-items-center" >
                        <div class="p-2"><BsPhone className='metericons' /></div>
                        <div class="ms-2">
                            <h6>IPSUM DOLOR</h6>
                            <p>(800) 265  216 2020</p>
                        </div>
                    </div>
                    <div class="col-lg-3 d-flex align-items-center" >
                        <div class="p-2"><BsEnvelope className='metericons' /></div>
                        <div class="ms-2">
                            <h6>SIT A MET</h6>
                            <p>lorem@name.com</p>
                        </div>
                    </div>
                    <div class="col-lg-3 d-flex align-items-center" >
                        <div class="p-2"><FiClock className='metericons' /></div>
                        <div class="ms-2">
                            <h6>BITUM DERA</h6>
                            <p>09:00 AM - 18:00 PM</p>
                        </div>
                    </div>
                </div> 
            </div> 
        </section> 


      </>
  )
}

export default Eightpage