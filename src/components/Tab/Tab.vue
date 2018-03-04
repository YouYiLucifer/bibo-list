<template>
  <div class="left-wrapper">
    <div class="user">
      <a href="#" class="avatar-wrapper">
        <img src="./avatar.jpg" class="avatar">
      </a>
      <p class="name">Lucifer的APP</p>
    </div>
    <div class="menu">
      <ul>
        <li class="menu-item" @click="toggleTag('all')" :class="{ active: currentTag === 'all' }">
          <span class="icon-files-empty"></span>
          <span class="text">所有</span>
          <span class="count">{{ allCount }}</span>
        </li>
        <li class="menu-item" @click="toggleTag('finished')" :class="{ active: currentTag === 'finished' }">
          <span class="icon-checkmark2"></span>
          <span class="text">已完成</span>
          <span class="count">{{ activeCount }}</span>
        </li>
        <li class="menu-item" @click="toggleTag('deleted')" :class="{ active: currentTag === 'deleted' }">
          <span class="icon-trash"></span>
          <span class="text">垃圾桶</span>
          <span class="count">{{ deletedCount }}</span>
        </li>
      </ul>
    </div>
    <div class="vip">
      <a href="#" class="upgrade">升级到高级账户</a>
    </div>
  </div>
</template>
<script>
import * as types from '../../vuex/types'

export default {
  methods: {
    toggleTag (tagName) {
      this.$store.commit(types.TOGGLE_TAG, tagName)
    }
  },
  computed: {
    currentTag () {
      return this.$store.state.currentTag
    },
    allCount () {
      return this.$store.state.todolist.length
    },
    activeCount () {
      return this.$store.state.todolist.filter(todo => todo.status === 'active').length
    },
    deletedCount () {
      return this.$store.state.todolist.filter(todo => todo.status === 'deleted').length
    }
  }
}
</script>
<style lang="stylus" scoped>
.left-wrapper
  flex 0 0 260px
  width 260px
  background rgb(80, 130, 225)
  display flex
  flex-direction column
  height 100vh
  .user
    box-sizing border-box
    padding 16px 16px
    font-size 0
    color #fff
    border-bottom 1px solid rgb(62, 116, 216)
    .avatar-wrapper
      display inline-block
      width 40px
      height 40px
      margin-right 10px
      .avatar
        width 40px
        height 40px
        border-radius 50%
    .name
      display inline-block
      vertical-align top
      line-height 40px
      font-size 18px
      font-weight 500
  .menu
    flex 1 0 auto
    border-bottom 1px solid rgb(62, 116, 216)
    .menu-item
      display block
      padding 16px 20px
      box-sizing border-box
      position relative
      text-decoration none
      color #fff
      &.active
        background rgb(62, 116, 216)
      &:hover
        background rgb(62, 116, 216)
        cursor pointer
      .icon-files-empty, .icon-checkmark2, .icon-trash
        display inline-block
        margin-right 6px
        vertical-align top
        font-size 16px
      .text
        display inline-block
        vertical-align middle
        font-size 14px
      .count
        display inline-block
        position absolute
        right 20px
        vertical-align middle
        font-size 14px
  .vip
    width 100%
    height 60px
    .upgrade
      display block
      line-height 60px
      text-align center
      color #fff
</style>
