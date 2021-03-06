import * as React from 'react';
import {useDispatch} from 'react-redux';
import {archiveTask,pinTask} from './taskSlice';



export interface TaskInterface{
id:string,
title:string,
state?:any,
updatedAt?:Date
}

export interface TaskProps {
  task:TaskInterface,
}



const Task: React.FC<TaskProps> = ({task:{id,title,state}}) => {
    const dispatch = useDispatch()
    return ( 
      <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state==='TASK_ARCHIVED'}
          name="checked"
          disabled={true}
        />
        <span className="checkbox-custom" onClick={() => dispatch(archiveTask(id))} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => dispatch (pinTask(id))}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
      </div>
     );
}
export default Task;