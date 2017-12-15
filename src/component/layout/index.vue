<template>
  <div>
    <MyHeader></MyHeader>
    <drawer>
        <view-box body-padding-top="46px" body-padding-bottom="55px">
            <router-view></router-view>
        </view-box>
    </drawer>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import logoSrc from '@/assets/logo.png';
import MyHeader from '@/component/header'
import MyFooter from '@/component/footer'
import { ViewBox, Drawer} from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome',
      imageSrc :{
        logoSrc : logoSrc
      }
    }
  },
  components: {
    MyHeader,
    MyFooter,
    ViewBox,
    Drawer
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
body {
  background-color: #fbf9fe;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

</style>
