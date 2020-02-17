import React, { useState } from 'react';
import Logo from './logojourney.png';
import { Link } from 'react-router'




function App() {
  const [dateNum, setDasteNum] = useState(0);

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
            <p className='m-0'> ยินดีต้อนรับ </p>
            <h4> เริ่มสร้างแผนการท่องเที่ยวว </h4>
          </div>
          <img src={Logo} height="80px" className="d-inline-block align-top" />
        </div>
      </nav>


      {/* <div class="p-0 m-0 bg-warning text-white">
        <div class="container">
          <div class="row">
            <span class="col-8 pt-4 text-left">
              <p> ยินดีต้อนรับ </p>
              <h4> เริ่มสร้างแผนการท่องเที่ยวว </h4>
            </span>
            <span class="col-4 pb-2 pt-2 text-right" >
              <img src={Logo} style={imglogo} />
            </span>
          </div>
        </div>
      </div> */}

      <div class="container">
        <form>
          <div class="form-group">
            <div class="col mt-4 pt-5">
              <label for="exampleInputEmail1">ชื่อทริป</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ใส่ชื่อทริปท่องเที่ยว" />
            </div>
            <div class="col mt-4 pt-4">
              <label for="exampleInputEmail1">จังหวัด</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ใส่ชื่อจังหวัดที่ต้องการเดินทาง" />
            </div>
            <div class="col mt-4 pt-4">
              <label for="example-date-input" class="col-form-label">วันที่เริ่มเดินทาง</label>
              <input class="form-control" type="date" id="example-date-input" placeholder="mm-dd-yyyy" />
            </div>
          </div>
        </form>


        <div class="col mt-4 pt-4">
          <label for="example-date-input" class="col-center-label">จำนวนวัน</label>
          <div class="input-group">

            <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={() => { setDasteNum(dateNum - 1) }}>
                <span class="glyphicon glyphicon-minus"></span>
              </button>
            </span>

            <input type="text" name="quant[1]" class="form-control input-number" value={dateNum} min="1" max="10" />

            <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1] " onClick={() => { setDasteNum(dateNum + 1) }}>
                <span class="glyphicon glyphicon-plus"></span>
              </button>
            </span>
          </div>
        </div>
      </div>
      <Link to="/AddTrip" >
        <footer class="bg-warning text-white" style={footer}>
          <div class="text-center py-3">
            <h4> ต่อไป</h4>
          </div>
        </footer>
      </Link>
    </div>
  )
}


export default App;
