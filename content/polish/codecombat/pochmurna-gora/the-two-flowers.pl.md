---
title: "Dwa Kwiaty"
date: 2019-03-05T21:48:40.157Z
translationKey: "the-two-flowers"
slug: "dwa-kwiaty"
order: 1
tags:
  - gold
  - hero.summon
  - peasant
  - soldier
  - friend-attack
  - findFriends
---

> undefined

https://codecombat.com/play/level/the-two-flowers

Rozwiązanie

```javascript
// If the peasant is damaged, the flowers will shrink!

function findGold(number) {
  var items = hero.findItems();
  var near = 9999;
  var nearIndex = 0;

  for (var i = 0; i < items.length; ++i) {
    if (items[i].value == number) {
      if (near > hero.distanceTo(items[i])) {
        near = hero.distanceTo(items[i]);
        nearIndex = i;
      }
    }
  }

  return items[nearIndex];
}

function getBetterGold() {
  var gold3 = findGold(3);
  var gold2 = findGold(2);
  var gold1 = findGold(1);

  var cost3 = calculateCost(gold3);
  var cost2 = calculateCost(gold2);
  var cost1 = calculateCost(gold1);

  if (cost3 <= cost2 && cost3 <= cost1) return gold3;

  if (cost2 <= cost3 && cost2 <= cost1) return gold2;

  if (cost1 <= cost3 && cost1 <= cost2) return gold1;
}

function calculateCost(coin) {
  var cost = 9999;

  if (coin) cost = hero.distanceTo(coin) / coin.value;

  return cost;
}

while (true) {
  var enemy = hero.findNearestEnemy();

  if (enemy && hero.distanceTo(enemy) < 3 && hero.isReady("bash"))
    hero.bash(enemy);

  var enemy = hero.findNearestEnemy();
  if (enemy && hero.distanceTo(enemy) < 10 && hero.health > 1500)
    hero.attack(enemy);

  if (enemy && hero.distanceTo(enemy) < 3 && hero.health > enemy.health)
    hero.attack(enemy);

  while (hero.gold > hero.costOf("soldier")) {
    hero.summon("soldier");
  }
  var soldiers = hero.findFriends();
  var enemies = hero.findEnemies();
  var ien = 0;
  for (var is = 0; is < soldiers.length; ++is) {
    var enemy = enemies[ien];
    if (enemy) {
      if (soldiers[is].type != "peasant")
        hero.command(soldiers[is], "attack", enemy);
      if (ien < enemies.length - 1) ien++;
      else ien = 0;
    }
  }

  var gold = getBetterGold();
  if (gold) {
    hero.move(gold.pos);
  }
}

```

Potrzebne przedmioty z |
--- |
gold |
costOf |
summon |
findByType |
findNearest |
findItems |
move |


