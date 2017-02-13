import React from 'react'
import './Home.sass'
import Footer from '../../components/Footer/'
import Calculator from '../../components/Calculator/'
import Portfolio from '../../components/Portfolio/'

import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'

export const HomeView = () => (
  <div className="marketing">

    {/* ------ COSTS CALC ------ */}
    <Calculator />

    {/* ------ SERVICE ------ */}
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Наши услуги</h2>
            <hr className="primary" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img1 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Монтаж контура</small></h4>
            <p className="small">Монтаж теплого контура при строительстве фундамента по технологии утепленная шведская плита (УШП)</p>
          </div>
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img2 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Монтаж канализаций</small></h4>
            <p className="small">Монтаж автономных канализаций СБО (станция биологической очистки)</p>
          </div>
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img3 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Монтаж водоподготовки</small></h4>
            <p className="small">Монтаж систем водоподготовки (системы фильтрации)</p>
          </div>
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img4 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Монтаж котельной</small></h4>
            <p className="small">Монтаж автономных котельных в загородных домах (дизельные, газовые, электрические, твердотопливные
              котлы)</p>
          </div>
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img5 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Монтаж теплых полов</small></h4>
            <p className="small">Монтаж теплых полов</p>
          </div>
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img6 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Монтаж отопления</small></h4>
            <p className="small">Монтаж радиаторного отопления</p>
          </div>
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img7 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Водоснабжение и канализация</small></h4>
            <p className="small">Все виды работ по водоснабжению и канализации в загородных домах и квартирах</p>
          </div>
          <div className="col-lg-3 col-md-4 service-box">
            <img className="rounded"
                 src={ img8 }
                 alt="Generic placeholder image" width="140" height="140"/>
            <h4><small className="text-muted">Доставка</small></h4>
            <p className="small">Мы располагаем собственным транспортом, осуществляем доставку материала до заказчика</p>
          </div>
        </div>
      </div>
    </section>

    {/* ------ PORTFOLIO ------ */}
    <Portfolio />

    {/*<hr className="featurette-divider" />

     <div className="row featurette">
     <div className="col-md-7">
     <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
     <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
     </div>
     <div className="col-md-4">
     <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
     </div>
     </div>

     <hr className="featurette-divider" />

     <div className="row featurette">
     <div className="col-md-7 push-md-5">
     <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
     <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
     </div>
     <div className="col-md-4 pull-md-7">
     <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
     </div>
     </div>*/}

    <Footer />

  </div>
)

export default HomeView
