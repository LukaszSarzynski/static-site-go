---
title: "Znaki i Przepowiednie"
date: 2019-03-19T21:57:47.751Z
translationKey: "signs-and-portents"
slug: "znaki-i-przepowiednie"
order: 8
tags:
  - HelloWord
---

> Ucieknij z miejsca podczas gdy twoi sojusznicy powstrzymują fale ogrów!

https://codecombat.com/play/level/signs-and-portents

Rozwiązanie

```javascript
// Your goal is to get to the right side of the map alive.
// You don't need to fight the ogres, just move! Your allies will protect you.
hero.moveRight();
hero.moveRight();
hero.moveUp();
// Use the movement commands to reach the red X!
hero.moveRight(3);
while (true) {
    hero.moveDown();
    hero.moveRight();
}

```

Potrzebne przedmioty z |
--- |
moveRight |


