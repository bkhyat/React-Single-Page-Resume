import { Space, Tag, Typography } from "antd";
import { SectionHeader } from "./commons";
import { techSkillInterface } from "./types";

const TechSkill: React.FC<{ techSkills: techSkillInterface }> = ({
  techSkills,
}) => (
  <div className={"tech-skills"}>
    <SectionHeader header={"Tech Skills"} />
    <ul>
      <Space direction={"vertical"}>
        {Object.keys(techSkills).map((category) => (
          <li key={category}>
            <Typography.Text strong>{category}</Typography.Text> <br />
            {/*<ul>*/}
            <Space wrap>
              {techSkills[category].map((item) => (
                <Tag key={item.name}>{item?.name}</Tag>
              ))}
            </Space>
            {/*</ul>*/}
          </li>
        ))}
      </Space>
    </ul>
  </div>
);

export default TechSkill;
