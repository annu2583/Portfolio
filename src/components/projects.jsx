import React from 'react'

function Projects() {
    return (
        <>
            <div className='container'>
                <div className='project_Section'>
                    <div className='about_heading'>
                        <div className='about_col' id='projects'>PROJECTS</div>
                    </div>
                    {/* project 1st */}
                    <div className='project_flex'>
                        <div className='project_icons'>
                            <img src='folder.svg' />
                            <div className='project_link'>
                                <a href="https://github.com/annu2583/Portfolio.git" target="_blank">
                                    <img className='links' src='git.svg' />
                                </a>
                                <a href='' target='_blank'>
                                    <img className='links' src='external.svg' />
                                </a>
                            </div>
                        </div>

                        <div className='project_info'>
                            <h2>Calculator App</h2>
                            <h4>HTML  CSS  Javascript</h4>
                        </div>
                    </div>

                    {/* project 2nd */}
                    <div className='project_flex'>
                        <div className='project_icons'>
                            <img src='folder.svg' />
                            <div className='project_link'>
                                <a href="https://github.com/annu2583/Portfolio.git" target="_blank">
                                    <img className='links' src='git.svg' />
                                </a>
                                <a href='' target='_blank'>
                                    <img className='links' src='external.svg' />
                                </a>
                            </div>
                        </div>

                        <div className='project_info'>
                            <h2>Digital Clock</h2>
                            <h4>HTML  CSS  Javascript</h4>
                        </div>
                    </div>


                    {/* project 2nd */}
                    <div className='project_flex'>
                        <div className='project_icons'>
                            <img src='folder.svg' />
                            <div className='project_link'>
                                <a href="https://github.com/annu2583/Portfolio.git" target="_blank">
                                    <img className='links' src='git.svg' />
                                </a>
                                <a href='' target='_blank'>
                                    <img className='links' src='external.svg' />
                                </a>
                            </div>
                        </div>

                        <div className='project_info'>
                            <h2>Digital Clock</h2>
                            <h4>HTML  CSS  Javascript</h4>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Projects;