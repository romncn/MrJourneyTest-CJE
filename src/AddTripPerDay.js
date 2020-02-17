import React from 'react';
import App from './App';
import { Link } from 'react-router';
import Logo from './logojourney.png';




function AddTripPerDay() {

  const footer = {
    position: "fixed",
    color: "white",
    width: "100%",
    left: "0",
    bottom: "0",
  }

  const imglogo = {
    width: "90%",
  }

  return (
    <div>
      <nav className="navbar navbar-light p-0 pt-3 pb-3 bg-warning text-white">
        <div className="container">
          <div>
            <p className='m-0'>แผนการท่องเที่ยวทั้งหมด</p>
            <h4>วันที่ 14/02/2563-วันที่ 15/02/2563</h4>
          </div>
          <img src={Logo} height="80px" className="d-inline-block align-top" />
        </div>
      </nav>
      {/* <div class="p-0 m-0 bg-warning text-white">
        <div class="container">
          <div class="row">
            <div class="col-8 pt-4 text-left">
              <p> แผนการท่องเที่ยวทั้งหมด </p>
              <h4>วันที่ 14/02/2563 - วันที่ 15/02/2563</h4>
            </div>
            <div class="col-4 pb-2 pt-2 text-right" >
              <img src={Logo} style={imglogo} />
            </div>
          </div>
        </div>
      </div> */}

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
        <footer class="bg-warning text-white" style={footer}>
          <div class="text-center py-3">
            <h4>ไปลุยกันเลย !</h4>
          </div>
        </footer>
      </Link>
    </div>
  )
}


export default AddTripPerDay;
