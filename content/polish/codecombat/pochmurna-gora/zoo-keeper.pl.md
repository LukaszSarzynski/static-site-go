---
title: "Opiekun w Zoo"
date: 2019-03-08T22:15:13.765Z
translationKey: "zoo-keeper"
slug: "opiekun-w-zoo"
order: 32
tags:
  - hero.summon
  - soldier
  - friend-move
  - friend-defend
---

> Chroń klatkę z Yetim od Ogrów sabotażystów

https://codecombat.com/play/level/zoo-keeper

Rozwiązanie

```javascript
// Protect the cage.
// Put a soldier at each X.
var points = [];
points[0] = {
    x: 33,
    y: 42
};
points[1] = {
    x: 47,
    y: 42
};
points[2] = {
    x: 33,
    y: 26
};
points[3] = {
    x: 47,
    y: 26
};
// 1. Collect 80 gold.
while (hero.gold < 80) {
    var item = hero.findNearestItem();
    if (item)
        hero.move(item.pos);
}
// 2. Build 4 soldiers.
for (var i = 0; i < 4; i++) {
    hero.summon("soldier");
}
// 3. Send your soldiers into position.
var friends = hero.findFriends();
for (var j = 0; j < friends.length; j++) {
    hero.command(friends[j], "move", points[j]);    
}
while (true) {
    if (hero.time > 11 && hero.time < 20) {
        for (var j = 0; j < friends.length; j++) {
            hero.command(friends[j], "defend", points[j]);
        }
        var item = hero.findNearestItem();
        if (item)
            hero.move(item.pos);
    }
}

```

Potrzebne przedmioty z |
--- |
gold |
findNearest |
findItems |
move |
summon |
findFriends |


