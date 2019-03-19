---
title: "Signs and Portents"
date: 2019-03-19T21:57:47.748Z
translationKey: "signs-and-portents"
slug: "signs-and-portents"
order: 8
tags:
  - HelloWord
---

> Escape the area while your allies hold off waves of ogres!

https://codecombat.com/play/level/signs-and-portents

Solution

```javascript
// Your goal is to get to the right side of the map alive.
// You don't need to fight the ogres, just move! Your allies will protect you.
hero.moveRight();
hero.moveRight();
hero.moveUp();
// Use the movement commands to reach the red X!
hero.moveRight(3);
while (true) {
    hero.moveDown();
    hero.moveRight();
}

```

Points for |
--- |
time |
damage-taken |

Needed items with |
--- |
moveRight |


