


export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between bg-dark">
        <span 
            className={`align-self-center me-2 ${ todo.done ? 'text-decoration-line-through text-danger' : '' }`}
            onClick={ () => onToggleTodo( todo.id ) }
        >
            { todo.description }
        </span>
        
        <button
            className="btn btn-outline-danger"
            onClick={ () => onDeleteTodo(todo.id) }
        >
            Eliminar
        </button>
    </li>
  )
}
