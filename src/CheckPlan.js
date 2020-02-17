import React from 'react';
import App from './App';
import { Link } from 'react-router';
import Logo from './logojourney.png';




function CheckPlan() {

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

            <form>
                <div class="form-group mt-5 pl-2 pr-2">
                    <div class="container">
                        {/* <div class="col mt-5"> */}
                        <div className='col-12 mb-2'>
                            <div class="row p-0">
                                <label for="exampleInputEmail1">ศุกร์ 14 </label>
                            </div>
                        </div>


                        <div className='mb-4'>
                            <div className='container p-0'>
                                {/* <div class="row pt-3 pb-3"> */}
                                {/* <div class="col-8 text-left"> */}
                                <div className='d-inline-block'>
                                    <button type="button" class="btn btn-warning  ">ดอยสุเทพ</button>
                                    <button type="button" class="btn btn-warning ml-1 ">05:00-07:00</button>
                                </div>
                                {/* <div class="col-4 text-right"> */}
                                <div className='d-inline-block pl-2'>
                                    <button type="button" class="btn btn-success p-0 " style={{ borderRadius: '20px', width: "36px", height: "35px", textalign: "center" }}>
                                        <span class="glyphicon glyphicon-road"></span></button>
                                    <button type="button" class="btn btn-danger ml-1 p-0 " style={{ borderRadius: '20px', width: "35px", height: "35px", textalign: "center" }}>
                                        <span class="glyphicon glyphicon-trash"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='container p-0'>
                                {/* <div className='col-12 mb-4'>
                            <div className='row p-0'> */}
                                <div className='d-inline-block'>
                                    <button type="button" class="btn btn-default">แวะกินข้าว</button>
                                    <button type="button" class="btn btn-default ml-2">08:00-09:00</button>
                                </div>
                                <div className='d-inline-block pl-2'>
                                    <button type="button" class="btn btn-success p-0" style={{ borderRadius: '20px', width: "36px", height: "35px", textalign: "center" }}>
                                        <span class="glyphicon glyphicon-cutlery"></span></button>
                                    <button type="button" class="btn btn-danger ml-2 p-0" style={{ borderRadius: '20px', width: "35px", height: "35px", textalign: "center" }}>
                                        <span class="glyphicon glyphicon-trash"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='container p-0'>
                                {/* <div className='col-12 mb-4'>
                            <div className='row p-0'> */}
                                <div className='d-inline-block'>
                                    <button type="button" class="btn btn-warning ">เดินเล่นนิมมาน</button>
                                    <button type="button" class="btn btn-warning ml-2">09:30-11:30</button>
                                </div>
                                <div className='d-inline-block pl-2'>
                                    <button type="button" class="btn btn-success p-0" style={{ borderRadius: '20px', width: "36px", height: "35px", textAlign: "center" }}>
                                        <span class="glyphicon glyphicon-road"></span></button>
                                    <button type="button" class="btn btn-danger ml-2 p-0" style={{ borderRadius: '20px', width: "35px", height: "35px", alignmiddle: "center" }}>
                                        <span class="glyphicon glyphicon-trash"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='container p-0'>
                                {/* <div className='col-12 mb-4'>
                            <div className='row p-0'> */}
                                <div className='d-inline-block'>
                                    <button type="button" class="btn btn-default">พักผ่อน</button>
                                    <button type="button" class="btn btn-default ml-2 ">12:00-14:30</button>
                                </div>
                                <div className='d-inline-block pl-2'>
                                    <button type="button" class="btn btn-success p-0" style={{ borderRadius: '20px', width: "36px", height: "35px", textalign: "center" }}>
                                        <span class="glyphicon glyphicon-home"></span></button>
                                    <button type="button" class="btn btn-danger ml-2 p-0" style={{ borderRadius: '20px', width: "35px", height: "35px", textalign: "center" }}>
                                        <span class="glyphicon glyphicon-trash"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='container p-0'>
                                {/* <div className='col-12 mb-4'>
                            <div className='row p-0'> */}
                                <div className='d-inline-block'>
                                    <button type="button" class="btn btn-warning btn-number">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 mb-2'>
                            <div class="row p-0">
                                <label for="exampleInputEmail1">เสาร์ 15</label>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='container p-0'>
                                {/* <div className='col-12 mb-4'>
                            <div className='row p-0'> */}
                                <div className='d-inline-block'>
                                    <button type="button" class="btn btn-warning ">เดินทางกลับ</button>
                                    <button type="button" class="btn btn-warning ml-2">09:30-11:30</button>
                                </div>
                                <div className='d-inline-block pl-2'>
                                    <button type="button" class="btn btn-success p-0" style={{ borderRadius: '20px', width: "36px", height: "35px", textAlign: "center" }}><i class="glyphicon glyphicon-road"></i></button>
                                    <button type="button" class="btn btn-danger ml-2 p-0" style={{ borderRadius: '20px', width: "35px", height: "35px", alignmiddle: "center" }}><i class="glyphicon glyphicon-trash"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className='container p-0'>
                                {/* <div className='col-12 mb-4'>
                            <div className='row p-0'> */}
                                <div className='d-inline-block'>
                                    <button type="button" class="btn btn-warning btn-number">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </form>

            <Link to="/AddTrip" >
                <footer class="bg-warning text-white" style={footer}>
                    <div class="text-center py-3">
                        <h4>กลับสู่ห้องแชท</h4>
                    </div>
                </footer>
            </Link>
        </div>
    )
}


export default CheckPlan;
