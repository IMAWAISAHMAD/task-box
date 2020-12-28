import React from 'react';

import PureTaskList from './TaskList';

import { Provider } from 'react-redux';

import { store } from '../Task/taskSlice';

export default {

    component: PureTaskList,

    title: 'TaskList',

    decorators: [(story) => React.createElement(Provider, { store: store },

            React.createElement("div", { style: { padding: '3rem' } }, story()))],

};

const tasks = [

    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },

    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },

    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },

    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },

    { id: '5', title: 'Task 5', state: 'TASK_INBOX' },

];

export const Default = () => {

    return (React.createElement(PureTaskList, { tasks: tasks }));

};

export const Pinned = () => {

    return (React.createElement(PureTaskList, { tasks: [{ id: '5', title: 'Task 5 (Pinned)', state: 'TASK_PINNED' }] }));

};

export const Loading = () => {

    return (React.createElement(PureTaskList, { tasks: [], loading: true }));

};

export const Empty = () => {

    return (React.createElement(PureTaskList, { tasks: [], loading: false }));

};

