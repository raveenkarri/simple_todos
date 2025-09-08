import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoItem, onTodoListChange, onToggleComplete, onUpdateTitle} = props
  const {title, id, completed} = todoItem

  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(title)

  const onSave = () => {
    if (editValue.trim() !== '') {
      onUpdateTitle(id, editValue)
      setIsEditing(false)
    }
  }

  return (
    <li className="todo-item">
      {/* Checkbox to toggle complete */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />

      {/* If editing show input, else show text */}
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

      {/* Edit / Save Button */}
      {isEditing ? (
        <button onClick={onSave} className="save-btn">
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="edit-btn">
          Edit
        </button>
      )}

      {/* Delete Button */}
      <button onClick={() => onTodoListChange(id)} className="delete-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
