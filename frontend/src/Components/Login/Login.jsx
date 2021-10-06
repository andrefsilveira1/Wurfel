import React from 'react'
import './Login.css'
import wurfel from '../../assets/images/wurfel.png'

export default props =>{
    return(
        <>
            <div className="Square">
                <h1 className="login">Login Screen</h1>
                <div className="inside">
                <img src={wurfel}/>
                    <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Login</label>
                                <input type="text" className="form-control"
                                    name="login"                     
                                    placeholder="Login"/>
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input type="text" className="form-control"
                                    name="password"                     
                                    placeholder="Senha"/>
                            </div>
                            <button className="enter">Entrar</button>
                        </div>
                </div>
            </div>
        </>
    )
}