import React, { Component } from 'react'

export default class App extends Component {
    state ={
        count:0
    }

    add=()=>{
        const {count} = this.state
        this.setState({count:count+1},()=>{console.log('setState所指定的回调执行了')})
    }

    render() {
        console.log('render执行了')
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
               <button onClick={this.add}>加一</button>
            </div>
        )
    }
}
