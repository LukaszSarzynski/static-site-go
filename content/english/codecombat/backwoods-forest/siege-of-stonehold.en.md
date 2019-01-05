---
title: "Siege of Stonehold"
date: 2019-01-05T21:31:50.632Z
translationKey: "siege-of-stonehold"
slug: "siege-of-stonehold"
order: 35
tags:
  - findFlag
  - findNearestEnemy
---

> Unlock the desert world, if you are strong enough to win this epic battle!

https://codecombat.com/play/level/siege-of-stonehold

Solution

```javascript
// Help your friends beat the minions that Thoktar sends against you.
// You'll need great equipment and strategy to win.
// Flags might help, but it's up to you–be creative!
// There is a doctor behind the fence. Move to the X to get healed!
while(true) {
    if(hero.health < 100)
    {
        hero.moveXY(19, 68);
    }
    var flag = hero.findFlag();
    if(flag)
    {
        hero.moveXY(flag.pos.x, flag.pos.y);
        var enemy = hero.findNearestEnemy();
        if(enemy)
        {
            hero.attack(enemy);
        }
    }
}

```

Points for |
--- |
damage-taken |
damage-dealt |


