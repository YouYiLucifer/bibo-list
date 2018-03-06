<template>
  <div class="center-wrapper">
    <div class="all">
      <div class="new-wrapper">
        <input class="newTitle"
               type="text"
               placeholder="标题..."
               v-model="newTitle"
               style="outline: none"
               @keyup.enter="addTitle">
      </div>
      <div class="menu">
        <ul>
          <li class="item"
              :class="{ active: currentTodoId === getTodos.indexOf(item),
                        isFinished: item.status === 'finished',
                        isDeleted: item.status === 'deleted'}"
              v-for="item in getTodos"
              :key="getTodos.indexOf(item)"
              @click="selectCurrentTodo(item)">
              {{ item.title }}
              <div class="tags">
                <span v-show="item.status !== 'deleted'"
                      class="icon-checkmark2"
                      @click="toFinished(item)"></span>
                <span v-show="item.status === 'deleted'"
                      @click="toActive(item)">恢复</span>
                <span class="icon-trash"
                      @click="toDeleted(item)"></span>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import * as types from '../../vuex/types'
import store from '../../common/js/store'

export default {
  data () {
    return {
      newTitle: ''
    }
  },
  watch: {
    getTodos: {
      handler (getTodos) {
        store.save(getTodos)
      },
      deep: true
    }
  },
  computed: {
    getTodos () {
      if (this.$store.state.currentTag === 'all') {
        return this.$store.state.todolist
      }
      return this.$store.state.todolist.filter(todo => todo.status === this.$store.state.currentTag)
    },
    currentTodoId () {
      return this.$store.state.currentTodoId
    }
  },
  methods: {
    addTitle () {
      if (this.newTitle === '') {
        return
      }
      const time = new Date()
      const newTodo = {
        title: this.newTitle,
        status: 'active',
        content: '',
        time: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
      }
      this.$store.commit(types.ADD_NEW_TODO, newTodo)
      this.newTitle = ''
    },
    selectCurrentTodo (item) {
      this.$store.commit(types.DISPLAY_CONTENT, this.getTodos.indexOf(item))
    },
    toFinished (item) {
      if (item.status === 'finished') {
        item.status = 'active'
      } else {
        item.status = 'finished'
      }
    },
    toDeleted (item) {
      if (item.status !== 'deleted') {
        item.status = 'deleted'
      } else {
        this.getTodos.splice(this.getTodos.indexOf(item), 1)
        this.$store.state.currentTodoId = 0
      }
    },
    toActive (item) {
      item.status = 'active'
    }
  }
}
</script>
<style lang="stylus" scoped>
.center-wrapper
  flex 0
  display flex
  .all
    flex 0 0 400px
    width 400px
    border-right 1px solid rgb(230, 230, 230)
    .new-wrapper
      box-sizing border-box
      width 100%
      padding 30px
      .newTitle
        display inline-block
        box-sizing border-box
        padding 8px 6px
        width 100%
        font-size 14px
        line-height 18px
        border-radius 4px
        color rgb(130, 130, 130)
        border 1px solid rgb(230, 230, 230)
  .item
    display block
    padding 12px 30px
    box-sizing border-box
    position relative
    font-size 14px
    line-height 14px
    text-decoration none
    color rgb(70, 70, 70)
    &.isFinished
      color rgb(200, 200, 200)
    &.isDeleted
      color rgb(255, 160, 160)
    &.active
      background rgb(240, 240, 240)
    &:hover
      background rgb(240, 240, 240)
    .tags
      float right
      .icon-checkmark2
        margin-right 8px
        font-size 14px
        &:hover
          cursor pointer
      .icon-trash
        font-size 14px
        &:hover
          cursor pointer
</style>
