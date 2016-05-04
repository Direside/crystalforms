'use strict';

var cards = {
  "0.3": [
       {
           name: "Powza",
           colour: "red",
           art: "powza.png",
           symbol: "~",
           numbers: [4, 4, 5],
           abilities: [
               {
                   name: "Attack",
                   text: "Shatter 1."
               },
               {
                   name: "Heavy Punch",
                   text: "Crush 1, Shatter 1."
               },
               {
                   name: "Haymaker",
                   text: "Crush 2, Shatter 2."
               }
           ]
       },
       {
           name: "Skit",
           colour: "red",
           art: "skit.png",
           symbol: "~",
           numbers: [4, 4, 2],
           abilities: [
               {
                   name: "Attack",
                   text: "Shatter 1."
               },
               {
                   name: "Sword and Board",
                   text: "Shield 1. Shatter 1."
               },
               {
                   name: "Shield Bash",
                   text: "Shatter X, where X is any number of shielded crystals you have plus 2."
               }
           ]
       },
       {
           name: "Jorg",
           colour: "red",
           art: "jorg.png",
           symbol: "~",
           numbers: [4, 4, 3],
           abilities: [
               {
                   name: "Assault",
                   text: "Rupture 1."
               },
               {
                   name: "Snipe",
                   text: "Rupture 2."
               },
               {
                   name: "Snipers Nest",
                   text: "At the end of your turn you may Rupture 1. Lasts 3 turns."
               }
           ]
       },
       {
           name: "Rok'et",
           colour: "red",
           art: "roket.png",
           symbol: "~",
           numbers: [4, 4, 1],
           abilities: [
               {
                   name: "Attack",
                   text: "Shatter 1."
               },
               {
                   name: "Sacrifice",
                   text: "Discharge 1. Rupture 3"
               },
               {
                   name: "Slice",
                   text: "Shatter 3."
               }
           ]
       },
       {
         name: "Bir'dak",
         colour: "red",
         art: "birdak.png",
         symbol: "~",
         numbers: [4, 4, 4],
         abilities: [
           {
             name: "Assault",
             text: "Rupture 1"
           },
           {
             name: "Retreating Strike",
             text: "Shatter 1, Absorb 1"
           },
           {
             name: "Bombing Run",
             text: "Shatter X, Rupture X, where X is the number of fours you rolled."
           }
         ]
       },
       {
           name: "Tol",
           colour: "blue",
           art: "tol.png",
           symbol: "*",
           numbers: [2, 2, 3],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Responsive Shield",
                   text: "Shield X, where X is your current ruptured crystals total plus 2."
               },
               {
                   name: "Renewed Shielding",
                   text: "Purge X, Shield X, where X is your current ruptured crystals total plus 2."
               }
           ]
       },
       {
           name: "Swin",
           colour: "blue",
           art: "swin.png",
           symbol: "*",
           numbers: [2, 2, 1],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Battle Stance",
                   text: "Discharge 2, Shield 3."
               },
               {
                   name: "Recombiner",
                   text: "Swap current inactive crystal totals with your opponent."
               }
           ]
       },
       {
           name: "Wolf'rak",
           colour: "blue",
           art: "wolfrak.png",
           symbol: "*",
           numbers: [2, 2, 4],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Take Position",
                   text: "Shield 2, Shatter 1."
               },
               {
                   name: "Power Surge",
                   text: "All of your abilities Shatter, Rupture and Absorb double the amount of Crystals until the end of your next turn."
               }
           ]
       },
       {
           name: "Snubs",
           colour: "blue",
           art: "snubs.png",
           symbol: "*",
           numbers: [2, 2, 5],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Cleansing Aura",
                   text: "Purge 1, Shield 2."
               },
               {
                   name: "Reflection",
                   text: "Any time your Crystals would Shatter or be Ruptured, Shatter your opponents Crystals instead. Lasts two turns."
               }
           ]
       },
       {
           name: "Ruba",
           colour: "blue",
           art: "ruba.png",
           symbol: "*",
           numbers: [2, 2, 2],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Mimic",
                   text: "Choose the first ability on a crystalform you have played this round (including this one) and use it twice."
               },
               {
                   name: "Adaptation",
                   text: "Copy and use any ability on a crystalform anyone has played this round."
               }
           ]
       },
       {
           name: "Kirk",
           colour: "green",
           art: "kirk.png",
           symbol: "=",
           numbers: [3, 3, 4],
           abilities: [
               {
                   name: "Attack",
                   text: "Shatter 1."
               },
               {
                   name: "Crystal Slam",
                   text: "Purge 2, Shatter 1."
               },
               {
                   name: "Catalyst",
                   text: "At the end of your opponents turn you may Rupture 1. Lasts 3 turns."
               }
           ]
       },
       {
           name: "Treek",
           colour: "green",
           art: "treek.png",
           symbol: "=",
           numbers: [3, 3, 5],
           abilities: [
               {
                   name: "Attack",
                   text: "Shatter 1."
               },
               {
                   name: "Purifying Smack",
                   text: "Purge 1, Absorb 1, Shatter 1."
               },
               {
                   name: "Regrowth",
                   text: "Purge 2, Absorb 3."
               }
           ]
       },
       {
           name: "Gung",
           colour: "green",
           art: "gung.png",
           symbol: "=",
           numbers: [3, 3, 2],
           abilities: [
               {
                  name: "Assault",
                  text: "Rupture 1."
               },
               {
                   name: "Shield Assault",
                   text: "Rupture X, where X is the number of shielded crystals you have."
               },
               {
                   name: "Rally",
                   text: "Shield X, Shatter Y where X is the number of colours you've used this round and Y is the number many you haven't."
               }
           ]
       },
       {
           name: "Klank",
           colour: "green",
           art: "klank.png",
           symbol: "=",
           numbers: [3, 3, 1],
           abilities: [
               {
                 name: "Assault",
                 text: "Rupture 1."
               },
               {
                   name: "Bolstered Defender",
                   text: "Shield 3, Discharge 1."
               },
               {
                   name: "Counter-balance",
                   text: "Rupture 4, your opponent may Absorb 2."
               }
           ]
       },
       {
           name: "Slooge",
           colour: "green",
           art: "slooge.png",
           symbol: "=",
           numbers: [3, 3, 3],
           abilities: [
               {
                 name: "Assault",
                 text: "Rupture 1."
               },
               {
                   name: "Split Focus",
                   text: "Shatter 1, Rupture 1."
               },
               {
                   name: "Return to the Ooze",
                   text: "Shatter 1, Rupture 1, Purge 1, Absorb 1."
               }
           ]
       },
       {
           name: "Noon'sul",
           colour: "yellow",
           symbol: "+",
           numbers: [1, 1, 4],
           art: "noonsul.png",
           abilities: [
               {
                   name: "Recharge",
                   text: "Absorb 1."
               },
               {
                   name: "Life Drain",
                   text: "Absorb 1. Shatter 1."
               },
               {
                   name: "Infinite Protection",
                   text: "At the end of your turn you may Shield 1 or Absorb 1. Lasts three turns."
               }
           ]
       },
       {
           name: "Teemal",
           colour: "yellow",
           symbol: "+",
           numbers: [1, 1, 3],
           art: "teemal.png",
           abilities: [
               {
                   name: "Recharge",
                   text: "Absorb 1."
               },
               {
                   name: "Defender Aura",
                   text: "Absorb 1. Shield 1."
               },
               {
                   name: "Immunity",
                   text: "Your Cystals cannot be Shattered or Ruptured. Lasts two turns."
               }
           ]
       },
       {
               name: "Koodi",
               colour: "yellow",
               symbol: "+",
               numbers: [1, 1, 5],
               art: "koodi.png",
               abilities: [
                   {
                       name: "Recharge",
                       text: "Absorb 1."
                   },
                   {
                       name: "Hyper Heal",
                       text: "Absorb 2."
                   },
                   {
                       name: "Borrowed Time",
                       text: "You cannot be overloaded. Lasts two turns."
                   }
               ]
       },
       {
           name: "Hamn",
           colour: "yellow",
           symbol: "+",
           numbers: [1, 1, 2],
           art: "hamn.png",
           abilities: [
               {
                   name: "Recharge",
                   text: "Absorb 1."
               },
               {
                   name: "Inner Flame",
                   text: "Absorb 1, Rupture 1."
               },
               {
                   name: "Hold Strong",
                   text: "Any Crystals that would be Shattered, Crushed or Discharged are Ruptured instead. Lasts two turns."
               }
           ]
       },
       {
           name: "Scarlor",
           colour: "yellow",
           symbol: "+",
           numbers: [1, 1, 2],
           art: "sylar.png",
           abilities: [
               {
                   name: "Recharge",
                   text: "Absorb 1."
               },
               {
                   name: "Brink of Death",
                   text: "If you are within one crystal of overload, Absorb 3."
               },
               {
                   name: "Return Fire",
                   text: "If you are overloaded Shatter 4. Lasts two turns."
               }
           ]
       }
  ],
  "0.2": [
       {
           name: "Powza",
           colour: "red",
           art: "powza.png",
           symbol: "~",
           numbers: [4, 4, 5],
           abilities: [
               {
                   name: "Punch",
                   text: "Shatter 1."
               },
               {
                   name: "One, two, swing",
                   text: "Crush 1, Shatter 1. (Shatter 1 shielded crystal and 1 deactivated crystal)"
               },
               {
                   name: "Haymaker",
                   text: "Crush 3. (Shatter up to 3 shielded crystals, does not work on deactivated crystals)"
               }
           ]
       },
       {
           name: "Skit",
           colour: "red",
           art: "skit.png",
           symbol: "~",
           numbers: [4, 4, 2],
           abilities: [
               {
                   name: "Slash",
                   text: "Shatter 1."
               },
               {
                   name: "Sword and Board",
                   text: "Shield 1. Shatter 2."
               },
               {
                   name: "Bash",
                   text: "Shatter X, where X is any number of shielded crystals you have. Deactivate X shielded cystals."
               }
           ]
       },
       {
           name: "Jorg",
           colour: "red",
           art: "jorg.png",
           symbol: "~",
           numbers: [4, 4, 3],
           abilities: [
               {
                   name: "Snipe",
                   text: "Shatter 1."
               },
               {
                   name: "Poised Attack",
                   text: "Rupture 2."
               },
               {
                   name: "Overload",
                   text: "Charge 1, Shatter 3."
               }
           ]
       },
       {
           name: "Rok'et",
           colour: "red",
           art: "roket.png",
           symbol: "~",
           numbers: [4, 4, 1],
           abilities: [
               {
                   name: "Jab",
                   text: "Shatter 1."
               },
               {
                   name: "Sacrifice",
                   text: "Charge 2. Rupture 3"
               },
               {
                   name: "Slice",
                   text: "Shatter 3."
               }
           ]
       },
       {
           name: "Tol",
           colour: "blue",
           art: "tol.png",
           symbol: "*",
           numbers: [2, 2, 3],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Responsive Shielding",
                   text: "Shield X, where X is your current ruptured crystals total."
               },
               {
                   name: "Renewed Shielding",
                   text: "Purge X, Shield X, where X is your current ruptured crystals total."
               }
           ]
       },
       {
           name: "Swin",
           colour: "blue",
           art: "swin.png",
           symbol: "*",
           numbers: [2, 2, 1],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Battle Stance",
                   text: "Charge 2, Shield 2."
               },
               {
                   name: "Recombiner",
                   text: "Swap current active Crystal totals with your opponent."
               }
           ]
       },
       {
           name: "Wolf'rak",
           colour: "blue",
           art: "wolfrak.png",
           symbol: "*",
           numbers: [2, 2, 4],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Power Shielding",
                   text: "Shield 2."
               },
               {
                   name: "Power Surge",
                   text: "All of your abilities Shatter, Rupture and Deactivate double the amount of Crystals until the end of your next turn."
               }
           ]
       },
       {
           name: "Snubs",
           colour: "blue",
           art: "snubs.png",
           symbol: "*",
           numbers: [2, 2, 5],
           abilities: [
               {
                   name: "Guard",
                   text: "Shield 1"
               },
               {
                   name: "Cleansing Aura",
                   text: "Purge 2, Shield 2."
               },
               {
                   name: "Reflection",
                   text: "Any time your Crystals would Shatter, Shatter your opponents Crystals instead. Lasts until the end of your next turn."
               }
           ]
       },
       {
           name: "Kirk",
           colour: "green",
           art: "kirk.png",
           symbol: "=",
           numbers: [3, 3, 4],
           abilities: [
               {
                   name: "Energy Purge",
                   text: "Purge 1."
               },
               {
                   name: "Crystal Slam",
                   text: "Purge 2, Shatter 1."
               },
               {
                   name: "Catalyst",
                   text: "Purge X, Shatter X, where X is the number of ruptured crystals you have."
               }
           ]
       },
       {
           name: "Treek",
           colour: "green",
           art: "treek.png",
           symbol: "=",
           numbers: [3, 3, 5],
           abilities: [
               {
                   name: "Energy Purge",
                   text: "Purge 1."
               },
               {
                   name: "Purifying Smack",
                   text: "Purge 1, Shatter 1."
               },
               {
                   name: "Regrowth",
                   text: "Purge X, Deactivate X, where X is the number of ruptured crystals you have."
               }
           ]
       },
       {
           name: "Gung",
           colour: "green",
           art: "gung.png",
           symbol: "=",
           numbers: [3, 3, 2],
           abilities: [
               {
                 name: "Energy Purge",
                 text: "Purge 1."
               },
               {
                   name: "Shield Assault",
                   text: "Shatter X, where X is the number of shielded crystals you have."
               },
               {
                   name: "Rally",
                   text: "Swap any number of your crystalforms with ones from your discard pile. You must still only have one of each colour."
               }
           ]
       },
       {
           name: "Klank",
           colour: "green",
           art: "klank.png",
           symbol: "=",
           numbers: [3, 3, 1],
           abilities: [
               {
                 name: "Energy Purge",
                 text: "Purge 1."
               },
               {
                   name: "Bolstered Defender",
                   text: "Shield 3, Charge 1."
               },
               {
                   name: "Counter-balance",
                   text: "Deactivate 2 of your opponents Crystals, Rupture 3."
               }
           ]
       },
       {
           name: "Noon'sul",
           colour: "yellow",
           symbol: "+",
           numbers: [1, 1, 4],
           art: "noonsul.png",
           abilities: [
               {
                   name: "Heal",
                   text: "Deactivate 1."
               },
               {
                   name: "Life Drain",
                   text: "Deactivate 1. Shatter 1."
               },
               {
                   name: "Overload",
                   text: "Deactivate 1. At the end of your next turn, Deactivate 2."
               }
           ]
       },
       {
           name: "Teemal",
           colour: "yellow",
           symbol: "+",
           numbers: [1, 1, 3],
           art: "teemal.png",
           abilities: [
               {
                   name: "Heal",
                   text: "Deactivate 1."
               },
               {
                   name: "Defender Aura",
                   text: "Deactivate 1. Shield 1."
               },
               {
                   name: "Immunity",
                   text: "Your Cystals cannot be Shattered or Ruptured until the end of your next turn. Charge also has no effect."
               }
           ]
       },
       {
               name: "Koodi",
               colour: "yellow",
               symbol: "+",
               numbers: [1, 1, 5],
               art: "koodi.png",
               abilities: [
                   {
                       name: "Heal",
                       text: "Deactivate 1."
                   },
                   {
                       name: "Hyper Heal",
                       text: "Deactivate 2."
                   },
                   {
                       name: "Borrowed Time",
                       text: "You cannot lose the game until the end of your next turn."
                   }
               ]
       },
       {
           name: "Hamn",
           colour: "yellow",
           symbol: "+",
           numbers: [1, 1, 2],
           art: "hamn.png",
           abilities: [
               {
                   name: "Heal",
                   text: "Deactivate 1."
               },
               {
                   name: "Inner Flame",
                   text: "Deactivate 1, Rupture 1."
               },
               {
                   name: "Hold Strong",
                   text: "Any Crystals that would be Shattered or Charged are Ruptured instead. Lasts until the end of your next turn."
               }
           ]
       },
       {
           name: "Hold Strong",
           colour: "yellow",
           symbol: "Effect",
           numbers: [1],
           art: "hamn.png",
           abilities: [
               {
                   name: "Persistant Ability",
                   text: "Any Crystals that would be Shattered or Charged are Ruptured instead. Lasts until the end of your next turn."
               }
           ]
       },
       {
           name: "Borrowed Time",
           colour: "yellow",
           symbol: "Effect",
           numbers: [1],
           art: "koodi.png",
           abilities: [
               {
                   name: "Persistant Ability",
                   text: "You cannot lose the game until the end of your next turn."
               }
           ]
       },
       {
           name: "Immunity",
           colour: "yellow",
           symbol: "Effect",
           numbers: [1],
           art: "teemal.png",
           abilities: [
               {
                   name: "Persistant Ability",
                   text: "Your Cystals cannot be Shattered or Ruptured until the end of your next turn. Charge also has no effect."
               }
           ]
       },
       {
           name: "Overload",
           colour: "yellow",
           symbol: "Effect",
           numbers: [1],
           art: "noonsul.png",
           abilities: [
               {
                   name: "One-time Ability",
                   text: "At the end of your turn, Deactivate 2."
               }
           ]
       },
       {
           name: "Reflection",
           colour: "blue",
           symbol: "Effect",
           numbers: [1],
           art: "snubs.png",
           abilities: [
               {
                   name: "Persistant Ability",
                   text: "Any time your Crystals would Shatter, Shatter your opponents Crystals instead."
               }
           ]
       },
       {
           name: "Power Surge",
           colour: "blue",
           symbol: "Effect",
           numbers: [1],
           art: "snubs.png",
           abilities: [
               {
                   name: "Persistant Ability",
                   text: "All of your abilities Shatter, Rupture and Deactivate double the amount of Crystals until the end of your next turn."
               }
           ]
       }
  ],
  "0.1": [
    {
        name: "Powza",
        colour: "red",
        art: "powza.png",
        numbers: [1, 5, 6],
        abilities: [
            {
                name: "Slash",
                text: "Shatter 1."
            },
            {
                name: "Sword and Board",
                text: "Shield 1, Shatter 1."
            },
            {
                name: "Knight's Charge",
                text: "Shield 1, Shatter 2"
            }
        ]
    },
    {
        name: "Skit",
        colour: "red",
        art: "skit.png",
        numbers: [1, 5, 6],
        abilities: [
            {
                name: "Slash",
                text: "Shatter 1."
            },
            {
                name: "Sword and Board",
                text: "Rupture 1, Shatter 1."
            },
            {
                name: "Bash",
                text: "Rupture 2. Shatter 1."
            }
        ]
    },
    {
        name: "Jorg",
        colour: "red",
        art: "jorg.png",
        numbers: [1, 4, 6],
        abilities: [
            {
                name: "Snipe",
                text: "Shatter 1."
            },
            {
                name: "Poised Attack",
                text: "Rupture 2."
            },
            {
                name: "Overload",
                text: "Charge 1, Shatter 3."
            }
        ]
    },
    {
        name: "Rok'et",
        colour: "red",
        art: "roket.png",
        numbers: [2, 4, 6],
        abilities: [
            {
                name: "Jab",
                text: "Shatter 1."
            },
            {
                name: "Sacrifice",
                text: "Charge 2. Rupture 3"
            },
            {
                name: "Slice",
                text: "Shatter 3."
            }
        ]
    },
    {
        name: "Tol",
        colour: "blue",
        art: "tol.png",
        numbers: [3, 4, 6],
        abilities: [
            {
                name: "Guard",
                text: "Shield 1"
            },
            {
                name: "Rapid Assault",
                text: "Rupture 1, Shatter 1."
            },
            {
                name: "Deadly Strike",
                text: "Rupture 4, at the beginning of your next turn, rupture 4 of your Crystals."
            }
        ]
    },
    {
        name: "Swin",
        colour: "blue",
        art: "swin.png",
        numbers: [1, 2, 4],
        abilities: [
            {
                name: "Guard",
                text: "Shield 1"
            },
            {
                name: "Battle Stance",
                text: "Charge 2, Shield 2."
            },
            {
                name: "Recombiner",
                text: "Swap current active Crystal totals with your opponent."
            }
        ]
    },
    {
        name: "Wolf'rak",
        colour: "blue",
        art: "wolfrak.png",
        numbers: [1, 5, 6],
        abilities: [
            {
                name: "Guard",
                text: "Shield 1"
            },
            {
                name: "Power Shielding",
                text: "Shield 2."
            },
            {
                name: "Power Surge",
                text: "All of your abilities Shatter, Rupture and Deactivate double the amount of Crystals until the end of your next turn."
            }
        ]
    },
    {
        name: "Snubs",
        colour: "blue",
        art: "snubs.png",
        numbers: [3, 5, 6],
        abilities: [
            {
                name: "Guard",
                text: "Shield 1"
            },
            {
                name: "Cleansing Aura",
                text: "Deactivate all of your ruptured Crystals, Shield 1."
            },
            {
                name: "Reflection",
                text: "Any time your Crystals would Shatter or be Charged, Shatter your opponents Crystals instead. Lasts until the end of your next turn."
            }
        ]
    },
    {
        name: "Kirk",
        colour: "green",
        art: "kirk.png",
        numbers: [1, 4, 6],
        abilities: [
            {
                name: "Energy Charge",
                text: "Charge 1."
            },
            {
                name: "Crystal Slam",
                text: "Rupture 1, Shatter 1."
            },
            {
                name: "Catalyst",
                text: "At the end of each players turn, you may Shatter 1 of your opponents crystals."
            }
        ]
    },
    {
        name: "Treek",
        colour: "green",
        art: "treek.png",
        numbers: [2, 3, 5],
        abilities: [
            {
                name: "Energy Charge",
                text: "Charge 1."
            },
            {
                name: "Smack and Block",
                text: "Shield 1, Shatter 1."
            },
            {
                name: "Regrowth",
                text: "Deactivate your ruptured crystals. Shield X, where X is the number of ruptured crystals you deactivated."
            }
        ]
    },
    {
        name: "Gung",
        colour: "green",
        art: "gung.png",
        numbers: [2, 3, 5],
        abilities: [
            {
                name: "Energy Charge",
                text: "Charge 1."
            },
            {
                name: "Shield Assault",
                text: "Shatter X, where X is the number of shielded Crystals you have."
            },
            {
                name: "Rally",
                text: "Return all of your Crystalforms to your hand, discard down to 4 at the end of your next turn."
            }
        ]
    },
    {
        name: "Klank",
        colour: "green",
        art: "klank.png",
        numbers: [2, 4, 5],
        abilities: [
            {
                name: "Energy Charge",
                text: "Charge 1."
            },
            {
                name: "Bolstered Defender",
                text: "Shield 3, Charge 1."
            },
            {
                name: "Counter-balance",
                text: "Deactivate 2 of your opponents Crystals, Rupture 3."
            }
        ]
    },
    {
        name: "Noon'sul",
        colour: "yellow",
        numbers: [4, 5, 6],
        art: "noonsul.png",
        abilities: [
            {
                name: "Heal",
                text: "Deactivate 1."
            },
            {
                name: "Life Drain",
                text: "Deactivate 1. Shatter 1."
            },
            {
                name: "Overload",
                text: "Deactivate 1. At the end of your next turn, Deactivate 2."
            }
        ]
    },
    {
        name: "Teemal",
        colour: "yellow",
        numbers: [1, 2, 3],
        art: "teemal.png",
        abilities: [
            {
                name: "Heal",
                text: "Deactivate 1."
            },
            {
                name: "Defender Aura",
                text: "Deactivate 1. Shield 1."
            },
            {
                name: "Immunity",
                text: "Your Cystals cannot be Shattered or Ruptured until the end of your next turn. Charge also has no effect."
            }
        ]
    },
    {
            name: "Koodi",
            colour: "yellow",
            numbers: [3, 4, 5],
            art: "koodi.png",
            abilities: [
                {
                    name: "Heal",
                    text: "Deactivate 1."
                },
                {
                    name: "Hyper Heal",
                    text: "Deactivate 2."
                },
                {
                    name: "Borrowed Time",
                    text: "You cannot lose the game until the end of your next turn."
                }
            ]
    },
    {
        name: "Hamn",
        colour: "yellow",
        numbers: [3, 4, 5],
        art: "hamn.png",
        abilities: [
            {
                name: "Heal",
                text: "Deactivate 1."
            },
            {
                name: "Inner Flame",
                text: "Deactivate 1, Rupture 1."
            },
            {
                name: "Hold Strong",
                text: "Any Crystals that would be Shattered or Charged are Ruptured instead. Lasts until the end of your next turn."
            }
        ]
    }
  ],
};
