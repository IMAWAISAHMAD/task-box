import React from 'react';

import { useSelector } from 'react-redux';

import PureTaskList from '../TaskList';

function InboxScreen({ error }) {

    const defaultTasks = useSelector((state) => state);

    if (error) {

        return (React.createElement("div", { className: "page lists-show" },

            React.createElement("div", { className: "wrapper-message" },

                React.createElement("span", { className: "icon-face-sad" }),

                React.createElement("div", { className: "title-message" }, "Oh no!"),

                React.createElement("div", { className: "subtitle-message" }, "Something went wrong"))));

    }

    return (React.createElement("div", { className: "page lists-show" },

        React.createElement("nav", null,

            React.createElement("h1", { className: "title-page" },

                React.createElement("span", { className: "title-wrapper" }, "Taskbox"))),

        React.createElement(PureTaskList, { tasks: defaultTasks, loading: false })));

}

export default InboxScreen;

