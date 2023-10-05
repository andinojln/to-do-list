import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = ({ todo, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
    return (
        <li>
            <span
                onClick={() => handleCompleteTodo(todo.id)}
                className={`container-done ${todo.done ? "active" : ""}`}
            ></span>
            <TodoUpdate
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
            />
            <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
                <IoTrashBinSharp />
            </button>
        </li>
    );
}