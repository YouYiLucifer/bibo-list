<template>
  <div class="right-wrapper">
    <input ref="input"
           class="newTitle"
           type="text"
           placeholder="标题..."
           :value="titleTarget"
           style="outline: none">
    <div class="editor"
         placeholder="开始你的清单..."
         contenteditable="true"
         style="outline: none; cursor: text">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array
    },
    titleTarget: {
      type: String
    }
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    changeTitle () {
      if (this.$refs.input.value !== this.titles[0].label) {
        this.$emit('changeReverse', this.$refs.input.value)
      }
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
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
    &:empty:before
      content attr(placeholder)
      font-size 16px
      color rgb(200, 200, 200)
    &:focus
      content none
      color rgb(130, 130, 130)
</style>
