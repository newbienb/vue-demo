<template>
<div class="header">
    <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
    </div>
    <drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showLeftMenuMode"
    :placement="showLeftMenuPlacement"
    :drawer-style="{'background-color':'#35495e', width: '200px'}">

      <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo(beta)" style="margin-top:20px;">
          <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
            </cell>
        </group>
      </div>


    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <x-header slot="header"
            style="width:100%;position:absolute;left:0;top:0;z-index:100;"
            :left-options="leftOptions"
            :right-options="rightOptions"
            :title="title"
            :transition="headerTransition"
            >
          <span v-if="route.path === '/' || route.path === '/home'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
        </x-header>
    </view-box>
</drawer>
</div>
</template>
<script>
import { Loading } from 'vux'
import { TransferDom, XHeader,Group, Cell,Drawer,ViewBox} from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
        drawerVisibility: false,
        showLeftMenu: false,
        showLeftMenuMode: 'push',
        showLeftMenuPlacement: 'left',
        menus: {
            'language.noop': '<span class="menu-title">Language</span>',
            'zh-CN': '中文',
            'en': 'English'
        }
    }
  },
  components: {
    Loading,
    XHeader,
    Group,
    Cell,
    Drawer,
    ViewBox
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
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    },
    title () {
      if (this.route.path === '/') return 'Home'
      if (this.route.path === '/home') return 'Home'
      return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
    },
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    leftOptions () {
      return {
        showBack: this.route.path !== '/' && this.route.path !== '/home'
      }
    },
    rightOptions () {
      return {
        showMore: true
      }
    },
    isShowBar () {
        return true
    },

  }
}

</script>
