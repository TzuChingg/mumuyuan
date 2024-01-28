<template>
    <div>
      <p v-if="connected">WebSocket connected</p>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'WebSocketExample',
setup() {
    const connected = ref(false);
    const message = ref('');

    const ws = new WebSocket('ws://localhost:3000');

    ws.onopen = () => {
    connected.value = true;
    };

    ws.onmessage = (event) => {
    message.value = event.data;
    };

    ws.onclose = () => {
    connected.value = false;
    };

    onMounted(() => {
    // Clean up WebSocket on component unmount
    return () => {
        ws.close();
    };
    });

    return { connected, message };
},
};
  </script>
  
  <style scoped>
  /* Your component styles */
  </style>