<template>
  <Nuxt />
</template>

<style>
* {
  box-sizing: border-box;
  outline: none !important;
  
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  background: #fcfcfc;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 300;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

}

.header {
  padding: 15px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

.col-1 {
  width: 10.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 29%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 79.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}

h3 {
  margin: 0px 0 0;
}
h2 {
  font-size: 18px;
  font-weight: 100;
  margin-left: 20px;
  margin-bottom: -12px;
  color: #000000;
}
h1 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  display: flex;
  flex-direction: column;
  height: 115vh;
}
.wrapper {
  display: inline-flex;
  background:  rgba(255, 255, 255, 1);
  height: 100%;
  width: 100%;
  padding: 10px;
  align-items: left;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  
}

</style>
