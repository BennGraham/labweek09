import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import { title, subTitle, studentData } from "./data";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={title} subTitle={subTitle} />
        <StudentCard studentData={studentData} />
      </header>
    </div>
  );
}

export default App;
