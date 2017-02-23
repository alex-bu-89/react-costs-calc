import React from 'react'
import './Footer.sass'

export const Header = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col">
          <form name="contactForm" id="contactForm" method="post" action="">
            <fieldset>
              <div className="form-group">
                <input placeholder="Имя *" name="contactName" type="text" id="contactName" className="form-control" size="35" />
              </div>
              <div className="form-group">
                <input placeholder="Email *" name="contactEmail" type="text" id="contactEmail" className="form-control" size="35" />
              </div>
              <div className="form-group">
                <input placeholder="Тема *" name="contactSubject" type="text" id="contactSubject" className="form-control" size="35" />
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Сообщение <span className="required">*</span></label>
                <textarea name="contactMessage" id="contactMessage" className="form-control" rows="5" cols="30"></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Отправить</button>
                <i className="fa fa-spinner fa-pulse fa-lg "></i>

              </div>
            </fieldset>
          </form>

          <div id="message-warning"></div>
          <div id="message-success">
            <i className="icon-ok"></i>Ваше сообщение отправлено!<br />
          </div>
        </div>

        <aside className="col">
          <p><b>Контактная информация</b><br /><i className="fa fa-location-arrow"></i> Гатчинский район, Коммунар, Ижорская ул. 22А</p>
          <p><b>розничный магазин:</b><br /><i className="fa fa-phone-square"></i> (812) 923-71-45 с 10-00 до 20-00</p>
          <p>
            <b>сервис по Коммунару:</b><br /><i className="fa fa-phone-square"></i> (812) 923-71-44 с 10-00 до 20-00<br />
            <i className="fa fa-envelope"></i> info@vkommunare.ru
          </p>
          <p><b>График работы магазина:</b><br />
            <i className="fa fa-clock-o"></i> Пн-Пт с 10-00 до 20-00 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Сб-Вс с 10-00 до 19-30
          </p>
          <p>
            <a href="https://vk.com/club99636287" target="_blank">Наша страница <i className="fa fa-vk fa-2x"></i></a>
          </p>
        </aside>

      </div>
    </div>
  </footer>
)

export default Header
