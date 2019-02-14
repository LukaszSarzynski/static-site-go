---
title: "Resource Valleys"
date: 2019-02-14T19:53:24.156Z
translationKey: "resource-valleys"
slug: "resource-valleys"
order: 15
tags:
  - coin
  - item.value
  - hero.command
  - hero.findFriends
---

> Gold Gorge, Silver Swale, and Bronze Basin! Command peasants to gather precious metals from these resource-rich valleys.

https://codecombat.com/play/level/resource-valleys

Solution

```javascript
// Collect all the coins!

function commandPeasant(peasant, coins) {
    // Find the nearest coin to the `peasant` from the `coins` array,
    for(var i =0;i<coins.length;++i)
    {
        hero.command(peasant, "move", coins[i].pos);
    }
    // Command the peasant "move" to the nearest coin.
    
}

var friends = hero.findFriends();
var peasants = {
    "Aurum":friends[0],
    "Argentum":friends[1],
    "Cuprum":friends[2]
};

while(true) {
    var items = hero.findItems();
    var goldCoins = [];
    var silverCoins = [];
    var bronzeCoins = [];
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        if(item.value == 3) {
            goldCoins.push(item);
        }
        else if(item.value ==2){
            silverCoins.push(item);
        }
        else if(item.value ==1){
            bronzeCoins.push(item);
        }
        // Put bronze and silver coins in their approriate array:
        
    }
    commandPeasant(peasants.Aurum, goldCoins);
    commandPeasant(peasants.Argentum, silverCoins);
    commandPeasant(peasants.Cuprum, bronzeCoins);
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findFriends |
findItems |


