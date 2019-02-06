---
title: "How much?"
date: 2019-02-06T22:11:50.678Z
translationKey: "how-much"
slug: "how-much"
order: 98
tags:
  - rectangle
---

> Do you think it's easy to grow the perfect lawn in the mountains? 

https://codecombat.com/play/level/how-much

Solution

```javascript
// Calculate the perimeter and the area of the garden
// and pay the fair price for that.

// The prices for fences and lawns.
var fencePrice = 3; // per meter.
var lawnPrice = 2; // per square meter.
// You need the foreman.
var foreman = hero.findNearest(hero.findFriends());
var corners = foreman.corners;
// Get the information about the garden.
var bottomLeft = corners.bottomLeft;
var topRight = corners.topRight;
// Calculate the size of the garden.
var width = topRight.x - bottomLeft.x;
var height = topRight.y - bottomLeft.y;
// Find the perimeter of the garden (meters):
var perimeter = 2* width + 2 * height;
// Use fencePrice and calculate the fence cost:
var fenceCost = perimeter * fencePrice;
// Find the area of the garden (square meters):
var area = width * height;
// Use lawnPrice and calculate the lawn cost:
var  lawnCost = area * lawnPrice;

// The total cost is the sum of the fence and the lawn costs
var totalCost =lawnCost + fenceCost; // Δ Update this with the final price!

hero.say("The total price is " + totalCost);
// Pay the bill.
foreman.bill(totalCost);

```

Points for |
--- |
gold-collected |

Needed items with |
--- |
findFriends |
findNearest |


