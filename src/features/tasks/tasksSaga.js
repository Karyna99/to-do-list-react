import { takeEvery, takeLatest, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksWorker() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        call(alert, "Coś poszło nie tak:(")
    }
};

function* saveTasksInLocalStorageWorker() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks.tasks)
};

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksWorker);
    yield takeEvery("*", saveTasksInLocalStorageWorker)
};