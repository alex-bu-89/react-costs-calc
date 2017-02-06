import React from 'react'

export const Slider = () => (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
          <div className="container">
            <div className="carousel-caption d-none d-md-block">
              <h1>Монтаж системы отопления и водоснабжения загородного дома</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Оставить заявку</a></p>
            </div>
          </div>
        </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>
    </div>
  </div>
)

export default Slider
