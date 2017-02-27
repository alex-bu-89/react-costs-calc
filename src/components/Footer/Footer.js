import React, { Component } from 'react'
import './Footer.sass'

class Footer extends Component {

  constructor(props) {
    super(props)
    this.year = new Date().getFullYear()
  }

  render() {
    return(
      <footer id='contacts' name='contacts'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <form name='contactForm' id='contactForm' method='post'>
                <fieldset>
                  <div className='form-group'>
                    <input placeholder='Имя *' name='contactName' type='text' id='contactName' className='form-control' size='35' />
                  </div>
                  <div className='form-group'>
                    <input placeholder='Email *' name='contactEmail' type='text' id='contactEmail' className='form-control' size='35' />
                  </div>
                  <div className='form-group'>
                    <input placeholder='Тема *' name='contactSubject' type='text' id='contactSubject' className='form-control' size='35' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='contactMessage'>Сообщение <span className='required'>*</span></label>
                    <textarea name='contactMessage' id='contactMessage' className='form-control' rows='5' cols='30'></textarea>
                  </div>
                  <div className='form-group'>
                    <button className='btn btn-primary'><i className='fa fa-spinner fa-pulse '></i> Отправить</button>
                  </div>
                </fieldset>
              </form>

              <div id='message-warning'></div>
              <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
                <strong>Спасибо.</strong> Ваше сообщение было успешно отправлено.
              </div>
            </div>
            <aside className='col'>
              <p><b>Контактная информация</b><br /><i className='fa fa-location-arrow'></i> Гатчинский район, Коммунар, Ижорская ул. 22А</p>
              <p><b>розничный магазин:</b><br /><i className='fa fa-phone-square'></i> (812) 923-71-45 с 10-00 до 20-00</p>
              <p>
                <b>сервис по Коммунару:</b><br /><i className='fa fa-phone-square'></i> (812) 923-71-44 с 10-00 до 20-00<br />
                <i className='fa fa-envelope'></i> info@vkommunare.ru
              </p>
              <p><b>График работы магазина:</b><br />
                <i className='fa fa-clock-o'></i> Пн-Пт с 10-00 до 20-00 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Сб-Вс с 10-00 до 19-30
              </p>
              <p>

              </p>
            </aside>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col col-md-4'>© Компания 2007 - { this.year }</div>
              <div className='col col-md-8 justify-content-end text-right'>
                <a href='https://vk.com/club99636287' target='_blank'><i className='fa fa-vk fa-lg'></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
