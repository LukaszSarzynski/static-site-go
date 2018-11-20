---
title: "Mountain Flower Grove"
date: 2018-11-20T22:31:02.308Z
translationKey: "mountain-flower-grove"
slug: "mountain-flower-grove"
order: 28
tags:
  - drawing
  - "random walk"
---

> A large mountain grove: great for practicing your Flower Art skills!

https://codecombat.com/play/level/mountain-flower-grove

Solution

```javascript
// This level is a place for making flower art.
// The real goal is to experiment and have fun!
// If you draw something with at least 1000 flowers, you will "succeed" at the level.

function moveHeroIfCan(x,y)
{
    //if we can't go there save last position
    if(x < 25 || x > 145)
    x = hero.pos.x;
    //if we can't go there save last position
    if(y < 25 || y > 120)
    y = hero.pos.y;

    hero.moveXY(x,y);
}

var iLenght = 3; 
while(true)
{
  var x = hero.pos.x;
  var y = hero.pos.y;

  //happy fate
  var seed = Math.random();

  //decide of move dirrection
  if (seed < 0.25) {
      x = x + iLenght;
  } else if (seed < 0.5) {
      x = x - iLenght;
  } else if (seed < 0.75) {
      y = y + iLenght;
  } else {
      y = y - iLenght;
  }

  moveHeroIfCan(x,y);
}

```

Needed items with |
--- |
setFlowerColor |


