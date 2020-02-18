import React from 'react';
import { Link } from 'react-router';
import Logo from './logojourney.png';
import Header from './Components/Header';
import Footer from './Components/Footer';


function CheckBill() {

    return (
        <div>
            <Header firsttitle={"รายการเรียกเก็บเงิน"} secondtitle={"มาจ่ายเงินที่ค้างไว้กันเถอะะ !!"}></Header>

            <div class="container">
                <form>
                    <div class="form-group">

                        <div class="col mt-4 pt-4">
                            <center><label for="exampleInputEmail1">เลขบัญชีธนาคาร/พร้อมเพย์ของผู้สร้าง</label></center>
                            <input type="number" class="form-control" id="example-input-number" value="0869747792" />
                        </div>

                        <div class="col mt-4 pt-4">
                            <label for="exampleInputEmail1">เลือกผู้ที่ต้องการจ่ายเงิน</label>

                            <select class="form-control" id="exampleSelect1">
                                <option>ฟลุ๊ค</option>
                                <option>รอม</option>
                                <option>กัน</option>
                            </select>
                            <p></p>  <label for="exampleInputEmail1">จำนวนเงิน</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="col mt-4 pt-4">
                            <div className="text-center">เลือกวิธีการจ่ายเงิน</div>
                            <div className="container text-center">
                                <span class="input-group-btn pt-4" />
                                <button type="button" class="btn btn-primary" >
                                    <span class="glyphicon glyphicon-phone"> สแกนสลิปที่ได้จากการโอน</span>
                                </button>
                                <span class="input-group-btn pt-4" />
                                <button type="button" class="btn btn-info" >
                                    <span class="glyphicon glyphicon-usd"> จ่ายด้วยเงินสด</span>
                                </button>
                            </div>
                        </div>


                    </div>
                </form>
            </div>

            <Link to="/CheckBill" >
                <Footer footertext={"กลับสู่ห้องแชท"}></Footer>
            </Link>

        </div>
    )
}


export default CheckBill;
