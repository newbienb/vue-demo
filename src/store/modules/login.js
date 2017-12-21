import {USER_SIGNIN, USER_SIGNOUT,USER_TOKEN_KEY} from '../types'
import api from '@/api';
import Vue from 'vue';

var isLoggedIn = function () {
    var token = localStorage.getItem(USER_TOKEN_KEY);
    if (token) {
        return token;
    }
    else {
        return false;
    }
};

const actions = {
    userLogin({commit}, data) {
        return api.localLogin(data).then(function (response) {
                console.log(response)
                if (response.data.id) {
                    commit(USER_SIGNIN, response.data.id);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    userLogout({commit}, data) {
        return api.localLogout(data).then(function (response) {
                commit(USER_SIGNOUT);
            })
            .catch(function (error) {
                commit(USER_SIGNOUT);
                console.log(error);
            });
    }
}

const state = {
    token: isLoggedIn() || null
};

const mutations = {
    [USER_SIGNIN](state, user) {
        localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(user));
        state.token = user;
    },
    [USER_SIGNOUT](state) {
        localStorage.removeItem(USER_TOKEN_KEY);
        state.token = null;
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}
