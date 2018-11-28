---
title: "Backwoods Fork"
date: 2018-11-28T21:03:31.543Z
translationKey: "backwoods-fork"
slug: "backwoods-fork"
order: 42
tags:
  - HelloWord
---

> Use a custom function with parameters to simplify your code!

https://codecombat.com/play/level/backwoods-fork

Solution

```javascript
// Use the checkAndAttack function to make your code easy to read.

// This function has a parameter.
// An parameter is a way of passing information into a function.
function checkAndAttack(target) {
    // The 'target' parameter is just a variable!
    // It contains the argument when the function was called.
    if(target) {
        hero.attack(target);
    }
    hero.moveXY(43, 34);
}

while(true) {
    hero.moveXY(58, 52);
    var topEnemy = hero.findNearestEnemy();
    // Using the checkAndAttack function with the topEnemy variable.
    checkAndAttack(topEnemy);
    
    // Move to the bottom X mark.
    hero.moveXY(58, 16);
    // Create a variable named bottomEnemy and find the nearest enemy.
    var bottomEnemy = hero.findNearestEnemy();
    // Use the checkAndAttack function, and include the bottomEnemy variable.
    checkAndAttack(bottomEnemy);
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
moveXY |
findNearestEnemy |
attack |


