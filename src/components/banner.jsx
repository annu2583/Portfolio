

function Banner() {
    return (
        <>
            {/* <div className="bg_section">

              <img className= 'background_img' src="./column.svg" alt="column"/> */}
            <div className="background_color">


                <div className="container">
                    <div className='Banner_Section'>
                        <div className="profile_info">
                        <div className="myself">
                            <h2>Hello,
                                <br />
                                This is
                                <span> PUSHPA VERMA </span>,
                                I'm a
                                <br />
                                Professional
                                <span className="developer"> Web Developer.</span>
                            </h2>
                        </div>
                        <div className='logos'>
                            <img className='git_logo ' src='./github.svg' alt='github' />
                            <img className='link_logo' src='./linkedin.svg' alt='linkedin' />
                            <img className='ig_logo' src='./instagram.svg' alt='insta' />
                        </div>
                        <div className="info_section">
                            <button className="contact_btn">
                                <span className="call_btn">CONTACT US <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16"

                                    xmlns="http://www.w3.org/2000/svg"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315
                        1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM20 17H24V19H20V17ZM17 12H24V14H17V12ZM19 7H24V9H19V7Z"></path></svg>
                                </span>
                            </button>
                            <button className="resume">
                                <span className="resume_btn">GET RESUME<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                    height="16" width="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path></svg></span>
                            </button>
                        </div>
                        </div>

                        <div className="profile">
                            <img className='profile_img' src="annu.jpg" />
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className='horizontal'></div>
        </>

    )
}
export default Banner;