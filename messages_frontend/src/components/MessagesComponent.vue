<template>
    <v-col sm8>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item v-for="(message, i) in $store.state.messages" :key="i" color="primary" :to="'Message/' + i">
                    <v-list-item-title v-text="message.text"></v-list-item-title>
                    <v-list-item-sub-title v-text="message.user"></v-list-item-sub-title>
                </v-list-item>
            </v-list>
        </v-card>
    </v-col>
</template>

<script>
// import { ref, onMounted } from 'vue';

// import mitt from 'mitt';

// const emitter = mitt();

export default {
    // setup() {
    //     const messages = ref([]);
        
    //      // Listen for the newMessage event and update messages array
    //     emitter.on('newMessage', (message) => {
    //         messages.value.push(message);
    //     });

    //     const fetchMessages = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3000/messages');
    //             messages.value = response.data;
    //         } catch (error) {
    //             console.error('Error fetching messages:', error);
    //         }
    //     };

    //     // Fetch initial messages on component mount
    //     onMounted(fetchMessages);

    //     return {
    //         messages,
    //     };
    // },

    async created() {
        this.$store.dispatch('getMessages');
    },
};
</script>
