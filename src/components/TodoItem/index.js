import './index.css'

const TodoItem = props => {
  const {todoItem, onTodoListChange} = props
  const {title, id} = todoItem

  const onTodoListDelete = () => onTodoListChange(id)

  return (
    <li>
      <p>{title}</p>
      <button onClick={onTodoListDelete}>Delete</button>
    </li>
  )
}
export default TodoItem
