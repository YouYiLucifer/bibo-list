/*
 * todolist[] { title: String, status: String, content: String }
 * current enum { all, finished, deleted }
 */

const state = {
  todolist: [
    {id: 0, title: '吃饭', status: 'active', content: '炸鸡'},
    {id: 1, title: '运动', status: 'finished', content: '跑步'},
    {id: 2, title: '睡觉', status: 'deleted', content: '30分钟'}
  ],
  currentTag: 'all',
  currentTodoId: 0
}

export default state
