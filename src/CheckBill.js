import React from 'react';
import { Link } from 'react-router';
import Logo from './logojourney.png';
import Header from './Components/Header';




function CheckBill() {

    const footer = {
        position: "fixed",
        color: "white",
        width: "100%",
        left: "0",
        bottom: "0",
    }
    return (
        <div>
            <Header firsttitle={"รายการเรียกเก็บเงิน"} secondtitle={"มาจ่ายเงินที่ค้างไว้กันเถอะะ !!"}></Header>
            <div class="container">
                <form>
                    <div class="form-group">
                        <div class="col mt-4 pt-4">
                            <label for="exampleInputEmail1">เลือกผู้ที่ต้องการจ่ายเงิน</label>

                            <select class="form-control" id="exampleSelect1">
                                <option>ฟลุ๊ค</option>
                                <option>รอม</option>
                                <option>กัน</option>
                            </select>
                            <p></p>  <label for="exampleInputEmail1">จำนวนเงิน</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="200" />
                        </div>
                        <div class="col mt-4 pt-4">
                            <div className="text-center">เลือกวิธีการจ่ายเงิน</div>
                            <div className="container text-center">
                                <span class="input-group-btn pt-4" />
                                <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1] " >
                                    <span class="glyphicon glyphicon-phone"> สแกนสลิปที่ได้จากการโอน</span>
                                </button>
                                <span class="input-group-btn pt-4" />
                                <button type="button" class="btn btn-info btn-number" data-type="plus" data-field="quant[1] " >
                                    <span class="glyphicon glyphicon-usd"> จ่ายด้วยเงินสด</span>
                                </button>
                            </div>
                        </div>


                    </div>
                </form>
            </div>

            <Link to="/CheckBill" >
                <footer class="bg-warning text-white" style={footer}>
                    <div class="text-center py-3">
                        <h4>กลับสู่ห้องแชท</h4>
                    </div>
                </footer>
            </Link>

        </div>
    )
}


export default CheckBill;
