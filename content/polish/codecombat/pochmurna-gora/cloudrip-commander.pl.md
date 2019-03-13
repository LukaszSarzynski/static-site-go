---
title: "Dowodzenie w czasie Zerwania Chmury"
date: 2019-03-13T21:29:02.019Z
translationKey: "cloudrip-commander"
slug: "dowodzenie-w-czasie-zerwania-chmury"
order: 29
tags:
  - hero.command
  - friend-move
  - hero.summon
  - soldier
  - hero.move
---

> Użyj swojej nowej Gwiazdy  Szefa by przywołać i dowodzić  wojskiem !

https://codecombat.com/play/level/cloudrip-commander

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
gold |
costOf |
summon |
findFriends |
command |
distanceTo |
move |


