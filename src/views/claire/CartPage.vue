<script>
import CartComponent from '../../components/claire/CartComponent.vue'
import ModalComponent from '../../components/claire/ModalComponent.vue'

export default { components: { CartComponent, ModalComponent } }
</script>

<template>
  <div class="container main my-5">
    <div class="row">
      <main class="col">
        <!--cart-->
        <CartComponent></CartComponent>
      </main>
    </div>
  </div>
  <!-- modal -->
  <ModalComponent></ModalComponent>
</template>
