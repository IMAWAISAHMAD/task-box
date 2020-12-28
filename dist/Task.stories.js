import React from 'react';

import Task from './';

import { Provider } from 'react-redux';

import { store } from './taskSlice';

export default {

    component: Task,

    title: 'Task',

    decorators: [(story) => React.createElement(Provider, { store: store }, story())],

};

const task = {

    id: '1',

    title: 'Task 01'

};

export const Default = () => {

    return (React.createElement(Task, { task: task }));

};

export const Pinned = () => {

    return (React.createElement(Task, { task: Object.assign(Object.assign({}, task), { state: 'TASK_PINNED' }) }));

};

export const Archived = () => {

    return (React.createElement(Task, { task: Object.assign(Object.assign({}, task), { state: 'TASK_ARCHIVED' }) }));

};

