---
title: "Village Rover"
date: 2018-11-26T21:58:27.146Z
translationKey: "village-rover"
slug: "village-rover"
order: 29
tags:
  - HelloWord
---

> Patrolling the village can get repetitive... functions make it easier!

https://codecombat.com/play/level/village-rover

Solution

```javascript
// This defines a function called findAndAttackEnemy
function findAndAttackEnemy() {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
    }
}

// This code is not part of the function.
while(true) {
    // Now you can patrol the village using findAndAttackEnemy
    hero.moveXY(35, 34);
    findAndAttackEnemy();
    
    // Now move to the right entrance.
    hero.moveXY(60, 31);
    // Use findAndAttackEnemy
    findAndAttackEnemy();
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
attack |
findNearestEnemy |
moveXY |


