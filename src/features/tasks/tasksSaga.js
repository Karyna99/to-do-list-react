import { takeEvery, takeLatest, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksWorker() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        call(alert, "Coś poszło nie tak:(")
    }
};

function* saveTasksInLocalStorageWorker() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks.tasks)
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksWorker);
    yield takeEvery("*", saveTasksInLocalStorageWorker)
};