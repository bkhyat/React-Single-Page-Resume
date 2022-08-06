import { Card, Col, Row, Space, Tag, Typography } from "antd";
import { experienceItemInterface, experienceListInterface } from "./types";
import { SectionHeader } from "./commons";
import React from "react";

const montNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ExperienceItem: React.FC<{
  experience: experienceItemInterface;
  index: number;
}> = ({ experience, index }) => {
  const parseDate = (date: any) => {
    if (!date) return "Present";
    const dateObj = new Date(date);
    return `${montNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
  };

  const getDuration = (start: any, end: any) => {
    const date1Obj: any = new Date(start);
    let date2Obj: any;
    let presentFlag: boolean = false;
    if (!end) {
      date2Obj = new Date();
      presentFlag = true;
    } else {
      date2Obj = new Date(end);
    }
    const diff = (date2Obj - date1Obj) / (86400 * 1000 * 30);
    const years = diff / 12;
    const wholeYears = Math.trunc(years);
    const wholeMonths = Math.trunc((years - wholeYears) * 12);

    let value = "";
    if (wholeYears) {
      value += wholeYears + " Year" + (years > 1 ? "s" : "");
    }
    if (wholeMonths || presentFlag) {
      value +=
        " " +
        (wholeMonths === 0 ? 1 : wholeMonths) +
        " Month" +
        (wholeMonths > 1 ? "s" : "") +
        (presentFlag ? "+" : "");
    }

    return value;
  };
  const titleLeft = (
    <Typography.Paragraph style={{ margin: 0 }}>
      <Typography.Text strong> {experience.designation} </Typography.Text>{" "}
      <br />
      <Typography.Text italic>{experience.organization}</Typography.Text>
    </Typography.Paragraph>
  );
  const titleRight = (
    <Typography.Paragraph style={{ textAlign: "right", margin: 0 }}>
      <Typography.Text strong>
        {parseDate(experience.start_date)} - {parseDate(experience.end_date)}
      </Typography.Text>{" "}
      <br />
      <Typography.Text italic>
        {" "}
        {getDuration(experience.start_date, experience.end_date)}
      </Typography.Text>
    </Typography.Paragraph>
  );

  return (
    <Card
      title={titleLeft}
      extra={titleRight}
      style={{
        width: "100%",
        background: "transparent",
        marginTop: index === 0 ? -10 : undefined,
      }}
      size={"small"}
      headStyle={{ fontWeight: "normal" }}
      bordered={false}
      bodyStyle={{ borderBottom: "1px solid #f0f0f0" }}
    >
      <Row>
        <Col lg={16}>
          <Card.Grid
            style={{
              width: "100%",
              padding: "12px 6px 6px 0",
              boxShadow: "none",
            }}
            hoverable={false}
          >
            <ul style={{ textAlign: "justify" }}>
              {experience.bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card.Grid>
        </Col>
        <Col lg={8}>
          <Card.Grid
            style={{
              width: "100%",
              padding: "12px 6px 6px 6px",
              boxShadow: "none",
            }}
            hoverable={false}
          >
            <Space direction={"vertical"} className={"relevant-skills"}>
              <Typography.Text strong>Relevant Skills:</Typography.Text>
              <Space wrap style={{ gap: 8 }}>
                {experience.skills.map((item, index) => (
                  <Tag key={index}>{item}</Tag>
                ))}
              </Space>
            </Space>
          </Card.Grid>
        </Col>
      </Row>
    </Card>
  );
};
const Experience: React.FC<{ experiences: experienceListInterface }> = ({
  experiences,
}) => {
  return (
    <div className={"experiences"}>
      <SectionHeader header={"Experiences"} styles={{ marginTop: 0 }} />
      {experiences.map((experience, index) => (
        <ExperienceItem experience={experience} key={index} index={index} />
      ))}
    </div>
  );
};

export default Experience;
