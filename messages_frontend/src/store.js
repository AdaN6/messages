import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
  state: {
    messages: [],
    // set token in state so even after web app refresh
    token : localStorage.getItem('token') || ''
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages;
    },
    newMessage(state, message) {
      state.messages.push(message);
    },
    auth(state, token) {
      state.token = token;
    },
    logout(state) {
      // modify the state
      state.token = '';
      // modify the local storage
      localStorage.clear('token');
    }
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
    async register({commit}, registerData) {
        // --> using userId
        // let user = (await axios.post("http://localhost:3000/register", registerData,
        // {
        //      headers: {
        //         Authorization: localStorage.getItem("token"),
        //     },
        // }
        // )).data;
        // console.log(user)
        // // store the ID inside localstorage
        // localStorage.setItem("token", user.id)
        // axios.defaults.headers.common["Authorization"] = user.id;

        // --> using token
        let token = (
          await axios.post("http://localhost:3000/register", registerData, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
        ).data;
        // store the ID inside localstorage
        localStorage.setItem("token", token);

        // add it as a headers
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth", token);
    },
    }
});

export default store;
