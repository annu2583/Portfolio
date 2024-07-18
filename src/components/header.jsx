import React from 'react'

function Header() {
    // let arr = ['About','Skills','Education','Projects','Contact']
    return (
        <>
            <div className='container'>
                <div className='navbar '>
                    <h1 className='name'>Pushpa Verma</h1>
                    <ul className='nav_list'>
                        <a className="link" href="#about">About</a>
                        <a className="link" href="#skills"> Skills</a>
                        <a className="link" href="#education">Education</a>
                        <a className="link" href="#projects">Projects</a>
                        <a className="link" href="#contact">Contact</a>
                    
                        {/* {arr?.map((item,index)=>{
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })} */}
                    </ul>
                </div>
            </div>

        </>

    )
}

export default Header