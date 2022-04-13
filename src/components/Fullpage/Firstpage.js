import React from 'react'
import { FaLaptopHouse, FaWifi } from "react-icons/fa";

import { motion } from "framer-motion";

const Firstpage = () => {


  


  return (
    <>
    
    <motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }}
/>
       <section class="home py-5 d-flex align-items-center" id="header">
            <div class="container text-light py-5"  data-aos="fade-right"> 
                <h1 class="headline">Lorem <span class="home_text">Ipsum</span><br />Natus Teore Acmus</h1>
                <p class="para para-light py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus tempore accusamus quis magnam doloremque itaque ad modi, pariatur iste labore similique officiis impedit aspernatur aperiam facere architecto. Eligendi, repellendus inventore!</p>
                <div class="d-flex align-items-center">
                
                    <p class="p-2"><FaLaptopHouse className='metericons' /></p>
                    <p>Lorem ipsum dolor sit amet.</p>  
                    
                </div>
                <div class="d-flex align-items-center">
                    <p class="p-2"><FaWifi className='metericons' /></p>
                    <p>Lorem ipsum dolor sit amet.</p>  
                </div>
                <div class="my-3">
                    <a class="btn" href="#plans">View Plans</a>
                </div>
            </div> 
        </section> 

 
    </> 


  )
}

export default Firstpage;

