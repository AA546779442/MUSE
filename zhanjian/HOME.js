var view = {
  displayMessage:function(mag){
    var messageArea = document.getElementById("messageArea"); 
    messageArea.innerHTML = mag;
  },
  displayHit:function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class","hit");
  },
  displayMiss:function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class","miss");
  }
};


var model = {
  boardSize:7,
  numShips:3,
  shipLength:3,
  shipSunk:0,
  ships:[
    {locations:["10","20","30"],hits:["","",""]},
    {locations:["32","33","34"],hits:["","",""]},
    {locations:["63","64","65"],hits:["","",""]}
  ],

  fire: function(guess){
    for(var i = 0;i < this.numShips; i++){
      var ship = this.ships[i];
      //locations = this.locations;
      //var index = locations.indexOf(guess);
      var index = ship.locations.indexOf(guess);
      if(index >= 0){
        ship.hits[index] = "hit";
        view.displayHit(guess); 
        view.displayMessage("HIT!"); 
        if(this.isSunk(ship)){
          view.displayMessage("You sank my battleship!"); 
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess); 
    view.displayMessage("You missed."); 
    return false
  },
  isSunk:function(ship){
    for(var i = 0;i < this.shipLength; i++){
      if(ship.hits[i] !== "hit"){
        return false;
      }
    }
    return true;
  }
};


model.fire("53");
model.fire("06"); 
model.fire("16"); 
model.fire("26");
model.fire("34"); 
model.fire("24"); 
model.fire("44");
model.fire("12"); 
model.fire("11"); 
model.fire("10");



var controller = {
  guesses:0,
  processGuess:function(guess){
    
  }
}