---
title: "Uderz i Zamroź"
date: 2018-12-15T21:54:13.307Z
translationKey: "hit-and-freeze"
slug: "uderz-i-zamroz"
order: 20
tags:
  - distanceTo
  - findNearestEnemy
  - cleave
---

> Uwięziony drapieżnik to nadal niebezpieczny drapieżnik.

https://codecombat.com/play/level/hit-and-freeze

Rozwiązanie

```javascript
// You are trapped. Don't move, it'll be painful.

// This function checks if the enemy is in your attack range.
function inAttackRange(enemy) {
    var distance = hero.distanceTo(enemy);
    // Almost all swords have attack range of 3.
    if (distance <= 3) {
        return true;
    } else {
        return false;
    }
}

// Attack ogres only when they're within reach.
while (true) {
    // Find the nearest enemy and store it in a variable.
    var enemy = hero.findNearestEnemy();    
    // Call inAttackRange(enemy), with the enemy as the argument
    // and save the result in the variable canAttack.
    var canAttack = inAttackRange(enemy);
    // If the result stored in canAttack is true, then attack!
    if (canAttack && hero.isReady("cleave"))
    {
        hero.cleave(enemy);
    }
    else if (canAttack)
    {
        hero.attack(enemy);
    }    
}

```

Potrzebne przedmioty z |
--- |
findNearestEnemy |
attack |
distanceTo |


