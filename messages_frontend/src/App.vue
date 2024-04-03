<template>
  <v-app>
    <v-toolbar app>
      <v-btn to="/">Messages</v-btn>
      <v-btn to="/NewMessage">New Message</v-btn>
      <v-spacer/>
      <v-btn to="/Register">Register</v-btn>
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
