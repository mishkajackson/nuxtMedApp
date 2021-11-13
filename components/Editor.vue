<template>
  <div>
    <h1>Редактор</h1>
    <div class="main1">
      <h2>{{nameStatus[index]}}</h2>
    <div class="row wrapper">
      <div class="col-2"><button class="btn" v-on:click="previous">&#8249;</button></div>
      <div class="col-8">
        <div v-for="(states, index) in state" :key="index">
            <textarea
  placeholder="Введите что-нибудь..."
  ref="myTextarea"
  v-model="state[index]"
  :autosize='true'
  :min-height="10"
  :max-height="850"
/>
        </div>
      </div>
      <div class="col-2"><button class="btn" v-on:click="next">&#8250;</button></div>
    </div>
    </div>
      

     <div class="footer btn-border">
      <button
        v-on:click="save"
        v-bind:class="{ btn_active: isActive }"
        class="btn-save"
        v-html="saveBtn"
      >
       {{saveBtn}}
      </button>
      <br>
      <button
        v-on:click="cancel"
        class="btn-save"
      >
       Отмена
      </button>
    </div>
  </div>
</template>

<script>
export default {
    
  data() {
    return {
      isActive: false,
      saveBtn: 'Сохранить',
      psystatusTemp: [],
      index: 0,
      state: [],
      nameStatus: ['Сознание', 'Ориентация', 'Внешне', 'Поза', 'Внешний вид', 'Двигательная сфера', 'Зрительный контакт', 'Речь', 'Контакт', 'Ответы', 'Мышление', 'Суждения', 'Бредовые идеи', 'Обманы восприятия', 'Эмоциональная сфера', 'Настроение', 'Внимание', 'Память', 'Интеллект', 'Опасные тенденции', 'Критика', 'Установка на лечение'],
      nameStatusEng: ['soznanie', 'orient', 'vneshne', 'poza', 'oprt', 'dvig', 'zrit', 'rech', 'kontakt', 'otvet', 'mushlenie', 'sugdenie', 'bred', 'obman', 'emozii', 'nastroenie', 'vnimanie', 'memory', 'iq', 'suicide', 'kritik', 'lechenie'],
      psystatus: {},
    };
  },
  methods: {
    mounted() {
      this.loadStatus();
      
    },
    loadStatus() {
      var self = this;
      fetch(`https://medappapi.ru/patients/${this.$store.state.static.syndrome}/${this.$store.state.static.gender}/${this.$store.state.static.codes}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        var obj = data[0];
        var obj2 = [];
        var obj3 = '';
        var key = '';
        for (let i = 4; i < 26; i++) {
        key = Object.keys(obj)[i];
        obj3 = obj[key];
        obj2.push(obj3.split('; '))
    }  
        self.psystatus = obj2
        self.state = self.psystatus[0];
      })
        },
    next() {
      if (this.diagnos != 'Z00') {
        var idx = 21 
      }else {
        idx = 19
      }
      if (this.index < idx) {
        this.index++ + 1;
        var arr = [];
        for (var key in this.psystatus) {
          arr.push(this.psystatus[key]);
        }
        this.state = arr[this.index];
        this.psystatusTemp = arr;
      } else {
        this.index = idx;
      }
    },
    previous() {
      if (this.index > 0) {
        this.index-- - 1;
      } else {
        this.index = 0;
      }
      var arr = [];
      for (var key in this.psystatus) {
        arr.push(this.psystatus[key]);
      }
      this.state = arr[this.index];
    },
    async save() {
      var obj = new Object();
      for (let i = 0; i < 22; i++) {
      var obj2 = this.nameStatusEng[i];
      obj[obj2] = this.psystatus[i].join('; ');
    };
       try {
  const response = await fetch(`https://medappapi.ru/patients/update/${this.$store.state.static.syndrome}/${this.$store.state.static.gender}/${this.$store.state.static.codes}`, {
    method: 'PUT',
    body: JSON.stringify(obj), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  console.log('Успех');
} catch (error) {
  console.error('Ошибка:', error);
}
        this.isActive = true;
        this.saveBtn = "";
        setTimeout(this.symbolcheck, 300);
      setTimeout(this.deactiveBtn, 1400);
      
    },
    cancel() {
      this.$router.push('/')
    },
    symbolcheck() {
      this.saveBtn = "&#10004;";
    },
    deactiveBtn() {
      this.isActive = false;
      this.saveBtn = "Сохранить";
      this.$router.push('/')
    },
  },
  beforeMount() {
    this.mounted();
  },
};
</script>

<style scoped>

h2 {
  margin-left: 20px;
  margin-bottom: 18px;
}
textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 350;
  color: rgb(106, 104, 104);
  width: 100%;
  font-size: 16px;
  padding: 10px 20px;
  margin: 2px 0;
  box-sizing: border-box;
  border: 1px solid #0000000b;
  border-radius: 10px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.09);
  transition: 300ms;
}
input:hover {
    border: 2px solid #0a6ed193;
}
.wrapper {
margin-bottom: 450px;
}
.btn {
    height: 100%;
    width: 60px;
    color: #6e0ad169;
    background-color: white;
    border: none;
    font-size: 50px;
    transition: 500ms;
    
}
.btn:hover {
    color: #6e0ad1ad;
}


.btn-save {
  background: linear-gradient(79deg, rgba(0, 0, 255, 0.568), rgba(0, 38, 255, 0.44));
  content: "";
  color: white;
  border: none;
  width: 280px;
  height: 50px;
  border-radius: 40px;
  padding: 11px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 18px 0px 8px;
  transition-duration: 0.4s;
  cursor: pointer;
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.1);
  transition: 0.5s 0s;
  }
  .btn_active {
  background: #24964e;
  color: white;
  width: 100px;
  border: none;
  font-size: 26px;
}
.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  text-align: center;
  background-color: white;
  border-radius: 50px 50px 0px 0px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
}
</style>