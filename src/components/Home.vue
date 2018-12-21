<template>
  <div>
    <search/>
    <navs/>
    <h1>{{msg}}</h1>
    
  </div>
</template>

<script>
import Search from "./common/search/search";
import Navs from "./common/navs/navs";
export default {
  name: 'Home',
  data () {
    return {
     msg:"主页home"
     
    }
  },
  components:{
    Search,
    Navs
  }
}
</script>

<style scoped lang="scss">
  
</style>
