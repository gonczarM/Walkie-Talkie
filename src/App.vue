<template>
  <div id="app">
    <header>
      <h1>Waddup Jeff</h1>
      <p>Lets go fucking crazy</p>
    </header>
    <router-view></router-view>
  </div>
</template>
<!-- <template>
  <div class="section">
    <h2>Home.vue</h2>
  </div>
</template> -->

<script>
import { auth, db, storage } from './firebase'
console.log(auth, db, storage)

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
