<template>
  <div id="navs">
    <div class="cent">
        <div class="navs">
            <van-tabs v-model="active">
                <van-tab v-for="index in 8" :title="'标签 ' + index">
                    内容 {{ index }}
                </van-tab>
            </van-tabs>
        </div>
        <div class="more" @click="isNavShow=!isNavShow">
            <i class="fa fa-chevron-down"></i>
        </div>
    </div>
    <nav-list :isNavShow="isNavShow" @close="isNavShow=false"></nav-list>
  </div>
</template>

<script>
import axios from "axios";
import NavList from "./navlist";
import "animate.css";
import router from "../../../router/index.js";
export default {
  name: 'Navs',
  data () {
    return {
        active:0,
        isNavShow:false
    }
  },
  components:{
    NavList
  },
  methods:{
      closeNavList(){
          this.isNavShow=false
      },
      getNavLists(){
            axios.get("/pr/classList?appkey=a9ab506b778bb9db25b746279f5fb4c7").then((res) => {
                console.log(res.data)
            })
      }
  },
    created(){
        this.getNavLists();
        router.beforeEach((to, from, next)=>{
            this.closeNavList();
            next();
        });
        
    }
}
</script>

<style scoped lang="scss">
    #navs{
        .cent{
            height: 0.4rem;
            background: yellow;
            margin: 0 0.4rem 0 0;
            position: relative;
            z-index: 1;

            .navs{
                width: 100%;
                height: 100%;
                overflow: hidden;

            }
            .navs /deep/.van-tabs--line .van-tabs__wrap {
                    height: 40px !important;
                    .van-tabs__line{
                        background-color: #FC3F78;
                    }
                    .van-tab--active {
                        font-weight: 500;
                        color: #FC3F78;
                    }
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
    }
    
</style>
