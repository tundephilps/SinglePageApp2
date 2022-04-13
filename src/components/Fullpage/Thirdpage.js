import React from 'react'

import { BiHome, BiWifi } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BsPhoneFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md"


const Thirdpage = () => {
  return (
    <section class="services d-flex align-items-center py-5" id="services">
    <div class="container text-light">
        <div class="text-center pb-4" >
            <p>SOLOR DITRO</p> 
            <h2 class="py-2">Quia accusantium sunt corporis</h2>
            <p class="para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores, quia accusantium sunt corporis optio recusandae? Nostrum libero pariatur cumque, ipsa dolores voluptatibus voluptate alias sit fuga. Itaque, ea quo.</p>
        </div>
        <div class="row gy-4 py-2" data-aos="zoom-in">
            <div class="col-lg-4">
                <div class="card bg-transparent">
                    <BiHome className="metericons" />
                    <h4 class="py-2">HOME BROADBAND</h4>
                    <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card bg-transparent">
                    <BiWifi className="metericons" />
                    <h4 class="py-2"> HOME WIFI</h4>
                    <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                </div>                    
            </div>
            <div class="col-lg-4">
                <div class="card bg-transparent">
                    <FaPhoneAlt className="metericons" />
                    <h4 class="py-2">HOME BROADBAND</h4>
                    <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                </div>                    
            </div>
            <div class="col-lg-4">
                <div class="card bg-transparent">
                    <BsPhoneFill className="metericons" />
                    <h4 class="py-2">MOBILE CONNECTION</h4>
                    <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                </div>                    
            </div>
            <div class="col-lg-4">
                <div class="card bg-transparent">
                    <MdSecurity className="metericons" />
                    <h4 class="py-2">SECURITY</h4>
                    <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                </div>                    
            </div>
            <div class="col-lg-4">
                <div class="card bg-transparent">
                    <FiMonitor className="metericons" />
                    <h4 class="py-2">TV SETUP BOX</h4>
                    <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                </div>                    
            </div>
        </div> 
    </div>
    </section>


  )
}

export default Thirdpage