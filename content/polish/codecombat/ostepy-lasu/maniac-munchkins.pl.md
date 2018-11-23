---
title: "Obsesja Munchkinów"
date: 2018-11-23T22:11:15.145Z
translationKey: "maniac-munchkins"
slug: "obsesja-munchkinow"
order: 23
tags:
  - distanceTo
  - cleave
---

> Otwórz kufer i weź jego zawartość, ale nie zapominaj bronić się przed Munchkinami.

https://codecombat.com/play/level/maniac-munchkins

Rozwiązanie

```javascript
// Another chest in the field for the hero to break open!
// Attack the chest to break it open.
// Some munchkins won't stand idly by while you attack it!
// Defend yourself when a munchkin gets too close.

while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if(hero.isReady("cleave")) {
        // First priority is to cleave if it's ready:
        hero.cleave(enemy);
    } else if(distance < 5) {
        // Attack the nearest munchkin that gets too close:
        hero.attack(enemy);
    } else {
        // Otherwise, try to break open the chest:
        // Use the name of the chest to attack: "Chest".
        hero.attack("Chest");
    }
}

```

Potrzebne przedmioty z |
--- |
cleave |
isReady |
distanceTo |
findNearestEnemy |


