---
title: "Cloudrip Commander"
date: 2019-03-13T21:29:02.013Z
translationKey: "cloudrip-commander"
slug: "cloudrip-commander"
order: 29
tags:
  - hero.command
  - friend-move
  - hero.summon
  - soldier
  - hero.move
---

> Use your new Boss Star to summon and command troops!

https://codecombat.com/play/level/cloudrip-commander

Solution

```javascript
// Summon some soldiers, then direct them to your base.
// Each soldier costs 20 gold.
while (hero.gold > hero.costOf("soldier")) {
    hero.summon("soldier");
}
var soldiers = hero.findFriends();
var soldierIndex = 0;
// Add a while loop to command all the soldiers.
while (soldierIndex < soldiers.length) {
    var soldier = soldiers[soldierIndex];
    hero.command(soldier, "move", {
        x: 50,
        y: 40
    });
    soldierIndex++;
}
// Go join your comrades!
while (hero.pos.x < 50) {
    hero.move(soldier.pos);
}

```

Points for |
--- |
time |

Needed items with |
--- |
gold |
costOf |
summon |
findFriends |
command |
distanceTo |
move |


