import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
  state: {
    messages: [],
  },
  mutations: {
    updateMessages(state, messages) {
        state.messages = messages
    },
    newMessage(state, message) {
        state.messages.push(message);
    }
  },
  actions: {
    async getMessages({commit}) {
        let messages = (await axios.get("http://localhost:3000/messages")).data
        commit('updateMessages', messages)

    }
  }
});

export default store;
