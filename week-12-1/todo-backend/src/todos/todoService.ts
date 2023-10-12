import { Todo } from "./todo";

//Pick --> from Todo pick title, description
export type TodoCreationParams = Pick<Todo, "title" | "description"> 

export class TodoService {
    public get(todoId: string):Todo {
             return {
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false
        }
    }
    public create(todoCreationParams:TodoCreationParams):Todo{
        return{
            id: "1",
            title: "mocked todo",
            description: "mocked todo",
            done: false
        }
    }
}