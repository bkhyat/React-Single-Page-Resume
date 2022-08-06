import { Divider, Space, Tooltip } from "antd";
import React, { createElement } from "react";
import {
  GithubOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { StackoverflowIcon } from "./assets/icons";
import { iconTextInterface, sectionHeaderInterface } from "./types";

const contactIcons: { [index: string]: React.FC } = {
  mobile: PhoneOutlined,
  email: MailOutlined,
  linkedin: LinkedinOutlined,
  github: GithubOutlined,
  stackoverflow: StackoverflowIcon,
  website: GlobalOutlined,
  link: LinkOutlined,
};

export const IconText: React.FC<iconTextInterface> = ({
  icon = "others",
  text,
  tooltip,
  link,
}) => (
  <Tooltip title={tooltip} placement={"right"}>
    <Space>
      {link ? (
        <a href={link} target={"_blank"} rel="noreferrer">
          {text}
        </a>
      ) : (
        text
      )}
      {createElement(contactIcons[icon] || React.Fragment)}
    </Space>
  </Tooltip>
);

export const SectionHeader: React.FC<sectionHeaderInterface> = ({
  header,
  styles,
}) => <Divider style={styles}>{header}</Divider>;
