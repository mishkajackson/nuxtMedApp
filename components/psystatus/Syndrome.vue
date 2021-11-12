<template>
    <div>
        <div v-if="$store.state.static.codes != '' && $store.state.static.codes != 'Z00'">
      <h2 style="margin-top: 10px; margin-bottom: 1px">Синдром</h2>
            <div class="col-12">
              <div class="wrapper">
                <div class="radio-syndrom">
                  <div>
                    <input
                      type="radio"
                      @input="setSyndrom"
                      id="syndromOne"
                      name="syndrom"
                      value="syndromOne"
                    />
                    <label for="syndromOne">{{ $store.state.static.syndrom1 }}</label>

                    <input
                      type="radio"
                      @input="setSyndrom"
                      id="syndromTwo"
                      name="syndrom"
                      value="syndromTwo"
                    />
                    <label for="syndromTwo">{{ $store.state.static.syndrom2 }}</label>

                    <input
                      type="radio"
                      @input="setSyndrom"
                      id="syndromThree"
                      name="syndrom"
                      value="syndromThree"
                    />
                    <label for="syndromThree">{{ $store.state.static.syndrom3 }}</label>

                    <input
                      type="radio"
                      @input="setSyndrom"
                      id="syndromFour"
                      name="syndrom"
                      value="syndromFour"
                    />
                    <label for="syndromFour">{{ $store.state.static.syndrom4 }}</label>
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
    return {};
  },
  methods: {
    setSyndrom(event) {
      this.$store.commit("static/syndrome", event.target.value);
      console.log(this.$store.state.static.syndrome);
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
  color: rgba(55, 0, 255, 0.468);
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
.radio-syndrom input[type="radio"]:checked + label {
  background: linear-gradient(79deg, rgba(0, 0, 255, 0.568), rgba(0, 38, 255, 0.44));
  border: 1px solid rgba(0, 0, 255, 0.168);
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.1);
  color: white;
}
</style>