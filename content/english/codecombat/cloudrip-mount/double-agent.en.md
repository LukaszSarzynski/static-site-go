---
title: "Double Agent"
date: 2019-01-15T21:05:06.258Z
translationKey: "double-agent"
slug: "double-agent"
order: 92
tags:
  - pet
  - pet.moveXY
  - pet.on
  - pet.pos
  - hear
---

> How to use silence to say something important.

https://codecombat.com/play/level/double-agent

Solution

```javascript
// Find the hidden number in the agent's message to escape.
// Count the number of trailing and leading whitespaces.

// This function returns the coordinates of the n-th passage.
function passagePosByNum(n) {
    return {x: 60, y: n * 12 + 8};
}

function onHear(event) {
    // The original message.
    var sMess = event.message;
    // Trim the message:
    var sMessTrim = sMess.trim();
    // The hidden number is the difference of lengths:
    var nHiddenNumber = sMess.length - sMessTrim.length;
    // Use passagePosByNum to find the passage to enter:
    var oPassage = passagePosByNum(nHiddenNumber);
    // Move the pet to the entrance of the passage:
    pet.moveXY(oPassage.x, oPassage.y );
    // Move the pet to the left edge of the map:
    pet.moveXY(2, oPassage.y );
}

pet.on("hear", onHear);

// The hero should follow the pet.
while(true) {
    hero.move(pet.pos);
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
move |


