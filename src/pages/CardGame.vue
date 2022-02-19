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
<router-link to="/home">Homepage</router-link>
<router-link to="/calculator">Calculator</router-link>
<router-link to="/pokedex">Pokedex</router-link>
  <h1>Card Guesser Game</h1>
  <p>You can find the rules </p>
  <router-link to="/rules">here</router-link>

  <button @click="getDeck">Get a new Deck</button>

  <div v-if="guesser.deckId">
    <button @click="setNextGuess('red')">Guess Red</button>
    <br />
    <button @click="setNextGuess('black')">Guess Black</button>
    <br />
    <button v-if="guesser.nextGuess" @click="drawCard">Draw a card</button>

    <h1>Guesses: {{ guesser.guesses }}</h1>
    <h1>Points: {{ guesser.points }}</h1>
    <h2>Your next guess is: {{ guesser.nextGuess }}</h2>

    <div v-for="(card, index) in guesser.cards" :key="index">
      {{ card.value }} of {{ card.symbol }}
      <img :src="card.image" :alt="card.value" />
    </div>
  </div>
  <div v-else>Please draw a new deck!</div>
</template>

<style>
img {
  width: 100px;
}
</style>
