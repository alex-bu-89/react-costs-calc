import React, {Component} from 'react'
import PortfolioItems from './PortfolioItems.js'
import './Portfolio.sass'

import imgp0 from './assets/p0.jpg'
import imgp1 from './assets/p1.jpg'
import imgp2 from './assets/p2.jpg'
import imgp3 from './assets/p3.jpg'
import imgp4 from './assets/p4.jpg'

class Portfolio extends Component {

  render() {

    const portfolio = [
      {
        category: 'Category',
        project_name: 'Project 1',
        description: 'Гатчинский район. Репполово. Частный дом. Монтаж котельной, водоподготовка.',
        img_mini: imgp0,
        images: [imgp0, imgp0, imgp0]
      },
      {
        category: 'Category',
        project_name: 'Project 2',
        description: 'Гатчинский район. Репполово. Частный дом. Монтаж котельной, водоподготовка.',
        img_mini: imgp1,
        images: [imgp1, imgp1, imgp1]
      },
      {
        category: 'Category',
        project_name: 'Project 3',
        description: 'Гатчинский район. Репполово. Частный дом. Монтаж котельной, водоподготовка.',
        img_mini: imgp2,
        images: [imgp2, imgp2, imgp2]
      }
    ]

    console.log(portfolio);

    return (
      <section id="portfolio">
        <div className="container mb20">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Наши работы</h2>
              <hr className="primary"/>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row no-gutter popup-gallery">

            {
              portfolio.map((item, i) => {
                return <PortfolioItems item={item} key={i}/>
              })
            }

            {/*<div className="col-lg-4 col-sm-6">
             <a href="" className="portfolio-box">
             <img src={ imgp0 } className="img-responsive" alt=""/>
             <div className="portfolio-box-caption">
             <div className="portfolio-box-caption-content">
             <div className="project-category text-faded">
             Category
             </div>
             <div className="project-name">
             Project Name
             </div>
             </div>
             </div>
             </a>
             </div>

             <div className="col-lg-4 col-sm-6">
             <a href="" className="portfolio-box">
             <img src={ imgp1 } className="img-responsive" alt=""/>
             <div className="portfolio-box-caption">
             <div className="portfolio-box-caption-content">
             <div className="project-category text-faded">
             Category
             </div>
             <div className="project-name">
             Project Name
             </div>
             </div>
             </div>
             </a>
             </div>
             <div className="col-lg-4 col-sm-6">
             <a href="" className="portfolio-box">
             <img src={ imgp2 } className="img-responsive" alt=""/>
             <div className="portfolio-box-caption">
             <div className="portfolio-box-caption-content">
             <div className="project-category text-faded">
             Category
             </div>
             <div className="project-name">
             Project Name
             </div>
             </div>
             </div>
             </a>
             </div>
             <div className="col-lg-4 col-sm-6">
             <a href="" className="portfolio-box">
             <img src={ imgp3 } className="img-responsive" alt=""/>
             <div className="portfolio-box-caption">
             <div className="portfolio-box-caption-content">
             <div className="project-category text-faded">
             Category
             </div>
             <div className="project-name">
             Project Name
             </div>
             </div>
             </div>
             </a>
             </div>
             <div className="col-lg-4 col-sm-6">
             <a href="" className="portfolio-box">
             <img src={ imgp4 } className="img-responsive" alt=""/>
             <div className="portfolio-box-caption">
             <div className="portfolio-box-caption-content">
             <div className="project-category text-faded">
             Category
             </div>
             <div className="project-name">
             Project Name
             </div>
             </div>
             </div>
             </a>
             </div>*/}
          </div>
        </div>

      </section>
    )
  }

}

export default Portfolio
