---
title: "#Poziom f_15"
date: 2018-11-18T19:30:15.545Z
translationKey: "woodland-cleaver"
slug: "woodland-cleaver-poziom-f_15"
order: 15
tags:
  - cleave
---

> 

https://codecombat.com/play/level/woodland-cleaver

Rozwiązanie

```javascript
// Use your new "cleave" skill as often as you can.

hero.moveXY(23, 23);
while(true) {
    var enemy = hero.findNearestEnemy();
    if (hero.isReady("cleave")) {
        // Cleave the enemy!
        hero.cleave(enemy);
    }
    else {
        // Else (if cleave isn't ready), do your normal attack.
        hero.attack(enemy);
    }
}

```

Potrzebne przedmioty z |
--- |
attack |
cleave |
moveXY |
isReady |
findNearestEnemy |


