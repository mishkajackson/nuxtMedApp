<template>
    <div>
        <div class="footer btn-border">
      <button
        v-on:click="clipBoard"
        v-bind:class="{ btn_active: isActive }"
        class="btn"
        v-html="copy"
      >
        {{ copy }}
      </button>
      <br>
      <button class="btn" v-on:click="edit" >Редактировать</button>
    </div>
    </div>
</template>
<script>

export default ({
    data() {
    return {
      isActive: false,
      copy: "Копировать",
    };
  },
  methods: {
      clipBoard() {
    
      this.isActive = true;
      this.copy = "";
      setTimeout(this.symbolcheck, 300);
      setTimeout(this.deactiveBtn, 1400);
      
    },
    symbolcheck() {
      this.copy = "&#10004;";
    },
    deactiveBtn() {
      this.isActive = false;
      this.copy = "Копировать";
    },
    edit() {
        console.log('Редактирование')
    }
  }
})
</script>

<style scoped>
.footer {
  position: fixed;
  backdrop-filter: blur(5px);
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.636);
  border-radius: 50px 50px 0px 0px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
}
.btn {
  background-color: #0a6ed1;
  content: "";
  color: white;
  border: 1px solid #0a6ed1;
  outline: none !important;
  width: 280px;
  height: 50px;
  border-radius: 40px;
  padding: 11px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 18px 0px 8px;
  transition-duration: 0.4s;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  transition: 0.5s 0s;
}
.btn_active {
  background-color: #24964e;
  color: white;
  width: 100px;
  border: 1px solid #24964e;
  font-size: 26px;
}
</style>