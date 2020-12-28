import * as React from 'react';

export interface TaskInterface {

    id: string;

    title: string;

    state?: any;

    updatedAt?: Date;

}

export interface TaskProps {

    task: TaskInterface;

}

declare const Task: React.FC<TaskProps>;

export default Task;

