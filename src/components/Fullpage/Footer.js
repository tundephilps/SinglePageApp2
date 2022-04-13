import React from 'react'
import {BiCaretRight} from "react-icons/bi";
import { TiSocialFacebook,TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";




const Footer = () => {
  return (
    <>
      <section class="footer text-light">
            <div class="container">
                <div class="row" data-aos="fade-right">
                    <div class="col-lg-3 py-4 py-md-5">
                        <div class="d-flex align-items-center">
                            <h4 class="">Name</h4>
                        </div>
                        <p class="py-3 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi repudiandae explicabo esse maxime, impedit rem voluptatibus amet error quas.</p>
                        <div class="d-flex">
                            <div class="me-3">
                                <a href="#your-link">
                                <TiSocialFacebook className='footericon' />
                                </a>
                            </div>
                            <div class="me-3">
                                <a href="#your-link">
                                    <TiSocialTwitter className='footericon' />
                                </a>
                            </div>
                            <div class="me-3">
                                <a href="#your-link">
                                    <TiSocialInstagram className='footericon' />
                                </a>
                            </div>
                        </div>
                    </div> 

                    <div class="col-lg-3 py-4 py-md-5">
                        <div>
                            <h4 class="py-2">Quick Links</h4>
                            <div class="d-flex align-items-center py-2">
                                <BiCaretRight />
                                <a href="#about"><p class="ms-3">About</p></a>
                            </div>
                            <div class="d-flex align-items-center py-2">
                            <BiCaretRight />
                                <a href="#"><p class="ms-3">Services</p></a>
                            </div>
                            <div class="d-flex align-items-center py-2">
                            <BiCaretRight />
                                <a href="#"><p class="ms-3">Plans</p></a>
                            </div>
                            <div class="d-flex align-items-center py-2">
                            <BiCaretRight />
                                <a href="#"><p class="ms-3">Contact</p></a>
                            </div>
                        </div>
                    </div> 

                    <div class="col-lg-3 py-4 py-md-5">
                        <div>
                            <h4 class="py-2">Useful Links</h4>
                            <div class="d-flex align-items-center py-2">
                                <BiCaretRight />
                                <a href="privacy.html"><p class="ms-3">Privacy</p></a>
                                
                            </div>
                            <div class="d-flex align-items-center py-2">
                                <BiCaretRight />
                                <a href="terms.html"><p class="ms-3">Terms</p></a>
                            </div>
                            <div class="d-flex align-items-center py-2">
                                <BiCaretRight />
                                <a href="#your-link"><p class="ms-3">Disclaimer</p></a>
                            </div>
                            <div class="d-flex align-items-center py-2">
                                <BiCaretRight />
                                <a href="#your-link"><p class="ms-3">FAQ</p></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 py-4 py-md-5">
                        <div class="d-flex align-items-center">
                            <h4>Newsletter</h4>
                        </div>
                        <p class="py-3 para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ab.</p>
                        <div class="d-flex align-items-center">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control p-2" placeholder="Enter Email" aria-label="Recipient's email" />
                                <button class="btn-secondary text-light"><i class="fas fa-envelope fa-lg"></i></button>       
                            </div>
                        </div>
                    </div> 
                </div> 
                            </div> 
        </section>


        <div class="bottom py-2 text-light" >
            <div class="container d-flex justify-content-between">
                <div>
                    <p>Copyright © Some name</p>
                </div>
                <div>
                    <i class="fab fa-cc-visa fa-lg p-1"></i>
                    <i class="fab fa-cc-mastercard fa-lg p-1"></i>
                    <i class="fab fa-cc-paypal fa-lg p-1"></i>
                    <i class="fab fa-cc-amazon-pay fa-lg p-1"></i>
                </div>
            </div> 
        </div> 

    
    </>


  )
}

export default Footer