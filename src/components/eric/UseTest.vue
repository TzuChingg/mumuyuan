<script>
  export default {
  data() {
      return {
      showModal: false,
      };
  },
  methods: {
      openModal() {
      this.showModal = true;
      },
      closeModal() {
      this.showModal = false;
      },
  },
  };
</script>

<template>
        <div>
      <!-- 激活模态框的按钮 -->
      <button @click="openModal">打开模态框</button>
      
      <!-- 模态框 -->
      <div class="modal" :class="{ 'show': showModal }">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- 模态框头部 -->
            <div class="modal-header">
              <h5 class="modal-title">模态框标题</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            
            <!-- 模态框主体内容 -->
            <div class="modal-body">
              <!-- 在这里放置模态框的内容 -->
              <!-- 例如： -->
              <p>模态框内容</p>
            </div>
            
            <!-- 模态框底部按钮 -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">关闭</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<style scoped>
/* 如果使用了 scoped 样式，确保样式可以正确应用到模态框 */
.modal {
display: none;
}
.show {
display: block;
}
</style>