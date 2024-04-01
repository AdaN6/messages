<template>
  <v-app>
    <v-content>
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from './components/MessagesComponent.vue'

export default {
  name: 'App',

  components: {
    Messages,
  },

  data: () => ({
    //
  }),
}
</script>
