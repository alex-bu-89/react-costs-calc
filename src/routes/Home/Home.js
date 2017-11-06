import React from 'react'
import './Home.sass'
import Footer from '../../components/Footer/'
import Calculator from '../../components/Calculator/'
import Portfolio from '../../components/Portfolio/'
import About from '../../components/About/'
import { Map, Marker } from 'yandex-map-react'

import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'

export const HomeView = () => (
  <div className='marketing'>

    {/* ------ COSTS CALC ------ */}
    <Calculator />

    {/* ------ SERVICE ------ */}
    <section id='service' className='no-pt' name='service'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading'>Наши услуги</h2>
            <hr className='primary' />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img1 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Монтаж контура</h6>
            <p className='small'>Монтаж теплого контура при строительстве фундамента по технологии утепленная шведская плита (УШП)</p>
          </div>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img2 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Монтаж канализаций</h6>
            <p className='small'>Монтаж автономных канализаций СБО (станция биологической очистки)</p>
          </div>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img3 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Монтаж водоподготовки</h6>
            <p className='small'>Монтаж систем водоподготовки (системы фильтрации)</p>
          </div>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img4 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Монтаж котельной</h6>
            <p className='small'>Монтаж автономных котельных в загородных домах (дизельные, газовые, электрические, твердотопливные
              котлы)</p>
          </div>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img5 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Монтаж теплых полов</h6>
            <p className='small'>Монтаж теплых полов</p>
          </div>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img6 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Монтаж отопления</h6>
            <p className='small'>Монтаж радиаторного отопления</p>
          </div>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img7 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Водоснабжение и канализация</h6>
            <p className='small'>Все виды работ по водоснабжению и канализации в загородных домах и квартирах</p>
          </div>
          <div className='col-lg-3 col-md-4 service-box'>
            <img className='rounded'
                 src={ img8 }
                 alt='Generic placeholder image' width='140' height='140'/>
            <h6>Доставка</h6>
            <p className='small'>Мы располагаем собственным транспортом, осуществляем доставку материала до заказчика</p>
          </div>
        </div>
      </div>
    </section>

    {/* ------ PORTFOLIO ------ */}
    <Portfolio />

    {/* ------ ABOUT ------ */}
    <About />

    { /* MAP */ }
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h2 className='section-heading'>Мы на карте</h2>
          <hr className='primary' />
        </div>
      </div>
    </div>
    <Map center={ [59.628552564589036, 30.401207999999986] }
         zoom={ 12 }
         width='100%'
         height='400px'>

          <Marker lat={ 59.628552564589036 } lon={ 30.401207999999986 } />

    </Map>

    {/* ------ FOOTER ------ */}
    <Footer />

  </div>
)

export default HomeView
