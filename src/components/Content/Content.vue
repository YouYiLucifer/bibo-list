<template>
  <div class="right-wrapper">
    <input ref="input"
           class="newTitle"
           type="text"
           placeholder="标题..."
           :value="titleTarget"
           style="outline: none">
    <input class="editor"
              ref="content"
              placeholder="开始你的清单..."
              style="outline: none; cursor: text"
              :value="contentTarget">
  </div>
</template>
<script>
export default {
  computed: {
    titleTarget () {
      return this.$store.state.todolist[this.$store.state.currentTodoId].title
    },
    contentTarget () {
      return this.$store.state.todolist[this.$store.state.currentTodoId].content
    }
  },
  menthods: {
    changeContent (e) {
      console.log(e)
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
  flex-direction column
  .newTitle
    box-sizing border-box
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
    border 0
    &:empty:before
      content attr(placeholder)
      font-size 16px
      color rgb(200, 200, 200)
    &:focus
      content none
      color rgb(130, 130, 130)
</style>
