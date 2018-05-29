import { RichText } from "prismic-reactjs";
import "./styles.scss";

const WorkExperience = ({ item }) => (
  <div className="work">
    <a className="business" href={item.business_url} target="_blank">
      {item.business_name}
    </a>
    <div className="meta">
      <div className="position">{item.position}</div>{" "}
      <div className="pipe">|</div> <div className="duration">{item.time}</div>
    </div>
    <div className="responsibilities">{RichText.render(item.description)}</div>
  </div>
);

export default WorkExperience;
