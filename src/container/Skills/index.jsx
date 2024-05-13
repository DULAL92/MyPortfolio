import React from "react";
import PageHeaderContain from "../../components/PageHeaderContain";
import {BsInfoCircleFill} from "react-icons/bs";
import {skillData} from "./utils"
import {Animate, AnimateKeyframes} from "react-simple-animate";
import {Line} from "rc-progress"
import "./styles.scss"
const Skills = () =>
{
    return (
        <section id="skills" className="skills">
        <PageHeaderContain
          headerText ="My Skills"  
          icon = {<BsInfoCircleFill  size={30}/>}
        />
        <div className="skills_content-wrapper">
          {
            skillData.map((item,i) =>(
              <div key={i} className="skills_content-wrapper_inner-content">
                <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: 'translateX(-200px)'
                 } }

                 end={{
                  transform: 'translateX(0px)'
                 } }
                >

                  <h3 className="skills_content-wrapper_inner-content_category-text">{item.label}</h3>
                  <div className="skills_content-wrapper_inner-content_progressbar-contain">
                    {
                      item.data.map((skillsitem, j)=>(
                        <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity: 1", "opacity: 0"]}
                        iterationCount="1"
                        >
                          <div className="progress-wrapper" key={j}>
                            <p>{skillsitem.skillsName}</p>
                            <Line 
                            percent = {skillsitem.persentage}
                            strokewidth = "2"
                            strokeColor= "var(--yellow-theme-main-color)"
                            tailWidth="2"
                            skrokeLinecap = "square"
                            />
                          </div>
                        </AnimateKeyframes>
                      ))
                    }
                  </div>

                </Animate>


                </div>

            ))
          }

        </div>
      </section>
    )
}

export default Skills;