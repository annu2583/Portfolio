import React from 'react'

function Projects() {
<<<<<<< HEAD
    let info = [
        {
            img: 'folder.svg',
            icon: 'git.svg',
            link: 'https://github.com/annu2583/Calculator-App.git',
            Icon: 'external.svg',
            file: "https://annu2583.github.io/Calculator-App/",
            title: 'Calculator App',
            name: 'HTML CSS Javascript'
        },

        {
            img: 'folder.svg',
            icon: 'git.svg',
            link: 'https://github.com/annu2583/Digital-clock.git',
            Icon: 'external.svg',
            file: "https://annu2583.github.io/Digital-clock/",
            title: 'Digital Clock',
            name: 'HTML CSS Javascript'
        },

        {
            img: 'folder.svg',
            icon: 'git.svg',
            link: 'https://github.com/annu2583/Counter-App.git',
            Icon: 'external.svg',
            file: "https://annu2583.github.io/Counter-App/",
            title: 'Counter App',
            name: 'HTML CSS Javascript'
        },
        {
            img: 'folder.svg',
            icon: 'git.svg',
            link: 'https://github.com/annu2583/Color-Flipper.git',
            Icon: 'external.svg',
            file: "https://annu2583.github.io/Color-Flipper/",
            title: 'Color Flipper',
            name: 'HTML CSS Javascript'
        },
        {
            img: 'folder.svg',
            icon: 'git.svg',
            link: 'https://github.com/annu2583/Healing-project.git',
            Icon: 'external.svg',
            file: "https://annu2583.github.io/Healing-project/",
            title: 'Healing Project',
            name: 'HTML CSS'
        }




    ]
=======
>>>>>>> 59bb45e8742060ba30769d65cb3447adc8994227
    return (
        <>
            <div className='container'>
                <div className='project_Section'>
                    <div className='about_heading'>
                        <div className='about_col' id='projects'>PROJECTS</div>
                    </div>
<<<<<<< HEAD
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
                                            <a href={index.file} target='_blank'>
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
=======
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

>>>>>>> 59bb45e8742060ba30769d65cb3447adc8994227
                </div>
            </div>
        </>
    )
}
export default Projects;