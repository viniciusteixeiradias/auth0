<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios";

const resp = ref<{ data: string }>({ data: "" });

const fetch = async () => {
  resp.value = await axios.get("http://localhost:3000");
}
</script>

<template>
  <div>
    Response: {{ JSON.stringify(resp.data) }}
  </div>
  <button @click="fetch">Fetch</button>
</template>

<style scoped></style>
