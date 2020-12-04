class Game {
  constructor(){


  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val()
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

async  start(){
    if(gameState === 0){
      player = new Player();
     var playerCountRef  = await database.ref('playerCount').once('value')
     if(playerCountRef.exists()){
playerCount = playerCountRef.val()
player.getCount();
     }

     
     
      form = new Form()
      form.display();
    }
  }
play(){
Player.getplayerinfo()
text('gameStart',100,100)
form.hide()
if(allplayers!==undefined){
var position = 150

for(var nothing in allplayers){
 

if(nothing ==='player'+player.index)
fill('red')
else
  fill('black')
  position+=20
text(allplayers[nothing].name+'---'+allplayers[nothing].distance,120,position)

}
}
if(keyDown(UP_ARROW)&&player.index!==null){
player.distance+=50
player.update()
}
}


}

