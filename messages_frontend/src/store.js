import { createStore } from "vuex";

const store = createStore({
  state: {
    messages: [],
  },
  mutations: {
    posts(state, messages) {
        state.messages = messages
    }
  }
});

export default store;
