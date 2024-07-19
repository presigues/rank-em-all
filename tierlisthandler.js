function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function thescrambler(){

 

bluebg1 = getRandomInt(1, 16);

console.log(bluebg1);


bluebg2 = getRandomInt(1, 16);
while(bluebg2 == bluebg1){
bluebg2 = getRandomInt(1, 16);
}

console.log(bluebg2);

bluebg3 = getRandomInt(1, 8);
while(bluebg3 == bluebg1 || bluebg3 == bluebg2 ){
bluebg3 = getRandomInt(1, 8);
}

console.log(bluebg3);

bluebg4 = getRandomInt(1, 16);
while(bluebg4 == bluebg1 || bluebg4 == bluebg2 || bluebg4 == bluebg3){
bluebg4 = getRandomInt(1, 16);
}

console.log(bluebg4);

bluebg5 = getRandomInt(1, 16);
while(bluebg5 == bluebg1 || bluebg5 == bluebg2 || bluebg5 == bluebg3 || bluebg5 == bluebg4){
bluebg5 = getRandomInt(1, 8);
}

console.log(bluebg5);

bluebg6 = getRandomInt(1, 16);
while(bluebg6 == bluebg1 || bluebg6 == bluebg2 || bluebg6 == bluebg3 || bluebg6 == bluebg4 || bluebg6 == bluebg5){
bluebg6 = getRandomInt(1, 8);
}

console.log(bluebg6);

bluebg7 = getRandomInt(1, 16);
while(bluebg7 == bluebg1 || bluebg7 == bluebg2 || bluebg7 == bluebg3 || bluebg7 == bluebg4 || bluebg7 == bluebg5 || bluebg7 == bluebg6){
bluebg7 = getRandomInt(1, 16);
}

console.log(bluebg7);


bluebg8 = getRandomInt(1, 16);
while(bluebg8 == bluebg1 || bluebg8 == bluebg2 || bluebg8 == bluebg3 || bluebg8 == bluebg4 || bluebg8 == bluebg5 || bluebg8 == bluebg6 || bluebg8 == bluebg7){
bluebg8 = getRandomInt(1, 16);
}

console.log(bluebg8);

switch(bluebg1){

  case 1:
    sound1 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg"
    document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text1").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      sound1 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4"
      document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text1").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      sound1 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD"
      document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD");
      document.getElementById("text1").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        sound1 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ"
        document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text1").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          sound1 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl"
          document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text1").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            sound1 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg"
            document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text1").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              sound1 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l"
              document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text1").innerHTML = "Minecraft - C418 - Minecraft OST";
                            // minecraft - MVA
              break;
              case 8:
                sound1 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ"
                document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text1").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound1 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                  document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text1").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound1 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                    document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text1").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound1 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                      document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text1").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound1 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                      document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text1").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound1 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                        document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text1").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound1 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                        document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text1").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound1 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                            document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text1").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound1 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG"
                              document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text1").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;

}

switch(bluebg2){

  case 1:
    document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text2").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text2").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
      document.getElementById("text2").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text2").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text2").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text2").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text2").innerHTML = "Minecraft - C418 - Minecraft OST";
              // minecraft - MVA
              break;
              case 8:
                document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text2").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound2 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                  document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text2").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound2 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                    document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text2").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound2 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                      document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text2").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound2 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                      document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text2").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound2 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                        document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text2").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound2 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                        document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text2").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound2 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                            document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text2").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound2 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG"
                              document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text2").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;

}
 }



 function switcheroo(){
  document.getElementById("howtotitle").style.display = "none";
  document.getElementById("howto1").style.display = "none";
  document.getElementById("howto2").style.display = "none";
  document.getElementById("letsgo").style.display = "none";

  document.getElementById("cat").style.top = "-50px"
  document.getElementById("cat").style.left = "20px"
 
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "block";
 }

 semmi1;
 

 function onechosen(){
semi1 = sound1;
console.log(document.getElementById("text1").innerHTML);
document.getElementById("three").style.display = "block";
document.getElementById("four").style.display = "block";
document.getElementById("stage2").style.display = "block";
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
 }

 function twochosen(){
  semi1 = sound2;
  console.log(document.getElementById("text2").innerHTML);
  document.getElementById("three").style.display = "block";
document.getElementById("four").style.display = "block";
document.getElementById("stage2").style.display = "block";
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
 }