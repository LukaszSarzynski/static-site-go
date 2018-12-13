---
title: "Blind Distance"
date: 2018-12-13T21:44:50.329Z
translationKey: "blind-distance"
slug: "blind-distance"
order: 19
tags:
  - findNearestEnemy
  - distanceTo
---

> We are ready to shoot! Distance - 300 kilometres! Direction angle - ... Who cares about direction!?

https://codecombat.com/play/level/blind-distance

Solution

```javascript
// Tell the wizard the distance to the coming ogres.

// This function finds the nearest enemy and returns the distance to it.
function nearestEnemyDistance() {
    var enemy = hero.findNearestEnemy();
    // If there is no enemy, the function returns 0.
    var result = 0;
    if (enemy) {
        result = hero.distanceTo(enemy);
    }
    return result;
}

while (true) {
    // Call nearestEnemyDistance() and
    // save the result in the variable enemyDistance.
    var enemyDistance = nearestEnemyDistance();
    // If the enemyDistance is greater than 0: 
    if(enemyDistance > 0){
        // Say the value of enemyDistance variable.
        hero.say(enemyDistance);
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
distanceTo |
findNearestEnemy |


