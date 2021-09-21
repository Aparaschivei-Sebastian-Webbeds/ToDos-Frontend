/* eslint-disable no-fallthrough */

import { UpdateObjective, GetObjectiveById, CreateObjective, DeleteObjective } from '../services/ObjectivesServices';


export function ObjectivesReducer(state, action) {
    switch (action.type) {
        case 'markTaskAsCompleted': {
            var index = action.payload;
            state.tasks[index].completed = !state.tasks[index].completed;
            UpdateObjective(state.tasks[index].id, { completed: state.tasks[index].completed }).then((response) => {
                if (response === true) {
                    GetObjectiveById(state.tasks[index].id).then((response2) => {
                        if (response2) {
                            var newTasks = state.tasks.map(x => x.id === state.tasks[index].id ? response2 : x)
                            return ({ tasks: newTasks })
                        }
                    });

                }
            })
        }
        // eslint-disable-next-line no-fallthrough
        case 'addTask':
            {
                CreateObjective({ text: action.payload }).then((response) => {
                    var newTasks = state.tasks.concat(response)
                    return ({ tasks: newTasks })
                })
            }
        // eslint-disable-next-line no-fallthrough
        case 'deleteTask': {
            const id = action.payload.target.getAttribute("id")
            DeleteObjective(id).then(() => {
                var newTasks = state.tasks.filter(task => task.id !== id);
                return ({ tasks: newTasks });
            })
        }
        case 'setTasks':
            state.tasks=action.payload;
        // eslint-disable-next-line no-fallthrough
        default: return;
    }
}