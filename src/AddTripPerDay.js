import React from 'react';
import App from './App';
import { Link } from 'react-router';
import Logo from './logojourney.png';
import Header from './Components/Header';
import Footer from './Components/Footer';

function AddTripPerDay() {


  return (
    <div>
      <Header firsttitle={"แผนการท่องเที่ยวทั้งหมด"} secondtitle={"วันที่ 14/02/2563-วันที่ 15/02/2563"}></Header>

      <div class="container mt-5 pl-4 pr-4">
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
      <Link to="/CheckPlan" >
        <Footer footertext={"ไปลุยกันเลย !"}></Footer>
      </Link>
    </div>
  )
}


export default AddTripPerDay;
