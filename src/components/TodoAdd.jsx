import { useForm } from "../hooks/useForm"



export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo(newTodo);
        onResetForm();
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text" 
            className="form-control"
            placeholder="Tarea..."
            autoComplete="off"
            name='description'
            value={ description } 
            onChange={ onInputChange }
        />

        <button
            type="submit"
            className="btn btn-outline-light mt-2 w-100"
        >
            Agregar
        </button>
    </form>

  )
}
