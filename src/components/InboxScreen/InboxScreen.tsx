import React from 'react';
import { useSelector} from 'react-redux';
import PureTaskList from '../TaskList';
import { TaskInterface } from '../Task/Task';

function InboxScreen({ error}:any) {
    const defaultTasks=useSelector((state:TaskInterface[])=>state);
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
 
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <PureTaskList tasks={defaultTasks} loading={false}/>
    </div>
  );
}
export default InboxScreen;