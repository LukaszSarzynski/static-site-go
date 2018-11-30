---
title: "Przyjaciele i Wrogowie"
date: 2018-11-30T21:51:03.149Z
translationKey: "friend-and-foe"
slug: "przyjaciele-i-wrogowie"
order: 0
tags:
  - findNearestFriend
---

> Brawl w lesie !  Przywołaj do siebie  przyjaciół spośród wrogów i przygotuj się do bitwy.

https://codecombat.com/play/level/friend-and-foe

Rozwiązanie

```javascript
// Peasants and peons are gathering in the forest.
// Command the peasants to battle and the peons to go away!

while(true) {
    var friend = hero.findNearestFriend();
    if(friend) {
        hero.say("To battle, " + friend.id + "!");
    }
    // Now find the nearest enemy and tell them to go away.
    var enemy = hero.findNearestEnemy();
    if(enemy)
    {
        hero.say("go away, " + enemy.id + "!");
    }    
}
```

Potrzebne przedmioty z |
--- |
findNearestEnemy |


