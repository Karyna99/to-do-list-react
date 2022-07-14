import Section from "../../../common/Section/index";
import Header from "../../../common/Header/index";
import Container from "../../../common/Container";
import { theme } from "../../../styled";
import { ThemeProvider } from 'styled-components';

function TaskPage() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header
          title="Zadanie" />
        <Section
          title="Dodaj nowe zadanie"
          body={<>nana</>}
        />
      </Container>
    </ThemeProvider>
  );
};

export default TaskPage;