<<<<<<< HEAD
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
=======
import { useState } from 'react'
import './index.css'

const TodoItem = props => {
  const { todoItem, onTodoListChange, onToggleComplete, onUpdateTitle } = props
  const { title, id, completed } = todoItem

  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(title)

  const onSave = () => {
    onUpdateTitle(id, editValue)
    setIsEditing(false)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p className={completed ? 'completed' : ''}>{title}</p>
      )}

      {isEditing ? (
        <button onClick={onSave} className="save-btn">Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
      )}

      <button onClick={() => onTodoListChange(id)} className="delete-btn">
        Delete
      </button>
    </li>
  )
}

>>>>>>> solution
export default TodoItem
