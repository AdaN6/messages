<template>
  <v-app>
    <v-content>
      <NewMessage />
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
