---
title: "Sand Snakes"
date: 2019-05-11T20:48:42.138Z
translationKey: "sand-snakes"
slug: "sand-snakes"
order: 20
tags:
  - findItems
  - hero.distanceTo
  - hero.moveXY
  - item.pos
---

> This desert canyon interferes with your findNearest glasses. You'll have to improvise!

https://codecombat.com/play/level/sand-snakes

Solution

```javascript

// This field is covered in firetraps.  Thankfully we've sent a scout ahead to find a path.  He left coins along the path so that if we always stick to the nearest coin, we'll avoid the traps.

// This canyon seems to interfere with your findNearest glasses!
// You'll need to find the nearest coins on your own.
while(true) {
    var coins = hero.findItems();
    var coinIndex = 0;
    var nearest = null;
    var nearestDistance = 9999;
    
    // Loop through all the coins to find the nearest one.
    while(coinIndex < coins.length) {
        var coin = coins[coinIndex];
        coinIndex++;
        var distance = hero.distanceTo(coin);
        // If this coin's distance is less than the nearestDistance
        if(distance < nearestDistance){
            // Set nearest to coin           
            // Set nearestDistance to distance
            nearestDistance = distance;
            nearest = coin;
        }
    }
    // If there's a nearest coin, move to its position. You'll need moveXY so you don't cut corners and hit a trap.
    if(nearest)
    hero.moveXY(nearest.pos.x, nearest.pos.y);    
}

```

Points for |
--- |
time |

Needed items with |
--- |
findItems |
distanceTo |


