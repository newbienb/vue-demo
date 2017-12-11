import {UserResource,RootResource} from './resources'

export default {
  localLogin: function (data) {
    return RootResource.save({func:'login'},data)
  }
}