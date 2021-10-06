import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../Components/Home/Home'
import UserCrud from '../Components/User/UserCrud'
import Login from '../Components/Login/Login'

export default props =>
    <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/users' component = {UserCrud} />
        <Route exat path='/login' component = {Login}/>
        <Redirect from='*' to='/'/>
    </Switch>