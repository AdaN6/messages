<template>
  <v-app>
    <v-toolbar app>
      <v-btn to="/">Messages</v-btn>
      <v-btn to="/NewMessage">New Message</v-btn>
      <v-spacer/>
      <!-- ** simple authenticated logic with data() -->
      <!-- <v-btn to="/Register" v-if="!isAuthenticated">Register</v-btn> -->
      <!-- ** using store state -->
      <v-btn to="/Register" v-if="!$store.state.token">Register</v-btn>
      <v-btn to="/Login" v-if="!$store.state.token">Login</v-btn>
      <!-- call logout mutation in app component $store.commit('logout') -->
      <v-btn v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>

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


  data () {
    return {
      // --> simple authenticated logic with v-if line 07
      // isAuthenticated: !!localStorage.getItem('token') || false
    }
  },
}
</script>
