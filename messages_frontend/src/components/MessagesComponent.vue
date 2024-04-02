<template>
     <v-col sm8>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>
                    Messages
                </v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item
                    v-for="(message, i) in messages" 
                    :key="i"
                    :value="message"
                    color="primary"
                >
                    <v-list-item-title v-text="message"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
    </v-col>
</template>

<script>
// const axios = require('axios');
import axios from 'axios';


export default {
    data() {
        return {
            messages : [ "Hello", "hi", "its working"]
        }
    },
    async created() {
        // console.log('created')
        this.messages = (await axios.get('http://localhost:3000/messages')).data;
    }
}
</script>