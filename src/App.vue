<template>
  <div id="app">
    <router-view/>
    
    <tabbar/>
  </div>
</template>

<script>
import Tabbar from "./components/common/tabbar/tabbar";
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>
#app {
 
}
</style>
