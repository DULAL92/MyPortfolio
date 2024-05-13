import React from "react";
import PageHeaderContain from "../../components/PageHeaderContain";
import {BsInfoCircleFill} from "react-icons/bs";
import {Animate} from "react-simple-animate";
import './styles.scss';
import {DiApple} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';

const personalDetails =[
    {
        label: "Name",
        value: "Dulal Adak"
    },

    {
        label: "Age",
        value: 31
    },

    {
        label: "Address",
        value: "India"
    },

    {
        label: "Email",
        value: "adak.dulal.92@gmail.com"
    },

    {
        label: "Contact No",
        value:"+91 8768264101"
    },
];

const joSummary ="Gain hands-on experience in web development as a full stack developer intern. Collaborate on projects to design, develop, and deploy dynamic web applications. Leverage front-end technologies like HTML, CSS, and JavaScript for intuitive user interfaces. Dive into back-end frameworks such as Node.js for server-side logic and database management. Enhance your skills in version control, testing, and debugging. Work closely with experienced mentors to expand your knowledge and contribute to real-world solutions in a supportive environment.";

const About = () =>
{
    return (
          <section id="about" className="about">
            <PageHeaderContain
              headerText ="About Me"
              icon = {<BsInfoCircleFill  size={30}/>}
            />
            <div className="about_content">
                <div className="about_content_personalwrapper">
                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateX(-900px)"
                }    
                }

                end={{
                    transform: "translateX(0px)"
                }    
                }
                >
                <h3>Full Stack Developer</h3>
                <p>{joSummary}</p>

                </Animate>

                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateX(500px)"
                }    
                }

                end={{
                    transform: "translateX(0px)"
                }    
                }
                >

                <h3 className="personalInformationText">Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((items,i)=>(
                            <li key={i}>
                                <span className="title">{items.label}</span>
                                <span className="value">{items.value}</span>

                            </li>

                        ))
                    }
                </ul>

                </Animate>
                </div>
                <div className="about_content_servicesWrapper">
                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateX(600px)"
                }    
                }

                end={{
                    transform: "translateX(0px)"
                }    
                }
                >

                    <div className="about_content_servicesWrapper_innerContent">
                         <div>
                            <FaDev size={40} color="var(--yellow-theme-main-color)"/>
                         </div>
                         <div>
                            <FaDatabase size={40} color="var(--yellow-theme-main-color)"/>
                         </div>  
                    </div>
                    </Animate>
                </div>
            </div>
          </section>
    );
};

export default About;