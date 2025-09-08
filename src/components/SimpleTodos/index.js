import TodoItem from '../TodoItem'
import {Component} from 'react'
<<<<<<< HEAD

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
=======
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
>>>>>>> solution
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
<<<<<<< HEAD
  }
=======
    newTodo: '',
  }

  // Handle input change
  onChangeNewTodo = event => {
    this.setState({newTodo: event.target.value})
  }

  // Add new todo (supports multiple with count)
  onAddTodo = () => {
    const {newTodo, todoList} = this.state
    if (newTodo.trim() === '') return

    let parts = newTodo.trim().split(' ')
    let count = 1
    let title = newTodo.trim()

    // If last part is a number, treat it as count
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
>>>>>>> solution
  onTodoListChange = id => {
    const {todoList} = this.state
    const newList = todoList.filter(each => each.id !== id)
    this.setState({todoList: newList})
  }
<<<<<<< HEAD
  render() {
    const {todoList} = this.state
    return (
      <div className="bg-container">
        <ul className="todo-list">
          <h1>Simple Todos</h1>
=======

  // Toggle complete
  onToggleComplete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    }))
  }

  // Update title (edit/save)
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
      <div className='bg-container'>
        <h1 className='heading'>Simple Todos</h1>

        <div className='input-container'>
          <input
            type='text'
            placeholder='Enter todo (e.g., Buy Milk 3)'
            value={newTodo}
            onChange={this.onChangeNewTodo}
            className='input-box'
          />
          <button onClick={this.onAddTodo} className='add-btn'>
            Add
          </button>
        </div>

        <ul className='todo-list'>
>>>>>>> solution
          {todoList.map(eachTodo => (
            <TodoItem
              todoItem={eachTodo}
              key={eachTodo.id}
              onTodoListChange={this.onTodoListChange}
<<<<<<< HEAD
=======
              onToggleComplete={this.onToggleComplete}
              onUpdateTitle={this.onUpdateTitle}
>>>>>>> solution
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
