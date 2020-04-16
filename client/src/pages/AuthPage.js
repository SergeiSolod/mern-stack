import React from 'react'

const AuthPage = props => {
    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field col s6">
                                <input placeholder="Placeholder" id="first_name" type="text" className="validate">
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="Placeholder" id="first_name" type="text" className="validate">
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className='btn yellow darken-4' style={{marginRight: 10}}>Войти</button>
                        <button className='btn grey lighten-1 black-text'>Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
)
}

export default AuthPage