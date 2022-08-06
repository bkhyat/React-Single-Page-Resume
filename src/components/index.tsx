import Title from "./Title";
import "./assets/styles/index.css";
import { Card, Col, Row } from "antd";
import Profile from "./Profile";
import SoftSkill from "./SoftSkill";
import TechSkill from "./TechSkill";
import Education from "./Education";
import Achievements from "./Achievements";
import Experience from "./Experience";
import {
  achievementInterface,
  contactsInterface,
  educationListInterface,
  experienceListInterface,
  techSkillInterface,
  titleInterface,
} from "./types";

const Resume: React.FC<{
  title?: titleInterface;
  contacts?: contactsInterface;
  profiles?: string[];
  experiences?: experienceListInterface;
  softSkills?: string[];
  techSkills?: techSkillInterface;
  educations?: educationListInterface;
  achievements?: achievementInterface;
}> = ({
  title,
  contacts,
  profiles = [],
  experiences = [],
  softSkills = [],
  techSkills = {},
  educations = [],
  achievements = [],
}) => {
  return (
    <div className={"resume-wrapper"}>
      <Card className={"resume-card"} bordered={false}>
        <Row>
          <Col md={16}>
            <Card.Grid
              style={{ width: "100%", padding: 0, boxShadow: "none" }}
              hoverable={false}
            >
              <Title {...title} contacts={contacts} />
              <Profile profiles={profiles} />
            </Card.Grid>
            <Experience experiences={experiences} />
          </Col>
          <Col md={8}>
            <Card.Grid
              style={{
                width: "100%",
                padding: 0,
                boxShadow: "none",
                background: "rgb(250, 250, 250)",
              }}
              hoverable={false}
            >
              <SoftSkill softSkills={softSkills} />
              <TechSkill techSkills={techSkills} />
              <Education educations={educations} />
              <Achievements achievements={achievements} />
            </Card.Grid>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Resume;
