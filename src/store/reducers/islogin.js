export default function islogin(state = 0, action) {
    switch (action.type) {
      case 'make_login':
        return 1
      case 'make_logout':
        return action.value
      default:
        return state
    }
  }