import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section/index";
import Header from "../../common/Header/index";
import Container from "../../common/Container";
import { theme } from "../../styled";
import { ThemeProvider } from 'styled-components';

function Tasks() {

  const {
    // tasks,
    removeTask,
    toggleTaskdone,
    setAllDone,
    addNewTask } = useTasks();

  const { tasks } = useSelector(selectTasks)

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
          body={<TaskList
            removeTask={removeTask}
            toggleTaskdone={toggleTaskdone}
          />}
          extraContent={<Buttons
            setAllDone={setAllDone}
          />}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Tasks;


