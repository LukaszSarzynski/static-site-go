---
title: "Studnia Życzeń"
date: 2019-05-15T21:08:10.858Z
translationKey: "wishing-well"
slug: "studnia-zyczen"
order: 25
tags:
  - coin.value
  - coin.pos
  - findItems
  - hero.moveXY
  - hero.findNearest
---

> Zdobądź dokładnią ilośc monet ze studni życzeń!

https://codecombat.com/play/level/wishing-well

Rozwiązanie

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

Potrzebne przedmioty z |
--- |
findItems |
moveXY |


