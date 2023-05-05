import React from 'react'

export default function SpecializationSection(props) {
    var divFormat = 'd-flex justify-content-between flex-row py-4 flex-wrap align-items-center text-start ';
    divFormat += (props.alter)? "flex-row-reverse":"flex-row";

    return (
        <div className={divFormat}>
            <img className='m-3' alt='' src={props.image} width={"610px"} />
            <div className='m-3' style={{ width: "610px" }}>
                <h3 className='p-1'>{props.title}</h3>
                <p className='p-1' style={{ lineHeight: "30px" }}>{props.message}</p>
            </div>
        </div>
    )
}
