import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '@/config'
import {USER_TOKEN_KEY} from '@/store/types'

// import { getCookie,signOut,isLogin } from '../utils/authService'

Vue.use(VueResource)
import {USER_SIGNOUT} from '@/store/types'
// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
    // 这里对请求体进行处理
    request.headers = request.headers || {}

    next((response) => {
        console.log(response)
        // 这里可以对响应的结果进行处理
        if (response.status === 401) {
            localStorage.removeItem(USER_TOKEN_KEY);
            window.location.pathname = '/login'
        }
    })
})

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
export const RootResource = Vue.resource(API_ROOT + '{func}')
