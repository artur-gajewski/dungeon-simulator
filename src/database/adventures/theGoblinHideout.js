export default {
  "id": "the-goblin-hideout",
  "title": "The Goblin Hideout",
  "description": "People of Flint are afraid of imminent threat coming from the nearby forrest. There has been sightings of increasing hostile goblin activity and the village governor needs your help. Are you willing to take on the challenge?",
  "levelDescription": "An adventure for 1st-level characters.",
  "author": "Artur Gajewski",
  "copyright": "2018",

  "rooms": [
    {
      "title": "In the Thirsty Herring...",
      "description": [
          "It is a beautiful morning at Flint. You enjoy your breakfast bacon and eggs at the Thirsty Herring's Inn.",
          "There is a rumour circulating around the village, that in a nearby forrest opening there is a cave populated with hostile goblins.", "Yesterday, you were approached by the village governor. He noticed you look like an adventurer and might be of help so he requested you to investigate if this rumour is true and if so, try your best to get rid of the problem. In return, you will would be awarded 200 gp for succesfully ending the mission."
      ],
      "buttonText": "Sure, money is always welcome!"
    },
    {
      "title": "Forrest opening",
      "description": [
          "After you packed your stuff and travelled few hours to the north, you arrive at a forrest opening the governor told you about. You notice a cave entrance on the side of the steep cliff and there doesn't seem to be any goblin activity in the area.",
          "You decide to step inside the cave..."
      ],
      "buttonText": "Alright, let's do this!"
    },
    {
      "title": "Surprise at the cave entrance",
      "description": [
          "You boldly step inside the cave and see yourself in a tunnel, which is dark and moist and you hear dripping sound echoing around. The air is getting colder and you feel a slight drift blowing into your neck."
      ],
      "trap": {
        "description": "A trip wire is couple inches off the ground, set up to a netting below the cobwebs.",
        "sc": "PERCEPTION CHECK",
        "dc": 11,
        "hp": {
          "text": "1d4",
          "roll-amount": 1,
          "roll-sides": 4
        }
      },
      "buttonText": "I survived and wish to continue"
    },
    {
      "title": "Goblin in the cave!",
      "description": [
          "You find a widening corridor in front of you. The corridor is dark but you can still see because of the light coming from the cave entrance.",
          "There is a goblin sitting in the corner of the room, chewing on a stick and trying to get all the meat possible. It is so consumed with his food that he hasn't noticed you yet."
      ],
      "npc": {
        "type": "Goblin",
        "description": "Small cutie, manic-depressive evil",
        "xp": 60,
        "speed": 30,
        "distance": -1,
        "initiative-modifier": 1,
        "ac": 14,
        "challenge": {"cr": 1, "xp": "1/25"},
        "hp": {
          "rollStatic": 5,
          "rollAmount": 1,
          "rollSides": 8,
          "rollModifier": 5
        },
        "skills": {
          "str": {"score": 8, "modifier": "+2"},
          "dex": {"score": 14, "modifier": "+2"},
          "con": {"score": 10, "modifier": "0"},
          "int": {"score": 10, "modifier": "0"},
          "wis": {"score": 8, "modifier": "-1"},
          "cha": {"score": 8, "modifier": "-1"},
        },
        "senses": [
          {
            "description": "Darkvision 60ft",
          }
        ],
        "languages": [
          {
            "description": "Goblin"
          },
          {
            "description": "Common"
          }
        ],
        "loot": [
          {
            "type": "Hemp Rope",
            "description": "a hemp rope (50ft)"
          }
        ],
        "actions": {
          "melee": [
            {
              "description": "Short Sword",
              "toHit": "+2",
              "hit": {
                "rollStatic": 2,
                "rollAmount": 1,
                "rollSides": 4,
                "rollModifier": 0
              }
            }
          ],
          "range": [
            {
              "description": "Short Bow",
              "toHit": "+3",
              "hit": {
                "rollStatic": 3,
                "rollAmount": 1,
                "rollSides": 8,
                "rollModifier": 0
              }
            }
          ]
        }
      },
      "buttonText": "I survived and wish to continue"
    },
    {
      "title": "The End",
      "description": [
          "Congratulations! You were able to defeat the goblin and you have freed the nearby village from the tyranny. You return to the village and receive 200 gp in reward as promised by the governor."
      ],
      "end": true
    }
  ]
}
