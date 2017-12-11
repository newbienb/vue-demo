<template>
  <div >
  <header class="bar bar-nav">
    <h1 class="title">{{ $t("title") }}</h1>
  </header>
  <div class="content">
    <div class="page-login">
      <div class="list-block inset text-center">
        <h3>{{ $t("login") }}</h3>
        <ul>
          <!-- Text inputs -->
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-input">
                  <input type="text" :placeholder="$t('user.username')">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-email"></i></div>
              <div class="item-inner">
                <div class="item-input">
                  <input type="password" :placeholder="$t('user.password')">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block">
        <p><a class="button button-big button-fill external" href='home' data-transition='fade'>{{ $t("login") }}</a>
        </p>
        <div class="leader"></div>
      </div>
    </div>
 </div>

 <nav class="bar bar-tab">
  <a class="tab-item active" href="#">
    <span class="icon icon-home"></span>
    <span class="tab-label">Edit</span>
  </a>
  <a class="tab-item" href="#">
    <span class="icon icon-me"></span>
    <span class="tab-label">+</span>
    <span class="badge">2</span>
  </a>
  <a class="tab-item" href="#">
    <span class="icon icon-me"></span>
    <span class="tab-label">Document</span>
    <span class="badge">3</span>
  </a>
</nav>
</div>
</template>


<script>

export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: '',
        captcha: ''
      }
    }
  },
  methods: {
    // ...mapActions([
    //   'getSnsLogins',
    //   'getCaptchaUrl',
    //   'localLogin'
    // ]),
    login() {
      this.$validator.validateAll().then(result => {
        console.log(this.user)
      }).catch(() => {
        //提示错误
      })
    }
  }
}
</script>

<style>
  .content {
    color: #999;
  }
  .button.button-fill.button-big {
    line-height: 2.0rem;
    height: 2.0rem;
  }
  .list-block {
    margin: .75rem;
  }
  .content-block {
    margin: .75rem 0;
  }
  .signup a {
    color: #999;
  }
</style>