---
title: "Forest Garden"
date: 2019-02-05T22:05:16.818Z
translationKey: "forest-garden"
slug: "forest-garden"
order: 96
tags:
  - rectangle
  - toggleFlowers
---

> Everything should parallel and perpendicular.

https://codecombat.com/play/level/forest-garden

Solution

```javascript
// Grow the perfect rectangular flower fence.

// Use the given dimensions for the flower rectangle.
var gardener = hero.findNearest(hero.findFriends());
var gardenWidth = gardener.gardenWidth;
var gardenHeight = gardener.gardenHeight;
// Start the flower fence at the initial position.
hero.toggleFlowers(true);
var x = hero.pos.x;
var y = hero.pos.y;
// Use variables gardenWidth and gardenHeight to get corners' coordinates.
// Move to each corner, one by one, and return to the start:
var moveX= [gardenWidth,0,-gardenWidth,0];
var moveY = [0,-gardenHeight,0,gardenHeight];
for(var i = 0; i < moveX.length; ++i)
{
    hero.moveXY( hero.pos.x +moveX[i],  hero.pos.y +moveY[i]);
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findNearest |
findFriends |
toggleFlowers |
pos |
moveXY |


