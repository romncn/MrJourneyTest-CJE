import React from 'react';
import '../css/App.css';

const Footer = (props) => {

    return (
        <div>
            <a href={props.footerlink} style={{ color: "white", fontSize: 20, textDecoration: 'none' }}>
                <footer class="bg-warning text-white" style={{ color: "white",height:50 }}>
                    <div class="text-center py-3">
                        {/* <h4>{props.footertext}</h4> */}
                        {props.footertext}
                    </div>
                </footer>
            </a>
        </div>
    )

}
export default Footer;