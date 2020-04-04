import { combineReducers } from "redux";
import milk from "./milk";
import islogin from "./islogin";
import showSplash from "./showSplash";

  function curd(state = 0, action) {
    switch (action.type) {
      case 'add_curd':
        return state + action.value
      case 'remove_curd':
        return state - 1
    case 'clean_curd':
            return 0
      default:
        return state
    }
  }

  export default combineReducers({
    milk,//add_milk,remove_milk
    curd,//add_milk,remove_milk
    islogin,
    showSplash
  })