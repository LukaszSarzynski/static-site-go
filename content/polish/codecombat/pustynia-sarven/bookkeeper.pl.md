---
title: "Księgowy"
date: 2019-05-23T21:25:24.711Z
translationKey: "bookkeeper"
slug: "ksiegowy"
order: 9
tags:
  - findNearestEnemy
  - hero.attack
  - enemy.health
  - hero.time
  - findNearestItem
  - item.pos
---

> Użyj swojego zegarka do śledzenia czasu, kiedy liczysz zwycięstwa i złoto.

https://codecombat.com/play/level/bookkeeper

Rozwiązanie

```javascript
// This function allows to fight until the certain time
// and report about defeated enemies.
function fightAndReport(untilTime) {
    var defeated = 0;
    while (true) {
        var enemy = hero.findNearestEnemy();
        if (enemy) {
            hero.attack(enemy);
            if (enemy.health <= 0) {
                defeated += 1;
            }
        }
        if (hero.time > untilTime) {
            break;
        }
    }
    hero.moveXY(59, 33);
    hero.say(defeated);
}

function getgold(timestop)
{
    while (true) {
        var item = hero.findNearestItem();
        if(item)
        hero.moveXY(item.pos.x, item.pos.y);
        
        if(hero.time > timestop)
        break;
    }
}

// Fight 15 seconds and tell Naria how many enemies you defeated.
fightAndReport(15);

// Collect coins until the clock reaches 30 seconds.
getgold(30);

// Tell Naria how much gold you collected.
hero.say(hero.gold);

// Fight enemies until the clock reaches 45 seconds.
fightAndReport(45);

```

Potrzebne przedmioty z |
--- |
findNearestEnemy |
attack |
time |
moveXY |
say |
findNearestItem |
gold |


