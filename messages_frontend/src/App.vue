<template>
  <v-app>
    <v-toolbar app>
      <v-btn>Messages</v-btn>
      <v-spacer/>
      <v-btn>Login</v-btn>

    </v-toolbar>
    <v-content>
      <br />
      <NewMessage />
      <br />
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from './components/MessagesComponent.vue'
import NewMessage from './components/NewMessage.vue';

export default {
  name: 'App',

  components: {
    Messages, NewMessage
  },

  data: () => ({
    //
  }),
}
</script>
