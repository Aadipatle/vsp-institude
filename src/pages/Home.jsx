import React, { useEffect } from 'react'
import Header from '../components/Header'
import training from "../Assets/DI1.svg"
import Choice from "../Assets/DI2.svg"
import arrow from "../Assets/D3.svg"
import arrowL from "../Assets/D6.svg"
import teaching from "../Assets/Teaching.svg"
import innovation from "../Assets/Innovation.svg"
import certificate from "../Assets/certification.svg"
import tick from "../Assets/tick.svg"
import about from "../Assets/About pic.svg"
import gallary from "../Assets/gallery.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
  
  useEffect(() => {
    AOS.init({

    });
  },[])

  let users = [
    {
      profile: '/Images/Profile.svg',
      name: 'aadi',
      head1: 'Remote Piloted Aircraft (RPC) Course',
      head2: '5 Days Of Training And 15 Days of TOT',
      description: 'GIRIDHAR GOPAL has successfully completed the Remote Piloted Aircraft (RPC) course offered by RPTO. Throughout the duration of the course, John demonstrated a strong commitment to learning and consistently exhibited a high level of professionalism in his approach to the material.'
    },
    {
      profile: '/Images/Profile.svg',
      name: 'satyam',
      head1: 'Remote Piloted Aircraft (RPC) Course',
      head2: '5 Days Of Training And 15 Days of TOT',
      description: 'GIRIDHAR GOPAL has successfully completed the Remote Piloted Aircraft (RPC) course offered by RPTO. Throughout the duration of the course, John demonstrated a strong commitment to learning and consistently exhibited a high level of professionalism in his approach to the material.'
    },
    {
      profile: '/Images/Profile.svg',
      name: 'aditya',
      head1: 'Remote Piloted Aircraft (RPC) Course',
      head2: '5 Days Of Training And 15 Days of TOT',
      description: 'GIRIDHAR GOPAL has successfully completed the Remote Piloted Aircraft (RPC) course offered by RPTO. Throughout the duration of the course, John demonstrated a strong commitment to learning and consistently exhibited a high level of professionalism in his approach to the material.'
    },
  ]

  return (
    <>
      <div className="wrapper" id='home'>
        <Header />
        <div className="heading-wrapper" >
          <div className="heading" data-aos="fade-right" id-duration='1000'>
            <p>New Arrival</p>
            <h1> <span>VSP</span> Flight Training Academy</h1>
          </div>
          <div className="heading-para" data-aos="zoom-in" id-duration='1200'>
            <p>VSP technology empowers us to see the future of possible. Learn about our consumer drones</p>
          </div>
          <div className="heading-btn" data-aos="fade-up" id-duration='1400'>
            <button>Join Now</button>
          </div>
        </div>
      </div> 
      <div className="fly">
        <h2 data-aos="zoom-out">FLY HIGH THROUGH THE SKY</h2>
      </div>
      <div className="booking">
        <div className="booking-heading" data-aos="zoom-in">
          <h2>Book Your Training</h2>
          <p>"Elevate Your Skills with Our DGCA-Certified Drone Training Courses"</p>
        </div>
        <div className="booking-content">
          <div className="img" data-aos="fade-right">
            <img src={training} alt="" />
          </div>
          <div className="description" data-aos="fade-left">
            <h5> <span className='s'>Rotorcraft</span> training, VLOS</h5>
            <div className="training-des">
              <h4>Details:</h4>
            </div>
            <div className="training-des">
              <h4>Class:Small</h4>
            </div>
            <div className="training-des">
              <div><h4>Structure:</h4></div>
              <div className='pp'>Theory Classes[Online/Offline]  02 Days Theory Test, Simulator, Assembly & Practical Flying:03 Days</div>

            </div>
            <div className="training-des">
              <div><h4>Fees:</h4></div>
              <div className='pp'> Rs.45,000 + GST per candidate for Small Class, Multirotor DGCA-Certified <br /></div>
            </div>
            <div className="bbtn">
        <button>Join Now</button>
        </div>
            <p>Know More➡</p>
          </div>
        </div>
      </div>
      <div className="choice-wrapper">
        <div className="choice-img" data-aos='zoom-in'>
          <img src={Choice} alt="" />
        </div>
        <div className="choice-content">
          <div className="choice-heading" >
            <img src={arrow} alt="" />
            <h2>Why Should You <span>Choose</span> Us ?</h2>
            <p>you're starting your journey in drone piloting or aiming to enhance your skills, Drone Training RPTO provides the expertise and support to excel in unmanned aviation.</p>
          </div>
          <div className="choice-points">
            <div className="point" data-aos='fade-up'>
              <img src={teaching} alt="" />
              <div className="point-details">
                <h5>Comprehensive Training</h5>
                <p>Tailored programs that cover all aspects of drone operation, ensuring thorough understanding and skill development.</p>
              </div>
            </div>
            <div className="point" data-aos='fade-right'>
              <img src={innovation} alt="" />
              <div className="point-details">
                <h5>Innovation</h5>
                <p>Embrace the latest advancements in drone technology and industry best practices..</p>
              </div>
            </div>
            <div className="point" data-aos='fade-down'>
              <img src={certificate} alt="" />
              <div className="point-details">
                <h5>Professionalism</h5>
                <p>Uphold high standards of integrity, professionalism, and ethics in every aspect of our training and services..</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="about">
        <div className="about-content">
          <img src={arrow} className='img' alt="" />
          <h2>ABOUT US</h2>
          <p>At Drone Training RPTO, we're passionate about shaping the future of unmanned aviation through comprehensive training programs and expert guidance. As a leading Remote Pilot Training Organization, we specialize in providing individuals and organizations with the knowledge, skills, and certifications required to operate drones safely and effectively in various industries.</p>
          <span data-aos='zoom-in' data-aos-duration='1000'> <img src={tick} alt="" />Mission statement</span>
          <span data-aos='zoom-in' data-aos-duration='1100'> <img src={tick} alt="" />Vission</span>
          <span data-aos='zoom-in' data-aos-duration='1200'> <img src={tick} alt="" />Values Safety</span>
          <span data-aos='zoom-in' data-aos-duration='1300'> <img src={tick} alt="" />Excellence</span>
          <span data-aos='zoom-in' data-aos-duration='1400'> <img src={tick} alt="" />Innovation</span>
          <span data-aos='zoom-in' data-aos-duration='1500'> <img src={tick} alt="" />Integrity</span>
          <span data-aos='zoom-in' data-aos-duration='1600'> <img src={tick} alt="" />Collaboration</span>
          <button data-aos='zoom-in'>Learn More ➡</button>
        </div>
        <div className="about-pic" data-aos='zoom-in' data-aos-duration='1200' >
          <img src={about} alt="" />
        </div>
      </div>
      <div className="gallary">
        <h2 id=''>A Gallery Of <span>VSP</span> </h2>
        <p data-aos='zoom-in'>"Explore Our Drone Training Journey: A Visual Gallery of Excellence"</p>
        <img src={gallary} alt="" />
        <p className='ppp' data-aos='zoom-in'>View More➡</p>
      </div>



      
      <div className="feedback">
        <img className='arrowT' src={arrow} alt="" />
        <img className='arrowB' src={arrowL} alt="" />
        <h2>Student Review</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          modules={[EffectCoverflow,]}
          className='swip_wrap'
        >
        <div className="w">
        {
          users.map((e)=>{
            return(
              <SwiperSlide key={e.name} className='swiper-feedback'>
              <div className='user' data-aos='zoom-in'>
                <div className="user-heading">
                  <img src={e.profile} alt="" />
                  <div className="nam">
                    <h4>{e.name}</h4>
                    <p>{e.head1}</p>
                    <p>{e.head2}</p> 
                  </div>
                </div>
                <div className="des">
                <p>{e.description}</p>
                </div>
              </div>
            </SwiperSlide>
            )
        })
        }
        </div>
        </Swiper>
    
      </div>
      
    </>
  )
}

export default Home