import * as React from 'react';

import { useDispatch } from 'react-redux';

import { archiveTask, pinTask } from './taskSlice';

const Task = ({ task: { id, title, state } }) => {

    const dispatch = useDispatch();

    return (React.createElement("div", { className: `list-item ${state}` },

        React.createElement("label", { className: "checkbox" },

            React.createElement("input", { type: "checkbox", defaultChecked: state === 'TASK_ARCHIVED', name: "checked", disabled: true }),

            React.createElement("span", { className: "checkbox-custom", onClick: () => dispatch(archiveTask(id)) })),

        React.createElement("div", { className: "title" },

            React.createElement("input", { type: "text", value: title, readOnly: true, placeholder: "Input title" })),

        React.createElement("div", { className: "actions", onClick: event => event.stopPropagation() }, state !== 'TASK_ARCHIVED' && (React.createElement("a", { onClick: () => dispatch(pinTask(id)) },

            React.createElement("span", { className: `icon-star` }))))));

};

export default Task;

