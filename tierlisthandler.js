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

bluebg3 = getRandomInt(1, 16);
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
bluebg5 = getRandomInt(1, 16);
}

console.log(bluebg5);

bluebg6 = getRandomInt(1, 16);
while(bluebg6 == bluebg1 || bluebg6 == bluebg2 || bluebg6 == bluebg3 || bluebg6 == bluebg4 || bluebg6 == bluebg5){
bluebg6 = getRandomInt(1, 16);
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

}

function stage1choice(){

switch(bluebg1){  // SONG 1 ------------------------------------------------------------------------------------------------------------------------------

  case 1:
    sound1 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
    document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text1").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      sound1 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
      document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text1").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      sound1 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD";
      document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD");
      document.getElementById("text1").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        sound1 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
        document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text1").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          sound1 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
          document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text1").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            sound1 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
            document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text1").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              sound1 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
              document.getElementById("b1").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text1").innerHTML = "Minecraft - C418 - Minecraft OST";
                            // minecraft - MVA
              break;
              case 8:
                sound1 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text1").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound1 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                  document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text1").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound1 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                    document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text1").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound1 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text1").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound1 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text1").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound1 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text1").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound1 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text1").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound1 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                            document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text1").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound1 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                              document.getElementById("b1").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text1").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;

}

switch(bluebg2){ // SONG 2 -----------------------------------------------------------------------------------------------------------------------------

  case 1:
    sound2 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
    document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text2").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      sound2 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
      document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text2").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      sound2 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-";
      document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
      document.getElementById("text2").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        sound2 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
        document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text2").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          sound2 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
          document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text2").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            sound2 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
            document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text2").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              sound2 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
              document.getElementById("b2").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text2").innerHTML = "Minecraft - C418 - Minecraft OST";
              // minecraft - MVA
              break;
              case 8:
                sound2 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text2").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound2 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                  document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text2").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound2 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                    document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text2").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound2 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text2").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound2 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text2").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound2 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text2").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound2 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text2").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound2 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                            document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text2").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound2 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                              document.getElementById("b2").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text2").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;
}
}


function stage2choice(){

switch(bluebg3){ // SONG 4 -----------------------------------------------------------------------------------------------------------------------------

  case 1:
    sound3 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
    document.getElementById("b3").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text3").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      sound3 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
      document.getElementById("b3").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text3").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      sound3 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-";
      document.getElementById("b3").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
      document.getElementById("text3").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        sound3 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
        document.getElementById("b3").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text3").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          sound3 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
          document.getElementById("b3").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text3").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            sound3 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
            document.getElementById("b3").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text3").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              sound3 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
              document.getElementById("b3").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text3").innerHTML = "Minecraft - C418 - Minecraft OST";
              // minecraft - MVA
              break;
              case 8:
                sound3 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text3").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound3 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                  document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text3").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound3 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                    document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text3").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound3 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text3").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound3 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text3").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound3 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text3").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound3 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text3").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound3 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                            document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text3").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound3 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                              document.getElementById("b3").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text3").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;

}

switch(bluebg4){ // SONG 4 -----------------------------------------------------------------------------------------------------------------------------

  case 1:
    sound4 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
    document.getElementById("b4").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text4").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      sound4 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
      document.getElementById("b4").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text4").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      sound4 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-";
      document.getElementById("b4").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
      document.getElementById("text4").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        sound4 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
        document.getElementById("b4").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text4").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          sound4 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
          document.getElementById("b4").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text4").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            sound4 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
            document.getElementById("b4").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text4").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              sound4 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
              document.getElementById("b4").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text4").innerHTML = "Minecraft - C418 - Minecraft OST";
              // minecraft - MVA
              break;
              case 8:
                sound4 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text4").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound4 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                  document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text4").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound4 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                    document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text4").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound4 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text4").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound4 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text4").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound4 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text4").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound4 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text4").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound4 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                            document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text4").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound4 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                              document.getElementById("b4").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text4").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;

}

}


function stage3choice(){

switch(bluebg5){ // SONG 5 -----------------------------------------------------------------------------------------------------------------------------

  case 1:
    sound5 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
    document.getElementById("b5").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text5").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      sound5 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
      document.getElementById("b5").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text5").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      sound5 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-";
      document.getElementById("b5").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
      document.getElementById("text5").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        sound5 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
        document.getElementById("b5").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text5").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          sound5 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
          document.getElementById("b5").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text5").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            sound5 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
            document.getElementById("b5").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text5").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              sound5 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
              document.getElementById("b5").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text5").innerHTML = "Minecraft - C418 - Minecraft OST";
              // minecraft - MVA
              break;
              case 8:
                sound5 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text5").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound5 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                  document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text5").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound5 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                    document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text5").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound5 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text5").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound5 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text5").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound5 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text5").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound5 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text5").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound5 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                            document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text5").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound5 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                              document.getElementById("b5").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text5").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;

}

switch(bluebg6){ // SONG 4 -----------------------------------------------------------------------------------------------------------------------------

  case 1:
    sound6 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
    document.getElementById("b6").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
    document.getElementById("text6").innerHTML = "Ruins - Toby Fox - Undertale OST";
    // ruins - UOST
    break;
    case 2:
      sound6 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
      document.getElementById("b6").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
      document.getElementById("text6").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
      // main menu - PvZost--
    break;
    case 3:
      sound6 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-";
      document.getElementById("b6").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
      document.getElementById("text6").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
      // main screen - wii sports ost
      break;
      case 4:
        sound6 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
        document.getElementById("b6").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
        document.getElementById("text6").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
        // the world is revolving - DOST
        break;
        case 5:
          sound6 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
          document.getElementById("b6").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
          document.getElementById("text6").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
          //overture - SMGOST
          break;
          case 6:
            sound6 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
            document.getElementById("b6").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
            document.getElementById("text6").innerHTML = "ASGORE - Toby Fox - Undertale OST";
            // asgore - UOST
            break;
            case 7:
              sound6 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
              document.getElementById("b6").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
              document.getElementById("text6").innerHTML = "Minecraft - C418 - Minecraft OST";
              // minecraft - MVA
              break;
              case 8:
                sound6 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                document.getElementById("text6").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                // big shot - DOST
                break;
                case 9:
                  sound6 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                  document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                  document.getElementById("text6").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                  break;
                  case 10:
                    sound6 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                    document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text6").innerHTML = "Halo Theme - Halo OST";
                    break;
                    case 11:
                      sound6 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text6").innerHTML = "Menu 2 - C418 - Minecraft OST";
                     break;
                     case 12:
                      sound6 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text6").innerHTML = "Dragonborn - Skyrim OST";
                      break;
                      case 13:
                        sound6 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text6").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                        break;
                        case 14:
                          sound6 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text6").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                          break;
                          case 15:
                            sound6 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                            document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                            document.getElementById("text6").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                            break;
                            case 16:
                              sound6 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                              document.getElementById("b6").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                              document.getElementById("text6").innerHTML = "Sweden - C418 - Minecraft OST";
                              break;

}
 }

 function stage4choice(){
  switch(bluebg7){ // SONG 5 -----------------------------------------------------------------------------------------------------------------------------

    case 1:
      sound7 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
      document.getElementById("b7").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
      document.getElementById("text7").innerHTML = "Ruins - Toby Fox - Undertale OST";
      // ruins - UOST
      break;
      case 2:
        sound7 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
        document.getElementById("b7").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
        document.getElementById("text7").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
        // main menu - PvZost--
      break;
      case 3:
        sound7 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-";
        document.getElementById("b7").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
        document.getElementById("text7").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
        // main screen - wii sports ost
        break;
        case 4:
          sound7 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
          document.getElementById("b7").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
          document.getElementById("text7").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
          // the world is revolving - DOST
          break;
          case 5:
            sound7 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
            document.getElementById("b7").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
            document.getElementById("text7").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
            //overture - SMGOST
            break;
            case 6:
              sound7 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
              document.getElementById("b7").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
              document.getElementById("text7").innerHTML = "ASGORE - Toby Fox - Undertale OST";
              // asgore - UOST
              break;
              case 7:
                sound7 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
                document.getElementById("b7").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
                document.getElementById("text7").innerHTML = "Minecraft - C418 - Minecraft OST";
                // minecraft - MVA
                break;
                case 8:
                  sound7 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                  document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                  document.getElementById("text7").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                  // big shot - DOST
                  break;
                  case 9:
                    sound7 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS"
                    document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text7").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                    break;
                    case 10:
                      sound7 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text7").innerHTML = "Halo Theme - Halo OST";
                      break;
                      case 11:
                        sound7 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text7").innerHTML = "Menu 2 - C418 - Minecraft OST";
                       break;
                       case 12:
                        sound7 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text7").innerHTML = "Dragonborn - Skyrim OST";
                        break;
                        case 13:
                          sound7 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                          document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                          document.getElementById("text7").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                          break;
                          case 14:
                            sound7 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                          document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                          document.getElementById("text7").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                            break;
                            case 15:
                              sound7 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                              document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                              document.getElementById("text7").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                              break;
                              case 16:
                                sound7 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                                document.getElementById("b7").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                                document.getElementById("text7").innerHTML = "Sweden - C418 - Minecraft OST";
                                break;
  
  }
  
  switch(bluebg8){ // SONG 4 -----------------------------------------------------------------------------------------------------------------------------
  
    case 1:
      sound8 = "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
      document.getElementById("b8").setAttribute("src", "https://www.youtube.com/embed/QyPR77rg1to?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
      document.getElementById("text8").innerHTML = "Ruins - Toby Fox - Undertale OST";
      // ruins - UOST
      break;
      case 2:
        sound8 = "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4";
        document.getElementById("b8").setAttribute("src", "https://www.youtube.com/embed/4w3VqzwJ1j4?list=PL8C3D47E6FA9CDDC4");
        document.getElementById("text8").innerHTML = "Main Menu -  Laura Shigihara - Plants Vs Zombies OST";
        // main menu - PvZost--
      break;
      case 3:
        sound8 = "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-";
        document.getElementById("b8").setAttribute("src", "https://www.youtube.com/embed/uQHf9T_9Uno?list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-");
        document.getElementById("text8").innerHTML = "Main Screen -  Kazumi Totaka - Wii Sports OST";
        // main screen - wii sports ost
        break;
        case 4:
          sound8 = "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
          document.getElementById("b8").setAttribute("src", "https://www.youtube.com/embed/8gkTtNefxws?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
          document.getElementById("text8").innerHTML = "THE WORLD REVOLVING - Toby Fox - Deltarune OST";
          // the world is revolving - DOST
          break;
          case 5:
            sound8 = "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl";
            document.getElementById("b8").setAttribute("src", "https://www.youtube.com/embed/IJjYlFAFnoA?list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl");
            document.getElementById("text8").innerHTML = "Overture - Kazumi Totaka - Super Mario Galaxy OST";
            //overture - SMGOST
            break;
            case 6:
              sound8 = "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg";
              document.getElementById("b8").setAttribute("src", "https://www.youtube.com/embed/hMa4hZQbrms?list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg");
              document.getElementById("text8").innerHTML = "ASGORE - Toby Fox - Undertale OST";
              // asgore - UOST
              break;
              case 7:
                sound8 = "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l";
                document.getElementById("b8").setAttribute("src", "https://www.youtube.com/embed/qq-RGFyaq0U?list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l");
                document.getElementById("text8").innerHTML = "Minecraft - C418 - Minecraft OST";
                // minecraft - MVA
                break;
                case 8:
                  sound8 = "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ";
                  document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/-8p8VowCmgE?list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ");
                  document.getElementById("text8").innerHTML = "BIG SHOT - Toby Fox - Deltarune OST";
                  // big shot - DOST
                  break;
                  case 9:
                    sound8 = "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                    document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/bq_jS6o3OoY?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                    document.getElementById("text8").innerHTML = "Bowsers Theme - Koji Kondo - Super Mario 64 OST ";
                    break;
                    case 10:
                      sound8 = "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                      document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/0jXTBAGv9ZQ?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                      document.getElementById("text8").innerHTML = "Halo Theme - Halo OST";
                      break;
                      case 11:
                        sound8 = "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/N6noiPFB3io?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text8").innerHTML = "Menu 2 - C418 - Minecraft OST";
                       break;
                       case 12:
                        sound8 = "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                        document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/CMfx3MT8ge0?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                        document.getElementById("text8").innerHTML = "Dragonborn - Skyrim OST";
                        break;
                        case 13:
                          sound8 = "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                          document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/e9r5hx47kxM?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                          document.getElementById("text8").innerHTML = "Jump Up, Super Star! - Super Mario Odyssey OST";
                          break;
                          case 14:
                            sound8 = "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                          document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/tz82xbLvK_k?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                          document.getElementById("text8").innerHTML = "Hopes and Dreams - Toby Fox - Undertale OST";
                            break;
                            case 15:
                              sound8 = "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS";
                              document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/OVZ7EaqplsI?list=PL81MnlnJD9qoyZwTwZw5zy0NfHxNHEsbS");
                              document.getElementById("text8").innerHTML = "eShop Theme - Nintendo Wii U System Music";
                              break;
                              case 16:
                                sound8 = "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG";
                                document.getElementById("b8").setAttribute("src",  "https://www.youtube.com/embed/xIQrC4CerB8?list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG");
                                document.getElementById("text8").innerHTML = "Sweden - C418 - Minecraft OST";
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
  document.getElementById("match").style.display = "block";
 }

 semi1;
 semi2;
 semi3;
 semi4;

 function onechosen(){
semi1 = sound1;
console.log(document.getElementById("text1").innerHTML);
document.getElementById("three").style.display = "block";
document.getElementById("four").style.display = "block";
document.getElementById("stage2").style.display = "block";
document.getElementById("text3").style.display = "block";
document.getElementById("text4").style.display = "block";
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
document.getElementById("match").innerHTML = "Round 2 - Quals";
 }

 function twochosen(){
semi1 = sound2;
  console.log(document.getElementById("text2").innerHTML);
  document.getElementById("three").style.display = "block";
document.getElementById("four").style.display = "block";
document.getElementById("stage2").style.display = "block";
document.getElementById("text3").style.display = "block";
document.getElementById("text4").style.display = "block";
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
document.getElementById("match").innerHTML = "Round 2 - Quals";
 }

 function threechosen(){
  semi2 = sound3;
  console.log(document.getElementById("text3").innerHTML);
  document.getElementById("five").style.display = "block";
document.getElementById("six").style.display = "block";
document.getElementById("text5").style.display = "block";
document.getElementById("text6").style.display = "block";
document.getElementById("stage3").style.display = "block";
document.getElementById("three").style.display = "none";
document.getElementById("four").style.display = "none";
document.getElementById("match").innerHTML = "Round 3 - Quals";
 }

 function fourchosen(){
  semi2 = sound4;
  console.log(document.getElementById("text4").innerHTML);
  document.getElementById("five").style.display = "block";
document.getElementById("six").style.display = "block";
document.getElementById("stage3").style.display = "block";
document.getElementById("text5").style.display = "block";
document.getElementById("text6").style.display = "block";
document.getElementById("three").style.display = "none";
document.getElementById("four").style.display = "none";
document.getElementById("match").innerHTML = "Round 3 - Quals";
 }

 function fivechosen(){
  semi3 = sound5;
  console.log(document.getElementById("text5").innerHTML);
  document.getElementById("seven").style.display = "block";
document.getElementById("eight").style.display = "block";
document.getElementById("stage4").style.display = "block";
document.getElementById("text7").style.display = "block";
document.getElementById("text8").style.display = "block";
document.getElementById("five").style.display = "none";
document.getElementById("six").style.display = "none";
document.getElementById("match").innerHTML = "Round 4 - Quals";
 }

 function sixchosen(){
  semi3 = sound6;
  console.log(document.getElementById("text6").innerHTML);
  document.getElementById("seven").style.display = "block";
document.getElementById("eight").style.display = "block";
document.getElementById("stage4").style.display = "block";
document.getElementById("text7").style.display = "block";
document.getElementById("text8").style.display = "block";
document.getElementById("five").style.display = "none";
document.getElementById("six").style.display = "none";
document.getElementById("match").innerHTML = "Round 4 - Quals";
 }

 function sevenchosen(semi1, semi2){
  semi4 = sound7;
  console.log(document.getElementById("text7").innerHTML);
  document.getElementById("b9").setAttribute("src", semi1);
  document.getElementById("b10").setAttribute("src", semi2);
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("stage5").style.display = "block";
  document.getElementById("text10").style.display = "block";
  document.getElementById("text9").style.display = "block";
  document.getElementById("semitwo").style.display = "block";
  document.getElementById("semione").style.display = "block";
document.getElementById("match").innerHTML = "Round 5 - Semis";
 }

 function eightchosen(semi1, semi2){
  semi4 = sound8;
  console.log(document.getElementById("text7").innerHTML);
  document.getElementById("b9").setAttribute("src", semi1);
  document.getElementById("b10").setAttribute("src", semi2);
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("stage5").style.display = "block";
  document.getElementById("text10").style.display = "block";
  document.getElementById("text9").style.display = "block";
  document.getElementById("semitwo").style.display = "block";
  document.getElementById("semione").style.display = "block";
document.getElementById("match").innerHTML = "Round 5 - Semis";
 }


 function ninechosen(semi1, semi3, semi4){
  final1 = semi1;
  console.log(document.getElementById("text9").innerHTML);
  document.getElementById("b11").setAttribute("src", semi3);
  document.getElementById("b12").setAttribute("src", semi4);
  document.getElementById("semione").style.display = "none";
  document.getElementById("semitwo").style.display = "none";
  document.getElementById("stage6").style.display = "block";
  document.getElementById("text11").style.display = "block";
  document.getElementById("text12").style.display = "block";
  document.getElementById("semithree").style.display = "block";
  document.getElementById("semifour").style.display = "block";
document.getElementById("match").innerHTML = "Round 6 - Semis";
 }

 function tenchosen(semi2, semi3, semi4){
  final1 = semi2;
  console.log(document.getElementById("text10").innerHTML);
  document.getElementById("b11").setAttribute("src", semi3);
  document.getElementById("b12").setAttribute("src", semi4);
  document.getElementById("semione").style.display = "none";
  document.getElementById("semitwo").style.display = "none";
  document.getElementById("stage6").style.display = "block";
  document.getElementById("text11").style.display = "block";
  document.getElementById("text12").style.display = "block";
  document.getElementById("semithree").style.display = "block";
  document.getElementById("semifour").style.display = "block";
document.getElementById("match").innerHTML = "Round 6 - Semis";
 }

 function elevenchosen(semi4, semi3){

  console.log(document.getElementById("text11").innerHTML);
  document.getElementById("b13").setAttribute("src", final1);
  document.getElementById("b14").setAttribute("src", semi3);
  document.getElementById("semithree").style.display = "none";
  document.getElementById("semifour").style.display = "none";
  document.getElementById("stage7final").style.display = "block";
  document.getElementById("text13").style.display = "block";
  document.getElementById("text14").style.display = "block";
  document.getElementById("semifive").style.display = "block";
  document.getElementById("semisix").style.display = "block";
document.getElementById("match").innerHTML = "Round 7 - FINALS";
 }

 function twelvechosen(semi3, semi4){
  
  console.log(document.getElementById("text12").innerHTML);
  document.getElementById("b13").setAttribute("src", final1);
  document.getElementById("b14").setAttribute("src", semi4);
  document.getElementById("semithree").style.display = "none";
  document.getElementById("semifour").style.display = "none";
  document.getElementById("stage7final").style.display = "block";
  document.getElementById("text13").style.display = "block";
  document.getElementById("text14").style.display = "block";
  document.getElementById("semifive").style.display = "block";
  document.getElementById("semisix").style.display = "block";
document.getElementById("match").innerHTML = "Round 7 - FINALS";
 }

 function thirteenchosen(final1){
  winner = final1;
  document.getElementById("match").innerHTML = "WINNER - CONGRATS";
  
  document.getElementById("semisix").style.display = "none";
  document.getElementById("return").style.display = "block";

 }

 function fourteenchosen(semi4){
 winner = semi4;
 document.getElementById("match").innerHTML = "WINNER - CONGRATS";

 document.getElementById("semifive").style.display = "none";
 document.getElementById("return").style.display = "block";
  

 }