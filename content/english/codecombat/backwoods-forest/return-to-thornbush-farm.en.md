---
title: "Return to Thornbush Farm"
date: 2018-12-21T22:17:51.157Z
translationKey: "return-to-thornbush-farm"
slug: "return-to-thornbush-farm"
order: 9
tags:
  - buildXY
  - fire-trap
---

> Ogres are invading again, and the only cure is more parameters!

https://codecombat.com/play/level/return-to-thornbush-farm

Solution

```javascript
// The function maybeBuildTrap defines TWO parameters!
function maybeBuildTrap(x, y) {
    // Use x and y as the coordinates to move to.
    hero.moveXY(x, y);
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        // Use buildXY to build a "fire-trap" at the given x and y.
        hero.buildXY("fire-trap", x, y);
    }
}

while(true) {
    // This calls maybeBuildTrap, with the coordinates of the top entrance.
    maybeBuildTrap(43, 50);
    
    // Now use maybeBuildTrap at the left entrance!
    maybeBuildTrap(25, 34);
    
    // Now use maybeBuildTrap at the bottom entrance!
    maybeBuildTrap(43, 20);

}    

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
buildXY |
moveXY |
findNearestEnemy |


