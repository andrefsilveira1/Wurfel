import React, { Component } from 'react'
import Main from '../Templates/Main'
import axios from 'axios'
import './UserCrud.css'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', work: ''},
    list:[]
}

export default class UserCrud extends Component{

    state = {...initialState}
    componentWillMount(){
        axios(baseUrl).then(resp =>{
            this.setState({ list: resp.data})
        })
    }
    clear(){
        this.setState({user: initialState.user})
    }
    save (){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({user: initialState.user, list})
        })
    }
    getUpdatedList(user, add = true){
        const list = this.state.list.filter(u => u.id != user.id)
        if(add) list.unshift(user)
        return list
    }
    Update(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.Update(e)}
                                placeholder="Digite o nome da disciplina"/>
                                
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="work"
                                value={this.state.user.work}
                                onChange={e => this.Update(e)}
                                placeholder="Digite a atividade"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                        onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    load(user){
        this.setState({user})
    }
    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdatedList(user,false)
            this.setState({ list })
        })
    }
    ShowTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Disciplina</th>
                        <th>Atividade</th>
                    </tr>
                </thead>
                <tbody>
                    {this.ShowRow()}
                </tbody>
            </table>
        )
    }
    ShowRow(){
        return this.state.list.map(user =>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.work}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render (){
        console.log(this.state.list)
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.ShowTable()}
            </Main>
        )
    }
}