<template>
  <div id="navlist">
    <!-- <h1>{{msg}}</h1> -->
    <transition
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut">
        <div class="all_tab" v-if="isNavShow">
            <div class="tab-head">
                <div class="tab-title">选择分类</div>
                <div class="whole" @click="$emit('close')">
                    <i class="fa fa-chevron-up"></i>
                </div>
            </div>
            <div class="tab-main">
                <div class="content">
                    <ul>
                        <li v-for="item in navlists" :key="item.id">
                            <a :href="item.url">
                                <i class="iconfont">
                                    <img :src="item.imgUrl" alt="">
                                </i>
                                <span>{{item.title}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'NavList',
  props:["isNavShow"],
  data () {
    return {
     msg:"选择分类navlist",
     navlists:[
        {
            id:"1",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"2",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
        {
            id:"3",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"4",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
         {
            id:"5",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"6",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
        {
            id:"7",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"8",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
         {
            id:"9",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"10",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
        {
            id:"11",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"12",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
        {
            id:"13",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"14",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
         {
            id:"15",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"16",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
        {
            id:"17",
            url:"/",
            title:"精选",
            imgUrl:"/static/images/fenlei.png"
        },
        {
            id:"18",
            url:"/",
            title:"女装",
            imgUrl:"/static/images/shouye.png"
        },
     ]
     
    }
  },
  components:{
    
  }
}
</script>

<style scoped lang="scss">
    #navlist{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 499;
        color: #333;
        .all_tab{
            position: absolute;
		    top: 0.45rem;
		    right: 0;
		    left: 0;
		    height: 85vh;
            background: #fff;
            display: flex;
            flex-direction: column;
            .tab-head{
                width: 100%;
                height: 0.4rem;
                border-bottom: solid 1px #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .tab-title{
                    margin-left: 0.25rem;
                }
                .whole{
                    width: 0.4rem;
                    height: 0.4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            .tab-main{
                flex: 1;
                padding-top: 0.3rem;
                overflow: hidden;
                .content{
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                    ul{
                        margin: 0 0.14rem;
                        li{
                            margin-bottom: 0.28rem;
                            width: 25%;
                            float: left;
                            text-align: center;
                            .iconfont{
                                display: block;
                                margin: auto;
                                width: 0.49rem;
                                height: 0.49rem;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            span{
                                font-size: 0.14rem;
                                line-height: 0.25rem;
                                display: block;
                                padding-top: 0.07rem;
                                color: #666;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
