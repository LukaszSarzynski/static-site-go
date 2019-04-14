---
title: "Sarven Sentry"
date: 2019-04-14T20:27:07.731Z
translationKey: "sarven-sentry"
slug: "sarven-sentry"
order: 42
tags:
  - flag
  - flag.color
  - findFlag
  - buildXY
  - fence
  - fire-trap
  - pickUpFlag
---

> Listen to your scouts to corral yaks and trap ogres.

https://codecombat.com/play/level/sarven-sentry

Solution

```javascript
// Use different colored flags to perform different tasks.

while(true) {
    var flag= hero.findFlag();    
    // If there's a flagGreen...   
        // Build a "fence" at flagGreen's position.
       // Pick up the flag!
    // If there's a flagBlack...
        // Build a "fire-trap" at flagBlack's position.
        // Pick up the flag!
        if(flag)  {
            if(flag.color == "green"){
                hero.buildXY("fence", flag.pos.x, flag.pos.y);
            }
            else if(flag.color == "black"){
                hero.buildXY("fire-trap", flag.pos.x, flag.pos.y);
            }

            hero.pickUpFlag(flag);
              
          }        
        
    // Move back to the center.
    hero.moveXY(43, 31);
}

```

Points for |
--- |
damage-dealt |

Needed items with |
--- |
findFlag |
pickUpFlag |
moveXY |


