<template>
    <v-col sm8>
        <v-card>
            <v-toolbar dark>
                    <v-toolbar-title>
                        New Message
                    </v-toolbar-title>
            </v-toolbar>
            <v-form  @submit="submit">
                <v-container>
                <v-row justify="d-flex justify-center">
                    <v-col
                    cols="12"
                    >
                    <v-text-field v-model="messageBody"
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

// import mitt from 'mitt';
// const emitter = mitt();

export default {
    data() {
        return {
            messageBody: ""
        }
    },
    methods: {
        async submit() {
            // console.log('test')
            // console.log(this.messageBody)
            try {
                this.$store.dispatch('newMessage', this.messageBody)
                // this.messageBody is to pass the v-model="messageBody" to the store
            }
            catch(error) {
                console.log(error)
            }
        }
    }
}
</script>