<template>
  <div>
    hello world
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      AAA: 'AAA'
    }
  },
  computed: {
    ...mapState({
          token: state => state.login.token
    })
  },
  mounted: function() {
    if (!this.token) {
      this.$router.push('/login')
    }
  }
}
</script>
