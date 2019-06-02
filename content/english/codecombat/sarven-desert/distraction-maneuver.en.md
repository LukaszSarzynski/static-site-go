---
title: "Distraction Maneuver"
date: 2019-06-02T18:56:39.111Z
translationKey: "distraction-maneuver"
slug: "distraction-maneuver"
order: 66
tags:
  - hero.distanceTo
  - hero.attack
---

> Why does that ogre run in opposite direction? Oh... Catch it!!!

https://codecombat.com/play/level/distraction-maneuver

Solution

```javascript
// Protect the peasants!

// This is like findNearestEnemy but vice versus.
function findFurthestEnemy() {
    var enemies = hero.findEnemies();
    var furthestEnemy = null;
    var maxDistance = 0;
    var enemyIndex = 0;
    while (enemyIndex < enemies.length) {
        var currentEnemy = enemies[enemyIndex];
        // Find the distance to currentEnemy:
        var dis = hero.distanceTo(currentEnemy);
        // If that distance greater than maxDistance:
        if(dis > maxDistance){
            // Reassign furthestEnemy to currentEnemy:
            furthestEnemy = currentEnemy;
            // Reassign maxDistance to the distance:
            dis = maxDistance;
        }
        enemyIndex++;
    }
    return furthestEnemy;
    
}

while(true) {
    // To protect peasants, hunt for furthest ogres.
    var furthestOgre = findFurthestEnemy();
    if (furthestOgre) {
        while (furthestOgre.health > 0) {
            hero.attack(furthestOgre);
        }
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
attack |
distanceTo |
findEnemies |


