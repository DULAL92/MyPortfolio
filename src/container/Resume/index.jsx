import React from "react";
import PageHeaderContain from "../../components/PageHeaderContain";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";
import {MdWork} from 'react-icons/md'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContain
        headerText="My Resume"
        icon={<BsInfoCircleFill size={30} />}
      />
      <div className="timeline">
        <div className="timeline_experience">
          <h3 className="timeline_experience_header-text">Experience</h3>
          <VerticalTimeline
            layout="{1-column}"
            lineColor="var( --yellow-theme-main-color)"
          >
            {data.experience.map((items, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                }}
                date="2020 - Present"
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                }}
              >
                <div className="vertical-timeline-element-wrapper">
                  <h3>
                    {items.title}
                  </h3>
                  <h4>
                    {items.subTitle}
                  </h4>
                  <p>{items.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline_education">
          <h3 className="timeline_education_header-text">Education</h3>
          <VerticalTimeline
            layout="{1-column}"
            lineColor="var( --yellow-theme-main-color)"
            
          >
            {data.education.map((item, j) => (
              <VerticalTimelineElement
                key={j}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                }}
                date="2020 - Present"
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                }}
              >
                <div className="vertical-timeline-element-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume;
