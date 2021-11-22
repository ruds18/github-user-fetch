import React, { Component } from 'react'
import axios from 'axios'
export default class githubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "", name: "", account: "", id: " ", bio:""
        }

    }

    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`
        const response = await axios.get(url)
        console.log(response.data)
        console.log(this.propsusername)
        this.setState({
            id: response.data.id,
            name: response.data.name,
            image: response.data.avatar_url,
            account: response.data.html_url,
            bio: response.data.bio
        })

    }


    render() {

        return (
            
            <div className="container d-flex  justify-content-center mb-3">
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top img-fluid rounded" src={this.state.image} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{this.state.name}</h5>
                        <p class="card-text">{this.state.bio}</p>
                        <a href={this.state.account} class="btn btn-primary">visit <i class="fab fa-github-square"></i></a>
                    </div>
                </div>


            </div>

        )
    }
}
