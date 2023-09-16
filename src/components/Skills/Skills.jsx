import './Skills.css'

const Skills = () => {
  return (
    <div className='skills-con'>
      <div className="container py-4 grid">
        <div className="skills-left">
            <div className="skill">
                <div className="upper flex">
                    <span className='skill-num'>01</span>
                    <div className="bar"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="22" fill="#F55529"/>
                        <path d="M18 18H26M26 18V26M26 18L18 26" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
                <div className="middle">
                    <p>UI/UX Design</p>
                </div>
                <div className="bottom flex">
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#F55529"/>
                            <path d="M13 6L7 12L5 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='skill-heading'>Web Design</span>
                    </div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#F55529"/>
                            <path d="M13 6L7 12L5 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='skill-heading'>App Design</span>
                    </div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#F55529"/>
                            <path d="M13 6L7 12L5 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='skill-heading'>Dashboard Design</span>
                    </div>
                </div>
            </div>

            <div className="skill py-3">
                <div className="upper flex">
                    <span className='skill-num'>02</span>
                    <div className="bar"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="22" fill="#F55529"/>
                        <path d="M18 18H26M26 18V26M26 18L18 26" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
                <div className="middle">
                    <p>Development</p>
                </div>
                <div className="bottom flex">
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#F55529"/>
                            <path d="M13 6L7 12L5 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='skill-heading'>Web Development</span>
                    </div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#F55529"/>
                            <path d="M13 6L7 12L5 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='skill-heading'>App Development</span>
                    </div>
                </div>
            </div>

            <div className="skill">
                <div className="upper flex">
                    <span className='skill-num'>03</span>
                    <div className="bar"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="22" fill="#F55529"/>
                        <path d="M18 18H26M26 18V26M26 18L18 26" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
                <div className="middle">
                    <p>Branding</p>
                </div>
                <div className="bottom flex">
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#F55529"/>
                            <path d="M13 6L7 12L5 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='skill-heading'>Brand Logo </span>
                    </div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#F55529"/>
                            <path d="M13 6L7 12L5 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='skill-heading'>Brand Promotions</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="skills-right flex">
            <div className="skills-right-content">
                <h1 className='md'>Solving problems by the services</h1>
                <p className='text-light py-2'>
                I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                </p>
                <button className="btn btn-secondary">Learn More &#8594;</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
