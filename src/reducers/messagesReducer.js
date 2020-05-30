export default function(state, action) {
  if (state === undefined) {
    return []

  }
  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload.messages;
    case "CREATE_MESSAGE":
      return [...state, action.payload];
    default:
      return state;
  }
}
