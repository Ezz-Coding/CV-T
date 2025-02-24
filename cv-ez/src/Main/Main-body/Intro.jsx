import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './intro.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import image from '../../assets/FREE.png';
import image2 from '../../assets/image(2).png';
import { Contextthis } from '../../Component/Login';

import image3 from '../../assets/FREE.png';

const Intro = () => {
  const {Login,click,setClick ,setBack} =useContext(Contextthis)
  const [BackInfo,setBackInfo]= useState(false);
  const openClick=()=>{
    const son1 = document.getElementById('Son1');



    son1.style.animation=click?'rotat 1s forwards':null;
  }
  return (
    <>
    <div className="intro_for_cv">
        <h1>We do that for you.</h1>
      </div>
        <div className="Main">   
        {Login?
        <div className="main_main_son">  
        <img src={image3}  alt='not found this image' className="Main-son" id='Son1'  onClick={()=>{
          
          setClick(!click)
          setBackInfo(true)
          openClick();
        
          setBack(true)
        }}/>
  
          
 </div>
        :null
      
      }
     
    
        </div>
        {
          BackInfo?<div className="backInfo">
            <div className="close">
            <i class="ri-close-line" onClick={()=>{setBackInfo(false)
            setClick(true)
          openClick();

          }}></i></div>
     <br />
         <span>Name : Ez-Code</span>
         <br />
         <br />
         <span>Phone : 0798078447</span>
         <br />
         <br />

         <span>Age : 20</span>
         <br />
         <br />

         <span>Major : Software Engineering</span>
        
          <div className="scroll-bg">
            <div className="scroll-div">
              <div className="scroll-object">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum sit possimus laudantium accusamus obcaecati cumque, voluptatem modi expedita totam labore impedit magni! Praesentium consectetur, obcaecati inventore recusandae magni labore et optio pariatur? Id commodi repudiandae, laboriosam fugiat delectus temporibus ab earum accusantium aliquid nemo saepe vel nobis deleniti architecto numquam in ex voluptates perferendis beatae placeat excepturi, ipsum molestias? Ut, debitis earum iusto sed cumque explicabo repellendus tenetur eius sunt saepe tempora optio atque deleniti placeat, ex praesentium quia laboriosam ipsam. Tempore aperiam ducimus soluta quibusdam id molestias repellat ipsam numquam quod odit quos quasi, repellendus dolore mollitia, praesentium corporis nesciunt reiciendis repudiandae asperiores inventore voluptatem fugit! Ab amet blanditiis laudantium quos, quisquam maiores iusto adipisci voluptatem officiis repudiandae? Exercitationem in, dignissimos, dolore tempora temporibus laboriosam perferendis veritatis est nobis qui nostrum architecto, eum maxime! Repudiandae officia ipsa magnam rem expedita blanditiis laboriosam dicta odio ratione, quis amet maiores libero rerum vel! Ipsum corrupti cumque rem voluptate nostrum fugiat, molestiae similique commodi explicabo quae rerum, sint obcaecati magni quis, sed numquam. Porro voluptas, autem unde quasi fuga velit id? Aperiam similique nesciunt blanditiis reiciendis? Excepturi aut pariatur libero in officiis nam tempore dolor earum rem repellat, cupiditate, accusamus nemo? Iste porro officiis quos eveniet recusandae beatae error velit eius, consequuntur voluptate molestiae fugit libero repudiandae nihil magni mollitia itaque iusto animi eaque. Sed adipisci maxime dolore excepturi commodi ducimus similique quasi voluptatem blanditiis non aut aliquam sapiente exercitationem, aperiam saepe obcaecati itaque et nobis maiores! Perferendis, aliquid voluptatem. Atque eum veniam cumque animi quos enim doloribus, suscipit voluptatibus cum, accusamus aspernatur est adipisci libero saepe quasi nesciunt iste temporibus distinctio vero voluptate voluptatem expedita dignissimos accusantium. Magni aliquam eaque, minus dolore sed at dignissimos maxime tempora rerum accusantium fugiat labore ipsum perspiciatis dolor consequuntur repellendus rem, veritatis facere expedita.
              </div>
            </div>
          </div>
        </div>:null
        }
        
      <div className="Main_TOPS">
      <div className="liner_h2">
      <h1>Top 10 The Best CV
        <br />
        🥇
      </h1>

      </div>
      <div className="swiper">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay:5000,
          disableOnInteraction:false 
        }}
        loop={true}
          direction="horizontal"
        modules={[Autoplay]}
        onSlideChange={(swiper) => console.log('Slide changed to:', swiper.activeIndex)}
        onSwiper={(swiper) => console.log('Swiper instance:', swiper)
        }
        className='Swiper'

      >
        <SwiperSlide className='Swiper_child'>
          <img src={image} alt="not found" />
        </SwiperSlide>
        <SwiperSlide className='Swiper_child' >
        <img src={image} alt="not found" />

        </SwiperSlide>
        <SwiperSlide className='Swiper_child'>
        <img src={image} alt="not found" />

        </SwiperSlide>
        <SwiperSlide className='Swiper_child'>
        <img src={image} alt="not found" />
          
        </SwiperSlide>
        <SwiperSlide className='Swiper_child'>
        <img src={image} alt="not found" />
          
        </SwiperSlide>
        <SwiperSlide className='Swiper_child'>
        <img src={image} alt="not found" />
          
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
      <div className="images_for_Backing">
        <img src={image2}alt="not found this image" />
      </div>
    </>
  );
};

export default Intro;
