<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['guesser']),
  },

  methods: {
    ...mapActions(['getDeck', 'setNextGuess', 'drawCard']),
  },
};
</script>

<template>
<nav>
<router-link to="/home">Homepage</router-link>
<router-link to="/calculator">Calculator</router-link>
<router-link to="/pokedex">Pokedex</router-link>
</nav>
  <h1>Card Guesser Game</h1>
  <router-link to="/rules"> You can find the rules here</router-link>
  <br>
  <router-link to="/othergame"> Card Game has moved, click here to go to the new version</router-link>
  <br>
  <br>
  <button @click="getDeck">Get a new Deck</button>
  <div v-if="guesser.deckId">
    <button @click="setNextGuess('red')">Guess Red</button>
    <br />
    <button @click="setNextGuess('black')">Guess Black</button>
    <br />
    <button v-if="guesser.nextGuess" @click="drawCard">Draw a card</button>
    <button v-if="guesser.nextGuess" @click="drawCard">Draw a card</button>

    <h1>Guesses: {{ guesser.guesses }}</h1>
    <h1>Points: {{ guesser.points }}</h1>
    <h2 id="next">Your next guess is: {{ guesser.nextGuess }}</h2>

    <div v-for="(card, index) in guesser.cards" :key="index">
      {{ card.value }} of {{ card.symbol }}
      <img :src="card.image" :alt="card.value" />
    </div>
  </div>
  <div v-else id="info">Please draw a new deck!</div>
</template>

<style>
img {
  width: 100px;
}
body {
  background-size: cover;
  background-repeat: no-repeat;
}
p {
  color: rgba(21, 255, 33, 0.932);
}
button {
  color: black;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  border-color: black;
  border: 15px;
  background-color: rgba(21, 255, 33, 0.932);
  margin-left: 85px;
  margin-bottom: 25px;
}
button:hover {
  color: black;
  background-color: lightblue;
}
#info {
  color: white;
  font-size: 25px;
}

#next {
  color: white;
  font-size: 25px;
}
</style>
