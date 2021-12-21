import React, { Component } from 'react'
import {render} from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"

export class App extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                  <Routes>
                    <Route exact path="app" element={<HomePage/>}/>
                    <Route path="app/signin" element={<SignIn/>}/>
                    <Route path="app/signup" element={<SignUp/>}/>
                  </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;
// const appDiv = document.getElementById("app");
// render(<App/>, appDiv);
