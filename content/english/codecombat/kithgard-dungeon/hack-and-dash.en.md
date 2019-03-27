---
title: "Hack and Dash"
date: 2019-03-27T22:21:43.351Z
translationKey: "hack-and-dash"
slug: "hack-and-dash"
order: 25
tags:
  - HelloWord
---

> Escape the Dungeon Sprite with the help of a speed potion.

https://codecombat.com/play/level/hack-and-dash

Solution

```javascript
// You can write code before a loop.
hero.moveRight();
// Break open the "Chest" before using the loop to escape the maze!
hero.attack("Chest");
// Return back back into the main hallway.
hero.moveDown();
while(true) {
    // Move 3 times.
    hero.moveRight(3);
    // Move 3 times more.
    hero.moveDown(3);
}

```

Points for |
--- |
time |

Needed items with |
--- |
attack |
moveRight |


