---
title: "Perimeter Defense"
date: 2019-02-15T20:02:59.842Z
translationKey: "perimeter-defense"
slug: "perimeter-defense"
order: 13
tags:
  - hero.moveXY
  - rectangle
---

> A peaceful village in the mountain forest. It's quiet. Too quiet. Prepare the defenses!

https://codecombat.com/play/level/perimeter-defense

Solution

```javascript
// We need to build guard towers around the village.
// Each peasant can build one tower.
// Show them the place to build.
// These towers are automatic and will attack ALL units outside the town.

// First move along the north border (y=60) from x=40 to x=80 with the step 20.
for (var x = 40; x <= 80; x += 20) {
    // Move at each point and say anything.
    hero.moveXY(x, 60);
    hero.say("Here");
}
// Next move along the east border (x=80) from y=40 to y=20 with the negative step -20.
for (var y = 40; y >= 20; y -= 20) {
    hero.moveXY(80, y);
    hero.say("Here");
}
// Continue for the two remaining borders.
// Next the south border (y=20) from x=60 to x=20 with the negative step -20.
for(var x =60; x >= 20;x-=20){
  hero.moveXY(x, 20);
  hero.say("Here");
}
// Next the west border (x=20) from y=40 to y=60 with the step 20.
for(var y=40; y <=60; y+=20){
    hero.moveXY(20, y);
    hero.say("Here");
}
// Don't forget hide inside the village.
hero.moveXY(50, 40);

```

Points for |
--- |
time |

Needed items with |
--- |
moveXY |


