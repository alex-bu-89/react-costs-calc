import React from 'react'

export const Header = () => (
  <footer>
    <div className="container">
      <div className="row">

        <div className="col g-7">
          <form name="contactForm" id="contactForm" method="post" action="">
            <fieldset>
              <div>
                <label for="contactName">Имя <span className="required">*</span></label>
                <input name="contactName" type="text" id="contactName" size="35" value="" />
              </div>
              <div>
                <label for="contactEmail">Email <span className="required">*</span></label>
                <input name="contactEmail" type="text" id="contactEmail" size="35" value="" />
              </div>

              <div>
                <label for="contactSubject">Тема</label>
                <input name="contactSubject" type="text" id="contactSubject" size="35" value="" />
              </div>

              <div>
                <label for="contactMessage">Сообщение <span className="required">*</span></label>
                <textarea name="contactMessage" id="contactMessage" rows="5" cols="30"></textarea>
              </div>

              <div>
                <button className="submit">Отправить</button>
                <span id="image-loader">
                    <img src="images/loader.gif" alt="" />
                 </span>
              </div>

            </fieldset>
          </form>

          <div id="message-warning"></div>
          <div id="message-success">
            <i className="icon-ok"></i>Ваше сообщение отправлено!<br />
          </div>
        </div>

        <aside className="col g-5">
          <h3>Контактная информация</h3>
          <p>
            <i className="fa fa-location-arrow"></i> Гатчинский район, Коммунар, Ижорская ул. 22А<br />
            - розничный магазин:<br /><i className="fa fa-phone-square"></i> (812) 923-71-45 с 10-00 до 20-00<br />
            - сервис по Коммунару:<br /><i className="fa fa-phone-square"></i> (812) 923-71-44 с 10-00 до 20-00<br />
            <i className="fa fa-envelope"></i> info@vkommunare.ru
          </p>
          <p>График работы магазина:<br />
            <i className="fa fa-clock-o"></i> Пн-Пт с 10-00 до 20-00 <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Сб-Вс с 10-00 до 19-30
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
