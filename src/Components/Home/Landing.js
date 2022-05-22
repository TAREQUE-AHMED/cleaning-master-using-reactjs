import React from 'react';
import bucketGirl from "../../Assets/images/bucketgirl.png";

const Landing = () => {
    return (
        <>
        <div class="hero h-screen lg:h-[60vh] bg-accent relative z-0 mt-16">
  <div class="hero-content flex-col lg:flex-row">
   
    <div>
        <p data-aos="fade-down-right" class='text-xl' data-aos-duration="1000" data-aos-delay="200">Best Quality</p>
      <h1 class="text-5xl font-bold" data-aos="fade-down-right" data-aos-duration="800" data-aos-delay="400">Professional Cleaning Service</h1>
      <p class="py-6 max-w-xl" data-aos="fade-down-right" data-aos-duration="900" data-aos-delay="600">US pest control services is Dhaka based company. We offer rodent control, cockroach control, termite control, bed bug control</p>
      <button class="btn btn-primary" data-aos="zoom-in" data-aos-delay="1300">Get Started</button>
                </div>
                <div className='h-[60vh] shrink-0'>
                    <img src={bucketGirl} class="h-full" alt='' />

                </div>
                 
  </div>
            </div>
            <div className='rounded-2xl mx-auto  mt-[-35px] relative z-20 bg-base-200  shadow-lg p-10 w-5/6'>
                <h1 className='text-2xl mb-5 text-primary
                '>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
    </>
    );
};

export default Landing;