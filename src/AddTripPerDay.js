import React from 'react';
import App from './App';
import { Link } from 'react-router';
import Logo from './logojourney.png';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './css/App.css';


function AddTripPerDay() {


  return (
    <div className="flex-wrapper">
      <Header firsttitle={"แผนการท่องเที่ยวทั้งหมด"} secondtitle={"วันที่ 14/02/2563-วันที่ 15/02/2563"}></Header>
      <div id="page-content">
        <div class="container pl-4 pr-4 mt-4" >
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">ศุกร์ 14 </label>
              <div class="pt-3 pb-3">
                <button type="button" class="btn btn-warning" >
                  <span class="glyphicon glyphicon-plus"></span>
                </button>
              </div>
              <div class="mt-4">
                <label for="exampleInputEmail1">เสาร์ 15</label>
                <div class="pt-3 pb-3">
                  <button type="button" class="btn btn-warning" >
                    <span class="glyphicon glyphicon-plus"></span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Link to="/CheckPlan" >
        <Footer footertext={"ไปลุยกันเลย !"}></Footer>
      </Link> */}
      <Footer footertext={"ไปลุยกันเลย !"} footerlink={"/CheckPlan"}>
      </Footer>

    </div>
  )
}


export default AddTripPerDay;
