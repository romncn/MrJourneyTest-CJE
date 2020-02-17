import React from 'react';
import Logo from '../logojourney.png';

function Header() {
    const imglogo = {
        width: "55%",
    }


    return (
        <div className='row'>
            <div className='col-8'>
                <p> ยินดีต้อนรับ </p>
                <h4> เริ่มสร้างแผนการท่องเที่ยวว </h4>

            </div>
            <div  className='col-4'>
                <img src={Logo} style={imglogo} />
            </div>
        </div>
    )
}
export default Header;
