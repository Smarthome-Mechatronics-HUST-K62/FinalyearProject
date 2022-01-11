import React, { Component } from 'react'
import Navigationbar from '../Details/NavigationBar/Navigationbar'
import Sidebar from '../Details/Sidebar/Sidebar'

export class SignUp extends Component {
    render() {
        return (
            <div>
                <Navigationbar />
                <div>
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default SignUp
