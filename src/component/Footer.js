import React from 'react'
import '../assets/stylesheets/footer.css'
import appstore from '../assets/images/appstore.jpeg'
import playstore from '../assets/images/playstore.jpeg'


const Footer = () => {
    return (
        <div className="footer text-center flex-column footer-text">
            <div className="footer-content text-center text-md-start mt-5 main_links">
                <div className="d-flex justify-content-around align-items-start row p-5">
                    <div className="column m-2">
                        <h6 className="fw-bold whyus_text"> Why Us ?</h6>
                        <li><span> You Come first </span></li> <hr />
                        <li><span> Hassle-free Goverment Liasoning and Approval</span></li><hr />
                        <li><span>We back Our work with 100% GUARANTEE </span></li><hr />
                        <li><span> Affrordability </span></li> <hr />
                        <li><span> You can have Trust & can rely on Our Experienced Team </span></li> <hr />
                        <li><span>Quality and Safety first! </span></li><hr />
                        <li><span>Legal Agreement, with Penalty Clauses</span></li><hr />
                    </div>
                    <hr className='vr p-0 ms-5' />
                    <div className="mx-auto column">
                        <h6 className="fw-bold mb-4  whyus_text"> Our Value Added Services</h6>
                        <p> 6 Month to 1 year various </p><hr />
                        <p> PMC Services </p><hr />
                        <p> Project Valuation</p> <hr />
                        <p> Maayra Ambassador</p><hr />
                        <p> Sit Back & Relax</p><hr />
                        <p> Penalised us for any dealy</p><hr />
                    </div>
                    <hr className='vr p-0' />
                    <div className="mx-auto column">
                        <h6 className="fw-bold mb-3  whyus_text">Contact Us</h6>
                        <p style={{fontSize: "18px"}}>Registered Office</p>
                        <p><i className="fa fa-map-marker me-2"></i><span>Surat<br /><span className='ms-3'>Salarium Business Center</span> <br /><span className='ms-3'>Vesu. VIP Road , Surat-395007</span></span></p>
                        <p><i className="fa fa-phone me-2"></i><span>Mobile :<br /><span className='ms-3'>+91 45123 96325</span></span></p>
                        <p><i className="fa fa-envelope me-2"></i><span>For General inquiry<br /><span className='ms-4'>info@maayraconstruction.com</span></span></p>
                        <p><i className="fa fa-envelope me-2"></i><span>For any Complaint / Feedback <br /><span className='ms-4'>admin@maayraconstruction.com</span></span></p>
                        <p><i className="fa fa-envelope me-2"></i><span>To apply for job:<br /><span className='ms-4'>hr@maayraconstruction.com<br /><button className=' career-btn px-1 ms-4'>career</button></span></span></p>
                    </div>
                </div>
            </div>
            <div className="bg-dark p-4 w-100 copyright_text p-5">
                    <span className='download_text mx-3 mb-3'>Download App Now!</span>
                    <a href='#!'> <img className='storeicon mx-3' src={appstore}></img></a>
                    <a href='#!'> <img className='storeicon mx-3' src={playstore}></img></a>
            </div>
            <div className="d-flex w-100 justify-content-evenly flex-row copyright_text flex-wrap">
                <span className='p-4'>All Right reserved- © 2023,Maaya Construction Pvt.Ltd</span>
                <span className='p-4'>
                    <a href='/#'>Disclaimer | </a>
                    <a href='/#'>Copyrights & Terms | </a>
                    <a href='/#'>Privacy Policy</a>
                </span>
                <span className='p-4'> Website-design -<a href='/#'>setblue.com</a></span>
            </div>
        </div>

    )
}

export default Footer
