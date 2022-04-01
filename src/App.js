import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zjeść obiad", done: true },
  { id: 2, content: "Przejść na Reacta", done: false },
];
const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header
        title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;


