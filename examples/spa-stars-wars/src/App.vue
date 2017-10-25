<template>
  <div id="app">
    <header-partial></header-partial>
    <main class="sw-main">
      <router-view/>
    </main>
    <footer-partial></footer-partial>
  </div>
</template>

<script>
import HeaderPartial from '@/partials/header/header'
import FooterPartial from '@/partials/footer/footer'

export default {
  name: 'app',
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>

<style lang="scss" src="./_scss/main.scss"></style>
