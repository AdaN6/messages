<template>
    <v-col sm8>
        <v-card>
            <v-toolbar dark>
                    <v-toolbar-title>
                        New Message
                    </v-toolbar-title>
            </v-toolbar>
            <v-form >
                <v-container>
                <v-row justify="d-flex justify-center">
                    <v-col
                    cols="12"
                    >
                    <v-text-field
                        label="Message"
                        required
                    ></v-text-field>
                    <v-btn
                        class="me-4"
                        type="submit"
                    >
                        submit
                    </v-btn>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-col>
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