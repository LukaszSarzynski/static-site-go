---
title: "Salted Earth"
date: 2018-12-16T21:18:42.337Z
translationKey: "salted-earth"
slug: "salted-earth"
order: 33
tags:
  - item.type
  - item.pos
  - enemy.type
---

> Defend the start of a forest settlement.

https://codecombat.com/play/level/salted-earth

Solution

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

Points for |
--- |
damage-dealt |
damage-taken |

Needed items with |
--- |
findNearestItem |
findNearestEnemy |
moveXY |
attack |


