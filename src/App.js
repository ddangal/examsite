import React, { Component } from 'react';

import './App.css';
import Sidenav from './Component/Sidenav/Sidenav';
import Topnav from "./Component/Navbar/Topnav";
import Topnav1 from "./Component/Navbar/Topnav1";
import {HashRouter as Router,Route, Redirect, Link} from 'react-router-dom';


// import all the Test Mode questions here
import TestDevOpsEC2 from "./Component/Testmode/Questions/TestDevOpsEC2";
import TestDevOpsDynamo from "./Component/Testmode/Questions/TestDevOpsDynamo";
import TestSysOps from "./Component/Testmode/Questions/TestSysOps";
import TestSolArch from "./Component/Testmode/Questions/TestSolutionArch";

// import all the Exam Mode questions here
import ExamDevOps from "./Component/Exammode/Questions/ExamDevOps";
import ExamSysOps from "./Component/Exammode/Questions/ExamSysOps";
import ExamSolArch from "./Component/Exammode/Questions/ExamSolArch";

import Homepage from './Component/Homepage/Home';
import LoggedinHome from './Component/Slider/LoggedinHome';
import Login from './Component/Slider/Login';
import AuthExample from './Component/Slider/AuthExample'

// import all the Test Module here
import Testmodule from "./Component/Testmode/Modules/Testmodule";
import TestmoduleSysOps from "./Component/Testmode/Modules/TestmoduleSysOps";
import TestmoduleSolArch from "./Component/Testmode/Modules/TestmoduleSolArch";

// import all the Test Module here
import ExammoduleDevOps from "./Component/Exammode/Modules/ExammoduleDevOps";
import ExammoduleSysOps from "./Component/Exammode/Modules/ExammoduleSysOps";
import ExammoduleSolArch from "./Component/Exammode/Modules/ExammoduleSolArch";


import Register from "./Component/Homepage/Register";
import AdminDashboard from "./Component/Homepage/AdminDashboard";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => (
        localStorage.getItem('admin') === "true"
            ? <Component {...props}/>
            : <Redirect to='/login'/>
    )}/>
)
class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <div className="App">
                    {
                        (localStorage.getItem('admin') === "true")?<Topnav1/>:<Topnav/>
                    }


                    <Sidenav/>

                    <div>
                        <Route exact path="/login" component={Login}/>
                        <PrivateRoute exact path = "/loggedin" component={LoggedinHome}/>
                        {/*<PrivateRoute exact path = "#" component = {Topnav}/>*/}
                        {/*<PrivateRoute exact path = "#" component = {Sidenav}/>*/}
                        {/*TestMode/Modules/*/}
                        <PrivateRoute exact path="/testmode/DevOps" component={Testmodule}/>
                        <PrivateRoute exact path="/testmode/SysOps" component={TestmoduleSolArch}/>
                        <PrivateRoute exact path="/testmode/SolArch" component={TestmoduleSysOps}/>

                        {/*Testmode/Questions/*/}
                        <PrivateRoute exact path="/testmode/Dynamo" component={TestDevOpsDynamo}/>
                        <PrivateRoute exact path="/testmode/EC2" component={TestDevOpsEC2}/>
                        <PrivateRoute exact path="/testmode/SysOps/EC2" component={TestSysOps}/>
                        <PrivateRoute exact path="/testmode/SolArch/EC2" component={TestSolArch}/>

                        {/*ExamMode/Modules/*/}
                        <PrivateRoute exact path="/Exammode/DevOps" component={ExammoduleDevOps}/>
                        <PrivateRoute exact path="/Exammode/SysOps" component={ExammoduleSysOps}/>
                        <PrivateRoute exact path="/Exammode/SolArch" component={ExammoduleSolArch}/>

                        {/*Testmode/Questions/*/}
                        <PrivateRoute exact path="/Exammode/DevOps/Set1" component={ExamDevOps}/>
                        <PrivateRoute exact path="/Exammode/SysOps/Set1" component={ExamSysOps}/>
                        <PrivateRoute exact path="/Exammode/SolArch/Set1" component={ExamSolArch}/>

                        <Route exact path='/' component={Homepage}/>
                        <Route exact path="/Register" component={Register}/>
                      <Route exact path="/AdminDashboard" component={AdminDashboard}/>

                    </div>


                </div>

                {/*<AuthExample/>*/}
                </div>

            </Router>
        );
    }
}

export default App;
