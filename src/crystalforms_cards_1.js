'use strict';

var cards = {
"0.1":
  [
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
"0.2":
    [
      {
          name: "Powza",
          colour: "red",
          art: "powza.png",
          symbol: "~",
          numbers: [4, 5],
          abilities: [
              {
                  name: "Punch",
                  text: "Shatter 1."
              },
              {
                  name: "One, two swing",
                  text: "Crush 2. (If the opponent has any shielded crystals deactivate 2 of them, then shatter it)"
              },
              {
                  name: "Haymaker",
                  text: "Crush 3. (If the opponent has any shielded crystals deactivate 3 of them, then shatter them)"
              }
          ]
      },
      {
          name: "Skit",
          colour: "red",
          art: "skit.png",
          symbol: "~",
          numbers: [4, 2],
          abilities: [
              {
                  name: "Slash",
                  text: "Shatter 1."
              },
              {
                  name: "Sword and Board",
                  text: "Shield 2. Shatter 1."
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
          numbers: [4, 3],
          abilities: [
              {
                  name: "Snipe",
                  text: "Shatter 1."
              },
              {
                  name: "Poised Attack",
                  text: "Rupture 1."
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
          symbol: "*",
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
          symbol: "*",
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
          symbol: "*",
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
          symbol: "*",
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
          symbol: "=",
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
          symbol: "=",
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
          symbol: "=",
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
          symbol: "=",
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
          symbol: "+",
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
          symbol: "+",
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
              symbol: "+",
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
          symbol: "+",
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
    ]
};
