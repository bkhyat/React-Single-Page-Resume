import { Card, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { IconText } from "./commons";
import React from "react";
import { contactsInterface, mainTitleInterface, titleInterface } from "./types";

const TitleLeft: React.FC<mainTitleInterface> = ({
  fullName,
  currentDesignation,
  extra,
  address,
}) => (
  <div className={"title-left"}>
    <Typography.Title level={3} style={{ color: "#bf58bf" }}>
      {fullName}
    </Typography.Title>
    <Typography.Text strong>
      {currentDesignation} <br />
    </Typography.Text>
    <Typography.Text>
      {extra} <br />
      <HomeOutlined /> {address}
    </Typography.Text>
  </div>
);

const Contacts: React.FC<contactsInterface> = (props) => {
  const { extra, ...contacts } = props;

  return (
    <div className={"contacts"}>
      {Object.keys(contacts).map((contactType) => (
        <div>
          <IconText
            icon={contactType}
            text={contacts[contactType]}
            tooltip={contactType}
          />
        </div>
      ))}
      {/*{extra.map((value, link) => <IconText icon={link?<LinkOutlined/>:''} text={value})}*/}
    </div>
  );
};

const Title: React.FC<titleInterface> = (props) => {
  return (
    <Card
      size={"small"}
      title={
        <TitleLeft
          fullName={props.fullName}
          currentDesignation={props.currentDesignation}
          extra={props.extra}
          address={props.address}
        />
      }
      extra={<Contacts {...props.contacts} />}
      bordered={false}
      style={{ boxShadow: "none", border: 0 }}
      headStyle={{ border: 0, fontWeight: "normal" }}
    />
  );
};

export default Title;
