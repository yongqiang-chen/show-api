<template>
  <div>
    <div class="header">
        <div class="search">
            <div class="search-cont">
                <i class="fa fa-pencil"></i>
                <input type="text" placeholder="输入您需要的商品名称">
            </div>
        </div>
        <div class="search-icon">
            <i class="fa fa-search"></i>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
     msg:"搜索search"
     
    }
  }
}
</script>

<style scoped lang="scss">
    .header{
        width: 100%;
        height: 0.45rem;
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        border-bottom-color: transparent;
        display: flex;
        .search{
            padding-top: 0.08rem;
            margin: 0 0.05rem 0 0.1rem;
            text-align: center;
            font-size: 0.16rem;
            color: #666;
            position: relative;
            z-index: 2;
            zoom: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .search-cont{
                background: #fff;
                width: 2.7rem;
                height: 0.3rem;
                border-radius: 0.2rem;
                line-height: 0.28rem;
                font-size: 0.14rem;
                color: #ccc;
                text-align: left;
                text-indent: 0.1rem;
                position: relative;
                z-index: 1;
                zoom: 1;
                input{
                    border: none;
                    width: 2.2rem;
                    height: 0.23rem;
                    color: #ccc;
                    padding-left: 0.05rem;
                }
            }
        }
        .search-icon{
            padding-top: 0.08rem;
            width: 0.3rem;
            height: 0.38rem;
            i{
                display: inline-block;
                width: 100%;
                height: 100%;
                font-size: 0.23rem;
                text-align: center;
                line-height: 0.27rem;
                color: #fff;
            }
        }
    }
</style>
