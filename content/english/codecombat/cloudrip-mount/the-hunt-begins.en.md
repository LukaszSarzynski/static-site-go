---
title: "The Hunt Begins"
date: 2019-01-22T21:48:21.682Z
translationKey: "the-hunt-begins"
slug: "the-hunt-begins"
order: 4
tags:
  - enemy.size
---

> Help Senick find a Burleous Majorus. Find the average size of the Burl population to use as a baseline!

https://codecombat.com/play/level/the-hunt-begins

Solution

```javascript
// Senick is trying to find the elusive Burleous Majoris!
// But he doesn't know how big a Burleous Majoris would be...
// Find the average size of this burl population to use as a baseline!

// This function returns average size of all the burls in an array.
function averageSize(burls) {
    var sum = sumSize(burls);
    // Remember the average is the sum of the parts divided by the amount!
    return sum / burls.length;
}

// This function should return the sum of all the burls sizes.
function sumSize(burls) {
    var iSum = 0;
    // Implement the sum function using the burls 'size':
    for(var i=0; i<burls.length; i++)
    {
        iSum += burls[i].size;
    }
    return iSum;
}

while(true) {
    // Find the average size of the burls by calling the 'averageSize' function.
    // Say the average size of the seen burls!
    hero.say(averageSize(hero.findEnemies()));
}

```

Needed items with |
--- |
findEnemies |


