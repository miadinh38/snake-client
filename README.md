# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product
<ul> 
  <li> Press the following keys to move your snake: </li>
    <ul> 
      <li> <code>W</code>: Move Up - move up one square (unless facing down) </li>
      <li> <code>S</code>: Move Down - move down one square (unless facing up) </li>
      <li> <code>A</code>: Move Left - move left one square (unless facing right) </li>
      <li> <code>D</code>: Move Right - move right one square (unless facing left) </li>
    </ul>
    <em>Note: Snakes cannot instantly make a 180 turn by moving in the opposite direction.</em> <br>


  <li> Press the following keys to broadcast a message to the server: </li>
    <ul>
      <li> <code>G</code> to say "I love you" </li>
      <li> <code>H</code> to say "Hello" </li>
      <li> <code>J</code> to say "Nice day!" </li>
    </ul>
</ul>

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.