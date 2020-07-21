import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

{/* <DefaultTemplate>
    <p>ABC</p> => this is prop "children" of the component DefaultTemplate
</DefaultTemplate> */}

export default class DefaultTemplate extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* Component */}
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
