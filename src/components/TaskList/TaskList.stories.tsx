import React from 'react';
import PureTaskList from './TaskList';
import {TaskInterface} from '../Task/Task';
import { Provider } from 'react-redux';
import {store} from '../Task/taskSlice';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [(story: () => React.ReactNode) => <Provider store={store}><div style={{ padding: '3rem' }}>{story()}</div></Provider>],
};

const tasks:TaskInterface[]= [
    { id: '1', title: 'Task 1',state:'TASK_INBOX' },
    { id: '2', title: 'Task 2',state:'TASK_INBOX' },
    { id: '3', title: 'Task 3',state:'TASK_INBOX' },
    { id: '4', title: 'Task 4',state:'TASK_INBOX' },
    { id: '5', title: 'Task 5',state:'TASK_INBOX' },
]
export const Default = () => {
    return(
        <PureTaskList tasks={tasks}/>
    )
}

export const Pinned = () =>{
    return(
        <PureTaskList tasks={[{id: '5', title: 'Task 5 (Pinned)',state:'TASK_PINNED'}]}/>
    )
}

export const Loading = () => {
    return(
        <PureTaskList tasks={[]} loading={true}/>
    )
}
export const Empty = () => {
    return(
        <PureTaskList tasks={[]} loading={false}/>
    )
}
