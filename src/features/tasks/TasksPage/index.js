import Section from "../../../common/Section/index";
import Header from "../../../common/Header/index";
import Container from "../../../common/Container";
import Buttons from "./Buttons/index";
import Form from "./Form/index";
import TaskList from "./TaskList/index"
import { theme } from "../../../styled";
import { ThemeProvider } from 'styled-components';

function TasksPage() {

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

export default TasksPage;


