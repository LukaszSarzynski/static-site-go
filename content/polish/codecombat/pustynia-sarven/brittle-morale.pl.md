---
title: "Kruche Morale"
date: 2019-05-13T21:03:56.032Z
translationKey: "brittle-morale"
slug: "kruche-morale"
order: 23
tags:
  - enemy.health
---

> Gdy dowódca zginie, wrogowie  powinni się wycofać.

https://codecombat.com/play/level/brittle-morale

Rozwiązanie

```javascript
// You have one arrow. Make it count!

// This should return the enemy with the most health.
function findStrongestEnemy(enemies) {
    var strongest = null;
    var strongestHealth = 0;
    var enemyIndex = 0;
    // While enemyIndex is less than the length of enemies:
    while(enemyIndex < enemies.length){    
        // Set an enemy variable to enemies[enemyIndex]
        var enemy = enemies[enemyIndex];
        // Increment enemyIndex
        enemyIndex++;        
        // If enemy.health is greater than strongestHealth
        if(enemy.health >strongestHealth){
            // Set `strongest` to enemy
            // Set strongestHealth to enemy.health
            strongest = enemy;
            strongestHealth = enemy.health;        
        }
    }
    return strongest;
}

var enemies = hero.findEnemies();
var leader = findStrongestEnemy(enemies);
if (leader) {
    hero.say(leader);
}

```

Potrzebne przedmioty z |
--- |
findEnemies |


