
import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Student name="Bro" age={30} isStudent={false}/>
      <Student name="Rick" age={60} isStudent={false}/>
      <Student name="Morty" age={14} isStudent={true}/>
      <Student/>
    </>
  );
}

export default App
