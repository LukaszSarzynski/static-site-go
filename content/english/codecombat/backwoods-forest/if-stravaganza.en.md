---
title: "If-stravaganza"
date: 2018-11-16T19:40:39.498Z
translationKey: "if-stravaganza"
slug: "if-stravaganza"
order: 11
tags:
  - HelloWord
---

> Surrounded on all sides by incoming ogres! Wait for the right time to attack, then strike!

https://codecombat.com/play/level/if-stravaganza

Solution

```javascript
// Defeat the ogres from within their own camp!

while(true) {
    var enemy = hero.findNearestEnemy();
    // Use an if-statement to check if an enemy exists:
    if(enemy){
        // Attack the enemy if it exists:
        hero.attack(enemy);
    }  
}

```

Points for |
--- |
damage-taken |
damage-dealt |

Needed items with |
--- |
attack |
findNearestEnemy |


