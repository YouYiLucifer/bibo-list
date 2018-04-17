<template>
  <div class="center-wrapper">
    <div class="all">
      <div class="new-wrapper">
        <input class="newTitle"
               type="text"
               placeholder="添加任务，回车即保存"
               v-model.trim="newTitle"
               style="outline: none"
               @keyup.enter="addTitle">
      </div>
      <div v-if="this.$store.state.todolist.length">
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
                <span :class="{ icon_unchecked: item.status === 'active',
                                icon_checked: item.status === 'finished',
                                icon_drawer: item.status === 'deleted'}"
                      @click="toFinished(item)"></span>
                <span class="icon_trash"
                      @click="toDeleted(item)"></span>
              </div>
          </li>
        </ul>
      </div>
      <div class="no-title" v-if="!this.$store.state.todolist.length">
        <div class="wrapper">
          <span class="icon_drawer"></span>
        </div>
        <span class="text">还没有任务哦～</span>
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
      handler () {
        store.save(this.$store.state.todolist)
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
      if (item.status === 'active') {
        item.status = 'finished'
      } else {
        item.status = 'active'
      }
    },
    toDeleted (item) {
      if (item.status !== 'deleted') {
        item.status = 'deleted'
      } else {
        this.$store.state.todolist.splice(this.$store.state.todolist.indexOf(item), 1)
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
    display flex
    flex-direction column
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
      padding 12px 30px
      // position relative
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
        font-size 14px
        .icon_unchecked, .icon_checked, .icon_drawer
          margin-right 8px
          &:hover
            cursor pointer
        .icon-trash
          &:hover
            cursor pointer
    .no-title
      width 100%
      height 100%
      .wrapper
        margin 60px auto 0
        width 200px
        height 200px
        border-radius 50%
        background rgb(80, 130, 225)
        .icon_drawer
          display block
          text-align center
          line-height 160px
          font-size 100px
          color #fff
      .text
        display block
        margin 40px auto 0
        font-size 30px
        text-align center
        color rgb(200, 200, 200)
</style>
