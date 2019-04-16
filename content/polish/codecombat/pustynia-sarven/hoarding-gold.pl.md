---
title: "Gromadzenie Złota"
date: 2019-04-16T20:36:43.072Z
translationKey: "hoarding-gold"
slug: "gromadzenie-zlota"
order: 63
tags:
  - coin
  - coin.value
  - coin.pos
  - findNearestItem

---

> Możesz przepaść na zawsze na pustyni, gdy pozwolisz mirażowi chciwości by cię poprowadził.

https://codecombat.com/play/level/hoarding-gold

Rozwiązanie

```javascript
// Collect 25 gold, and then tell Naria the total.
// Use break to stop collecting when totalGold >= 25.
hero.moveXY(58,23);
var totalGold = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin && totalGold +coin.value < 26) {
        // Pick up the coin.
        hero.moveXY(coin.pos.x, coin.pos.y);
        // Add the coin's value to totalGold.
        // Get its value with:  coin.value
        totalGold += coin.value;
        //hero.say(totalGold);
    }
    if (totalGold >= 25) {
        // This breaks out of the loop to run code at the bottom.
        // The loop ends, code after the loop will run.
        hero.moveXY(45, 26);
        break;
    }
}

// Done collecting gold!
//hero.moveXY(58, 33);
// Go to Naria and say how much gold you collected.
hero.say(totalGold);

```


