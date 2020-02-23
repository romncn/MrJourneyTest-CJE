import React, { useState } from 'react';
import Logo from './logojourney.png';
import { Link } from 'react-router';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './css/App.css';


const InputFrom = (props) => {
  return (
    <div className="InputFrom">
      <div class="col pt-4">
        <label for="exampleInputEmail1">{props.inputname}</label>
        <input type={props.inputtype} class="form-control" id={props.inputid} placeholder={props.textinplaceholder} />
      </div>
    </div>
  )
}


function App() {
  const [dateNum, setDasteNum] = useState(0);

  return (
    <div className="flex-wrapper">
      <Header firsttitle={"ยินดีต้อนรับ"} secondtitle={"เริ่มสร้างแผนการท่องเที่ยว"}></Header>
      <div id="page-content">
        <div class="container pl-4 pr-4 mt-4">
          <form>
            <div class="form-group">
              <InputFrom inputname="ชื่อทริป" inputtype="email" inputid="exampleInputEmail1" textinplaceholder="ใส่ชื่อทริปท่องเที่ยว"></InputFrom>
              <InputFrom inputname="จังหวัด" inputtype="email" inputid="exampleInputEmail1" textinplaceholder="ใส่ชื่อจังหวัดที่ต้องการเดินทาง"></InputFrom>
              <InputFrom inputname="วันที่เริ่มเดินทาง" inputtype="date" inputid="example-date-input" textinplaceholder="mm-dd-yyyy"></InputFrom>

              <div class="col mt-4 pt-4">
                <label for="example-date-input">จำนวนวัน</label>
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
          </form>
        </div>
      </div>
      {/* <Link to="/AddTrip" >
        <Footer footertext={"ต่อไป"}></Footer>
      </Link> */}
      <Footer footertext={"ต่อไป"} footerlink={"/AddTrip"}>
      </Footer>
    </div>
  )
}


export default App;
