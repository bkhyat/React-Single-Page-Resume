import { SectionHeader } from "./commons";

const SoftSkill: React.FC<{ softSkills: Array<string> }> = ({ softSkills }) => {
  return (
    <div className={"soft-skills"}>
      <SectionHeader header={"Soft SKills"} />
      <ul>
        {softSkills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkill;
