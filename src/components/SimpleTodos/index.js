import {Component} from 'react'
import TodoItem from '../TodoItem'
import '../TodoItem/index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening', completed: false},
  {id: 2, title: 'Rent the movie for tomorrow movie night', completed: false},
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {id: 4, title: 'Drop the parcel at Bloomingdale', completed: false},
  {id: 5, title: 'Order fruits on Big Basket', completed: false},
  {id: 6, title: 'Fix the production issue', completed: false},
  {id: 7, title: 'Confirm my slot for Saturday Night', completed: false},
  {id: 8, title: 'Get essentials for Sunday car wash', completed: false},
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    newTodo: '',
  }

  // Handle input change
  onChangeNewTodo = event => {
    this.setState({newTodo: event.target.value})
  }

  // Add new todo (supports multiple with count at end)
  onAddTodo = () => {
    const {newTodo, todoList} = this.state
    if (newTodo.trim() === '') return

    let parts = newTodo.trim().split(' ')
    let count = 1
    let title = newTodo.trim()

    if (!isNaN(parts[parts.length - 1])) {
      count = parseInt(parts.pop())
      title = parts.join(' ')
    }

    const newTodos = Array.from({length: count}, (_, index) => ({
      id: Date.now() + index,
      title,
      completed: false,
    }))

    this.setState({
      todoList: [...todoList, ...newTodos],
      newTodo: '',
    })
  }

  // Delete todo
  onTodoListChange = id => {
    const {todoList} = this.state
    const newList = todoList.filter(each => each.id !== id)
    this.setState({todoList: newList})
  }

  // Toggle complete
  onToggleComplete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    }))
  }

  // Update title
  onUpdateTitle = (id, newTitle) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    }))
  }

  render() {
    const {todoList, newTodo} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Simple Todos</h1>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter todo (e.g., Buy Milk 3)"
            value={newTodo}
            onChange={this.onChangeNewTodo}
            className="input-box"
          />
          <button onClick={this.onAddTodo} className="add-btn">
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todoList.map(eachTodo => (
            <TodoItem
              todoItem={eachTodo}
              key={eachTodo.id}
              onTodoListChange={this.onTodoListChange}
              onToggleComplete={this.onToggleComplete}
              onUpdateTitle={this.onUpdateTitle}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
