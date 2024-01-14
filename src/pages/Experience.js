import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            High School, Advance Level (2018)
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Lankan Institute of Information Technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Associates
          </h4>

          <p> Computer Science/ web developing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 September - 2023 Jannuary"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Production specialist - Texas Instruments
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dallas, TX
          </h4>
          <p>Developed on project enhancement an process development to increase daily production goals in the semiconductor manufacturing industry</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 June - 2024 August"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dallas Community college (Associates in science in Computer science)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          This associates degree help me leverage my Computer science/ IT Journey
          </h4>

          <p> Computer Science/ web developing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 December - 2023 June"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Year Up coding Bootcamp
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          This Bootcamp got me my foot in the door of my software engineering journey, where I graduated with a full time offer from Bank of America/ Merill Lynch
          </h4>

          <p> Computer Science/ web developing</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 July - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer 1
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dallas, TX
          </h4>
          <p>
            Worked with the Merril Lynch and Private Bank(Bank of America) to build Modules/Components/Modals/Widget for customers facing applications with technologies such as Java/Spring boot/ Vue Js
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
