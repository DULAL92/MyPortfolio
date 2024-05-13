import React from "react";
import './styles.scss';
import {useNavigate} from "react-router-dom";
import {Animate} from "react-simple-animate";
import { HiTranslate } from "react-icons/hi";

const Home = () =>
{
    const navigate = useNavigate();
    const handelNavigateToContactMepage = () => {
        navigate('/contact');
 
    };
    return (
        
              <section id="home" className="home">
                <div className="home__text-wrapper">
                    <h1>
                        Hello, I'm Dulal
                        <br />
                        Full Stack Developer
                    </h1>

                </div>
                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateY(550px)"
                }    
                }

                end={{
                    transform: "translateX(0px)"
                }    
                }
                >
                <div className="home_contact-me">
                    <button onClick={handelNavigateToContactMepage}>Hire me </button>
                </div>
                </Animate>
                

              </section>
           
    )
}

export default Home;