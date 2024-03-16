<template>
  <div>
    <p v-if="connected">WebSocket connected</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
const ws_path = import.meta.env.VITE_WS
export default {
  name: 'WebSocketExample',
  setup() {
    const connected = ref(false);
    const message = ref('');
    const ws = new WebSocket(ws_path);

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
      return () => {
        ws.close();
      };
    });

    return { connected, message };
  },
};
</script>
