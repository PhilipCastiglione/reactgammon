## Game state planning

### draft 1
players (for each player)
- name:string
- gamesWon:number
- stakeSecured:number
- checkers:array of numbers representing the index of board position
move
- dice:array of object with pips:number, position:number, used:boolean
- activePlayer:number ie. which player
game
- stake:number
- lastWinner:number ie. which player

### draft 2
    state = {
      players: [
        {
          name: string,
          gamesWon: number,
          stakeWon: number,
          checkers: [ numbers ]
        }
      ],
      move: {
        dice: [
          {
            pips: number,
            used: boolean
          }
        ],
        activePlayer: number,
        selectedChecker: number
      },
      game: {
        stake: number,
        lastDoubler: number
      }
    }

## Not in state
move validation  
game rules

## Actions

### draft 1
player
- UPDATE_NAME(player, name)
- INCREMENT_GAMES_WON(player)
- ADD_STAKE_SECURED(player, stake)
- MOVE_CHECKER(player, checker, distance)
- HIT_CHECKER(player, checker)
- REPLACE_CHECKER(player, checker, position)
- BEAR_OFF_CHECKER(player, checker)

move
- ROLL_DICE()
- SWAP_DICE_ORDER()
- USE_DIE(position)
- UNUSE_DIE(position)
- TOGGLE_ACTIVE_PLAYER()

game
- DOUBLE_STAKE(player)


## Remaining game logic to implement
refactor play to use messagebox
winning rules (use messagebox)
doubling stake
stake, wins
difficult finishing rules
double no valid move edge case draw
