---
title: "Uneasy Truce #Poziom m_82"
date: 2019-03-03T21:17:42.610Z
translationKey: "uneasy-truce"
slug: "uneasy-truce-poziom-m_82"
order: 82
tags:
  - enemy.pos
  - summon
  - soldier
---

> 

https://codecombat.com/play/level/uneasy-truce

Rozwiązanie

```javascript
// Summon one soldier for every ogre to the south of you!
// Don't count the ogres to the north!

// Accept an array of units as the parameter.
// Return only the units to the south of the hero.
function findSouthernUnits(units) {
    var southernUnits = [];
    for(var i=0; i < units.length; i++) {
        var unit = units[i];
        if(unit.pos.y < hero.pos.y) {
            // Add the unit to the array with: push()
            southernUnits.push(unit);
        }
    }
    return southernUnits;
}

while(true) {
    var friends = hero.findFriends();
    var enemies = hero.findEnemies();
    // Use findSouthernUnits to get enemies to the south.
    var es = findSouthernUnits(enemies);
    // If there are more ogres south of you than friends.
    if(es.length > friends.length){
        // Then summon another "soldier".
        hero.summon("soldier");
    }
}

```

Potrzebne przedmioty z |
--- |
summon |
findFriends |
findEnemies |

