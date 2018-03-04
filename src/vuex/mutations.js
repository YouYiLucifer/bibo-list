import * as types from './types'

const mutations = {
  [types.TOGGLE_TAG] (state, payload) {
    state.currentTag = payload
  }

}

export default mutations
