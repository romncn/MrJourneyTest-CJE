import React from 'react';
import App from './App';
import { Link } from 'react-router';
import Logo from './logojourney.png';




function CreateBill() {

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
        width: "90%",
    }



    return (
        <div>
            <nav className="navbar navbar-light p-0 pt-3 pb-3 bg-warning text-white">
                <div className="container">
                    <div>
                        <p className='m-0'>รายการเรียกเก็บเงิน</p>
                        <h4>เริ่มสร้างรายการเก็บเงินกัน !!</h4>
                    </div>
                    <img src={Logo} height="80px" className="d-inline-block align-top ml-4" />
                </div>
            </nav>

            {/* <div class="p-0 m-0 bg-warning text-white">
                <div class="container">
                    <div class="row">
                        <span class="col-8 pt-4 text-left">
                            <p>รายการเรียกเก็บเงิน</p>
                            <h4>เริ่มสร้างรายการเก็บเงินกัน !! </h4>
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
                        <div class="col mt-4 pt-4">
                            <label for="exampleInputEmail1">ชื่อคนที่ 1</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ชื่อผู้ที่ต้องการเก็บเงิน" />
                            <p></p>  <label for="exampleInputEmail1">จำนวนเงิน</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="จำนวนเงิน(TH)" />
                        </div>
                        <div class="col mt-4 pt-4">
                            <label for="exampleInputEmail1">ชื่อคนที่ 2</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ชื่อผู้ที่ต้องการเก็บเงิน" />
                            <p></p>  <label for="exampleInputEmail1">จำนวนเงิน</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="จำนวนเงิน(TH)" />
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
                <footer class="bg-warning text-white" style={footer}>
                    <div class="text-center py-3">
                        <h4>สร้างรายการเก็บเงิน</h4>
                    </div>
                </footer>
            </Link>

        </div>
    )
}


export default CreateBill;
