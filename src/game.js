Game = {
    // Taille de la map
    map_grid: {
      //Largeur  
      width:  30,
      //Hauteur
      height: 25,
      tile: {
        width:  25,
        height: 25,
      }
          
    },
  
    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },
  
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    random:function(x){
        return Math.floor(Math.random() * (x));
    },
  
    // Initialize and start our game
    start: function() {
        rand_x = Game.random(Game.map_grid.width-1)
        rand_y = Game.random(Game.map_grid.height-1)
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(249, 223, 125)');
        Crafty.e('PlayerCharacter').at(5, 5);

        //Parcourt la map et on met un bonus à une place random
        //A mettre dans une fonction et appeler à nouveau à chaque collision avec un des player
        for (var x = 0; x < Game.map_grid.width; x++) {
            for (var y = 0; y < Game.map_grid.height; y++) {
            } 
                Crafty.e('Bonus').at(rand_x, rand_y);
            }
        }
    }