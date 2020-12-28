import React from 'react';

import Task from '../Task/Task';

const PureTaskList = ({ loading, tasks }) => {

    const myTasks = tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');

    const LoadingRow = (React.createElement("div", { className: "loading-item" },

        React.createElement("span", { className: "glow-checkbox" }),

        React.createElement("span", { className: "glow-text" },

            React.createElement("span", null, "Loading"),

            " ",

            React.createElement("span", null, "cool"),

            " ",

            React.createElement("span", null, "state"))));

    if (loading) {

        return (React.createElement("div", { className: "list-items" },

            LoadingRow,

            LoadingRow,

            LoadingRow,

            LoadingRow,

            LoadingRow,

            LoadingRow));

    }

    if (myTasks.length === 0) {

        return (React.createElement("div", { className: "list-items" },

            React.createElement("div", { className: "wrapper-message" },

                React.createElement("span", { className: "icon-check" }),

                React.createElement("div", { className: "title-message" }, "You have no tasks"),

                React.createElement("div", { className: "subtitle-message" }, "Sit back and relax"))));

    }

    const tasksInOrder = [

        ...myTasks.filter(t => t.state === 'TASK_PINNED'),

        ...myTasks.filter(t => t.state !== 'TASK_PINNED'),

    ];

    return (React.createElement("div", { className: "list-items" }, tasksInOrder.map(task => (React.createElement(Task, { key: task.id, task: task })))));

};

export default PureTaskList;

