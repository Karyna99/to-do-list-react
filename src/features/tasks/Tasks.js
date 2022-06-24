import { useState } from "react";
import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section/index";
import Header from "../../common/Header/index";
import Container from "../../common/Container";
import { theme } from "../../styled";
import { ThemeProvider } from 'styled-components';
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
      case "addTask":
          return {
              ...state,
              tasks: [
                  ...state.tasks,
                  {
                      content: action.payload,
                  },
              ],
          };
      default:
          return state;
  };
};
const store = configureStore({reducer: tasksReducer});
console.log(store.getState());

const selectTasks = ({tasks}) => tasks;
console.log(selectTasks(store.getState()));

const addTask = content => ({
  type: "addTask",
  payload: content,
});

store.dispatch(addTask("zadanie 1"));

console.log(selectTasks(store.getState()));

store.dispatch(addTask("zadanie 2"));

console.log(selectTasks(store.getState()));

function Tasks() {
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
          body={<TaskList
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

export default Tasks;


