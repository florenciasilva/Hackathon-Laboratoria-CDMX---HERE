import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import LoginParent from './Components/Global/Login';
import LoginAdmin from './Components/Admin/Login';
import LoginDriver from './Components/Drivers/Login';
import LoginSchool from './Components/Institutions/Login';
import LandingPage from './Components/Global/LandingPage';
import Form from './Components/Admin/Form';
import Driver from './Components/Drivers/Home';
import Parents from './Components/Parents/Home';
import DashboardADM from './Components/Admin/Dashboard';
import DriverRoute from './Components/Drivers/StartRoute';
import ParentRoute from './Components/Parents/ParentRoute';
import DashboardSchool from './Components/Institutions/Dashboard';
import Register from './Components/Parents/Register';

        const register = () => (
            <div>
                <Register />
            </div>

        )
        const loginParent = () => (
            <div>
                <LoginParent />
            </div>
        );

        const loginAdmin = () => (
            <div>
                <LoginAdmin />
            </div>
        );

        const loginSchool = () => (
            <div>
                <LoginSchool />
            </div>
        );

        const loginDriver = () => (
            <div>
                <LoginDriver />
            </div>
        );
        const landing = () => (
            <div>
                <LandingPage />
            </div>
        );

        const registerInstitution = () => (
            <div>
                <Form />
            </div>
        );

        const driver = () => (
            <div>
                <Driver />
            </div>
        )

        const parents = () => (
            <div>
                <Parents />
            </div>
        )

        const dashboardAdmin = () => (
            <div>
                <DashboardADM />
            </div>

        )

        const dashboardSchool = () => (
            <div>
                <DashboardSchool />
            </div>

        )
        const driverRoute = () => (
            <div>
                <DriverRoute />
            </div>
        )

        const parentRoute = () => (
            <div>
                <ParentRoute />
            </div>
        )

const Routes = () => (
    <Router basename={process.env.PUBLIC_URL}>      
            <Switch>
                <Route exact strict path="/" component= {landing} />                
                <Route exact strict path="/login-parent" component= {loginParent} />
                <Route exact strict path="/login-admin" component= {loginAdmin} />
                <Route exact strict path="/login-school" component= {loginSchool} />
                <Route exact strict path="/login-driver" component= {loginDriver} />
                <Route exact strict path="/register-institution" component= {registerInstitution} />
                <Route exact strict path="/driver" component = {driver} />
                <Route exact strict path="/parent" component = {parents} />
                <Route exact strict path="/dashboard-admin" component = {dashboardAdmin} />
                <Route exact strict path="/driver-route" component = {driverRoute} />
                <Route exact strict path="/parent-route" component = {parentRoute} />
                <Route exact strict path="/dashboard-school" component = {dashboardSchool} />
                <Route exact strict path="/register" component = {register} />
            </Switch>
    </Router>   
);

export default Routes
