import React, { Component } from 'react'

class Home extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <h3>Home</h3>
            </div>
        )
    }
}

export default Home