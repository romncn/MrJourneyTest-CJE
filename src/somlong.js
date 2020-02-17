import React, { useState } from 'react';
import AddTripPerDay from './AddTripPerDay';
import Logo from './logojourney.png';
import {Link} from 'react-router';




function somlong() {
  const [dateNum, setDasteNum] = useState(0);

  const footer = {
    position: "fixed",
    color: "white",
    width: "100%",
    left: "0",
    bottom: "0",
  }
  const toplogo = {
    width: "70%"
  }
  const toplogo2 = {
    width: "30%"
  }
  const imglogo = {
    width: "100%",
  }

  return (
    <div>
      <div class="p-3 mb-2 bg-warning text-white">
        <div class="row p-0 m-0">
          <div class="col-md pl-4 pt-3" style={toplogo}>
            <p> ยินดีต้อนรับ </p>
            <h4> เริ่มสร้างแผนการท่องเที่ยวว </h4>
          </div>
          <div class="col-md pl-4" style={toplogo2}>
            <img src={Logo} style={imglogo} />
          </div>
        </div>
      </div>

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

      <footer class="bg-warning text-white" style={footer}>
        <div class="text-center py-3">
          <h4> <Link to="/AddTrip">ต่อไป</Link></h4>
        </div>
      </footer>

    </div>
  )
}


export default App;
