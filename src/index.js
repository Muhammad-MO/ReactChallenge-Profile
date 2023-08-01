import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="Muhammad.png" alt="Muhammad" />;
}

function Intro() {
  return (
    <div>
      <h1>Muhammad bin Mahmood</h1>
      <p>
        Full-stack web developer and Frontent Developer at xxx. I enjoy keeping
        fit and I love carrying weights. weekends are made up of wife , me and
        the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🌻" color="blue" />
      <Skill skill="HTML" emoji="🌻" color="red" />
      <Skill skill="CSS" emoji="🌻" color="orange" />
      <Skill skill="Python + Django" emoji="🌻" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
