import { SectionHeader } from "./commons";
import React from "react";

const Profile: React.FC<{ profiles: Array<string> }> = ({ profiles }) => {
  return (
    <div className={"profile-section"}>
      <SectionHeader styles={{ marginTop: 0 }} header={"About Me"} />
      <ul style={{ textAlign: "justify", paddingRight: "6px" }}>
        {profiles.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
