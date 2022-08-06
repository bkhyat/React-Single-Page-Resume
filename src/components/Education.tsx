import { Card, Typography } from "antd";
import React from "react";
import { educationItemInterface, educationListInterface } from "./types";
import { SectionHeader } from "./commons";

const EducationItem: React.FC<{ education: educationItemInterface }> = ({
  education,
}) => {
  const titleLeft = (
    <div style={{ whiteSpace: "pre-line" }}>
      <Typography.Text strong>
        {education.level} | {education.course}
      </Typography.Text>
      <Typography.Paragraph italic style={{ margin: 0 }}>
        {education.university} <br />
        {education.school}
      </Typography.Paragraph>
    </div>
  );

  const titleExtra = (
    <>
      <Typography.Text strong>
        {new Date(education.end_date).getFullYear()}
      </Typography.Text>
      <Typography.Paragraph italic>{education.score}</Typography.Paragraph>
    </>
  );
  return (
    <Card
      size={"small"}
      title={titleLeft}
      extra={titleExtra}
      headStyle={{ fontWeight: "normal", fontSize: "14px" }}
      style={{ width: "100%", background: "transparent" }}
      bordered={false}
      bodyStyle={{ borderBottom: "1px solid #f0f0f0" }}
    />
  );
};

const Education: React.FC<{ educations: educationListInterface }> = ({
  educations,
}) => {
  return (
    <div className={"education"}>
      <SectionHeader header={"Educations"} />
      {(educations || []).map((education) => (
        <EducationItem education={education} key={education.level} />
      ))}
    </div>
  );
};
export default Education;
