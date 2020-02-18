import React from 'react';

const Footer = (props) => {

    return (
        <div className="Footer-page">
            <footer class="bg-warning text-white" style={{position:"fixed",color:"white",width:"100%",left:"0",bottom:"0"}}>
                <div class="text-center py-3">
                    <h4>{props.footertext}</h4>
                </div>
            </footer>
        </div>
    )
    
}
export default Footer;