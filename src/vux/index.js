import Vue from 'vue'
import objectAssign from 'object-assign'

const vuxLocales = require('json-loader!yaml-loader!@/vux/locales/all.yml')

const finalLocales = {
    'en': objectAssign(vuxLocales['en']),
    'zh-CN': objectAssign(vuxLocales['zh-CN'])
}

for (let i in finalLocales) {
    Vue.i18n.add(i, finalLocales[i])
}

import {LocalePlugin, DevicePlugin, ConfigPlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin} from 'vux'

Vue.use(LocalePlugin)
Vue.i18n.set('zh-CN')

// global VUX config
Vue.use(ConfigPlugin, {
    $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
