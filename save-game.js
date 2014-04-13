/*
*This is a rot13 cypher for game save data.
*Author: Corbin "Spritsinz" Matschull.
*I ported this over from Python in a quick and dirty port. 
*I am going to test save data once we get the game up and going.
*/
function saveGame(){
  document.getElementById('save-button');
  
}

function encode(self, text){
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var rotate = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijkl2415798630';
  
  var enc = '';
  
  for each(char in text){
    if (char == ' '){
      enc += ' ';
    }else{
      var get = alpha.index(char);
      enc += rotate[get];
      
      return enc;
    }
  }
}
function decode(self, text){
  var rotate = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijkl';
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
  var dec = '';
  
  for each(char in text){
    if(char == ' '){
      dec += ' ';
    }else{
      var get = rotate.index[get];
      dec += alpha[get];
      
      return dec;
      } 
    }
  }
}
