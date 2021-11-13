<template>
<div>
  <div class="background-image"></div>
  <div class="content">
 <PsystatusGenderCodes/>
 <PsystatusSyndrome/>
 <!-- <PsystatusExtra/> -->
 <PsystatusFooter/>
 </div>
</div>
 
</template>
<script>
export default {
  async fetch ({ store, params }) {
    let { data } = await http.get('http://a0596688.xsph.ru/patients/syndromOne/Male/F01')
    console.log(data)
    store.commit("status/psystatus", res.data)
  }
}
</script>

<style scoped>
.background-image {
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  display: block;
  background-image: url('~assets/bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  filter: blur(5px);
  opacity: 0.1;
}

.content {
  position: fixed;
  left: 0;
  right: 0;
  top: 20px;
  z-index: 9999;
  margin-left: 20px;
  margin-right: 20px;
}
</style>