import React,{FC}from 'react';
import Task from '../Task/Task';
import {TaskInterface} from '../Task/Task';

export interface TaskListProps{
  loading?:boolean,
  tasks:TaskInterface[],
  onPinTask?:any,
  onArchiveTask?:any,
  }
  

const PureTaskList:FC<TaskListProps>=({ loading, tasks})=> {
  const myTasks  = tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (myTasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...myTasks.filter(t => t.state === 'TASK_PINNED'),
    ...myTasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default PureTaskList