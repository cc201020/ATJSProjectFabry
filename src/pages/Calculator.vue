<template>
<nav>
<router-link to="/home">Homepage</router-link>
<router-link to="/pokedex">Pokedex</router-link>
 <router-link to="/cardgame">Card Game</router-link>
 </nav>
  <div>
    <h1>Super Calc App</h1>

    <h3>Last number</h3>
    <span>{{ lastNumber }}</span>
    <br />
    <h3>Current number</h3>
    <span>{{ currentNumber }}</span>

    <br />
    <!-- buttons generated -->
    <button
        v-for="number in numberKeys"
        v-on:click="pushNumber(number)"
        :key="number"
    >
      {{ number }}
    </button>

    <br />

    <button v-on:click="addNumber">+</button>
    <button v-on:click="subtractNumber">-</button>
    <button v-on:click="multiplyNumber">*</button>
    <button v-on:click="divideNumber">/</button>

    <br />
    <!-- v-on: === @ -->
    <button @click="showResult">=</button>
  </div>
</template>

<script>
const numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var operation = "";

export default {
  data() {
    return {
      lastNumber: 0,
      currentNumberArray: [],
      numberKeys,
    };
  },

  computed: {
    currentNumber() {
      return parseInt(this.currentNumberArray.join(""), 10) || 0;
    },
  },

  methods: {
    pushNumber(numberStr) {
      this.currentNumberArray.push(numberStr);
    },

    addNumber() {
      this.lastNumber = this.currentNumber;
      this.currentNumberArray = [];
      operation = "+";
    },

    subtractNumber() {
      this.lastNumber = this.currentNumber;
      this.currentNumberArray = [];
      operation = "-";
    },

    multiplyNumber() {
      this.lastNumber = this.currentNumber;
      this.currentNumberArray = [];
      operation = "*";
    },

    divideNumber() {
      this.lastNumber = this.currentNumber;
      this.currentNumberArray = [];
      operation = "/";
    },

    showResult() {
      var result = 0;

      if (operation === "+") {
        result = this.lastNumber + this.currentNumber;
      }
      if (operation === "-") {
        result = this.lastNumber - this.currentNumber;
      }
      if (operation === "*") {
        result = this.lastNumber * this.currentNumber;
      }
      if (operation === "/") {
        result = this.lastNumber / this.currentNumber;
      }
      // ... === spread operator
      this.currentNumberArray = [...String(result)];
    },
  },
};
</script>
<style>
body {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>