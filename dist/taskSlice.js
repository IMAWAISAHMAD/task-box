import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = [

    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },

    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },

    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },

    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },

    { id: '5', title: 'Task 5', state: 'TASK_INBOX' },

];

const taskSlice = createSlice({

    name: 'Task',

    initialState,

    reducers: {

        archiveTask(state, action) {

            return state.map((task) => task.id === action.payload ? Object.assign(Object.assign({}, task), { state: 'TASK_ARCHIVED' }) : task);

        },

        pinTask(state, action) {

            return state.map((task) => task.id === action.payload ? Object.assign(Object.assign({}, task), { state: 'TASK_PINNED' }) : task);

        }

    }

});

export const store = configureStore({ reducer: taskSlice.reducer });

export const { archiveTask, pinTask } = taskSlice.actions;

export default taskSlice.reducer;

