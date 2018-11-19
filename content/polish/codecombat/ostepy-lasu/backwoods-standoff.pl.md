---
title: "Impas w  Mateczniku"
date: 2018-11-19T20:22:25.465Z
translationKey: "backwoods-standoff"
slug: "impas-w-mateczniku"
order: 17
tags:
  - cleave
  - isReady
---

> Wykrzycz i wyrąbuj sobie drogę do zwycięstwa, jak na prawdziwego barbarzyńce przystało.

https://codecombat.com/play/level/backwoods-standoff

Rozwiązanie

```javascript
// Munchkins are attacking!
// The swarms will come at regular intervals.
// Whenever you can, cleave to clear the mass of enemies.

while (true) {
    var enemy = hero.findNearestEnemy();
    // Use an if-statement with isReady to check "cleave":
    if (hero.isReady("cleave")) {
        // Cleave!
        hero.cleave(enemy);
    }
    // Else, if cleave is not ready:
    else {
        // Attack the nearest ogre!
        hero.attack(enemy);
    }
}

```

Potrzebne przedmioty z |
--- |
cleave |
isReady |
findNearestEnemy |


