import React, { Component } from 'react'
import Navigationbar from '../Details/NavigationBar/Navigationbar'
import Sidebar from '../Details/Sidebar/Sidebar'
import Webcam from "react-webcam"
import './SignIn.css';
import MediaControlCard from '../Details/ControlCard/ControlCard';



export class SignIn extends Component {    
    render() {
        const videoConstraints = {
            width: 2280,
            height: 1220,
            facingMode: "user"
        };
          
        return (
            <div>
                <Navigationbar />
                <div className='home2'>
                    <Sidebar />
                    <div>
                    <Webcam
                    audio={false}
                    height={720}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    videoConstraints={videoConstraints}
                    />
                    <h1>Control Script</h1>
                    <div className='home3'>
                        <MediaControlCard />
                        <MediaControlCard />
                        <MediaControlCard />
                        <MediaControlCard />
                        <MediaControlCard />
                        <MediaControlCard />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignIn
