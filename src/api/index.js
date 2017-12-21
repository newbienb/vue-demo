import {UserResource,RootResource} from './resource'

export default {
  localLogin: function (data) {
    return RootResource.save({func:'login'},data)
  },
  localLogout: function (data) {
    return RootResource.save({func:'logout'},data)
  }
}