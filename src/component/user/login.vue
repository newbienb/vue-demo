<template>
  <div>
    <box> &nbsp; </box>
    <box gap="10px 10px">
      <group>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <x-icon type="iphone"
                    slot="label"
                    class="input-logo"></x-icon>
          </div>
          <div class="weui-cell__bd weui-cell__primary">
            <input v-model="user.username"
                   v-validate="'required|min:6'"
                   name="username"
                   class="weui-input"
                   type="text"
                   :placeholder="$t('user.tip.username')">
          </div>
          <div class="weui-cell__ft">
            <i v-show="errors.has('username')"
               @click="showErrorMsg('username')"
               class="vux-input-icon weui-icon weui-icon-warn" />
            <i v-show="showSuccessFlag && !errors.has('username')"
               class="vux-input-icon weui-icon weui-icon-success" />
          </div>
        </div>
      </group>
      <group>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <x-icon type="locked"
                    slot="label"
                    class="input-logo"></x-icon>
          </div>
          <div class="weui-cell__bd weui-cell__primary">
            <input v-model="user.password"
                   v-validate="'required|min:6'"
                   name="password"
                   class="weui-input"
                   type="password"
                   :placeholder="$t('user.tip.password')">
          </div>
          <div class="weui-cell__ft">
            <i v-show="errors.has('password')"
               @click="showErrorMsg('password')"
               class="vux-input-icon weui-icon weui-icon-warn" />
            <i v-show="showSuccessFlag && !errors.has('password')"
               class="vux-input-icon weui-icon weui-icon-success" />
          </div>
        </div>
      </group>
    </box>
    <box gap="30px 30px">
      <x-button class="custom-submit-button"
                @click.native="login">{{ $t('login') }}</x-button>
    </box>
    <toast v-model="showErrorFlag"
           type="text"
           width="auto"
           position="middle"
           :time="800">{{ customMsg }}</toast>
  </div>
</template>

<script>
import { Toast, ViewBox, Group, XInput, XButton, Divider, Box } from 'vux';
import { Validator } from 'vee-validate';
import api from '@/api';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Toast,
    ViewBox,
    Group,
    XInput,
    XButton,
    Divider,
    Box
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        isLogin: false
      },
      showErrorFlag: false,
      showSuccessFlag: false,
      customMsg: ''
    }
  },
  methods: {
    ...mapActions('login', [
          'userLogin'
    ]),
    login: function() {
      this.$validator.validateAll()
      const vm = this
      if (!this.$validator.errors.count()) {
        this.userLogin(this.user).then(function() {
          vm.$router.push('/user')
        })
      }
    },
    showErrorMsg: function(value) {
      const msgTip = value === 'username' ? this.$t('user.tip.user.msg') : this.$t('user.tip.password.msg')
      this.showErrorFlag = true
      this.showSuccessFlag = true
      this.customMsg = msgTip
    }
  },
  computed: {
    ...mapState({
          token: state => state.login.token
    })
  },
  mounted: function() {
    if (this.token) {
      this.$router.push('/user')
    }
  }
}
</script>

<style lang="less">
.input-logo {
  width: 24px;
  height: 24px;
  fill: @tabbar-text-active-color;
  padding-right: 10px;
  display: block;
}

.input-logo-lock {
  width: 24px;
  height: 24px;
  fill: @tabbar-text-active-color;
  padding-right: 12px;
  display: block;
}

.custom-submit-button {
  border-radius: 99px !important;
  background-color: @tabbar-text-active-color  !important;
  color: #FFFFFF !important;
}

.weui-input {
  width: 100%;
  border: 0;
  outline: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  height: 1.41176471em;
  line-height: 1.41176471;
}
</style>
