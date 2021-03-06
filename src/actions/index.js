export function setMessages(selectedChannel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${selectedChannel}/messages`)
    .then(response => response.json());

  return {
    type: 'SET_MESSAGES',
    payload: promise
  }
}

export function createMessage(channel, author, content) {
  const body = { author: author, content: content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  }
}

export function selectChannel(selectedChannel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: selectedChannel
  }
}
