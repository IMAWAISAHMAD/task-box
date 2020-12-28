import { FC } from 'react';

import { TaskInterface } from '../Task/Task';

export interface TaskListProps {

    loading?: boolean;

    tasks: TaskInterface[];

    onPinTask?: any;

    onArchiveTask?: any;

}

declare const PureTaskList: FC<TaskListProps>;

export default PureTaskList;

