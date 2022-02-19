<template>
<aside>
<router-link to="/home">Homepage</router-link>
<router-link to="/calculator">Calculator</router-link>
<router-link to="/pokedex">Pokedex</router-link>
<router-link to="/cardgame">Card Game</router-link>
</aside>
<h5>
Conceptually the rules of the game are quite simple:
Click new Deck to receive a new deck (if this does not function, reload/refresh the page) to get cards
Afterward you will be able to set (the buttons act as toggle) your guess to either red or black (switchable after each drawn card)
Then you click draw a card, if its color matches your guess you gain a point, if not you dont. That is it.
To refresh the page and remove the card images, reload the page, to switch your guess mid-game simply click the button for the other color.
</h5>
</template>
<style>
body {
  background-size: cover;
  background-repeat: no-repeat;
}
aside {
    background-color: black;
}
h5 {
    font-size: 25px;
    color: lightgrey;
    background-color:#13a3cf95;
    text-align: center;
}
</style>