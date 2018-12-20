---
title: "Logical Path"
date: 2018-12-20T20:41:35.917Z
translationKey: "logical-path"
slug: "logical-path"
order: 42
tags:
  - HelloWord
---

> Use logic to follow the wizard to his treasure.

https://codecombat.com/play/level/logical-path

Solution

```javascript
// Get two secret true/false values from the wizard.
// Check the guide for notes on how to write logical expressions.
hero.moveXY(14, 24);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();

// If BOTH secretA and secretB are true, take the high path; otherwise, take the low path.
var secretC = secretA && secretB;
if (secretC)
    hero.moveXY(20, 33);
else
    hero.moveXY(20, 15);
hero.moveXY(26, 24);

// If EITHER secretA or secretB is true, take the high path.
if(secretA || secretB)
    hero.moveXY(32, 33);
else 
    hero.moveXY(32, 15);
hero.moveXY(38, 24);

// If secretB is NOT true, take the high path.
if(!secretB)
    hero.moveXY(44, 32);
else 
    hero.moveXY(44, 15);
hero.moveXY(54, 24);

```

Points for |
--- |
time |

Needed items with |
--- |
moveXY |


