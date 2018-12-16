---
title: "Słona Ziemia"
date: 2018-12-16T21:18:42.339Z
translationKey: "salted-earth"
slug: "slona-ziemia"
order: 33
tags:
  - item.type
  - item.pos
  - enemy.type
---

> Broń początku  leśnego osadnictwa.

https://codecombat.com/play/level/salted-earth

Rozwiązanie

```javascript
// Ogres are attacking a nearby settlement!
// Be careful, though, for the ogres have sown the ground with poison.
// Gather coins and defeat the ogres, but avoid the burls and poison!

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy.type == "munchkin" || enemy.type == "thrower") {
        hero.attack(enemy);
    }
    var item = hero.findNearestItem();
    // Check the item type to make sure the hero doesn't pick up poison!
    // If the item's type is "gem" or "coin":
    if(item.type == "gem" || item.type == "coin")
        // Then move and pick it up:
        {
            hero.moveXY(item.pos.x, item.pos.y);
        }
        
    
}

```

Potrzebne przedmioty z |
--- |
findNearestItem |
findNearestEnemy |
moveXY |
attack |


