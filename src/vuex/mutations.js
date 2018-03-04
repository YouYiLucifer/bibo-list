import * as types from './types'

const mutations = {
  [types.TOGGLE_TAG] (state, payload) {
    state.currentTag = payload
  },
  [types.ADD_NEW_TODO] (state, payload) {
    state.todolist.push(payload)
  },
  [types.DISPLAY_CONTENT] (state, payload) {
    state.currentTodoId = payload
  }
}

export default mutations
