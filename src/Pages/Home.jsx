import React from 'react'
import img1 from '../Images/download_image_1707756500217.png'
import img2 from '../Images/download_image_1707759260851.png'
import myVideo from '../Images/Untitled video - Made with Clipchamp.mp4'
import { Col, Container, Row } from 'react-bootstrap'

import img3 from '../Images/download_image_1707766927761.png'
import img4 from '../Images/IMG_3277.JPG'
import img5 from '../Images/IMG_3640.JPG'
import img6 from '../Images/IMG_6014.JPG'

import img8 from '../Images/IMG_8508.JPG'
import img9 from '../Images/IMG_8509.JPG'
import img10 from '../Images/IMG_8505.JPG'
import img11 from '../Images/IMG_3641.JPG'
import img12 from '../Images/IMG_2315.JPG'
import img13 from '../Images/IMG_7625.JPG'
import img14 from '../Images/IMG_3292.JPG'
import img15 from '../Images/IMG_2852.JPG'
import img16 from '../Images/IMG_6016.JPG'
import img17 from '../Images/IMG_8136.JPG'
import img18 from '../Images/IMG_8137.JPG'
import img19 from '../Images/IMG_8118.JPG'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>

<img  data-aos="fade-down-right" data-aos-duration="2000" style={{width:"100%"}} src={img1} alt="" />

{/* about */}
<div className='mt-5'>
    <center><h1  data-aos="zoom-in-down" data-aos-duration="2000" style={{fontFamily:"'Protest Revolution', sans-serif",fontSize:"90px",color:"#d687b6"}}> <b>About Us</b></h1></center>
<Container>
<Row >
<Col data-aos="zoom-in-down" data-aos-duration="3000" className='mt-4' md={6}>
    <p style={{color:"#686566",fontSize:"20px",fontFamily:"'Outfit', sans-serif",textAlign:"justify",fontWeight:"590"}}>Welcome to <b>StitchWell Boutique and Beauty Parlour</b> is Located in Links Mall, Mattanur, Kerala . We want to provide better quality of services in field of textiles and beauty care sector. We have more than 20 plus years of legacy in field of textiles.
        <br /><br />
        StitchWell Boutique is a store that not just caters to the end to end needs of the all ladies ethnic wear but also offers a broad range of apparels for the all age's females. This ethnic store offers exclusive ladies' designer outfits which hail right from royal outfit to traditional heavily embellished dresses not just for a girl but for all brides as well.
        <br /><br />
        We have also started focusing in Beauty care sector by SW Make over Studio. Which is  a subsidiary of Stitch Well firm. We suggest you to Simply walk into SW make over studio and enjoy world-class beauty services. We offer a wide range of grooming and pampering treatments to meet all of your requirements!
        <br /><br />
        Our team of highly-skilled professionals are dedicated to providing quality service and the highest level of customer care. Since our founding in 2001, we have stayed committed to making sure that each and every one of our customers leaves feeling refreshed and beautiful.
    </p>


</Col>
<Col className='mt-5' md={6}>
    <center><img data-aos="zoom-in-left" data-aos-duration="3000"  className='ms-5 ' style={{width:"63%",height:"100%",}} src={img2} alt="" /></center>

    
</Col>

</Row>
</Container>


{/* vedio */}
<div>
    <center>
    <video data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5' width="60%" height="60%" muted loop autoPlay controls={false}>
                <source src={myVideo} type="video/mp4" />
                
            </video>
      </center>
</div>


{/* gallery */}
<div>
    <Container>
    <center><h1 className='mt-5' style={{fontFamily:"'Protest Revolution', sans-serif",fontSize:"90px",color:"#d687b6"}}> <b>Our Gallery</b></h1></center>


    <Swiper data-aos="fade-up-left"
      data-aos-easing="linear" data-aos-duration="3000"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{borderRadius:"10px"}} src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{borderRadius:"10px"}} src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{borderRadius:"10px"}} src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{borderRadius:"10px"}} src={img6} />
        </SwiperSlide>
    
      
      </Swiper>

     <center> <Row>
        <Col  data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img8} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img9} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img10} alt="" /></Col>

      </Row></center>
      <center>
         <Row className='mt-4 '>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img14} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img15} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img16} alt="" /></Col>

      </Row></center>
      <center>
<div className='bg1 mt-5'></div>
</center>
      <center>
      <Row className='mt-4'>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img11} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img12} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img13} alt="" /></Col>

      </Row></center>
      <center>
      <Row className='mt-4'>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img17} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img19} alt="" /></Col>
        <Col data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  data-aos="flip-up" md="4"><img style={{width:"80%",borderRadius:"10px"}} src={img18} alt="" /></Col>
        
       

      </Row></center>
      
   

    </Container>



    <center><h1 className='mt-5' style={{fontFamily:"'Protest Revolution', sans-serif",fontSize:"90px",color:"#e69abb"}}> <b>Contact Us</b></h1></center>

    <Container className='mt-5 '>
      {/* First Row */}
      <Row className='justify-content-center'>
        <Col data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4 service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black'
            
          }}
          md={4}
        >
          <div style={{ flex: 1 }}>
            <center>
            <a href="https://maps.app.goo.gl/nVrzMXeWcRWbRffn6" target="_blank" rel="noopener noreferrer">   <p className='icon-link' style={{color:"#d687b6"}}><i class="fa-solid fa-4x fa-location-dot"></i></p> </a> 
              <p style={{ color: '#382c6b', fontSize:"25px" }}><b>Visit Us</b></p>
              <p style={{ fontFamily:"'Outfit', sans-serif", color: 'black',fontSize:"20px" }}>Links Mall, Mattanur, Kerala , 670702 </p>
            </center>
          </div>
        </Col>

        <Col  data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
         
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',boxShadow: ' 2px 10px 8px black'

          }}
          className='mt-4 me-4 service-card'
          md={4}
        >
<div style={{ flex: 1 }}>
            <center>
            <Link className='icon-link' to={'https://www.instagram.com/sw_makeover_studio/?igsh=MWU4MHR2dnBvM3Nhcg%3D%3D&utm_source=qr'}>   <p style={{color:"#d687b6"}}><i class="fa-brands fa-4x fa-instagram"></i></p></Link> 
              <p style={{ color: '#382c6b', fontSize:"25px" }}><b>Instagram</b></p>
              <p href='https://www.instagram.com/stitchwell_boutique?igsh=YXNwZWUwOTdtZTF1&utm_source=qr' style={{  fontFamily:"'Outfit', sans-serif", color: 'black',fontSize:"20px",textDecoration:"none" }}>Reach out to us on Instagram!</p>

              
            </center>
          </div>




        
        </Col>

        <Col data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4  service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black'
          }}
          md={4}
        >
          <div style={{ flex: 1 }}>
            <center>
           <Link  to={'https://www.facebook.com/stitchwellboutique/'} className='icon-link'>  <p><i style={{color:"#d687b6"}} class="fa-brands fa-4x fa-facebook"></i></p></Link> 
              <p style={{ color: '#382c6b', fontSize:"25px" }}><b>Facebook</b></p>
              <p  style={{  fontFamily:"'Outfit', sans-serif", color: 'black',fontSize:"20px",textDecoration:"none" }}>Connect with us on  Facebook! </p>
            </center>
          </div>
        </Col>

        
        <Col data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4  service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black'
          }}
          md={4}
        >
          <div style={{ flex: 1 }}>
            <center>
           <Link  to={'https://wa.me/message/MDA4FX2W4E7MD1'} className='icon-link'>  <p><i style={{color:"#d687b6"}} class="fa-brands fa-4x fa-whatsapp"></i></p></Link> 
              <p style={{ color: '#382c6b', fontSize:"25px" }}><b>WhatsApp</b></p>
              <p  style={{  fontFamily:"'Outfit', sans-serif", color: 'black',fontSize:"20px",textDecoration:"none" }}>Connect with us on  WhatsApp! </p>
            </center>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
     
      <br />
      <br />
    </Container>

</div>

</div>
<hr />
<center><p> <b>© Copyright , All Rights Reserved ® StitchWell</b> </p></center>
<br />
    </div>
  )
}

export default Home