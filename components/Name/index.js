import { Textfit } from "react-textfit";
import "./styles.scss";

const Name = props => (
  <div id="Name">
    <Textfit mode="single" className="name">
      {props.data.name}
    </Textfit>
    <div className="position roboto">{props.data.position}</div>
  </div>
);

export default Name;
