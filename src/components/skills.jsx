import React from 'react'

function Skills() {
  let skills = [
    {
      img: 'html.png',
      name: 'HTML'
    },
    {
      img: 'css.png',
      name: 'CSS'
    },
    {
      img: 'js.png',
      name: 'Javascript'
    },

    {
      img: 'react.png',
      name: "React"
    },
    {
      img: 'node.png',
      name: 'Node JS'
    },
    {
      img: 'figma.png',
      name: 'Figma'
    },
    {
      img: 'git.png',
      name: 'Git'
    }
  ]
  return (
    <>
      <div className='container'>
        <div className='skills_Section'>
          <div className='about_heading'>
            <div className='about_col' id='skills'>SKILLS</div>
          </div>

          <div className='skills_columns' >
            {skills?.map((index, item) => {
              return (
                <div className='skills_columns'>
                  <div className='html'>
                    <img src={index.img} alt='html' />
                    <h2>{index.name}</h2>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
      <div className='horizontal'></div>
    </>

  )
}

export default Skills;

{/* <div className='css'>
          <img src='css.png' alt='css' />
          <h2>CSS</h2>
        </div> */}

{/* <div className='js'>
          <img src='js.png' alt='js' />
          <h2>Javascript</h2>
        </div> */}

{/* <div className='react'>
          <img src='react.png' alt='js' />
          <h2>React</h2>
        </div> */}
{/* 
        <div className='node'>
          <img src='nodejs.png' alt='nodejs' />
          <h2>Node JS</h2>
        </div> */}

{/* <div className='figma'>
          <img src='figma.png' alt='figma' />
          <h2>Figma</h2>
        </div> */}
{/* <div className='git'>
          <img src='git.png' alt='git' />
          <h2>Git</h2>
        </div> */}