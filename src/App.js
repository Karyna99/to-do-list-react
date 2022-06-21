import { useState } from "react";
import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { theme } from "./styled";
import { ThemeProvider } from 'styled-components';

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { tasks, removeTask, toggleTaskdone, setAllDone, addNewTask } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header
          title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskdone={toggleTaskdone}
          />}
          extraContent={<Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;


