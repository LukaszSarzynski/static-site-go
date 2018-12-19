---
title: "Passing Through"
date: 2018-12-19T20:14:54.177Z
translationKey: "passing-through"
slug: "passing-through"
order: 26
tags:
  - item.type
  - item.pos
  - pet.pos
---

> You've found a village of peaceful ogres. Don't insult them!

https://codecombat.com/play/level/passing-through

Solution

```javascript
// Don't insult this tribe of peaceful ogres.

while(true) {
    var item = hero.findNearestItem();
    if(item) {
        // If item.type IS NOT EQUAL TO "gem"
        if(item.type != "gem") {
            // Then follow your pet wolf.
            hero.moveXY(pet.pos.x, pet.pos.y);
        }
        // Else:
        else {
            // Move to the gem's position.
            hero.moveXY(item.pos.x, item.pos.y);
        }        
        
    }
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
moveXY |
findNearestItem |


