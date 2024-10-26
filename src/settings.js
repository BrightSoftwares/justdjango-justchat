let DEBUG = true;
let HOST_URL = "https://justdjango-chat.herokuapp.com";
let SOCKET_URL = "wss://justdjango-chat.herokuapp.com";
if (DEBUG) {
  HOST_URL = "http://127.0.0.1:8004";
  SOCKET_URL = "ws://127.0.0.1:8004";
}

export { HOST_URL, SOCKET_URL };
