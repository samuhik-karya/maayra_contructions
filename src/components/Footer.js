import React from 'react'
import '../assets/stylesheets/footer.css'
import appstore from '../assets/images/appstore.jpeg'
import playstore from '../assets/images/playstore.jpeg'


const Footer = () => {
    return (
        <div className="container-flex footer">
            <div className='container p-lg-5'>
                <div className='w-100 d-flex flex-wrap flex-row justify-content-around'>
                    <div className='column'>
                        <h5 className='footer-column-title'>Why Us ?</h5>
                        <ul className='fs-6 list-group list-group-flush list-group-dot'>
                            <li><span>You Come First</span></li>
                            <li><span>Hassle-Free Government Liasoning and Approvals</span></li>
                            <li><span>We Back Our Work with 100% GUARANTEE</span></li>
                            <li><span>Affordability</span></li>
                            <li><span>Legal Agreement, With Penalty Clauses</span></li>
                        </ul>
                    </div>
                    <hr className='footer-hr'/>
                    <div className='column'>
                        <h5 className='footer-column-title'>Our Value Added Services</h5>
                        <ul className='fs-6 list-group list-group-flush'>
                            <li className='list-group-none'><span>6 Month to 1 Year Verious</span></li>
                            <li className='list-group-none'><span>PMC Services</span></li>
                            <li className='list-group-none'><span>Project valuation</span></li>
                            <li className='list-group-none'><span>Maayra Ambassador</span></li>
                            <li className='list-group-none'><span>Sit Back & Relax</span></li>
                            <li className='list-group-none'><span>Penalise us for any delay</span></li>
                        </ul>
                    </div>
                    <hr className='footer-hr'/>
                    <div className='column'>
                        <h5 className='footer-column-title'>Contact Us</h5>
                        <h6 className='text-grey'>Registered Office</h6>
                        <ul className='fs-6 fa-ul'>
                            <li className='list-group-none text-grey'><span class="fa-li"><i class="fa-sharp fa-solid fa-location-dot" /></span><b>Surat</b><br />Salarium Business Center<br />Vesu, VIP Road, Surat - 395007</li>
                            <li className='list-group-none text-grey'><span class='fa-li'><i class="fa-sharp fa-solid fa-phone" /></span><b>Mobile: </b><br />+91 9325412556</li>
                            <li className='list-group-none text-grey'><span class='fa-li'><i class="fa-sharp fa-regular fa-envelope" /></span><b>For General Enquiry: </b><br />info@maayraconstructions.com</li>
                            <li className='list-group-none text-grey'><span class='fa-li'><i class="fa-sharp fa-regular fa-envelope" /></span><b>For any Complaint / Feedback: </b><br />admin@maayraconstructions.com</li>
                            <li className='list-group-none text-grey'><span class='fa-li'><i class="fa-sharp fa-regular fa-envelope" /></span><b>To apply for job: </b><br />hr@maayraconstructions.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container-flex d-flex main-column flex-row flex-wrap justify-content-center align-items-center p-lg-5'>
                <h2 class='footer-column-title'>Download App Now !</h2>
                <div>
                    <img className='store' src={appstore} alt='' />
                    <img className='store' src={playstore} alt='' />
                </div>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-around p-lg-4'>
                <span className='text-grey text-center'>All rights reserved - 2023. Maayra Constructions Pvt. Ltd.</span>
                <span className='text-grey text-center'>
                    <a className='copyright-links text-grey' href='#!'>Disclaimer</a> | <a className='copyright-links text-grey ' href='#!'>Copyrights & Terms</a> | <a className='copyright-links text-grey ' href='#!'>Privacy Policy</a>
                </span>
                <span className='text-grey text-center'>Website Design: Setblue.com</span>
            </div>
        </div>
    )
}

export default Footer
