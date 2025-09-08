import TodoItem from '../TodoItem'
import {Component} from 'react'

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
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
  }
  onTodoListChange = id => {
    const {todoList} = this.state
    const newList = todoList.filter(each => each.id !== id)
    this.setState({todoList: newList})
  }
  render() {
    const {todoList} = this.state
    return (
      <div className="bg-container">
        <ul className="todo-list">
          <h1>Simple Todos</h1>
          {todoList.map(eachTodo => (
            <TodoItem
              todoItem={eachTodo}
              key={eachTodo.id}
              onTodoListChange={this.onTodoListChange}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
