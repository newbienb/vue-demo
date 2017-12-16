<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"/>
    </div>
    <div v-transfer-dom>
      <actionsheet
        :menus="menus"
        v-model="showMenu"
        @on-click-menu="changeLocale"
      />
    </div>
    <drawer
      :show.sync="drawerVisibility"
      :show-mode="showLeftMenuMode"
      :placement="showLeftMenuPlacement"
      :drawer-style="{'background-color':'#0288D1', width: '5em'}">
      <!-- drawer content -->
      <div slot="drawer">
        <div class="left-menu-bar">
          <x-img
            :src="defaultLogo"
            class="photo"
          />
        </div>
        <div class="left-sub-menu-bar">
          <router-link
            to="login"
            @click.native="drawerVisibility = false">
            <i
              class="fa fa-home"
              style="color:#ffffff;font-size:2.2em;position: relative;top:0.16em"
            />
          </router-link>
        </div>
        <div class="left-sub-menu-bar">
          <router-link to="login" @click.native="drawerVisibility = false">
            <i class="fa fa-envelope" style="color:#ffffff;font-size:2.0em;position: relative;top:0.18em"></i>
          </router-link>
        </div>
        <div class="left-sub-menu-bar">
          <a href="javascript:;" @click="drawerVisibility = false;showMenu = true">
            <i
              class="fa fa-language"
              slot="icon"
              style="color:#ffffff;font-size:2.1em;position: relative;top:0.2em"
            />
            </a>
        </div>
        <div class="left-sub-menu-bar-end">
          <router-link to="login" @click.native="drawerVisibility = false">
            <i class="fa fa-sun-o" style="color:#ffffff;font-size:2.1em;position: relative;top:0.2em"></i>
          </router-link>
        </div>
      </div>
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :title="title" :transition="headerTransition">
          <span v-if="route.path === '/' || route.path === '/home'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
          <span v-if="route.path !== '/edit'" slot="right">
            <x-icon @click.native="go('/edit')" type="edit" size="26" style="fill:#fff;position:relative;top:-1px;left:-3px;"></x-icon>
          </span>
        </x-header>
        <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="viewTransition" :css="!!direction">
          <router-view class="router-view"></router-view>
        </transition>
        <tabbar slot="bottom">
          <tabbar-item :link="{path:'/'}" :selected="route.path === '/' || route.path === '/home'">
            <i class="fa fa-home" style="font-size:28px;position: relative; top: 3px;" slot="icon"></i>
            <span slot="label">{{ $t('home') }}</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/edit'}" :selected="route.path === '/edit'">
            <i class="fa fa-user" style="font-size:28px;position: relative; top: 3px;" slot="icon"></i>
            <span slot="label"><span class="tabbar-component-selected">{{ $t('edit.home') }}</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'/login'}" :selected="route.path === '/login'">
            <i class="fa fa-user" style="font-size:28px;position: relative; top: 3px;" slot="icon"></i>
            <span slot="label"><span class="tabbar-component-selected">{{ $t('user.module') }}</span></span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>
<script>
import { Loading } from 'vux'
import Vue from 'vue'

import defaultLogo from '@/assets/defaultLogo'
import { TransferDom, XImg, XHeader, Group, Cell, Drawer, ViewBox, Tabbar, TabbarItem, ButtonTab, ButtonTabItem, Actionsheet, BusPlugin } from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      defaultLogo: defaultLogo,
      drawerVisibility: false,
      showLeftMenu: false,
      showMenu: false,
      showLeftMenuMode: 'push',
      showLeftMenuPlacement: 'left',
      showMenuLink: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      }
    }
  },
  methods: {
    changeLocale(locale) {
      Vue.i18n.set(locale);
    },
    go(name) {
      this.$router.push(name)
    }
  },
  components: {
    Loading,
    XHeader,
    Group,
    Cell,
    Drawer,
    ViewBox,
    Tabbar,
    TabbarItem,
    ButtonTab,
    ButtonTabItem,
    XImg,
    Actionsheet,
    BusPlugin
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
    viewTransition() {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    },
    title() {
      if (this.route.path === '/') return this.$t('home')
      if (this.route.path === '/home') return this.$t('home')
      if (this.route.path === '/edit') return this.$t('edit.home')
      if (this.route.path === '/login') return this.$t('user.module')
      return this.title ? `Demo/${this.title}` : 'Demo/~~'
    },
    headerTransition() {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    leftOptions() {
      return {
        showBack: this.route.path !== '/' && this.route.path !== '/home',
        backText: this.$t('back'),
        style:'font:#fff;',
      }
    },
    rightOptions() {
      return {
        showMore: true
      }
    },
    isShowBar() {
      return true
    },
  }
}

</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';

body {
  background-color: #fbf9fe;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.router-view {
  width: 100%;
  top: 46px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.menu-title {
  color: #888;
}

.photo {
  margin-top: 1em;
  width: 42px;
  height: 42px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}

.left-menu-bar {
  text-align: center;
  height: 5em;
}

.left-sub-menu-bar {
  text-align: center;
  height: 3em;
  border-top: 1px solid #D9D9D9;
  border-style: solid none none none;
}

.left-sub-menu-bar-end {
  text-align: center;
  height: 3em;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  border-style: solid none solid none;
}

</style>
