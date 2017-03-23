<template>
  <div id="app">
    <v-header v-bind:sellers = "sellers"></v-header>
    <v-tab></v-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import tab from './components/tab/tab.vue'

const ERR_OK = 0
export default {
  components: {
    'v-header': header,
    'v-tab': tab
  },
  data () {
    return {
      sellers: {}
    }
  },
  created () {
    // GET /someUrl
    this.$http.get('/api/sellers').then(response => {
      // get body data
      response = response.body
      if (response.errno === ERR_OK) {
        this.sellers = response.data
      }
    }, response => {
      // error callback
    })
  }
}
</script>
<style>
</style>
