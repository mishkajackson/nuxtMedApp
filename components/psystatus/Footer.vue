<template>
    <div>
        <div v-if="$store.state.static.codes != ''">
                     <div class="animate__animated animate__bounceInUp">

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
      
    </div>
        </div>

</template>
<script>

export default ({
  mounted() {
    this.loadStatus()
  },
  computed: {
    fecth() {
      return [this.$store.state.static.syndrome, this.$store.state.static.gender, this.$store.state.static.codes];
    }
  },
  watch: {
    fecth() {
    this.loadStatus()
    }
  },
    data() {
    return {
      isActive: false,
      copy: "Копировать",
      resultat: [],
    };
  },
  methods: {
      clipBoard() {
      console.log("psyst:", this.$store.state.status.psystatus);
      this.resultat = [];
      this.rnd();
      console.log('Результат:',this.resultat)    
      this.isActive = true;
      this.copy = "";
      setTimeout(this.symbolcheck, 300);
      setTimeout(this.deactiveBtn, 1400);
      this.$copyText(this.resultat.join(' ')).then(
        function (e) {
          console.log('Cкопировано')
        },
        function (e) {
          alert("Can not copy");
          console.log(e);
        }
      );
      
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
        this.$router.push('Editor')
    },
     async loadStatus () {
       if (this.$store.state.static.codes === '') {
         console.log("выбирети диагноз")
       }else {
         if (this.$store.state.static.codes === 'Z00') {
        var self = this;
      await fetch(`https://medappapi.ru/patients/norma/${this.$store.state.static.gender}/${this.$store.state.static.codes}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        var obj = data[0];
        var obj2 = [];
        var obj3 = '';
        var key = '';
        for (let i = 4; i < 24; i++) {
        key = Object.keys(obj)[i];
        obj3 = obj[key];
        obj2.push(obj3.split('; '))
    }  
        self.$store.commit("status/psystatus", obj2)

      })
      } else {
var self = this;
      await fetch(`https://medappapi.ru/patients/${this.$store.state.static.syndrome}/${this.$store.state.static.gender}/${this.$store.state.static.codes}`)
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
        self.$store.commit("status/psystatus", obj2)

      })
      }
       }
      
      
    },
    rnd() {
      for (let i = 0; i < this.$store.state.status.psystatus.length; i++) {
      this.resultat.push(this.$store.state.status.psystatus[i][Math.floor(Math.random() * this.$store.state.status.psystatus[i].length)]);
    };
    },
  }
})
</script>

<style scoped>
.footer {
  position: fixed;
  backdrop-filter: blur(13px);
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.996);
  border-radius: 50px 50px 0px 0px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
}
.btn {
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
  border: 1px solid #24964e;
  font-size: 26px;
}
.animate__animated.animate__bounceInUp {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  backdrop-filter: blur(110px);

  --animate-duration: 2.2s;
}
</style>