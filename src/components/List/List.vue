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
              :class="{finished: item.isFinished}"
              v-for="item in getTodos"
              :key="item.id"
              @click="selectCurrentTodo(item)">
              {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import * as types from '../../vuex/types'

export default {
  data () {
    return {
      newTitle: '',
      items: []
    }
  },
  computed: {
    getTodos () {
      if (this.$store.state.currentTag === 'all') {
        return this.$store.state.todolist
      }
      return this.$store.state.todolist.filter(todo => todo.status === this.$store.state.currentTag)
    }
  },
  methods: {
    addTitle () {
      const newTodo = {id: this.$store.state.todolist.length, title: this.newTitle, status: 'active', content: ''}
      this.$store.commit(types.ADD_NEW_TODO, newTodo)
    },
    selectCurrentTodo (item) {
      this.$store.commit(types.DISPLAY_CONTENT, item.id)
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
    // &.active
    //   background rgb(230, 230, 230)
    &:hover
      background rgb(230, 230, 230)
    .title-item
      background none
      outline none
      width 100%
      .icon-trash
        position absolute
        right 30px
</style>
