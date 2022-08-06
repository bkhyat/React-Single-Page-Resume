import { achievementInterface } from "./types";
import { SectionHeader } from "./commons";

const Achievements: React.FC<{ achievements: achievementInterface }> = ({
  achievements,
}) => {
  return (
    <div className={"achievements-and-enrollments"}>
      <SectionHeader header={"Achievements & Enrollments"} />
      <ul>
        {(achievements || []).map((item) => (
          <li>
            {item.link ? (
              <a
                href={item.link}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
                rel="noreferrer"
              >
                {item.bullet}
              </a>
            ) : (
              item.bullet
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Achievements;
