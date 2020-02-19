import React from 'react';
import App from './App';
import { Link } from 'react-router';
import Logo from './logojourney.png';
import Header from './Components/Header';
import Footer from './Components/Footer';


function CreateBill() {


    return (
        <div>
            <Header firsttitle={"รายการเรียกเก็บเงิน"} secondtitle={"เริ่มสร้างรายการเก็บเงินกัน !!"}></Header>
            <div class="container">
                <form>
                    <div class="form-group">
                        <div class="col mt-4 pt-4">
                            <center><label for="exampleInputEmail1">เลขบัญชีธนาคาร/พร้อมเพย์ของผู้สร้าง</label></center>
                            <input type="number" class="form-control" id="example-input-number" placeholder="กรอกเลขบัญชีหรือรหัสพร้อมเพย์" />
                        </div>
                        <div class="col mt-4 pt-4">
                            <label for="exampleInputEmail1">ชื่อคนที่ 1</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="ชื่อผู้ที่ต้องการเก็บเงิน" />
                            <p></p>  <label for="exampleInputEmail1">จำนวนเงิน</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" placeholder="จำนวนเงิน(TH)" />
                        </div>
                        <div class="col mt-4 pt-4">
                            <label for="exampleInputEmail1">ชื่อคนที่ 2</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="ชื่อผู้ที่ต้องการเก็บเงิน" />
                            <p></p>  <label for="exampleInputEmail1">จำนวนเงิน</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" placeholder="จำนวนเงิน(TH)" />
                        </div>

                        <div class="container mt-4 pt-4 text-center">
                            <span class="input-group-btn" />
                            <button type="button" class="btn btn-warning btn-number" data-type="plus" data-field="quant[1] " >
                                <span class="glyphicon glyphicon-plus"></span>
                            </button>
                        </div>

                    </div>
                </form>
            </div>

            <Link to="/CreateBill" >
                <Footer footertext={"สร้างรายการเก็บเงิน"}></Footer>
            </Link>

        </div>
    )
}


export default CreateBill;
