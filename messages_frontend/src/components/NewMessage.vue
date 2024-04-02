<template>
    <v-form>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                label="Message"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
</template>

<script>
// const axios = require('axios');
import axios from 'axios';


export default {
    data() {
        return {
            messages: ["Hello", "hi", "its working"]
        }
    },
    async created() {
        // console.log('created')
        this.messages = (await axios.get('http://localhost:3000/messages')).data;
    }
}
</script>