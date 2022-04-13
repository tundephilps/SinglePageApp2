
import React from 'react'
import work from "../images/work.jpg";
import { FaAward, FaUser } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdGppGood } from "react-icons/md";



const Fifthpage = () => {


  return (
    
    <>
        <section class="work d-flex align-items-center py-5" >
            <div class="container-fluid text-light">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right">
                        <img class="img-fluid" src={work} alt="work" />        
                    </div>
                    <div class="col-lg-5 d-flex align-items-center px-4 py-3" data-aos="">
                        <div class="row">
                            <div class="text-center text-lg-start py-4 pt-lg-0">
                                <p>DOLOR SIT</p>
                                <h2 class="py-2">Tempor commodo ullamcorp lacus</h2>
                                <p class="para-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta mollitia totam explicabo obcaecati quia laudantium repudiandae.</p>
                            </div>
                            <div class="container" data-aos="fade-up">
                                <div class="row g-5">
                                    <div class="col-6 text-start" >
                                        <BsBriefcaseFill className='metericons' />
                                        <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="1258" data-purecounter-duration="3">1252</h2>
                                        <p>PROJECTS COMPLETED</p>
                                    </div>
                                    <div class="col-6" >
                                        <FaAward className='metericons' />
                                        <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="3">150</h2>
                                        <p>AWARDS</p>
                                    </div>
                                    <div class="col-6">
                                        <FaUser className='metericons' />
                                        <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="1255" data-purecounter-duration="3">873</h2>
                                        <p>CUSTOMER ACTIVE</p>
                                    </div>
                                    <div class="col-6">
                                        <MdGppGood className='metericons' />
                                        <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="1157" data-purecounter-duration="3">2086</h2>
                                        <p>GOOD REVIEWS</p>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                                    </div> 
            </div> 
        </section>




        </>
  )
}

export default Fifthpage;


