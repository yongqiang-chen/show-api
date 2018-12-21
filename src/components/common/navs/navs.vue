<template>
  <div>
    <div class="cent">
        <div class="ant">
            <a href="#" class="active">精选</a>
        </div>
        <div class="navs">
            
        </div>
        <div class="more">
            <i class="fa fa-chevron-down"></i>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Navs',
  data () {
    return {
     
     
    }
  },
  components:{
    
  }
}
</script>

<style scoped lang="scss">
    .cent{
        height: 0.4rem;
        background: yellow;
        margin: 0 0.4rem 0 0.5rem;
        position: relative;
        z-index: 1;
        .ant{
            position: absolute;
            top:0;
            left: -0.5rem;
            zoom: 1;
            width: 0.5rem;
            height: 0.4rem;
            background: #fff;
            text-align: center;
            line-height: 0.4rem;
            z-index: 54;
            a {
                display: block;
                z-index: 1;
                zoom: 1;
            }
        }
        .active{
            color: #FC3F78;
            border-bottom: 0.02rem solid #FC3F78;
        }
        .navs{
            width: 100%;
            height: 100%;
            overflow: hidden;
            
        }
        .more{
            position:absolute;
            right: -0.4rem;
            top: 0;
            height: 0.4rem;
            width: 0.4rem;
            background: #fff;
            text-align: center;
            line-height: 0.4rem;
            z-index: 60;
            zoom: 1;
            color: #999;
        }
    }
</style>
