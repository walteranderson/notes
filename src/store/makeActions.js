export const makeActionCreator = (type, ...argNames) => {
  let action = { type }
  return function (...args) {
    const payload = {}
    argNames.forEach((arg, index) => {
      payload[argNames[index]] = args[index]
    })

    if (argNames.length) {
      action.payload = payload
    }

    return action
  }
}

export const makeAction = (type, payload) => {
  return {
    type,
    payload
  }
}
