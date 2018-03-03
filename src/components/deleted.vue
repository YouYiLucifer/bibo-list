<template>
  <div class="center-wrapper">
    <div class="deleted">
      <div class="new-wrapper">
        <input class="new"
               type="text"
               placeholder="标题..."
               v-model="newTitle"
               style="outline: none">
      </div>
      <div class="menu">
        <ul>
          <li class="item">
            <router-link to="/all/detail">d-one</router-link>
          </li>
          <li class="item">
            <router-link to="/all/detail2">d-two</router-link>
          </li>
        </ul>
      </div>
    </div>
    <keep-alive>
      <router-view :newTitle="newTitle" @changeReverse="changeReverse"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import detail from './detail'

export default {
  data () {
    return {
      newTitle: ''
    }
  },
  methods: {
    changeReverse (v) {
      this.newTitle = v
    }
  },
  comments: {
    detail
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.center-wrapper
  flex 1
  display flex
  .deleted
    flex 0 0 400px
    width 400px
    border-right 1px solid rgb(230, 230, 230)
    .new-wrapper
      box-sizing border-box
      width 100%
      padding 30px
      .new
        display inline-block
        box-sizing border-box
        padding 8px 6px
        width 100%
        font-size 14px
        line-height 18px
        border-radius 4px
        color rgb(130, 130, 130)
        border 1px solid rgb(230, 230, 230)
    a
      display block
      padding 12px 30px
      box-sizing border-box
      position relative
      font-size 14px
      line-height 14px
      text-decoration none
      color rgb(70, 70, 70)
      &.active
        background rgb(230, 230, 230)
      &:hover
        background rgb(230, 230, 230)
</style>
