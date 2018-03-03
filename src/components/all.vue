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
              v-for="(item, index) in items"
              :key="index"
              @click="toggleFinished(item)">
            <router-link to="/all/detail">
              <div class="title-item" contenteditable="true" ref="item">
                {{ item.label }}
                <span class="icon-trash" @click="del"></span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <keep-alive>
      <router-view :titles="items"
                   @changeReverse="changeReverse"
                   :titleTarget="titleTarget"
                   ref="detail"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import detail from './detail'
import store from '../common/js/store'

export default {
  data () {
    return {
      items: store.fetch(),
      newTitle: '',
      titleTarget: ''
    }
  },
  watch: {
    items: {
      handler (items) {
        store.save(items)
      },
      deep: true
    }
  },
  methods: {
    changeReverse (v) {
      this.items[0].label = v
    },
    addTitle () {
      this.items.push({
        label: this.newTitle,
        isFinished: false
      })
      this.newTitle = ''
    },
    toggleFinished (item) {
      this.titleTarget = item.label
    },
    del (index) {
      this.items.splice(index, 1)
      this.titleTarget = ''
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
    .finished
      text-decoration underline
    a
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
