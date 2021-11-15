<template>
<div class="animate__animated animate__fadeInUp">
<div v-if="$store.state.static.codes === ''">
    <h1>Выберите шифр</h1>
</div>

<div v-if="$store.state.static.codes != ''" >
    <h2 style="margin-top: 10px; margin-left: 20px">Дополнительно</h2>
    <div class="additionally">
      <div  class="col-12">
         <div class="toggle">
          <span class="span-toggle">Заголовок</span>
          <label for="opt1" class="checkbox-ios">
            <input id="opt1" @input="opt1Change" type="checkbox" checked/>
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        </div>
</div>

</div>

</div>


</template>

<script>


export default ({
    computed: {
    opt() {
      return this.$store.state.static.opt1;
    }
  },
    data() {
        return {
           
        }
        
    },
    methods: {
        opt1Change(event) {
            this.$store.commit("static/opt1", event.target.checked);
            console.log(this.$store.state.static.opt1);

        }
    }
})
</script>


<style scoped>
.btn-collapse {
  background-color:white;
  color: #676767;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 1px 12px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin:5px 0px 0px;
  transition-duration: 0.4s;
  cursor: pointer;
  transition: 0.5s 0s;
}
.btn-collapse:hover {
  background: linear-gradient(79deg, rgba(0, 0, 255, 0.05), rgba(0, 38, 255, 0.05));
  color: #3f08c192;
}
.collapse_active {
  background: linear-gradient(79deg, rgba(0, 0, 255, 0.03), rgba(0, 38, 255, 0.03));
  color: #3f08c192;
}
.arrow {
  position: absolute;
  left: 87%;
  transform: rotate(90deg);
  transition: 500ms;
}
.arrow_active {
  transform: rotate(-90deg)

}
.btn {
  background-color: #0a6ed1;
  content: "";
  color: white;
  border: 1px solid #0a6ed1;
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
.checkbox-ios {
  
  display: inline-flex;
  height: 28px;
  line-height: 28px;
  margin-left: 55px;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
  margin-left: 90%;
}
.checkbox-ios .checkbox-ios-switch {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 46px;
  height: 28px;
  border: 1px solid rgb(110, 0, 253);
  border-radius: 25%/50%;
  vertical-align: top;
  background: rgba(238, 238, 238, 0.598);
  transition: 0.5s;
  margin-top: -23px;
  margin-left: 0px;
}
.checkbox-ios .checkbox-ios-switch:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  transition: 0.25s;
}
.checkbox-ios input[type="checkbox"] {
  
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox-ios input[type="checkbox"]:checked + .checkbox-ios-switch {
  background: linear-gradient(79deg, rgba(0, 0, 255, 0.568), rgba(0, 38, 255, 0.44));
}
.checkbox-ios input[type="checkbox"]:checked + .checkbox-ios-switch:before {
  transform: translateX(18px);
}

/* Hover */
.checkbox-ios input[type="checkbox"]:not(:disabled) + .checkbox-ios-switch {
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.05);
}

.toggle {
  width: 100%;
  height: 20px;
  margin-top: 22px;
  margin-bottom: 22px;
}
.span-toggle {
  color: rgb(106, 104, 104);
  font-weight: 150;
  font-size: 16px;
  margin-right: 111px;
  margin-left: 12px;
}

.additionally {
  display: inline-flex;
  background: #fff;
  height: 100%;
  width: 95%;
  margin-top: 20px;
  margin-bottom: 200px;
  margin-left: 15px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.03);
}
</style>