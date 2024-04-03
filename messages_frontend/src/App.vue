<template>
  <v-app>
    <v-toolbar app>
      <v-btn>Messages</v-btn>
      <v-spacer/>
      <v-btn>Login</v-btn>

    </v-toolbar>
    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',


  data: () => ({
    //
  }),
}
</script>
