<template>
  <div id="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item v-for="nav in navs" :id="nav.id" :key="nav.id">
        <router-link
          :to="{name: nav.name}">
          <i class="fa" :class="['fa-' + nav.icon]"></i>
          <br/>
          {{nav.title}}
        </router-link>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
     navs:[
        {
            id:"1",
            name:"home",
            title:"首页",
            icon:"home"
        },
        {
          id:"2",
          name:"sales",
          title:"9.9包邮",
          icon:"shopping-bag"
        },
        {
            id:"3",
            name:"list",
            title:"分类",
            icon:"bars"
        }
     ],
     selected:"1"
    }
  }
}
</script>

<style scoped lang="scss">
  .mint-tabbar .mint-tab-item a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: rgb(102, 102, 102);
  }
  .mint-tabbar > .mint-tab-item.is-selected a{
      color: rgb(253, 87, 92);
  }
</style>
