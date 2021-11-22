import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="d-flex flex-column text-center">
                        <h3 className="max-width=40px">Github User : {this.props.name}</h3>
                        Avatar<a href={this.props.account}><img className="rounded " src={this.props.image} alt="" /></a>
                    </div>
            </div>
        )
    }
}
