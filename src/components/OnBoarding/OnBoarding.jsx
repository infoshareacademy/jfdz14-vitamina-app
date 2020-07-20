import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css'
import "./OnBoarding.css";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import logo from '../image/logo.png';
import Slide1 from './slide1.svg';
import Slide2 from './slide2.svg';
import Slide3 from './slide3.svg';

SwiperCore.use([Pagination]);

const SliderConfigs = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: { clickable: true },
    onSlideChange: () => console.log('slide change'),
    onSwiper: (swiper) => console.log(swiper)
};

const Slider = () => {
  return (
    <>
      <Swiper {...SliderConfigs}>
          <SwiperSlide>
            <img src={Slide1} className="slide-image" alt=""/>
            <h1 className="slide-title">Witalność.</h1>
            <p className="slide-subtitle">Otrzymasz od nas <span style={{fontWeight: '700'}}> codzienną</span> dawkę <span style={{fontWeight: '700'}}>porad</span> jak prowadzić <span style={{fontWeight: '700'}}>zdrowszy</span> tryb życia.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} className="slide-image" alt=""/>
            <h1 className="slide-title">Odżywianie.</h1>
            <p className="slide-subtitle">Zapewnimy Ci dostęp do <span style={{fontWeight: '700'}}>szybkich</span>, łatwych w <span style={{fontWeight: '700'}}>przygotowaniu</span> i zdrowych <span style={{fontWeight: '700'}}>posiłków</span>.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} className="slide-image" alt=""/>
            <h1 className="slide-title">Aktywność.</h1>
            <p className="slide-subtitle">Codzienna dawka <span style={{fontWeight: '700'}}>motywacji</span> oraz krótkie treningi <span style={{fontWeight: '700'}}>poprawią</span> Twoją <span style={{fontWeight: '700'}}>kondycję</span>.</p>
          </SwiperSlide>
      </Swiper>
    </>
  );
};

const SignInText = () => {
  return (
    <p className="singin-text">Posiadasz już konto? <Link href="/SignIn" style={{color: '#0098C9', fontWeight: '600'}}>
    Zaloguj się.
  </Link></p>
  )
}

const OnBoarding = (props) => {
    const setUser = (event) => {
      event.preventDefault();
      props.onTemporarySetUser();
    }

    return ( 
        <>
        <CssBaseline />
        <Container maxWidth="sm" style={{height: '100vh', fontFamily: 'Source Sans Pro', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src={logo} className="logo" alt=""/>
            <div className='dupa'>
                <Slider />
            </div>
            <Button onClick={setUser} variant="contained" href="/home" style={{backgroundColor: '#0098C9', fontFamily: 'Source Sans Pro', fontSize: '16px', color: '#fff', textTransform: 'none', width: '79%', borderRadius: '8px'}}>
              Zarejestruj się
            </Button>
            <SignInText />
        </Container>
        </>
    )
}
export default OnBoarding;
