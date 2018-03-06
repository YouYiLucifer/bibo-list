/*
 * todolist[] {title: String, status: String, content: String }
 * current enum { active, finished, deleted }
 */
import store from '../common/js/store'

const state = {
  todolist: store.fetch(),
  currentTag: 'all',
  currentTodoId: 0
}

export default state
