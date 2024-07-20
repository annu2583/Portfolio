import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'

function Education() {
    let array = [
        {
            duration: "(2020-21)",
            education: "Higher Secondary Education",
            name: " L.R.S DAV sr. sec model school"
        },

        {
            duration: "(2021-24)",
            education: "Bachelor Degree",
            name: "Guru Nanak Khalsa College"
        }

    ]
    return (
        <>
            <div className='study_section'>
                <div className='container'>
                    <div  className='about_col' id='education'>EDUCATION</div>
                    <div className='degree_Section'>
                        <img className='study_bg' src='education.svg' />
                        <div className='degree_cols'>
                            {array?.map((index, item) => {
                                return (
                                    <>

                                        <div className='secondary'>
                                            <p className='duration'>{index?.duration}</p>
                                            <div className='study_info'>
                                                <img src='study.svg' alt='study' />
                                                <div className='college'>
                                                    <h3>{index?.education}</h3>
                                                    <h5>{index?.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </>



                                )
                            })}
                        </div>
                    </div>
                </div>



            </div>
            <div className='horizontal'></div>
        </>
    )
}

export default Education;