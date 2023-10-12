import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import {Todo} from "./todo"
import { TodoCreationParams, TodoService } from "./todoService";

@Route("todo")
export class TodoController extends Controller{

    /**
     * This is the controller for creating the Todos
     */

    @Get("{todoId}")
    public async getTodo(
        @Path() todoId: string
    ): Promise<Todo> {
        let todoService = new TodoService();
        return todoService.get(todoId)
    }
}