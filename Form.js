class Form {
  constructor() {
    this.input = createInput('Name')
    this.button= createButton('khelo')
    this.Greeting = createElement('h1')



  }
  hide(){
    this.input.hide()
    this.Greeting.hide()
    this.button.hide()
  }
  

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
    
    
    
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

   this. button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name =this. input.value();
      
      playerCount+=1;
      player.update()
      player.index= playerCount;
      player.updateCount(playerCount);
     
      this.Greeting.html("Hello " + player.name )
     this. Greeting.position(displayWidth/2-50,displayHeight/4)
    });

  }
}
