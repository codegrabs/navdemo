export default function showSplash(state = 1, action) {
    switch (action.type) {
      case 'off_splash':
        return 0
      case 'on_splash':
        return 1
      default:
        return state
    }
  }