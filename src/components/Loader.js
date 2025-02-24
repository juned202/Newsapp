import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></div>
        )
    }
}
