import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    lelvel: "Intermediate",
    color: "orange",
  },

  {
    skill: "Javascript",
    lelvel: "Intermediate",
    color: "blue",
  },
  {
    skill: "React",
    lelvel: "Intermediate",
    color: "#79edb8",
  },
  {
    skill: "Python Django",
    lelvel: "Beginner",
    color: "green",
  },

  {
    skill: "Git + Github",
    lelvel: "Intermediate",
    color: "#2596be",
  },

  {
    skill: "Linux",
    lelvel: "Beginner",
    color: "#ed79e8",
  },
];

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
        fit and I love carrying weights. Weekends are made up of wife , son and
        me at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillq) => (
        <Skill
          skilla={skillq.skill}
          color={skillq.color}
          level={skillq.level}
        />
      ))}
    </div>
  );
}

function Skill({ skilla, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skilla}</span>
      <span>
        {level === "Intermediate" && "✊"}
        {level === "Beginner" && "🙌"}
        {level === "advanced" && "💪"}
      </span>
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
