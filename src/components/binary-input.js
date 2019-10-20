import React, { Component } from 'react'
import algorithms from '../algorithms'
import STORE from '../STORE'

class Binary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {
                index: '',
                searches: ''
            },
            index: ''
        }
    }

    handleIndex = (e) => {
        this.setState({ index: e.target.value })
    }

    handleResults = (data) => {
        this.setState({ results: data })
    }

    handleSumbit = (e) => {
        e.preventDefault()

        let arr = STORE.sort()

        let { index } = this.state

        console.log(arr, index)

        let answer = algorithms.binarySearch(arr, index)

        this.handleResults(answer)
    }

    render() {
        const { results } = this.state
        return (
            <div>
                <h2>Binary</h2>
                <form onSubmit={this.handleSumbit}>
                    <input type='number' name='index' min='0' max='99' onChange={this.handleIndex} />
                    <button type='submit'>Show Results</button>
                </form>
                <div>
                    <p>Index: {results.index}</p>
                    <p># of Searches: {results.searches}</p>
                </div>
            </div>
        )
    }
}

export default Binary