import React from 'react'

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='footer_Section'>
                    <div className='study_col' id='contact'>CONTACT</div>
                    <div className='form_section'>
                        <div className='contact_me'>
                            <h4 className='contact_heading'>Let's Talk</h4>

                            <form id="contact-form">
                                <div className="form-group">
                                    <p className='inbox_heading'>My inbox is always open. Whether you have a question or concerns ,
                                        I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
                                        I am open to any work opportunities that align with my skills and interests.</p>
                                    <label for="name">Your Name :</label>
                                    <br />
                                    <input type="text" className="form-control" />
                                    <br />
                                    <label for="email">Your Email :</label>
                                    <br />
                                    <input type="email" className="form-control" />
                                    <br />
                                    <label for="message">Message :</label>
                                    <br />
                                    <textarea className="c-control" rows="4" ></textarea>
                                    <br />
                                </div>



                                <button type="submit" className="btn">Submit</button>
                            </form>
                        </div>
                        <div className='contact_info'>
                            <div className='email_info'>
                                <img className='email' src='mail.svg' alt='email' />
                                <a href="mailto:annuverma8234@gmail.com" className='info_text'> annuverma8234@gmail.com</a>


                            </div>

                            <div className='location_info'>
                                <img className='locate' src='gps.svg' alt='location' />
                                <span className='info_text'>Abohar, Punjab - 152116</span>
                            </div>

                            <div className='call_info'>

                                <img className='phone' src='call.svg' alt='call' />
                                <span className='info_text'>+917270991000</span>


                            </div>
                            <div className='link_section'>
                                <img className='links' src='git.svg' />
                                <img className='links' src='link.svg' />
                                <img className='ig_links' src='ing.svg' />

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}

export default Footer; 