---
title: "Shine Getter"
date: 2019-05-08T20:42:21.733Z
translationKey: "shine-getter"
slug: "shine-getter"
order: 18
tags:
  - coin.value
  - coin.pos
  - hero.moveXY
  - findItems
---

> Filter only gold coins to get the most money in a short time.

https://codecombat.com/play/level/shine-getter

Solution

```javascript
// To grab the most gold quickly, just go after gold coins.

while (true) {
    var coins = hero.findItems();
    var coinIndex = 0;

    // Wrap this into a loop that iterates over all coins.
    while (coinIndex < coins.length) {
        var coin = coins[coinIndex];
        // Gold coins are worth 3.
        if (coin.value == 3) {
            // Only pick up gold coins.
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
        coinIndex++;
    }
}

```

Points for |
--- |
time |

Needed items with |
--- |
findItems |


