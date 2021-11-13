<template>
    <div>
      
         <div v-if="$store.state.static.codes != '' && $store.state.static.codes != 'Z00'">
           <div class="animate__animated animate__fadeInUp">
      <h2 style="margin-top: 10px; margin-bottom: 1px">Синдром</h2>
            <div class="col-12">
              <div class="wrapper">
                <div class="radio-syndrom">
                  <div>
                    <input
                      type="radio"
                      id="syndromOne"
                      name="syndrom"
                      @input="setSyndrom"
                      value="syndromOne"
                    />
                    <label for="syndromOne">{{ syndromOne }}</label>

                    <input
                      type="radio"
                      id="syndromTwo"
                      name="syndrom"
                      @input="setSyndrom"
                      value="syndromTwo"
                    />
                    <label for="syndromTwo">{{ syndromTwo }}</label>

                    <input
                      type="radio"
                      id="syndromThree"
                      name="syndrom"
                      @input="setSyndrom"
                      value="syndromThree"
                    />
                    <label for="syndromThree">{{ syndromThree }}</label>

                    <input
                      type="radio"
                      id="syndromFour"
                      name="syndrom"
                      @input="setSyndrom"
                      value="syndromFour"
                    />
                    <label for="syndromFour">{{ syndromFour }}</label>
                  </div>
                </div>
              </div>
            </div>

      </div>
       
    </div>


        
    </div>
</template>

<script>
export default {
  
  data() {
    return {
      syndromOne: "",
      syndromTwo: "",
      syndromThree: "",
      syndromFour: "",
      syndromFive: "",
      syndromSix: "",
    };
  },
  computed: {
    todos () {
      return this.$store.state.static.codes
    }
  },
  watch: {
    todos() {
    this.syndromSet()
    }
  },
  methods: {
    setSyndrom(event) {
      this.$store.commit("static/syndrome", event.target.value);
      console.log(this.$store.state.static.syndrome);
    },
    syndromSet() {
      this.syndrom = "";
      this.syndromOne =
        this.syndromTwo =
        this.syndromThree =
        this.syndromFour =
        this.syndromFive =
          "";
      if (this.$store.state.static.codes === "F01") {
        this.syndromOne = "Легкая степень";
        this.syndromTwo = "Умеренная степень";
        this.syndromThree = "Тяжелая степень";
        this.syndromFour = "Недифференцированная";
      }
      if (this.$store.state.static.codes === "F06") {
        this.syndromOne = "Легкий ПОС";
        this.syndromTwo = "Умеренный ПОС";
        this.syndromThree = "Выраженный ПОС";
        this.syndromFour = "Недифференцированный";
      }
      if (this.$store.state.static.codes === "F20") {
        this.syndromOne = "Легкий дефект";
        this.syndromTwo = "Умеренный дефект";
        this.syndromThree = "Выраженный дефект";
        this.syndromFour = "Недифференцированный";
      }
      if (this.$store.state.static.codes === "F70") {
        this.syndromOne = "Легкая степень";
        this.syndromTwo = "Умеренная степень";
        this.syndromThree = "Тяжелая степень";
        this.syndromFour = "Недифференцированная";
      }
    },
  },
};
</script>

<style scoped>
.radio-syndrom {
  margin-bottom: 0px;
  width: 100%;
}
.radio-syndrom input[type="radio"] {
  opacity: 0;
  position: fixed;
}
.radio-syndrom label {
  background-color: rgba(255, 255, 255, 0.049);
  color: rgb(106, 104, 104);
  font-weight: 150;
  border: 1px solid #0a6ed122;
  border-radius: 15px;
  padding: 12px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 4px;
  transition-duration: 0.5s;
  cursor: pointer;
  width: 250px;
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.1);
}
.radio-syndrom label:hover {
border: 1px solid rgba(0, 0, 255, 0.168);
  background-color:rgba(0, 0, 255, 0.068);
}
.checkbox-toolbar {
  margin: 0px;
  width: 100%;
}
.checkbox-toolbar label {
  background-color: rgba(255, 255, 255, 0.049);
  color: #0a6ed1;
  padding: 11px 18px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.5s;
  cursor: pointer;
  width: 330px;
}
.radio-syndrom input[type="radio"] + label {
  margin-left: 14px;
  
}

.radio-syndrom input[type="radio"]:checked + label {
  background: linear-gradient(79deg, rgba(0, 0, 255, 0.568), rgba(0, 38, 255, 0.44));
  border: 1px solid rgba(0, 0, 255, 0.168);
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.1);
  color: white;
  
}
</style>