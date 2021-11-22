import React, { Component } from 'react'

export default class Search extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: ""
        }
    }
    

    handelChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handelSubmit = (e) => {
     e.preventDefault()
     this.props.addName(this.state)
     this.setState({
         name: ""
     })
    }
    render() {
        return (
            <div className="container">
            <div >
                <form onSubmit={this.handelSubmit} className="d-flex ">
                <input className="form-control"
                required
                name="name"
                placeholder="Only enter your username"
                onChange={this.handelChange}
                value ={this.state.name}></input>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <p className="mb-4 text-muted"> Only enter the  username associated with the github account </p>
            </div>
        )
    }
}