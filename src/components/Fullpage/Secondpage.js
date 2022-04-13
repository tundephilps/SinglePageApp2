//import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
//import bulb from "../images/statement-icon-1.svg";
import { GiSpeedometer } from "react-icons/gi";
import { BiTimeFive, BiHome } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa";
import about from "../images/about.jpg";
import { motion } from "framer-motion";



const Secondpage = () => {
  return (
      <> 
         <section class="information">
    <div class="container-fluid">  
    <motion.div animate={{ scale: 2 }} />
        <div class="row text-light">
            <div class="col-lg-4 text-center p-5" data-aos="zoom-in">
                <GiSpeedometer className='metericons' />
                <h4 class="py-3">Download 1 GBPS</h4>
                <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
            </div>
            <div class="col-lg-4 text-center p-5"  data-aos="zoom-in">
                <BiTimeFive className='metericons' />
                <h4 class="py-3">99% Internet Uptime</h4>
                <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
            </div>
            <div class="col-lg-4 text-center p-5 text-dark"  data-aos="zoom-in"> 
                <FaHeadset className='metericons' />
                <h4 class="py-3">24/7 Support </h4>
                <p class="para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
            </div>
        </div>
    </div> 
</section> 


<section class="about d-flex align-items-center text-light py-5" id="about">
    <div class="container" >
        <div class="row d-flex align-items-center">
            <div class="col-lg-7" data-aos="fade-right">
                <p>LOREM IPS</p>
                <h1>Dolor sit amet cons<br /> sliet non sed</h1>
                <p class="py-2 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>
                <p class="py-2 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>

                <div class="my-3">
                    <a class="btn" href="#your-link">Learn More</a>
                </div>
            </div>
            <div class="col-lg-5 text-center py-4 py-sm-0" data-aos="fade-down"> 
                <img class="img-fluid" src={about} alt="about" />
            </div>
        </div> 
    </div> 
    </section>

    </>


  )
}

export default Secondpage


