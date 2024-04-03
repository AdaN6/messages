<template>
    <v-col sm8>
        <v-card>
            <v-toolbar dark>
                    <v-toolbar-title>
                        Message
                    </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                {{ messageBody }}
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>

export default {
    data() {
        return {
            messageBody: ""
        }
    },
    async created() {
         this.messageBody = await this.$store.dispatch('getSingleMessage', this.$route.params.id);
    },
}
</script>