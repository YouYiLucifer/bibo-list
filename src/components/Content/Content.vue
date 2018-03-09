<template>
  <div class="right-wrapper">
    <div class="item-wrapper" v-show="this.$store.state.todolist.length">
      <input ref="title"
            class="newTitle"
            type="text"
            placeholder="标题..."
            :value="titleTarget"
            style="outline: none"
            @change="changeTitle">
      <textarea class="editor"
                ref="content"
                placeholder="开始你的清单..."
                style="outline: none; cursor: text"
                :value="contentTarget"
                @change="changeContent"></textarea>
    </div>
    <div class="no-title" v-show="!this.$store.state.todolist.length">
      <span>创建一个新清单</span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    titleTarget () {
      if (!this.$store.state.todolist.length) {
        return ''
      } else if (this.$store.state.todolist.length > 0 && this.$store.state.currentTodoId >= 0) {
        return this.$store.state.todolist[this.$store.state.currentTodoId].title
      } else {
        return this.$store.state.todolist[0].title
      }
    },
    contentTarget () {
      if (!this.$store.state.todolist.length) {
        return ''
      } else if (this.$store.state.todolist.length > 0 && this.$store.state.currentTodoId >= 0) {
        return this.$store.state.todolist[this.$store.state.currentTodoId].content
      } else {
        return this.$store.state.todolist[0].content
      }
    }
  },
  methods: {
    changeTitle () {
      this.$store.state.todolist[this.$store.state.currentTodoId].title = this.$refs.title.value
    },
    changeContent () {
      this.$store.state.todolist[this.$store.state.currentTodoId].content = this.$refs.content.value
    }
  }
}
</script>
<style lang="stylus" scoped>
.right-wrapper
  flex 1
  color #ccc
  font-size 20px
  display flex
  .item-wrapper
    flex 1
    display flex
    flex-direction column
    .newTitle
      box-sizing border-box
      display block
      width 100%
      padding 36px 30px 20px
      color rgb(130, 130, 130)
      border-bottom 1px solid rgb(230, 230, 230)
    .editor
      flex 1
      box-sizing border-box
      padding 20px 30px
      width 100%
      height 100%
      font-size 16px
      border 0
      color rgb(130, 130, 130)
      &:focus
        content none
        color rgb(70, 70, 70)
  .no-title
    display flex
    width 100%
    height 100%
    span
      margin auto
      font-size 30px
      color rgb(200, 200, 200)
</style>
