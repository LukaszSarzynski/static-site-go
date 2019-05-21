---
title: "Cursed Valley"
date: 2019-05-21T21:22:33.560Z
translationKey: "cursed-valley"
slug: "cursed-valley"
order: 55
tags:
  - enemy.type
  - ogres
  - skeleton
  - item.type
  - potion
  - hero.attack
  - hero.moveXY
  - item.pos
  - hero.health
---

> It's hot, too hot. Don't let it distract from your mission.

https://codecombat.com/play/level/cursed-valley

Solution

```javascript
// The hot sun is draining the hero's health!

while (true) {
    var enemy = hero.findNearestEnemy();
    // Attack if enemy exists AND enemy.team is "ogres"
    // AND enemy.type is "skeleton"
    if (enemy && enemy.team === "ogres" && enemy.type === "skeleton") {
        hero.attack(enemy);
    }
    
    var item = hero.findNearestItem();
    // Collect if item exists AND item.type is "potion"
    // AND hero.health is less than hero.maxHealth / 4
    if(item && hero.health < hero.maxHealth /4 && item.type == "potion"){
        hero.moveXY(item.pos.x, item.pos.y);
    }
    else if (item && item.type != "potion") {
        hero.moveXY(item.pos.x, item.pos.y);
    }    
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findNearestEnemy |
attack |
findNearestItem |
health |
maxHealth |
moveXY |


