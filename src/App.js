import React, { useState } from 'react';
import Logo from './logojourney.png';
import { Link } from 'react-router';
import Header from './Components/Header';




function App() {
  const [dateNum, setDasteNum] = useState(0);

  const footer = {
    position: "fixed",
    color: "white",
    width: "100%",
    left: "0",
    bottom: "0",
  }

  return (
    <div>
          <Header firsttitle={"ยินดีต้อนรับ"} secondtitle={"เริ่มสร้างแผนการท่องเที่ยว"}></Header>
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
