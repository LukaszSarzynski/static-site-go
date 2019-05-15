---
title: "Wishing Well"
date: 2019-05-15T21:08:10.856Z
translationKey: "wishing-well"
slug: "wishing-well"
order: 25
tags:
  - coin.value
  - coin.pos
  - findItems
  - hero.moveXY
  - hero.findNearest
---

> Gather an exact amount of coins from the wishing well!

https://codecombat.com/play/level/wishing-well

Solution

```javascript
// You need exactly 104 gold. 

var less = "Nimis";
var more = "Non satis";
var requiredGold = 104;

// This function calculates the sum of all coin values.
function sumCoinValues(coins) {
    var coinIndex = 0;
    var totalValue = 0;
    // Iterate all coins.
    while (coinIndex < coins.length) {
        totalValue += coins[coinIndex].value;
        coinIndex++;
    }
    return totalValue;
}

function collectAllCoins() {
    var item = hero.findNearest(hero.findItems());
    while (item) {
        hero.moveXY(item.pos.x, item.pos.y);
        item = hero.findNearest(hero.findItems());
    }
}

while (true) {
    var items = hero.findItems();
    // Get the total value of coins.
    var goldAmount = sumCoinValues(items);
    // If there are coins, then goldAmount isn't zero.
    if (goldAmount !== 0) {
        // If goldAmount is less than requiredGold        
            // Then say "Non satis".
        if(goldAmount< requiredGold)
            hero.say(more);            
            
        // If goldAmount is greater than requiredGold
            // Then say "Nimis".
        if(goldAmount> requiredGold)
            hero.say(less);            

        // If goldAmount is exactly equal to requiredGold
            // Then collect all coins:
        if(goldAmount == requiredGold)
            collectAllCoins();                
    }
}

```

Points for |
--- |
time |

Needed items with |
--- |
findItems |
moveXY |


