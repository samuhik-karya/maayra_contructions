import React from 'react'
import SpecializationCards from './SpecializationCards'
import ExpertImage1 from '../assets/images/expert1.jpeg'
import ExpertImage2 from '../assets/images/expert2.jpeg'
import ExpertImage3 from '../assets/images/expert3.jpeg'


export default function SpecializationSection() {
    return (
        <div className='container-flex p-4'>
            <div className='container text-center'>
                <h2>OUR EXPERTISE AND SPECIALIZATIONS</h2>
                <hr />
                <div>
                    <SpecializationCards alter={false} image={ExpertImage1} title={"Villa/Bunglows"} message={"Having a strong commitment towards the safety of the people it interacts and has dealings with; every MAAYRAian takes all necessary precautions to warrant safe & sustainable future for all the stack holders . It is one of the few construction companies in India, certified under ISO 9001:2015 (Quality Management), ISO 14001:2015 (Envionmental Management) and BS OHSAS 45001:2018 (Occupational & Safety)."} />
                    <hr />
                    <SpecializationCards alter={true} image={ExpertImage2} title={"Row Houses"} message={"Having a strong commitment towards the safety of the people it interacts and has dealings with; every MAAYRAian takes all necessary precautions to warrant safe & sustainable future for all the stack holders . It is one of the few construction companies in India, certified under ISO 9001:2015 (Quality Management), ISO 14001:2015 (Envionmental Management) and BS OHSAS 45001:2018 (Occupational & Safety)."} />
                    <hr />
                    <SpecializationCards alter={false} image={ExpertImage3} title={"Club Houses"} message={"Having a strong commitment towards the safety of the people it interacts and has dealings with; every MAAYRAian takes all necessary precautions to warrant safe & sustainable future for all the stack holders . It is one of the few construction companies in India, certified under ISO 9001:2015 (Quality Management), ISO 14001:2015 (Envionmental Management) and BS OHSAS 45001:2018 (Occupational & Safety)."} />
                </div>
            </div>
        </div>
    )
}
