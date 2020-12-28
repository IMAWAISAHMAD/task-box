import { TaskInterface } from './Task';

export declare const store: import("@reduxjs/toolkit").EnhancedStore<TaskInterface[], import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<TaskInterface[], import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<TaskInterface[], import("redux").AnyAction, undefined>]>;

export declare const archiveTask: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, string>, pinTask: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, string>;

declare const _default: import("redux").Reducer<TaskInterface[], import("redux").AnyAction>;

export default _default;

