<template>
<div class="header">
    <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
    </div>
    <x-header slot="header"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :left-options="leftOptions"
        :right-options="rightOptions"
        :title="title"
        :transition="headerTransition"
        >
      <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
    </x-header>
</div>
</template>
<script>
import { Loading } from 'vux'
import { TransferDom, XHeader} from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
    }
  },
  components: {
    Loading,
    XHeader
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
        showBack: this.route.path !== '/'
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
