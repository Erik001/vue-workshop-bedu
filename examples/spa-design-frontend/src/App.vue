<template>
  <div id="app">
    <header-component></header-component>
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/header'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HeaderComponent
  }
}
</script>

<style lang="scss" src="./main.scss"></style>
