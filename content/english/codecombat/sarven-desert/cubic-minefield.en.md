---
title: "Cubic Minefield"
date: 2019-05-29T21:45:59.634Z
translationKey: "cubic-minefield"
slug: "cubic-minefield"
order: 51
tags:
  - Math.pow() 
---

> Find the path through the minefield with the Power of Mathematics.

https://codecombat.com/play/level/cubic-minefield

Solution

```javascript
// Walk through the minefield

// This function returns the number multiplied by the times
function mult(number, times) {
    var total = 0;
    while (times > 0) {
        total += number;
        times--;
    }
    return total;
}

// This function returns the number to the exponent power.
function power(number, exponent) {
    var total = 1;
    // Complete the function.
    for(var p=exponent; p > 0; p--) {
        total *= number;
    }
    return total;
}

// Don't change the following code
// You can find coefficients for the equation on the tower
var tower = hero.findFriends()[0];
var a = tower.a;
var b = tower.b;
var c = tower.c;
var d = tower.d;
var x = hero.pos.x;

while (true) {
    // To find the path use a cubic equation
    var y = a * power(x, 3) + b * power(x, 2) + c * power(x, 1) + d * power(x, 0);
    hero.moveXY(x, y);
    x = x + 5;
}

```

Points for |
--- |
time |

Needed items with |
--- |
pos |
moveXY |
findFriends |


