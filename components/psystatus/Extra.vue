<template>
    <div>

        <div v-if="$store.state.static.codes != ''">
          <div class="animate__animated animate__fadeInUp">
<h2 style="margin-top: 10px; margin-left: 20px">Дополнительно</h2>
    <div class="additionally">
      <div  class="col-12">
         <div class="toggle">
          <span class="span-toggle">Заголовок</span>
          <label for="opt1" class="checkbox-ios">
            <input id="opt1" v-model="opt1" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <!-- ОРИЕНТАЦИЯ -->
        <div v-if="$store.state.static.codes === 'F01' || $store.state.static.codes === 'F06'">
<button v-bind:class="{ collapse_active: isOpen1 }"  class="btn-collapse" @click="isOpen1 = !isOpen1">Ориентация <span v-bind:class="{ arrow_active: isOpen1 }" class="arrow">&#10095;</span></button>
        <div v-if="isOpen1">
        <div class="toggle">
          <span class="span-toggle">В дате не ориентируется</span>
          <label for="opt2" class="checkbox-ios">
            <input v-on:click='opt3 = false' id="opt2" v-model="opt2" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
         <div class="toggle">
          <span class="span-toggle">Всесторонне дезориентирован</span>
          <label for="opt3" class="checkbox-ios">
            <input v-on:click='opt2 = false' id="opt3" v-model="opt3" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        </div>
        </div>
        <!-- ОРИЕНТАЦИЯ -->

        <!-- КОНТАКТ F01 F06 -->
        <div v-if="$store.state.static.codes === 'F01' || $store.state.static.codes === 'F06'">
        <button v-bind:class="{ collapse_active: isOpen2 }"  class="btn-collapse" @click="isOpen2 = !isOpen2">Контакт <span v-bind:class="{ arrow_active: isOpen2 }" class="arrow">&#10095;</span></button>
        <div v-if="isOpen2">
        <div class="toggle">
          <span class="span-toggle">Малопродуктивный контакт</span>
          <label for="opt4" class="checkbox-ios">
            <input v-on:click='opt5 = opt6 = false' id="opt4" v-model="opt4" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Непродуктивный контакт</span>
          <label for="opt5" class="checkbox-ios">
            <input v-on:click='opt4 = opt6 = false' id="opt5" v-model="opt5" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Обстоятельный контакт</span>
          <label for="opt6" class="checkbox-ios">
            <input v-on:click='opt4 = opt5 = false' id="opt6" v-model="opt6" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Дизартричная речь</span>
          <label for="opt7" class="checkbox-ios">
            <input id="opt7" v-model="opt7" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Тугоухость</span>
          <label for="opt8" class="checkbox-ios">
            <input id="opt8" v-model="opt8" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
          </div>
        </div>
        <!-- КОНТАКТ F01 F06 -->
       
        <!-- КОНТАКТ F20 -->
      <div v-if="$store.state.static.codes === 'F20'">
<button v-bind:class="{ collapse_active: isOpen2 }"  class="btn-collapse" @click="isOpen2 = !isOpen2">Контакт <span v-bind:class="{ arrow_active: isOpen2 }" class="arrow">&#10095;</span></button>
        <div v-if="isOpen2">
        <div class="toggle">
          <span class="span-toggle">Малопродуктивный контакт</span>
          <label for="opt4" class="checkbox-ios">
            <input v-on:click='opt5 = opt6 = false' id="opt4" v-model="opt4" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Формальный контакт</span>
          <label for="opt5" class="checkbox-ios">
            <input v-on:click='opt4 = opt6 = false' id="opt5" v-model="opt5" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">В беседе много резонерствует</span>
          <label for="opt6" class="checkbox-ios">
            <input v-on:click='opt4 = opt5 = false' id="opt6" v-model="opt6" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Дизартричная речь</span>
          <label for="opt7" class="checkbox-ios">
            <input id="opt7" v-model="opt7" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Тугоухость</span>
          <label for="opt8" class="checkbox-ios">
            <input id="opt8" v-model="opt8" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
          </div>

      </div>
        <!-- КОНТАКТ F20 -->
        <div v-if="$store.state.static.codes === 'F01' || $store.state.static.codes === 'F06'">
 <button v-bind:class="{ collapse_active: isOpen3 }"  class="btn-collapse" @click="isOpen3 = !isOpen3">Двигательная сфера <span v-bind:class="{ arrow_active: isOpen3 }" class="arrow">&#10095;</span></button>
                  <div v-if="isOpen3">
        <div class="toggle">
          <span class="span-toggle">Передвигается с трудом</span>
          <label for="opt9" class="checkbox-ios">
            <input v-on:click='opt10 = false' id="opt9" v-model="opt9" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Постельный режим</span>
          <label for="opt10" class="checkbox-ios">
            <input v-on:click='opt9 = false' id="opt10" v-model="opt10" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
      </div>
        </div>
       

      <!-- ФИЗ ОТПР. -->
      <div v-if="$store.state.static.codes === 'F01'">
      <button v-bind:class="{ collapse_active: isOpen4 }"  class="btn-collapse" @click="isOpen4 = !isOpen4">Физиологические отправления <span v-bind:class="{ arrow_active: isOpen4 }" class="arrow">&#10095;</span></button>
                  <div v-if="isOpen4">
        <div class="toggle">
          <span class="span-toggle">Физ. отправления контролирует не всегда</span>
          <label for="opt11" class="checkbox-ios">
            <input v-on:click='opt12 = false' id="opt11" v-model="opt11" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Физ. отправления не контролирует</span>
          <label for="opt12" class="checkbox-ios">
            <input v-on:click='opt11 = false' id="opt12" v-model="opt12" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        </div>
      </div>
        <!-- ФИЗ ОТПР. -->

        <!-- ЛЕКАРСТВА -->
        <div>
          <button v-bind:class="{ collapse_active: isOpen5 }"  class="btn-collapse" @click="isOpen5 = !isOpen5">Обоснование назначений <span v-bind:class="{ arrow_active: isOpen5 }" class="arrow">&#10095;</span></button>
                  <div v-if="isOpen5">
        <div class="toggle">
          <span class="span-toggle">Клозапин</span>
          <label for="opt13" class="checkbox-ios">
            <input id="opt13" v-model="opt13" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Тригексифенидил</span>
          <label for="opt14" class="checkbox-ios">
            <input  id="opt14" v-model="opt14" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Бипериден</span>
          <label for="opt15" class="checkbox-ios">
            <input  id="opt15" v-model="opt15" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        <div class="toggle">
          <span class="span-toggle">Антидепрессант</span>
          <label for="opt16" class="checkbox-ios">
            <input id="opt16" v-model="opt16" type="checkbox" />
            <span class="checkbox-ios-switch"></span>
          </label>
        </div>
        
        </div>
        </div>
        <!-- ЛЕКАРСТВА -->
      </div>
    </div>
    </div>
    </div>
        </div>

</template>
<script>
export default ({
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      opt1: true, opt2: false, opt3: false, opt4: false, opt5: false, opt6: false, opt7: false, opt8: false,
      opt9: false,opt10: false, opt11: false, opt12: false, opt13: false,opt14: false, opt15: false, opt16: false,
      opt17: false,opt18: false, opt19: false, opt20: false, opt21: false,opt22: false, opt23: false, opt24: false,
    }
    
  },
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