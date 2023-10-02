<template>
  <div id="reserva" class="wrapper">
    <h1>Faça sua Reserva</h1>
    <div class="inner">
      <div class="product-picture">
        <img src="http://www.anothermonkeythai.com/wp-content/uploads/2015/06/rest3.jpg">
      </div>
      <div class="product-title">
        <p><strong>Restaurante do Zé</strong></p>
      </div>
      <div v-if="button === false" class="reserv">
        <div class="product-text">
          <p>Quantidade de pessoas <Badge type="warning" text="Max 6"></Badge>
          </p>
        </div>
        <div class="table-choice">
          <input maxlength="1" type="text" oninput="this.value = this.value.replace(/[^1-6.]/g, '');" class="mesa"
            id="quant" />
        </div>
        <div class="date-title">
          <p>Escolha a data &amp; horário</p>
        </div>
        <div class="date-picker">
          <input type="datetime-local" id="date-time">
        </div>
        <div class="submit-btn">
          <button @click="reserve" type="submit">Confirme</button>
        </div>
      </div>
      <div class="submit-btn" v-else>
        <p>Sua mesa foi reservada 👏</p>
        <button @click="reserve">Fazer outra reserva?</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const button = ref(false);

const reserve = () => {
  button.value = !button.value;
}

</script>

<style>
#reserva h1 {
  font-size: 50px;
  text-align: center;
  margin: 10px 0 0px 0;
}

.wrapper,
input,
button {
  font-family: 'Raleway', sans-serif;
}

.inner {
  width: 200px;
  margin: 0 auto;
  padding: 20px 0 0 0;
  text-align: center;
}

.back {
  position: absolute;
  top: 20px;
  left: 10px;
}

.search {
  position: absolute;
  top: 20px;
  right: 10px;
}

.product-picture {
  margin: 30px 0 0 0;
}

.product-picture img {
  border: 3px solid black;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 1em grey;
}

.product-title {
  font-size: 18px;
}

.product-text {
  font-size: 18px;
}

.table-number {
  font-size: 50px;
}

.table {
  line-height: 60px;
}

.table button {
  color: black;
  background: transparent;
  border: 0px solid black;
  border-radius: 2px;
  font-size: 20px;
  width: 30px;
  height: 30px;
}

.table button:active {
  transform: translate(0px, 2px);
  -webkit-transform: translate(0px, 2px);
  -moz-transform: translate(0px, 2px);
  -ms-transform: translate(0px, 2px);
  box-shadow: 0px 1px 0px 0px;
}

button:disabled {
  opacity: 0.65;
}

.minus {
  float: left;
}

.plus {
  float: right;
}

.date-title {
  margin-top: 30px;
}

.date-picker {
  width: 100%;
  position: relative;
  margin: auto;
}

.date-picker>input {
  border: none;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  position: absolute;
}

.date-picker>input[type="datetime-local"] {
  top: -15px;
  left: -10px;
}

.submit-btn {
  margin: 36px 0 20px 0;
}

.submit-btn button {
  color: black;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 2px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
}

.submit-btn button:active {
  transform: translate(0px, 2px);
  -webkit-transform: translate(0px, 2px);
  box-shadow: 0px 1px 0px 0px;
}

.submit-btn p {
  font-size: 20px;
}

.submit-btn button:hover {
  background-color: black;
  color: white;
  transition: 0.4s;
}

button,
input {
  font-family: Marmelad;
}

.mesa {
  width: 100%;
  text-align: center;
  font-size: 30px;
  border: 1px solid black;
  border-radius: 2px;
}
</style>
