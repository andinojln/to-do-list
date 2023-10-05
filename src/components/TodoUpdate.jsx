import { useRef, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { useForm } from "../hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
    const { updateDescription, onInputChange } = useForm({
        updateDescription: todo.description,
    });

    const [disabled, setDisabled] = useState(true);

    const focusInputRef = useRef();


    const onSubmitUpdate = (e) => {
        e.preventDefault();

        const id = todo.id;
        const description = updateDescription;

        handleUpdateTodo(id, description);

        setDisabled(!disabled);

        focusInputRef.current.focus();
    }


    return (
        <form onSubmit={onSubmitUpdate}>
            <input
                type="text"
                className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
                name="updateDescription"
                value={updateDescription}
                onChange={onInputChange}
                placeholder="¿Qué tienes que hacer hoy?"
                readOnly={disabled}
                ref={focusInputRef}
            />
            <button className="btn-edit" type="submit">
                <RiEdit2Fill />
            </button>
        </form>
    );
}