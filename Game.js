const GameState = Object.freeze({
    WELCOMING: Symbol("hey"),
    BEGIN:  Symbol("yes"),
    WAIT: Symbol("Not interested right now"),
    QUIZ: Symbol("ok"),
    GAME: Symbol("okay"),
    QUIZ1: Symbol("quiz1"),
    GAME1: Symbol("game1"),
    QUIZ2: Symbol("quiz2"),
    GAME2: Symbol("game2"),
    END: Symbol("end"),
    WON: Symbol("won")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Hey, How are you? Are you interested in playing a quiz? YES or NO?";
                this.stateCur = GameState.BEGIN;
                break;
            case GameState.BEGIN:
                sInput = sInput.substring(0,1).toUpperCase() + sInput.substring(1).toLowerCase();
                if(sInput.match("No")){
                    sReply = "That's okay. Have a good one :)";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply ="Well, That sounds great!! ARE YOU READY? YES?";
                    this.stateCur = GameState.QUIZ;
                }
                break;
            case GameState.QUIZ:
                sInput = sInput.substring(0,1).toUpperCase() + sInput.substring(1).toLowerCase();
                if(sInput.match("Yes")){
                    sReply = "Here's the first halloween question: Answer this riddle: Dracula loves to draw this, as well as, put it in the bank. What is it??";
                    this.stateCur = GameState.GAME;
                }
                break;
            case GameState.GAME:
                sInput = sInput.substring(0,1).toUpperCase() + sInput.substring(1).toLowerCase();
                if(sInput.match("Blood")){
                    sReply = "AWESOME! RIGHT ANSWER";
                    this.stateCur = GameState.QUIZ1;
                }
                else
                {
                    sReply = "WRONG ANSWER!! The correct answer is Blood.";
                    this.stateCur= GameState.END;
                }
                break;
            case GameState.QUIZ1:
                sReply = "What grows when it eats, but dies when it drinks?";
                this.stateCur = GameState.GAME1;
                break;
            case GameState.GAME1:
                sInput = sInput.substring(0,1).toUpperCase() + sInput.substring(1).toLowerCase();
                if(sInput.match("Fire")){
                    sReply = "AWESOME! RIGHT ANSWER.";
                    this.stateCur = GameState.QUIZ2;
                }
                else
                {
                    sReply = "WRONG ANSWER!! The correct answer is Fire.";
                    this.stateCur= GameState.END;
                }
            break;
            case GameState.QUIZ2:
                sReply = "The person who built it sold it. The person who bought it never used it. The person who used it never saw it. What is it?";
                this.stateCur = GameState.GAME2;
                break;
            case GameState.GAME2:
                sInput = sInput.substring(0,1).toUpperCase() + sInput.substring(1).toLowerCase();
                if(sInput.match("Coffin")){
                    sReply = "AWESOME! RIGHT ANSWER.";
                    this.stateCur = GameState.WON;
                }
                else
                {
                    sReply = "WRONG ANSWER!! The correct answer is Coffin.";
                    this.stateCur= GameState.END;
                }
            break;
            case GameState.END:
                    sReply = "BETTER LUCK NEXT TIME";
                    this.stateCur = GameState.WELCOMING;
            break;
            case GameState.WON:
                    sReply = "Congratulations!! You Won the game!!";
                    this.stateCur = GameState.WELCOMING;
            break;
   
        }
        return([sReply]);
    }
}