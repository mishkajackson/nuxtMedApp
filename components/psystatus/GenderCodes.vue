<template>
  <div>
    <div class="row">
      <h2 style="margin-top: 0px; margin-bottom: 1px">Пол</h2>
      <div class="col-4">
        <div class="wrapper">
          <div class="radio-toolbar">
            <input
              type="radio"
              id="man"
              name="gender"
              @input="genderChange"
              value="Male"
              checked
            />
            <label for="man">&#9794;</label>
            <input
              type="radio"
              id="woman"
              name="gender"
              @input="genderChange"
              value="Female"
            />
            <label for="woman">&#9792;</label>
          </div>
        </div>
      </div>
    </div>
    <!-- ШИФР -->
    <div class="row">
      <h2 style="margin-top: 10px; margin-bottom: 1px">Диагноз</h2>
      <div class="col-12">
        <div class="wrapper">
          <div class="radio-toolbar">
            <input
              type="radio"
              @input="codesChange"
              id="Z00"
              name="diagnos"
              value="Z00"
            />
            <label for="Z00">Z00</label>

            <input
              type="radio"
              @input="codesChange"
              id="F01"
              name="diagnos"
              value="F01"
            />
            <label for="F01">F01</label>

            <input
              type="radio"
              @input="codesChange"
              id="F06"
              name="diagnos"
              value="F06"
            />
            <label for="F06">F06</label>

            <input
              type="radio"
              @input="codesChange"
              id="F20"
              name="diagnos"
              value="F20"
            />
            <label for="F20">F20</label>

            <input
              type="radio"
              @input="codesChange"
              id="F22"
              name="diagnos"
              value="F22"
            />
            <label for="F22">F22</label>

            <input
              type="radio"
              @input="codesChange"
              id="F30"
              name="diagnos"
              value="F30"
            />
            <label for="F30">F30</label>

            <input
              type="radio"
              @input="codesChange"
              id="F32"
              name="diagnos"
              value="F32"
            />
            <label for="F32">F32</label>

            <input
              type="radio"
              @input="codesChange"
              id="F43"
              name="diagnos"
              value="F43"
            />
            <label for="F43">F43</label>

            <input
              type="radio"
              @input="codesChange"
              id="F70"
              name="diagnos"
              value="F70"
            />
            <label for="F70">F70</label>
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

    };
  },
  methods: {
    genderChange(event) {
      this.$store.commit("static/gender", event.target.value);
      console.log(this.$store.state.static.gender);
    },
    codesChange(event) {
      this.$store.commit("static/codes", event.target.value);
      console.log(this.$store.state.static.codes);
    },
   
  },
};
</script>

<style scoped>
.radio-toolbar {
  margin: 0px;
  width: 100%;
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

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
}
.radio-toolbar label {
  background-color: rgba(255, 255, 255, 0.049);
  color: rgba(55, 0, 255, 0.468);
  font-weight: 250;
  border: 1px solid #0a6ed122;
  border-radius: 20%;
  padding: 11px 11px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 4px;
  transition-duration: 0.5s;
  cursor: pointer;
  width: 50px;
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.1);
}
.radio-toolbar label:hover {
  border: 1px solid rgba(0, 0, 255, 0.168);
  background-color:rgba(0, 0, 255, 0.068);
}
.radio-toolbar input[type="radio"]:checked + label {
  border: 1px solid rgba(0, 0, 255, 0.168);
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.1);
  color: white;
  background: linear-gradient(79deg, rgba(0, 0, 255, 0.568), rgba(0, 38, 255, 0.44));
}

</style>