---
title: "Trzymaj gardę"
date: 2018-11-17T22:23:37.012Z
translationKey: "back-to-back"
slug: "trzymaj-garde"
order: 13
tags:
  - HelloWord
---

> Patroluj wejście do wioski , ale pozostań w pozycji defensywnej.

https://codecombat.com/play/level/back-to-back

Rozwiązanie

```javascript
// Stay in the middle and defend!

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        // Either attack the enemy...
        hero.attack(enemy);
    }
    else {
        // ... or move back to your defensive position.
        hero.moveXY(40, 34);
    }
}

```

Potrzebne przedmioty z |
--- |
moveXY |
attack |
findNearestEnemy |


