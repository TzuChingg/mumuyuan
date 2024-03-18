<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.loader {
  width: 120px;
  height: 22px;
  border-radius: 20px;
  color: $primary;
  border: 2px solid;
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: currentColor;
  animation: l6 2s infinite;
}

@keyframes l6 {
  100% {
    inset: 0
  }
}
</style>
