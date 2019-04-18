---
title: "Musztra Wabików"
date: 2019-04-18T20:42:36.675Z
translationKey: "decoy-drill"
slug: "musztra-wabikow"
order: 64
tags:
  - coin.value
  - coin
  - coin.pos
  - buildXY
  - decoy
---

> Zbierz złoto z pola by przetestować nową jednostkę do postawienia : Wabik.

https://codecombat.com/play/level/decoy-drill

Rozwiązanie

```javascript
// We are field testing a new battle unit: the decoy.
// Build 4 decoys, then report the total to Naria.
var value = 0;
var decoysBuilt = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin) {
        value += coin.value;
        // Collect the coin!
        hero.moveXY(coin.pos.x, coin.pos.y);        
    }
    // Each decoy costs 25 gold.
    // If hero.gold is greater than or equal to 25:
    if(hero.gold >= 25)
    {
        // buildXY a "decoy"
        // Add 1 to the decoysBuilt count.
        hero.buildXY("decoy", hero.pos.x, hero.pos.y);
        decoysBuilt++;
    }            
    
    if(decoysBuilt == 4) {
        // Break out of the loop when you have built 4.
        break;
    }
}

hero.say("Done building decoys!");
hero.moveXY(14, 36);
// Say how many decoys you built.
hero.say(decoysBuilt);

```

Potrzebne przedmioty z |
--- |
findNearestItem |
moveXY |
gold |
pos |
say |


