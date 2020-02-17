import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/golbal.css'
import AddTripPerDay from './AddTripPerDay';
import {Router,Route,Link,browserHistory} from 'react-router'
import CheckPlan from './CheckPlan';
import CheckBill from './CheckBill';
import CreateBill from './CreateBill';
import Header from './Components/Header';


ReactDOM.render(
    <Router history = {browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/AddTrip" component={AddTripPerDay}/>
            <Route path="/CheckPlan" component={CheckPlan}/>
            <Route path="/CreateBill" component={CreateBill}/>
            <Route path="/CheckBill" component={CheckBill}/>
            <Route path="/Header" component={Header}/>



    </Router>,
    document.getElementById('root')
    //<App />,
   // document.getElementById('root')
    
    );

