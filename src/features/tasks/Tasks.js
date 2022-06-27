import { useTasks } from "../../useTasks";
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
    // removeTask,
    // toggleTaskdone,
    // setAllDone,
    // addNewTask 
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header
          title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<TaskList/>}
          extraContent={<Buttons
          />}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Tasks;


