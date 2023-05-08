import React from 'react'
import '../assets/stylesheets/feature_section.css'

export default function FeatureCard(props) {
    var divFormat = 'd-flex feature-card justify-content-between flex-row py-4 flex-wrap align-items-center text-start ';
    divFormat += (props.alter)? "flex-row-reverse":"flex-row";

    return (
        <div className={divFormat}>
            <img className='m-3 specialization-card-image' alt='' src={props.image} width={"610px"} />
            <div className='m-3' style={{ width: "610px" }}>
                <h3 className='p-1 card-title'>{props.title}</h3>
                <p className='p-1 lh-lg fs-6'>{props.message}</p>
            </div>
        </div>
    )
}
