<template>
    <div>
        <h4 class="text-h4">
            Messages
        </h4>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages : [ "Hello", "hi", "its working"]
        }
    }
}
</script>