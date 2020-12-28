import React from 'react';
import Task from './';
import { Provider } from 'react-redux';
import {store} from './taskSlice';

// eslint-disable-next-line
export default {
    component : Task,
    title : 'Task',
    decorators: [(story: () => React.ReactNode) => <Provider store = {store} >{story()}</Provider>],
}

const task ={
  id:'1',
  title:'Task 01'
}

export const Default = () => {
  return (
    <Task task={task}/>
  )
}

export const Pinned = () => {
  return (
    <Task task={{...task,state:'TASK_PINNED'}}/>
  )
}

export const Archived = () => {
  return (
    <Task task={{...task,state:'TASK_ARCHIVED'}}/>
  )
}
