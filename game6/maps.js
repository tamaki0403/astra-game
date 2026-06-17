// maps.js
const TILE={GRASS:0,TALL:1,DIRT:2,PATH:3,WATER_PASS:4,SAND:5,SNOW:6,ROCK:7,ICE:8,FLOOR:9,TREE:10,WATER:11,WALL:12,ROCK_OBJ:13,FENCE:14,WALL_IN:15};
const T=TILE;
function isPassable(id){return id<10;}
function hasEncounter(id){return id===T.TALL;}
const TILE_IMGS={0:"tiles/grass.png",1:"tiles/tall_grass.png",2:"tiles/dirt.png",3:"tiles/path.png",4:"tiles/water.png",5:"tiles/sand.png",6:"tiles/snow.png",7:"tiles/rock_floor.png",8:"tiles/ice.png",9:"tiles/floor.png",10:"tiles/tree_tile.png",11:"tiles/water.png",12:"tiles/wall.png",13:"tiles/rock_floor.png",14:"tiles/wall.png",15:"tiles/wall.png"};
const G=T.GRASS,TL=T.TALL,D=T.DIRT,P=T.PATH,W=T.WATER,S=T.SAND,SN=T.SNOW,R=T.ROCK,IC=T.ICE,FL=T.FLOOR,TR=T.TREE,WA=T.WALL,RO=T.ROCK_OBJ,FE=T.FENCE,WI=T.WALL_IN;
const MAPS={
  "hoshino": {
    "name": "ホシノタウン",
    "w": 7,
    "h": 7,
    "playerStart": {
      "x": 3,
      "y": 3
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#cfcfcf",
    "ground": [
      [
        12,
        12,
        12,
        3,
        12,
        12,
        12
      ],
      [
        12,
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        12,
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        12,
        3,
        3,
        3,
        3,
        3,
        3
      ],
      [
        12,
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        12,
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        12,
        12,
        12,
        3,
        12,
        12,
        12
      ]
    ],
    "objects": [
      {
        "x": 3,
        "y": 2,
        "type": "building",
        "sprite": "buildings/lab.png",
        "id": "lab"
      },
      {
        "x": 2,
        "y": 4,
        "type": "building",
        "sprite": "buildings/house.png",
        "id": "house"
      },
      {
        "x": 4,
        "y": 4,
        "type": "building",
        "sprite": "buildings/house.png",
        "id": "house"
      }
    ],
    "npcs": [],
    "events": [
      {
        "x": 3,
        "y": 2,
        "type": "door",
        "target": {
          "map": "hoshino_lab",
          "x": 2,
          "y": 3
        }
      },
      {
        "x": 4,
        "y": 4,
        "type": "door",
        "target": {
          "map": "hoshino_house1",
          "x": 2,
          "y": 3
        }
      },
      {
        "x": 2,
        "y": 4,
        "type": "door",
        "target": {
          "map": "hoshino_house2",
          "x": 2,
          "y": 3
        }
      },
      {
        "x": 3,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "route1",
          "x": 2,
          "y": 6
        }
      }
    ],
    "lockedTiles": [
      {
        "x": 6,
        "y": 3,
        "msg": "…この先には何かの気配がする。\n（チャンピオンロード方面・今は進めない）",
        "unlockStory": 31,
        "target": {
          "map": "route7",
          "x": 1,
          "y": 1
        }
      },
      {
        "x": 3,
        "y": 6,
        "msg": "…この先には何かの気配がする。\n（ネクサスシティ方面・今は進めない）",
        "unlockStory": 31,
        "target": {
          "map": "nexus",
          "x": 2,
          "y": 5
        }
      }
    ]
  },
  "hoshino_lab": {
    "name": "マクス博士の研究所",
    "w": 5,
    "h": 5,
    "playerStart": {
      "x": 2,
      "y": 3
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#c8c8d0",
    "ground": [
      [
        12,
        12,
        12,
        12,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        12,
        9,
        12,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "prof_max",
        "x": 2,
        "y": 2,
        "sprite": "chars/male.png",
        "dialog": {
          "0": [
            "マクス博士\nやあ！ポケモンの世界へようこそ！\n私はマクス。みんなからはポケモン博士と呼ばれている。\nこの世界には、ポケモンと呼ばれる不思議な生き物たちが暮らしている。\n人々はポケモンと共に生活し、助け合い、時にはその力を競い合う。",
            "マクス博士\nしかし、ポケモンについては未だ解明されていないことも数多く残されているのだ。\n私はその中でも、『ポケモンの強さの限界』について研究している。\nポケモンはどこまで成長できるのか。何がその力を引き出すのか。\nその答えを探すため、私は多くのトレーナーたちの旅を見守ってきた。",
            "マクス博士\nそして今日――君もまた、新たな旅へと踏み出す。\nさあ、最初のパートナーを選びたまえ。\n君とポケモンがどこまで強くなれるのか……私も楽しみにしているよ。"
          ],
          "default": [
            "マクス博士\n君たちの旅、楽しみにしているよ。\nはじまりの草原で、野生のポケモンを1匹捕まえてくるんだ。"
          ]
        },
        "questTrigger": [
          0,
          32,
          33
        ]
      }
    ],
    "events": [
      {
        "x": 2,
        "y": 4,
        "type": "exit",
        "target": {
          "map": "hoshino",
          "x": 3,
          "y": 3
        }
      }
    ],
    "lockedTiles": []
  },
  "hoshino_house1": {
    "name": "民家",
    "w": 5,
    "h": 5,
    "playerStart": {
      "x": 2,
      "y": 3
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#c8c8d0",
    "ground": [
      [
        12,
        12,
        12,
        12,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        12,
        9,
        12,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "h1_person",
        "x": 2,
        "y": 2,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "いい天気だね。\n旅に出るのかい？気をつけてね。"
          ]
        }
      }
    ],
    "events": [
      {
        "x": 2,
        "y": 4,
        "type": "exit",
        "target": {
          "map": "hoshino",
          "x": 4,
          "y": 5
        }
      }
    ],
    "lockedTiles": []
  },
  "hoshino_house2": {
    "name": "民家（実家）",
    "w": 5,
    "h": 5,
    "playerStart": {
      "x": 2,
      "y": 3
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#c8c8d0",
    "ground": [
      [
        12,
        12,
        12,
        12,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        9,
        9,
        9,
        12
      ],
      [
        12,
        12,
        9,
        12,
        12
      ]
    ],
    "objects": [],
    "npcs": [],
    "events": [
      {
        "x": 2,
        "y": 4,
        "type": "exit",
        "target": {
          "map": "hoshino",
          "x": 2,
          "y": 5
        }
      }
    ],
    "lockedTiles": []
  },
  "route1": {
    "name": "はじまりの草原",
    "w": 5,
    "h": 8,
    "playerStart": {
      "x": 2,
      "y": 1
    },
    "encounterRate": 0.15,
    "encounters": [
      {
        "sp": "コトリス",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 35
      },
      {
        "sp": "ホシハム",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 30
      },
      {
        "sp": "モフリス",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 20
      },
      {
        "sp": "ビリネズ",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 15
      },
      {
        "sp": "ツタウサ",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 35
      },
      {
        "sp": "モフリス",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 25
      },
      {
        "sp": "コトリス",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 20
      },
      {
        "sp": "ホシハム",
        "lvMin": 2,
        "lvMax": 6,
        "rate": 20
      }
    ],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#5a9a40",
    "ground": [
      [
        12,
        12,
        3,
        12,
        12
      ],
      [
        0,
        0,
        3,
        0,
        0
      ],
      [
        0,
        0,
        3,
        0,
        3
      ],
      [
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        3,
        0,
        0
      ],
      [
        0,
        0,
        3,
        0,
        0
      ],
      [
        12,
        12,
        3,
        12,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "kouta",
        "x": 4,
        "y": 2,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "コウタ\nうわーっ！負けちゃったか！\nでも次は負けないからな！\nもっと強くなって、また勝負しようぜ！"
          ]
        },
        "questTrigger": 2
      }
    ],
    "events": [
      {
        "x": 2,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "minato",
          "x": 2,
          "y": 5
        }
      },
      {
        "x": 2,
        "y": 7,
        "type": "exit",
        "target": {
          "map": "hoshino",
          "x": 3,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "minato": {
    "name": "ミナトシティ",
    "w": 5,
    "h": 7,
    "playerStart": {
      "x": 2,
      "y": 3
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#3a6a8a",
    "ground": [
      [
        12,
        12,
        3,
        12,
        12
      ],
      [
        3,
        3,
        3,
        3,
        11
      ],
      [
        3,
        3,
        3,
        3,
        11
      ],
      [
        3,
        3,
        3,
        3,
        11
      ],
      [
        3,
        3,
        3,
        3,
        11
      ],
      [
        3,
        3,
        3,
        3,
        11
      ],
      [
        12,
        12,
        3,
        12,
        12
      ]
    ],
    "objects": [
      {
        "x": 0,
        "y": 2,
        "type": "building",
        "sprite": "buildings/gym.png",
        "id": "gym"
      },
      {
        "x": 0,
        "y": 3,
        "type": "building",
        "sprite": "buildings/center.png",
        "id": "center"
      },
      {
        "x": 0,
        "y": 4,
        "type": "building",
        "sprite": "buildings/shop.png",
        "id": "shop"
      },
      {
        "x": 0,
        "y": 5,
        "type": "building",
        "sprite": "buildings/port.png",
        "id": "port"
      }
    ],
    "npcs": [],
    "events": [
      {
        "x": 0,
        "y": 2,
        "type": "door",
        "target": {
          "map": "minato_gym",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 2,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "route2",
          "x": 1,
          "y": 1
        }
      },
      {
        "x": 2,
        "y": 6,
        "type": "exit",
        "target": {
          "map": "route1",
          "x": 2,
          "y": 1
        }
      },
      {
        "x": 0,
        "y": 3,
        "type": "door",
        "action": "heal"
      },
      {
        "x": 0,
        "y": 4,
        "type": "door",
        "action": "shop"
      }
    ],
    "lockedTiles": []
  },
  "minato_gym": {
    "name": "ミナトシティジム",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e8e8f0",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "ren",
        "x": 1,
        "y": 1,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "レン\nまた来たな！\n海と同じで、ポケモンの可能性も底が見えないものだな。"
          ]
        },
        "questTrigger": 3
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "minato",
          "x": 1,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "route2": {
    "name": "しおかぜビーチ",
    "w": 7,
    "h": 8,
    "playerStart": {
      "x": 1,
      "y": 4
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [
      {
        "sp": "ウキウオ",
        "lvMin": 5,
        "lvMax": 10,
        "rate": 30
      },
      {
        "sp": "アワガメ",
        "lvMin": 5,
        "lvMax": 10,
        "rate": 25
      },
      {
        "sp": "コトリス",
        "lvMin": 5,
        "lvMax": 10,
        "rate": 25
      },
      {
        "sp": "モフリス",
        "lvMin": 5,
        "lvMax": 10,
        "rate": 20
      },
      {
        "sp": "クラゲン",
        "lvMin": 5,
        "lvMax": 10,
        "rate": 40
      },
      {
        "sp": "アワガメ",
        "lvMin": 5,
        "lvMax": 10,
        "rate": 30
      },
      {
        "sp": "ウキウオ",
        "lvMin": 5,
        "lvMax": 10,
        "rate": 30
      }
    ],
    "bgColor": "#e6d8a8",
    "ground": [
      [
        12,
        5,
        12,
        12,
        12,
        12,
        12
      ],
      [
        5,
        5,
        5,
        11,
        11,
        11,
        11
      ],
      [
        13,
        3,
        13,
        11,
        11,
        11,
        11
      ],
      [
        5,
        5,
        3,
        11,
        11,
        11,
        11
      ],
      [
        5,
        5,
        5,
        11,
        11,
        11,
        11
      ],
      [
        5,
        5,
        5,
        11,
        11,
        11,
        11
      ],
      [
        5,
        3,
        5,
        11,
        11,
        11,
        11
      ],
      [
        12,
        5,
        12,
        12,
        12,
        12,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "gou",
        "x": 2,
        "y": 3,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "ゴウ\nおお！追い払ったのか！\nこれで先へ進めるようになったな。\nこの先の山道を進めばイワネタウンだ。気をつけて行けよ！"
          ]
        },
        "questTrigger": 5
      },
      {
        "id": "blocker",
        "x": 1,
        "y": 2,
        "sprite": "sprites/mon_021.png",
        "questTrigger": 5,
        "hideKey": "blockerGone"
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "iwane",
          "x": 2,
          "y": 5
        },
        "requireStory": 6
      },
      {
        "x": 1,
        "y": 7,
        "type": "exit",
        "target": {
          "map": "minato",
          "x": 2,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "iwane": {
    "name": "イワネタウン",
    "w": 5,
    "h": 7,
    "playerStart": {
      "x": 2,
      "y": 3
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#b8a888",
    "ground": [
      [
        12,
        12,
        13,
        12,
        12
      ],
      [
        13,
        13,
        3,
        13,
        13
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        13
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        13,
        13,
        3,
        13,
        13
      ],
      [
        12,
        12,
        13,
        12,
        12
      ]
    ],
    "objects": [
      {
        "x": 4,
        "y": 2,
        "type": "building",
        "sprite": "buildings/center.png",
        "id": "center"
      },
      {
        "x": 0,
        "y": 3,
        "type": "building",
        "sprite": "buildings/gym.png",
        "id": "gym"
      },
      {
        "x": 4,
        "y": 4,
        "type": "building",
        "sprite": "buildings/shop.png",
        "id": "shop"
      }
    ],
    "npcs": [
      {
        "id": "board_iwane",
        "x": 3,
        "y": 3,
        "sprite": "objects/billboard.png",
        "dialog": {
          "default": [
            "📺（このニュースはもう見たようだ）"
          ]
        },
        "questTrigger": 8
      }
    ],
    "events": [
      {
        "x": 0,
        "y": 3,
        "type": "door",
        "target": {
          "map": "iwane_gym",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 2,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "route3",
          "x": 2,
          "y": 11
        }
      },
      {
        "x": 2,
        "y": 6,
        "type": "exit",
        "target": {
          "map": "route2",
          "x": 1,
          "y": 1
        }
      },
      {
        "x": 4,
        "y": 2,
        "type": "door",
        "action": "heal"
      },
      {
        "x": 4,
        "y": 4,
        "type": "door",
        "action": "shop"
      }
    ],
    "lockedTiles": []
  },
  "iwane_gym": {
    "name": "イワネタウンジム",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e8e8f0",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "reo",
        "x": 1,
        "y": 1,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "レオ\n才能は人それぞれだが、努力は誰にでもできる。忘れるなよ。"
          ]
        },
        "questTrigger": 6
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "iwane",
          "x": 1,
          "y": 2
        }
      }
    ],
    "lockedTiles": []
  },
  "route3": {
    "name": "いわやまトンネル",
    "w": 5,
    "h": 13,
    "playerStart": {
      "x": 2,
      "y": 11
    },
    "encounterRate": 0.15,
    "encounters": [],
    "encountersByTile": {
      "7": [
        {
          "sp": "イシコロン",
          "lvMin": 9,
          "lvMax": 15,
          "rate": 35
        },
        {
          "sp": "コゲトカ",
          "lvMin": 9,
          "lvMax": 15,
          "rate": 20
        },
        {
          "sp": "ビリネズ",
          "lvMin": 9,
          "lvMax": 15,
          "rate": 20
        },
        {
          "sp": "ツノサイ",
          "lvMin": 9,
          "lvMax": 15,
          "rate": 15
        },
        {
          "sp": "ホシハム",
          "lvMin": 9,
          "lvMax": 15,
          "rate": 10
        }
      ],
      "1": [
        {
          "sp": "ビリネズ",
          "lvMin": 9,
          "lvMax": 15,
          "rate": 20
        },
        {
          "sp": "ホシハム",
          "lvMin": 9,
          "lvMax": 15,
          "rate": 10
        }
      ]
    },
    "waterEncounters": [
      {
        "sp": "ウキウオ",
        "lvMin": 10,
        "lvMax": 14,
        "rate": 30
      },
      {
        "sp": "クラゲン",
        "lvMin": 10,
        "lvMax": 14,
        "rate": 25
      },
      {
        "sp": "イシコロン",
        "lvMin": 10,
        "lvMax": 14,
        "rate": 20
      },
      {
        "sp": "アワガメ",
        "lvMin": 10,
        "lvMax": 14,
        "rate": 15
      },
      {
        "sp": "ユメバク",
        "lvMin": 10,
        "lvMax": 14,
        "rate": 10
      }
    ],
    "bgColor": "#8a8070",
    "ground": [
      [
        12,
        12,
        0,
        12,
        12
      ],
      [
        0,
        0,
        3,
        0,
        0
      ],
      [
        0,
        0,
        3,
        0,
        0
      ],
      [
        13,
        13,
        7,
        13,
        13
      ],
      [
        13,
        7,
        7,
        11,
        13
      ],
      [
        13,
        7,
        7,
        11,
        13
      ],
      [
        13,
        3,
        13,
        13,
        13
      ],
      [
        13,
        7,
        3,
        7,
        13
      ],
      [
        13,
        7,
        7,
        7,
        13
      ],
      [
        13,
        13,
        7,
        13,
        13
      ],
      [
        1,
        0,
        3,
        0,
        1
      ],
      [
        1,
        0,
        3,
        0,
        1
      ],
      [
        12,
        12,
        1,
        12,
        12
      ]
    ],
    "objects": [
      {
        "x": 1,
        "y": 6,
        "type": "object",
        "sprite": "objects/rock.png",
        "id": "state"
      }
    ],
    "npcs": [
      {
        "id": "gen",
        "x": 2,
        "y": 7,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "ゲン\nよし！ツノサイを連れてきたな！\nこれならいける！一気に押し崩すぞ！\n……っしゃあ！道が開いた！この先はハナミシティだ。気をつけて行きな！"
          ]
        },
        "questTrigger": 9
      }
    ],
    "events": [
      {
        "x": 2,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "hanami",
          "x": 3,
          "y": 5
        }
      },
      {
        "x": 2,
        "y": 12,
        "type": "exit",
        "target": {
          "map": "iwane",
          "x": 2,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "hanami": {
    "name": "ハナミシティ",
    "w": 5,
    "h": 7,
    "playerStart": {
      "x": 3,
      "y": 2
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#f0d8e0",
    "ground": [
      [
        12,
        12,
        12,
        3,
        12
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        12,
        12,
        12,
        3,
        12
      ]
    ],
    "objects": [
      {
        "x": 0,
        "y": 2,
        "type": "building",
        "sprite": "buildings/center.png",
        "id": "center"
      },
      {
        "x": 4,
        "y": 3,
        "type": "building",
        "sprite": "buildings/gym.png",
        "id": "gym"
      },
      {
        "x": 0,
        "y": 5,
        "type": "building",
        "sprite": "buildings/shop.png",
        "id": "shop"
      }
    ],
    "npcs": [
      {
        "id": "emma_hanami",
        "x": 1,
        "y": 3,
        "sprite": "chars/female.png",
        "dialog": {
          "default": [
            "EMMA（エマ）\n……いつか私も、それを理解できるでしょうか。"
          ]
        },
        "questTrigger": 12,
        "hideKey": "emmaHanamiGone"
      }
    ],
    "events": [
      {
        "x": 4,
        "y": 3,
        "type": "door",
        "target": {
          "map": "hanami_gym",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 3,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "route4",
          "x": 3,
          "y": 7
        }
      },
      {
        "x": 3,
        "y": 6,
        "type": "exit",
        "target": {
          "map": "route3",
          "x": 2,
          "y": 1
        }
      },
      {
        "x": 0,
        "y": 2,
        "type": "door",
        "action": "heal"
      },
      {
        "x": 0,
        "y": 5,
        "type": "door",
        "action": "shop"
      }
    ],
    "lockedTiles": []
  },
  "hanami_gym": {
    "name": "ハナミシティジム",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 2
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e8f0e0",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "shion",
        "x": 1,
        "y": 0,
        "sprite": "chars/female.png",
        "dialog": {
          "default": [
            "シオン\n……負けた。でも、不思議……さっきよりは、少しだけ怖くない。"
          ]
        },
        "questTrigger": 11
      },
      {
        "id": "hanami_staff",
        "x": 2,
        "y": 1,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "ジムスタッフ\nシオンさん、もう大丈夫そうです。ありがとうございました。"
          ]
        },
        "questTrigger": 10
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "hanami",
          "x": 4,
          "y": 4
        }
      }
    ],
    "lockedTiles": []
  },
  "route4": {
    "name": "はなみずきの森",
    "w": 6,
    "h": 9,
    "playerStart": {
      "x": 3,
      "y": 7
    },
    "encounterRate": 0.18,
    "encounters": [
      {
        "sp": "キノコロ",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 30
      },
      {
        "sp": "ツタウサ",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 30
      },
      {
        "sp": "デンジカ",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 20
      },
      {
        "sp": "トリバルド",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 10
      },
      {
        "sp": "モフリス",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 10
      },
      {
        "sp": "ミライム",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 20
      },
      {
        "sp": "キノコロ",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 30
      },
      {
        "sp": "ツタウサ",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 25
      },
      {
        "sp": "デンジカ",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 15
      },
      {
        "sp": "ホシハム",
        "lvMin": 13,
        "lvMax": 19,
        "rate": 10
      }
    ],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#3a6a30",
    "ground": [
      [
        3,
        10,
        10,
        10,
        0,
        0
      ],
      [
        0,
        10,
        10,
        10,
        0,
        10
      ],
      [
        0,
        0,
        1,
        1,
        0,
        10
      ],
      [
        0,
        0,
        1,
        1,
        0,
        10
      ],
      [
        1,
        1,
        10,
        10,
        10,
        10
      ],
      [
        1,
        1,
        10,
        10,
        10,
        10
      ],
      [
        1,
        1,
        0,
        0,
        10,
        10
      ],
      [
        1,
        1,
        0,
        0,
        0,
        10
      ],
      [
        1,
        1,
        1,
        0,
        0,
        10
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "hakui",
        "x": 0,
        "y": 0,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "白衣の男\nちっ…この個体群は諦めよう。\nだが覚えておけ、『博士』の研究は止まらない。"
          ]
        },
        "questTrigger": 13
      }
    ],
    "events": [
      {
        "x": 5,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "light",
          "x": 0,
          "y": 1
        },
        "requireStory": 14
      },
      {
        "x": 4,
        "y": 8,
        "type": "exit",
        "target": {
          "map": "hanami",
          "x": 3,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "light": {
    "name": "ライトシティ",
    "w": 8,
    "h": 3,
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#d8d8f0",
    "ground": [
      [
        12,
        3,
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ],
      [
        12,
        3,
        3,
        3,
        3,
        3,
        3,
        12
      ]
    ],
    "objects": [
      {
        "x": 4,
        "y": 0,
        "type": "building",
        "sprite": "buildings/gym.png",
        "id": "gym"
      },
      {
        "x": 3,
        "y": 2,
        "type": "building",
        "sprite": "buildings/center.png",
        "id": "center"
      },
      {
        "x": 4,
        "y": 2,
        "type": "building",
        "sprite": "buildings/shop.png",
        "id": "shop"
      }
    ],
    "npcs": [
      {
        "id": "board_light",
        "x": 2,
        "y": 0,
        "sprite": "objects/billboard.png",
        "dialog": {
          "default": [
            "📺（このニュースはもう見たようだ）"
          ]
        },
        "questTrigger": 14
      }
    ],
    "events": [
      {
        "x": 4,
        "y": 0,
        "type": "door",
        "target": {
          "map": "light_gym",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 0,
        "y": 1,
        "type": "exit",
        "target": {
          "map": "route4",
          "x": 4,
          "y": 1
        }
      },
      {
        "x": 7,
        "y": 1,
        "type": "exit",
        "target": {
          "map": "route5",
          "x": 0,
          "y": 0
        }
      },
      {
        "x": 3,
        "y": 2,
        "type": "door",
        "action": "heal"
      },
      {
        "x": 4,
        "y": 2,
        "type": "door",
        "action": "shop"
      }
    ],
    "lockedTiles": []
  },
  "light_gym": {
    "name": "ライトシティジム",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#f0f0d8",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "akira",
        "x": 1,
        "y": 1,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "アキラ\n行け。この先で、お前の答えを見つけてこい。"
          ]
        },
        "questTrigger": 15
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "light",
          "x": 3,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "route5": {
    "name": "かみなり高原",
    "w": 6,
    "h": 10,
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "encounterRate": 0.18,
    "encounters": [
      {
        "sp": "デンジカ",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 30
      },
      {
        "sp": "コゲトカ",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 25
      },
      {
        "sp": "キノコロ",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 20
      },
      {
        "sp": "サンダラット",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 15
      },
      {
        "sp": "イシコロン",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 10
      },
      {
        "sp": "デンジカ",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 25
      },
      {
        "sp": "サンダラット",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 20
      },
      {
        "sp": "コゲトカ",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 20
      },
      {
        "sp": "イシコロン",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 20
      },
      {
        "sp": "ゴロドン",
        "lvMin": 18,
        "lvMax": 25,
        "rate": 15
      }
    ],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#bca860",
    "ground": [
      [
        0,
        0,
        0,
        0,
        3,
        0
      ],
      [
        12,
        0,
        3,
        3,
        3,
        3
      ],
      [
        12,
        12,
        12,
        12,
        1,
        1
      ],
      [
        12,
        12,
        12,
        12,
        1,
        1
      ],
      [
        12,
        12,
        12,
        12,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0,
        1,
        1
      ],
      [
        1,
        1,
        12,
        3,
        3,
        3
      ],
      [
        1,
        1,
        1,
        12,
        0,
        0
      ],
      [
        0,
        0,
        3,
        12,
        0,
        3
      ],
      [
        12,
        12,
        0,
        12,
        12,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "kai",
        "x": 4,
        "y": 0,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "カイ\n…ねえ、もしかしてさ。AIが強いのも、君が強いのも、計算の外側に理由があるのかな。"
          ]
        },
        "questTrigger": 16
      },
      {
        "id": "nushi_gorodon",
        "x": 5,
        "y": 8,
        "sprite": "sprites/mon_031.png",
        "isNushi": true
      }
    ],
    "events": [
      {
        "x": 0,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "light",
          "x": 6,
          "y": 1
        }
      },
      {
        "x": 2,
        "y": 9,
        "type": "exit",
        "target": {
          "map": "shirahana",
          "x": 2,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "shirahana": {
    "name": "シラハナ村",
    "w": 6,
    "h": 7,
    "playerStart": {
      "x": 2,
      "y": 1
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e8f0f8",
    "ground": [
      [
        12,
        12,
        3,
        12,
        12,
        12
      ],
      [
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        3,
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        3,
        3,
        3,
        3,
        3,
        12
      ],
      [
        12,
        12,
        3,
        12,
        12,
        12
      ]
    ],
    "objects": [
      {
        "x": 0,
        "y": 2,
        "type": "building",
        "sprite": "buildings/gym.png",
        "id": "gym"
      },
      {
        "x": 0,
        "y": 3,
        "type": "building",
        "sprite": "buildings/center.png",
        "id": "center"
      },
      {
        "x": 0,
        "y": 4,
        "type": "building",
        "sprite": "buildings/shop.png",
        "id": "shop"
      }
    ],
    "npcs": [
      {
        "id": "emma_shirahana",
        "x": 2,
        "y": 3,
        "sprite": "chars/female.png",
        "dialog": {
          "default": [
            "EMMA（エマ）\n…ありがとうございます。あなたがそう言ってくれると、本当にそうな気がしてくるから——不思議です"
          ]
        },
        "questTrigger": 19,
        "hideKey": "emmaShirahanaGone"
      }
    ],
    "events": [
      {
        "x": 0,
        "y": 2,
        "type": "door",
        "target": {
          "map": "shirahana_gym",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 2,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "route5",
          "x": 2,
          "y": 8
        }
      },
      {
        "x": 2,
        "y": 6,
        "type": "exit",
        "target": {
          "map": "yukidoke_peak",
          "x": 1,
          "y": 1
        }
      },
      {
        "x": 5,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "tsukiyo_lake",
          "x": 1,
          "y": 4
        }
      },
      {
        "x": 0,
        "y": 3,
        "type": "door",
        "action": "heal"
      },
      {
        "x": 0,
        "y": 4,
        "type": "door",
        "action": "shop"
      }
    ],
    "lockedTiles": []
  },
  "shirahana_gym": {
    "name": "シラハナ村ジム",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e8e8f8",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "runa",
        "x": 1,
        "y": 1,
        "sprite": "chars/female.png",
        "dialog": {
          "default": [
            "ルナ\n…あなたとポケモンの間には、確かな絆を感じたわ。フロストバッジよ。\n…AIには、こうはいかない。EMMA（エマ）にもそう言ったの"
          ]
        },
        "questTrigger": 17
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "shirahana",
          "x": 1,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "tsukiyo_lake": {
    "name": "月夜の湖",
    "w": 5,
    "h": 6,
    "playerStart": {
      "x": 1,
      "y": 4
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#2a3a5a",
    "ground": [
      [
        11,
        11,
        11,
        11,
        11
      ],
      [
        11,
        11,
        11,
        11,
        11
      ],
      [
        11,
        11,
        3,
        11,
        11
      ],
      [
        11,
        11,
        3,
        11,
        11
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        12,
        12,
        3,
        12,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "yuinasu",
        "x": 2,
        "y": 2,
        "sprite": "sprites/mon_043.png",
        "dialog": {
          "default": [
            "（ユイナスはもう、ここにはいない）"
          ]
        },
        "questTrigger": 20,
        "hideKey": "yuinasuGone"
      },
      {
        "id": "emma_lake",
        "x": 3,
        "y": 4,
        "sprite": "chars/female.png",
        "dialog": {
          "default": [
            "EMMA（エマ）\n……すごい。全部、記録しました。\nだから、もう一つはあなたに。私たち、お揃いですね"
          ]
        },
        "hideKey": "emmaLakeHidden"
      }
    ],
    "events": [
      {
        "x": 2,
        "y": 5,
        "type": "exit",
        "target": {
          "map": "shirahana",
          "x": 4,
          "y": 2
        }
      }
    ],
    "lockedTiles": []
  },
  "yukidoke_peak": {
    "name": "ゆきどけの霊峰",
    "w": 3,
    "h": 9,
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "encounterRate": 0.18,
    "encounters": [],
    "encountersByTile": {
      "8": [
        {
          "sp": "コオリス",
          "lvMin": 24,
          "lvMax": 30,
          "rate": 25
        },
        {
          "sp": "ユキウサ",
          "lvMin": 24,
          "lvMax": 30,
          "rate": 25
        },
        {
          "sp": "ミライム",
          "lvMin": 24,
          "lvMax": 30,
          "rate": 20
        },
        {
          "sp": "ユメバク",
          "lvMin": 24,
          "lvMax": 30,
          "rate": 15
        },
        {
          "sp": "フブキマル",
          "lvMin": 24,
          "lvMax": 30,
          "rate": 15
        }
      ]
    },
    "waterEncounters": [],
    "bgColor": "#e8f4ff",
    "ground": [
      [
        12,
        6,
        12
      ],
      [
        6,
        6,
        6
      ],
      [
        8,
        8,
        8
      ],
      [
        8,
        8,
        8
      ],
      [
        8,
        8,
        8
      ],
      [
        8,
        8,
        8
      ],
      [
        8,
        8,
        8
      ],
      [
        3,
        6,
        6
      ],
      [
        12,
        6,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "sounansha",
        "x": 0,
        "y": 7,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "トレーナー\nこれは礼だ、持っていってくれ。\nこの先の峠を越えればリュウガシティだ。竜のジムは恐ろしく強い…気をつけてな"
          ]
        },
        "questTrigger": 21
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "shirahana",
          "x": 2,
          "y": 3
        }
      },
      {
        "x": 1,
        "y": 8,
        "type": "exit",
        "target": {
          "map": "ryuga",
          "x": 6,
          "y": 1
        }
      }
    ],
    "lockedTiles": []
  },
  "ryuga": {
    "name": "リュウガシティ",
    "w": 7,
    "h": 5,
    "playerStart": {
      "x": 6,
      "y": 1
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#d8c8a0",
    "ground": [
      [
        12,
        12,
        12,
        12,
        12,
        12,
        3
      ],
      [
        13,
        13,
        13,
        13,
        13,
        13,
        3
      ],
      [
        13,
        13,
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    ],
    "objects": [
      {
        "x": 2,
        "y": 4,
        "type": "building",
        "sprite": "buildings/shop.png",
        "id": "shop"
      },
      {
        "x": 3,
        "y": 4,
        "type": "building",
        "sprite": "buildings/center.png",
        "id": "center"
      },
      {
        "x": 4,
        "y": 4,
        "type": "building",
        "sprite": "buildings/gym.png",
        "id": "gym"
      }
    ],
    "npcs": [
      {
        "id": "board_ryuga",
        "x": 5,
        "y": 4,
        "sprite": "objects/billboard.png",
        "dialog": {
          "default": [
            "📺（このニュースはもう見たようだ）"
          ]
        },
        "questTrigger": [
          22,
          23
        ]
      }
    ],
    "events": [
      {
        "x": 4,
        "y": 4,
        "type": "door",
        "target": {
          "map": "ryuga_gym",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 6,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "yukidoke_peak",
          "x": 1,
          "y": 5
        }
      },
      {
        "x": 0,
        "y": 4,
        "type": "exit",
        "target": {
          "map": "route8",
          "x": 5,
          "y": 4
        }
      },
      {
        "x": 2,
        "y": 4,
        "type": "door",
        "action": "shop"
      },
      {
        "x": 3,
        "y": 4,
        "type": "door",
        "action": "heal"
      }
    ],
    "lockedTiles": []
  },
  "ryuga_gym": {
    "name": "リュウガシティジム",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e8e0f0",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "gaia",
        "x": 1,
        "y": 1,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "ガイア\n…………ガッハッハ！完敗だ！\nドラゴバッジを持っていけ！"
          ]
        },
        "questTrigger": 25
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "ryuga",
          "x": 3,
          "y": 3
        }
      }
    ],
    "lockedTiles": []
  },
  "ryuga_house": {
    "name": "リンカの小屋",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#d8e8e0",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "rinka",
        "x": 1,
        "y": 1,
        "sprite": "chars/female.png",
        "dialog": {
          "default": [
            "リンカ\n……完敗。型ごと、まっすぐ打ち破られちゃった。\nうん、あなたなら大丈夫。師匠の竜たちと、正面からぶつかれる"
          ]
        },
        "questTrigger": 24
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "route8",
          "x": 5,
          "y": 0
        }
      }
    ],
    "lockedTiles": []
  },
  "route8": {
    "name": "竜の渓谷",
    "w": 7,
    "h": 5,
    "playerStart": {
      "x": 3,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#9a8878",
    "ground": [
      [
        3,
        13,
        13,
        3,
        3,
        3,
        12
      ],
      [
        7,
        13,
        13,
        7,
        13,
        3,
        12
      ],
      [
        7,
        7,
        7,
        7,
        13,
        13,
        12
      ],
      [
        7,
        7,
        7,
        7,
        7,
        13,
        12
      ],
      [
        13,
        13,
        13,
        13,
        3,
        3,
        3
      ]
    ],
    "objects": [
      {
        "x": 5,
        "y": 1,
        "type": "building",
        "sprite": "buildings/house.png",
        "id": "house"
      }
    ],
    "npcs": [],
    "events": [
      {
        "x": 5,
        "y": 1,
        "type": "door",
        "target": {
          "map": "ryuga_house",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 0,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "nexus",
          "x": 2,
          "y": 1
        }
      },
      {
        "x": 6,
        "y": 4,
        "type": "exit",
        "target": {
          "map": "ryuga",
          "x": 1,
          "y": 4
        }
      }
    ],
    "lockedTiles": []
  },
  "nexus": {
    "name": "ネクサスシティ",
    "w": 5,
    "h": 7,
    "playerStart": {
      "x": 2,
      "y": 3
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#c8d8e8",
    "ground": [
      [
        12,
        12,
        3,
        12,
        12
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3
      ],
      [
        12,
        12,
        3,
        12,
        12
      ]
    ],
    "objects": [
      {
        "x": 0,
        "y": 1,
        "type": "building",
        "sprite": "buildings/center.png",
        "id": "center"
      },
      {
        "x": 0,
        "y": 3,
        "type": "building",
        "sprite": "buildings/corp.png",
        "id": "corp"
      },
      {
        "x": 4,
        "y": 4,
        "type": "building",
        "sprite": "buildings/gym.png",
        "id": "gym"
      },
      {
        "x": 0,
        "y": 5,
        "type": "building",
        "sprite": "buildings/shop.png",
        "id": "shop"
      }
    ],
    "npcs": [
      {
        "id": "dalion_outside",
        "x": 3,
        "y": 4,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "ダリオン\n君とはジムリーダーと挑戦者である前に、一度ゆっくり話がしたい。\n——うちの会社に来ないか？ジム戦は、その後だ"
          ]
        },
        "questTrigger": 27,
        "hideKey": "dalionOutsideGone"
      },
      {
        "id": "board_nexus",
        "x": 4,
        "y": 2,
        "sprite": "objects/billboard.png",
        "dialog": {
          "default": [
            "📺（このニュースはもう見たようだ）"
          ]
        },
        "questTrigger": [
          26,
          31
        ]
      }
    ],
    "events": [
      {
        "x": 0,
        "y": 3,
        "type": "door",
        "target": {
          "map": "anthronix",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 4,
        "y": 4,
        "type": "door",
        "target": {
          "map": "nexus_gym",
          "x": 1,
          "y": 0
        }
      },
      {
        "x": 2,
        "y": 0,
        "type": "exit",
        "target": {
          "map": "hoshino",
          "x": 3,
          "y": 5
        }
      },
      {
        "x": 2,
        "y": 6,
        "type": "exit",
        "target": {
          "map": "route8",
          "x": 0,
          "y": 0
        }
      },
      {
        "x": 0,
        "y": 1,
        "type": "door",
        "action": "heal"
      },
      {
        "x": 0,
        "y": 5,
        "type": "door",
        "action": "shop"
      }
    ],
    "lockedTiles": []
  },
  "nexus_gym": {
    "name": "ネクサスシティジム",
    "w": 3,
    "h": 4,
    "playerStart": {
      "x": 1,
      "y": 0
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e0e8f0",
    "ground": [
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        9,
        9,
        9
      ],
      [
        12,
        9,
        12
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "dalion_gym",
        "x": 1,
        "y": 1,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "ダリオン\n……素晴らしい。理屈ではなく、心が震えるバトルだった。マインドバッジを受け取ってくれ"
          ]
        },
        "questTrigger": 29
      }
    ],
    "events": [
      {
        "x": 1,
        "y": 3,
        "type": "exit",
        "target": {
          "map": "nexus",
          "x": 3,
          "y": 3
        }
      }
    ],
    "lockedTiles": []
  },
  "anthronix": {
    "name": "Anthronix社",
    "w": 5,
    "h": 6,
    "playerStart": {
      "x": 2,
      "y": 1
    },
    "encounterRate": 0,
    "encounters": [],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#e0e8f8",
    "ground": [
      [
        9,
        9,
        9,
        9,
        9
      ],
      [
        9,
        9,
        9,
        9,
        9
      ],
      [
        9,
        9,
        9,
        9,
        9
      ],
      [
        9,
        9,
        9,
        9,
        9
      ],
      [
        9,
        9,
        9,
        9,
        9
      ],
      [
        12,
        12,
        9,
        12,
        12
      ]
    ],
    "objects": [
      {
        "x": 0,
        "y": 0,
        "type": "object",
        "sprite": "objects/billboard.png",
        "id": "billboard"
      },
      {
        "x": 1,
        "y": 0,
        "type": "object",
        "sprite": "objects/billboard.png",
        "id": "billboard"
      },
      {
        "x": 2,
        "y": 0,
        "type": "object",
        "sprite": "objects/billboard.png",
        "id": "billboard"
      },
      {
        "x": 3,
        "y": 0,
        "type": "object",
        "sprite": "objects/billboard.png",
        "id": "billboard"
      },
      {
        "x": 4,
        "y": 0,
        "type": "object",
        "sprite": "objects/billboard.png",
        "id": "billboard"
      }
    ],
    "npcs": [
      {
        "id": "dalion_anthronix",
        "x": 2,
        "y": 2,
        "sprite": "chars/male.png",
        "dialog": {
          "default": [
            "ダリオン\n君が来てくれて、また話せて嬉しいよ"
          ]
        },
        "questTrigger": [
          28,
          30
        ]
      }
    ],
    "events": [
      {
        "x": 2,
        "y": 5,
        "type": "exit",
        "target": {
          "map": "nexus",
          "x": 0,
          "y": 4
        }
      }
    ],
    "lockedTiles": []
  },
  "route7": {
    "name": "チャンピオンロード",
    "w": 18,
    "h": 3,
    "playerStart": {
      "x": 1,
      "y": 1
    },
    "encounterRate": 0.2,
    "encounters": [
      {
        "sp": "タツマル",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 25
      },
      {
        "sp": "フブキマル",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 20
      },
      {
        "sp": "ゴウサイ",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 20
      },
      {
        "sp": "サンダラット",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 15
      },
      {
        "sp": "ライジカ",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 15
      },
      {
        "sp": "ゴロドン",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 5
      },
      {
        "sp": "ライジカ",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 20
      },
      {
        "sp": "ゴウサイ",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 18
      },
      {
        "sp": "フブキマル",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 15
      },
      {
        "sp": "ミラージュン",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 15
      },
      {
        "sp": "ユメバク",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 12
      },
      {
        "sp": "リュウガロン",
        "lvMin": 33,
        "lvMax": 45,
        "rate": 8
      }
    ],
    "encountersByTile": {},
    "waterEncounters": [],
    "bgColor": "#7a6858",
    "ground": [
      [
        12,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        3,
        3,
        3
      ],
      [
        3,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        3,
        3,
        3
      ],
      [
        12,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        3,
        3,
        3
      ]
    ],
    "objects": [],
    "npcs": [
      {
        "id": "emma_road",
        "x": 3,
        "y": 1,
        "sprite": "chars/female.png",
        "dialog": {
          "default": [
            "EMMA（エマ）\nここから先は、私の番だから"
          ]
        },
        "questTrigger": [
          34,
          35,
          36
        ],
        "hideKey": "emmaRoadGone"
      },
      {
        "id": "sitennou",
        "x": 10,
        "y": 1,
        "sprite": "buildings/gym.png",
        "dialog": {
          "default": [
            "（四天王の間。誰もいない）\nGROX（グロックス）\n四天王は解散させた。弱い奴は、いらない。"
          ]
        },
        "questTrigger": 37
      },
      {
        "id": "champion_grox",
        "x": 17,
        "y": 1,
        "sprite": "sprites/mon_045.png",
        "dialog": {
          "default": [
            "GROX（グロックス）\n……。"
          ]
        },
        "questTrigger": [
          38,
          39
        ]
      }
    ],
    "events": [
      {
        "x": 0,
        "y": 1,
        "type": "exit",
        "target": {
          "map": "hoshino",
          "x": 5,
          "y": 3
        }
      }
    ],
    "lockedTiles": []
  }
};
