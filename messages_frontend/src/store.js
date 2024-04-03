import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
  state: {
    messages: [],
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages;
    },
    newMessage(state, message) {
      state.messages.push(message);
    },
  },
  actions: {
    async getMessages({ commit }) {
      let messages = (await axios.get("http://localhost:3000/messages")).data;
      commit("updateMessages", messages);
    },
    async newMessage({ commit }, messageBody) {
      let msg = (
        await axios.post("http://localhost:3000/messages", {
          message: messageBody,
        })
      ).data;
      commit("newMessage", msg.message);
    },
    async getSingleMessage(_, id) {
      try {
        const response = await axios.get(
          `http://localhost:3000/messages/${id}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching single message:", error);
        throw error;
      }
    },
    async register(_, registerData) {
        let user = (await axios.post("http://localhost:3000/register", registerData)).data;
        console.log(user)
        // store the ID inside localstorage
        localStorage.setItem("token", user.id)
    },
    }
});

export default store;
