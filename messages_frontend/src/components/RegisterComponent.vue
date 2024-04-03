<template>
    <v-col sm8>
        <v-card>
            <v-toolbar dark>
                    <v-toolbar-title>
                        Register
                    </v-toolbar-title>
            </v-toolbar>
            <v-form  @submit.prevent="register">
                <v-container>
                <v-row justify="d-flex justify-center">
                    <v-col
                    cols="12"
                    >
                    <v-text-field v-model="userName"
                        label="User Name"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    >
                    <v-text-field v-model="password"
                        label="Password"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn
                    class="me-4"
                    type="submit"
                >
                    Register
                </v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-col>
</template>

<script>

export default {
    data() {
        return {
            userName: "",
            password: "",
        }
    },
    methods: {
        async register() {
                this.$store.dispatch('register', {userName: this.userName, password: this.password});
        }
    }
}
</script>