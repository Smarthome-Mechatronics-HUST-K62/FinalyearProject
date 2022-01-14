import React, { Component } from 'react'
import Navigationbar from '../Details/NavigationBar/Navigationbar'
import Sidebar from '../Details/Sidebar/Sidebar'
import Webcam from "react-webcam"
import './SignIn.css';
import MediaControlCard from '../Details/ControlCard/ControlCard';



export class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "tracking_status": false,
        }
    }
    
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

                    <div className="camera_manager">
                        <div className="wecam">
                            <Webcam
                                    audio={false}
                                    height={720}
                                    screenshotFormat="image/jpeg"
                                    width={1280}
                                    videoConstraints={videoConstraints}
                            />
                        </div>
                        
                        
                        <div className="tracking_info">
                            <div className="button-control">
                                <button className="start_btn btn btn-primary">
                                    Start tracking
                                </button>
                                <button className="stop_btn btn btn-danger">
                                    Stop tracking
                                </button>
                            </div>
                            

                            <div className="table-info table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table table-bordered table-responsive">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Human Number</th>
                                            <th scope="col">Action Detail</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>hom nay</td>
                                            <td>1h</td>
                                            <td>1</td>
                                            <td><button className="btn btn-secondary">Detail</button></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>hom nay</td>
                                            <td>1h</td>
                                            <td>1</td>
                                            <td><button className="btn btn-secondary">Detail</button></td>
                                        </tr>

                                        <tr>
                                            <td>hom nay</td>
                                            <td>1h</td>
                                            <td>1</td>
                                            <td><button className="btn btn-secondary">Detail</button></td>
                                        </tr>

                                        <tr>
                                            <td>hom nay</td>
                                            <td>1h</td>
                                            <td>1</td>
                                            <td><button className="btn btn-secondary">Detail</button></td>
                                        </tr>

                                        <tr>
                                            <td>hom nay</td>
                                            <td>1h</td>
                                            <td>1</td>
                                            <td><button className="btn btn-secondary">Detail</button></td>
                                        </tr>

                                        <tr>
                                            <td>hom nay</td>
                                            <td>1h</td>
                                            <td>1</td>
                                            <td><button className="btn btn-secondary">Detail</button></td>
                                        </tr>
                                        
                                    </tbody>

                                </table>
                            </div>
                            
                        </div>
                        
                    </div>
                        
                            
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
