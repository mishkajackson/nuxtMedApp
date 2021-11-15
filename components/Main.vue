<template>
<div>
  <h1>Психический статус</h1>
  <!-- <div class="background-image"></div> -->
  <div class="content">
    <div class="main">
      <div class="animate__animated animate__fadeInDown">
<PsystatusGenderCodes/>
      </div>
<div class="animate__animated animate__fadeInDown">
<PsystatusSyndrome/>
      </div>
 <Extra/>
  <PsystatusFooter/>
    </div>
 

 </div>
</div>
 
</template>
<script>
</script>

<style scoped>
.background-image {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  display: block;
  background-image: url('~assets/bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  filter: blur(0px);
  opacity: 0.05;
}

.content {
  
  z-index: 9999;
  
}
</style>