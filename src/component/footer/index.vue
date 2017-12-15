<template>
  <div class="footer">
    <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
      <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
        <!-- <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;"> -->
        <i class="fa fa-home" style="font-size:28px;position: relative; top: 3px;" slot="icon"></i>
        <!-- &#xe637;</span> -->
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/login'}" :selected="route.path !== '/'" >
        <i class="fa fa-user" style="font-size:28px;position: relative; top: 3px;"  slot="icon"></i>
        <span slot="label"><span class="tabbar-component-selected">登陆</span></span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>

import { TransferDom, Tabbar, TabbarItem} from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),

  }
}

</script>

<style lang="less">
.tabbar-bottom-component {
    font-size:30px;
}


</style>
