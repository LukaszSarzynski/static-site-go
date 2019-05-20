---
title: "Double Gaps"
date: 2019-05-20T21:19:25.021Z
translationKey: "double-gaps"
slug: "double-gaps"
order: 7
tags:
  - buildXY
  - fence
  - hero.moveXY
---

> Coins are at the left, ogres are at the right. There is only one answer and it's Fences!

https://codecombat.com/play/level/double-gaps

Solution

```javascript
// Get the hero and the peasant to the south.

// The function move your hero down along the center line.
function moveDownCenter() {
    var x = 40;
    var y = hero.pos.y - 12;
    hero.moveXY(x, y);
}

// The function build a fence on the right of something.
function buildRightOf(something) {
    // buildXY a "fence" 20 meters to something's right.
    hero.buildXY("fence", something.pos.x+25, something.pos.y);    
}

// The function build a fence on the left of something.
function buildLeftOf(something) {
    // buildXY a "fence" 20 meters to something's left.
    hero.buildXY("fence", something.pos.x-27, something.pos.y);    
}

while(true) {
    var ogre = hero.findNearestEnemy();
    var coin = hero.findNearestItem();
    if (ogre) {
        buildLeftOf(ogre);
    }
    if (coin) {
        buildRightOf(coin);
    }
    moveDownCenter();
}
```

Points for |
--- |
time |
damage-dealt |

Needed items with |
--- |
moveXY |
findNearestItem |
findNearestEnemy |


