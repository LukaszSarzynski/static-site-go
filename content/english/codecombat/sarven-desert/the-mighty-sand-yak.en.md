---
title: "The Mighty Sand Yak"
date: 2018-11-12T19:02:46.308Z
translationKey: "the-mighty-sand-yak"
slug: "the-mighty-sand-yak"
order: 46
tags:
  - HelloWord
---

> Test your nerves by dodging huge sand yaks on the open dunes!

https://codecombat.com/play/level/the-mighty-sand-yak

Solution

```javascript
// Let yaks get close, then move 10m right to dodge.
// Dodge 4 yaks to complete the level.

while(true) {
    // Get hero's current x and y position.
    var x = hero.pos.x;
    var y = hero.pos.y;
    
    // Find the nearest yak.
    var yak = hero.findNearestEnemy();
    
    // If the distanceTo the yak is less than 10:
    if (hero.distanceTo(yak) < 10) {
        // To move right, add 10 to hero's x position.
        x+=10;
        // Use moveXY(x, y) to move!
        hero.moveXY(x, y);
    }
}
```

Points for |
--- |
time |


