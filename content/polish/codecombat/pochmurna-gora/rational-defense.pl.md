---
title: "Rational Defense #Poziom m_81"
date: 2019-02-25T20:49:43.925Z
translationKey: "rational-defense"
slug: "rational-defense-poziom-m_81"
order: 81
tags:
  - peasant
  - hero.command
  - friend-move
  - friend-buildXY
  - fire-trap
  - palisade
  - buildXY
---

> 

https://codecombat.com/play/level/rational-defense

Rozwiązanie

```javascript
// Protect the peasants.

// Move the peasants away from the woods.
function hideUnits(units) {
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        hero.command(unit, "move", {x: 34, y: 10 + i * 12});
    }
}

// The peasants know the order in which to build the traps.
var peasants = hero.findFriends();
var buildOrder = peasants[0].buildOrder;
var separator = ",";
// Split buildOrder with a comma (",")
// and save the result to the variable `types`:
var types =  buildOrder.split(separator);

// There are the same number of peasants as types.
for (var index = 0; index < peasants.length; index++) {
    var peasant = peasants[index];
    var x = 16;
    var y = 10 + index * 12;
    // Get buildType by `index` from the array of types:
    var target = {'x':x,'y':y};
    // Command the peasant to buildXY the buildType at x and y:
    hero.command(peasant, "buildXY",types[index], x,y);
}


// Watch for enemies and move peasants when ogres attack.
while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hideUnits(peasants);
        break;
    }
}

// Fight the ogres:
while(true)
{
    var enemy = hero.findNearestEnemy();
    if( enemy)
    hero.attack( enemy);
}

```

Potrzebne przedmioty z |
--- |
findFriends |
findNearestEnemy |
attack |


