<template>
  <div id="app">
    <Tab />
    <List />
    <Content />
  </div>
</template>

<script>
import Tab from './components/Tab/Tab'
import List from './components/List/List'
import Content from './components/Content/Content'

export default {
  name: 'App',
  components: {
    Tab,
    List,
    Content
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  display flex
  width 100vw
  height 100vh
</style>
