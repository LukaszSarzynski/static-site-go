---
title: "Siekaj i Uderzaj."
date: 2019-03-27T22:21:43.355Z
translationKey: "hack-and-dash"
slug: "siekaj-i-uderzaj"
order: 25
tags:
  - HelloWord
---

> Ucieknij  Podziemnym duszkom z pomocą mikstury szybkości.

https://codecombat.com/play/level/hack-and-dash

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
attack |
moveRight |


