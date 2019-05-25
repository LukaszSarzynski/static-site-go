---
title: "Upoluj i zmień"
date: 2019-05-25T21:28:51.981Z
translationKey: "bait-and-switch"
slug: "upoluj-i-zmien"
order: 5
tags:
  - buildXY
  - decoy
  - hero.gold
---

> undefined

https://codecombat.com/play/level/bait-and-switch

Rozwiązanie

```javascript
// Lure ogres into traps with decoys.

// This function has the hero collect gold until they have enoughGold.
function collectUntil(enoughGold) {
    // While hero.gold is less than enoughGold:
    while(hero.gold < enoughGold){
        // Find a coin and take it: 
        var item = hero.findNearestItem();
        if(item)
        {
            hero.moveXY(item.pos.x, item.pos.y);
        }
    }    
}

// Collect 25 gold for one decoy and build it on the red mark.
collectUntil(25);
hero.buildXY("decoy", 40, 52);
// It's better to hide.
hero.moveXY(20, 52);
// Use the collectUntil function to collect 50 gold:
collectUntil(50);
// Build a "decoy" on the bone mark:
hero.buildXY("decoy", 68, 22);
// Build a "decoy" on the wooden mark:
hero.buildXY("decoy", 30, 20);

```

Potrzebne przedmioty z |
--- |
gold |
moveXY |


