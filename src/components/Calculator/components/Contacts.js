import React, { Component } from 'react'

class Contacts extends Component {

  constructor(props) {
    super(props)
  }

  isValidated() {
    return true
  }

  render() {
    return (
      <form>
        <div className='form-group row'>
          <label htmlFor='example-text-input' className='col-2 col-form-label'>Имя</label>
          <div className='col-10'>
            <input className='form-control' type='text' id='example-text-input' />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='example-email-input' className='col-2 col-form-label'>Email</label>
          <div className='col-10'>
            <input className='form-control' type='email' id='example-email-input' />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='example-search-input' className='col-2 col-form-label'>Телефон</label>
          <div className='col-10'>
            <input className='form-control' type='tel' id='example-search-input' />
          </div>
        </div>
        <div className='form-group row'>
          <div className='offset-sm-2 col-sm-10'>
            <button type='submit' className='btn btn-primary'>Отправить</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Contacts
