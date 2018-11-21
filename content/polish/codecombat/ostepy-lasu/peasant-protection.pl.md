---
title: "Obrona Chłopów"
date: 2018-11-21T21:13:13.929Z
translationKey: "peasant-protection"
slug: "obrona-chlopow"
order: 25
tags:
  - distanceTo
---

> Trzymaj się Wiktora.

https://codecombat.com/play/level/peasant-protection

Rozwiązanie

```javascript
while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if (distance < 10) {
        // Attack if they get too close to the peasant.
        hero.attack(enemy);
    }
    else {
        // Else, stay close to the peasant! Use else.
        hero.moveXY(40, 38);
    }    
    
}

```

Potrzebne przedmioty z |
--- |
moveXY |
attack |
distanceTo |
findNearestEnemy |


