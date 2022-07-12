import { useTodos } from "../hooks";
import { TodoAdd, TodoList } from "./";
import './styles.css';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount,
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo } = useTodos();
    
    const slopes = todos.filter( todo => !todo.done );

  return (
    <div>
        <h1
            className="title"
        >
            TodoApp
            <small className="small-1">Tareas: { todosCount }</small> 
            <small className="small-2">Pendientes: { pendingTodosCount }</small>
        </h1>
        
        <hr />

        <div className="row">
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>

            <div className="col-7">
                <TodoList 
                    todos={ todos }
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>
        </div>
    </div>
  )
}
