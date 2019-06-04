---
title: "Diamond Dozen"
date: 2019-06-04T17:10:27.630Z
translationKey: "diamond-dozen"
slug: "diamond-dozen"
order: 48
tags:
  - item.value
  - hero.distanceTo
  - enemy.health
  - coin
---

> Gather coins efficientally while defeating troupes of ogres in the blazing desert.

https://codecombat.com/play/level/diamond-dozen

Solution

```javascript
// Claim the coins while defeating the marauding ogres.

function findMostHealth(enemies) {
    var target = null;
    var targetHealth = 0;
    var enemyIndex = 0;
    while(enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        if(enemy.health > targetHealth) {
            target = enemy;
            targetHealth = enemy.health;
        }
        enemyIndex += 1;
    }
    return target;
}

function valueOverDistance(item) {
    return item.value / hero.distanceTo(item);
}

// Return the item with the highest valueOverDistance(item)
function findBestItem(items) {
    var bestItem = null;
    var bestValue = 0;
    var itemsIndex = 0;
    
    // Loop over the items array.
    // Find the item with the highest valueOverDistance()
    for(var i=0; i < items.length; i++){
        var tmpItemValue =  valueOverDistance(items[i]);
        if(tmpItemValue > bestValue){
            bestValue = tmpItemValue;
            bestItem = items[i];
        }
    }
    return bestItem;
}

while(true) {
    var enemies = hero.findEnemies();
    var enemy = findMostHealth(enemies);
    if(enemy && enemy.health > 15) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    } else {
        var coins = hero.findItems();
        var coin = null;
        coin = findBestItem(coins);
        if(coin) {
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
distanceTo |
findEnemies |
findItems |
moveXY |
attack |


