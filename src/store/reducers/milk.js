export default function milk(state = 0, action) {
    switch (action.type) {
      case 'add_milk':
        return state + 1
      case 'remove_milk':
        return state - 1
      default:
        return state
    }
  }