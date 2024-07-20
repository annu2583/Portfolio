import React from 'react'

function Projects() {
    let info = [
        {
            img: 'folder.svg',
            icon: 'git.svg',
            link : 'https://github.com/annu2583/Calculator-App.git',
            Icon: 'external.svg',
            file : "///C:/Users/Mad%20Brains%20Tech/OneDrive/Annu%20Verma/meditation/js-30-1/jswork/assets/counter.html",
            title: 'Calculator App',
            name: 'HTML CSS Javascript'
        },

        {
            img: 'folder.svg',
            icon: 'git.svg',
            link : 'https://github.com/annu2583/Digital-clock.git',
            Icon: 'external.svg',
            // file : "file:///C:/Users/Mad%20Brains%20Tech/Desktop/clock/clock.html",
            title: 'Digital Clock',
            name: 'HTML CSS Javascript'
        },

        {
            img: 'folder.svg',
            icon: 'git.svg',
            link : 'https://github.com/annu2583/Counter-App.git',
            Icon: 'external.svg',
            // file : "file:///C:/Users/Mad%20Brains%20Tech/Desktop/clock/clock.html",
            title: 'Counter App',
            name: 'HTML CSS Javascript'
        },
        {
            img: 'folder.svg',
            icon: 'git.svg',
            link : 'https://github.com/annu2583/Color-Flipper.git',
            Icon: 'external.svg',
            // file : "file:///C:/Users/Mad%20Brains%20Tech/Desktop/clock/clock.html",
            title: 'Color Flipper',
            name: 'HTML CSS Javascript'
        }




    ]
    return (
        <>
            <div className='container'>
                <div className='project_Section'>
                    <div className='about_heading'>
                        <div className='about_col' id='projects'>PROJECTS</div>
                    </div>
                   

                 
                    <div className='projects_grid'>
                        {info?.map((index, item) => {
                            return (

                                    <div className='project_flex'>
                                        <div className='project_icons'>
                                            <img src={index.img} />
                                            <div className='project_link'>
                                                <a href={index.link} target="_blank">
                                                    <img className='links' src={index.icon} />
                                                </a>
                                                <a href={index.file}target='_blank'>
                                                    <img className='links' src={index.Icon} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className='project_info'>
                                            <h2>{index.title}</h2>
                                            <h4>{index.name}</h4>
                                        </div>
                                    </div>


                            )
                        })}
                   </div>




                    {/* project 2nd */}
                    {/* <div className='project_flex'>
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
                    </div> */}


                    {/* project 3rd */}

                    {/* <div className='project_flex'>
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
                            <h2>Counter App</h2>
                            <h4>HTML  CSS  Javascript</h4>
                        </div>
                    </div> */}

                </div>
            </div>
        </>

    )
}

export default Projects;