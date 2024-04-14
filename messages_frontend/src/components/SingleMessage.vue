<template>
    <v-col sm8>
        <v-card>
            <v-toolbar dark>
                    <v-toolbar-title>
                        Message
                    </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                {{ message.text }}
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>

export default {
    data() {
        return {
            message: ""
        }
    },
    async created() {
         this.message = await this.$store.dispatch('getSingleMessage', this.$route.params.id);
    },
}
</script>