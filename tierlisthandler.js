function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

bluebg1 = getRandomInt(1, 8)


bluebg2 = getRandomInt(1, 8)
while(bluebg2 == bluebg1){
bluebg2 = getRandomInt(1, 8)
}

bluebg3 = getRandomInt(1, 8)
while(bluebg3 == bluebg1 || bluebg3 == bluebg2 ){
bluebg3 = getRandomInt(1, 8)
}

bluebg4 = getRandomInt(1, 8)
while(bluebg4 == bluebg1 || bluebg4 == bluebg2 || bluebg4 == bluebg3){
bluebg4 = getRandomInt(1, 8)
}

bluebg5 = getRandomInt(1, 8)
while(bluebg5 == bluebg1 || bluebg5 == bluebg2 || bluebg5 == bluebg3 || bluebg5 == bluebg4){
bluebg5 = getRandomInt(1, 8)
}

bluebg6 = getRandomInt(1, 8)
while(bluebg6 == bluebg1 || bluebg6 == bluebg2 || bluebg6 == bluebg3 || bluebg6 == bluebg4 || bluebg6 == bluebg5){
bluebg6 = getRandomInt(1, 8)
}

bluebg7 = getRandomInt(1, 8)
while(bluebg7 == bluebg1 || bluebg7 == bluebg2 || bluebg7 == bluebg3 || bluebg7 == bluebg4 || bluebg7 == bluebg5 || bluebg7 == bluebg6){
bluebg7 = getRandomInt(1, 8)
}

bluebg8 = getRandomInt(1, 8)
while(bluebg8 == bluebg1 || bluebg8 == bluebg2 || bluebg8 == bluebg3 || bluebg8 == bluebg4 || bluebg8 == bluebg5 || bluebg8 == bluebg6 || bluebg8 == bluebg7){
bluebg8 = getRandomInt(1, 8)
}

b1sound;
b2sound;
b3sound;
b4sound;
b5sound;
b6sound;
b7sound;
b8sound;

switch(bluebg1){

  case 1:
    b1sound = "https://www.youtube.com/watch?v=QyPR77rg1to&list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg&index=5";
    // ruins - UOST
    break;
    case 2:
      b1sound = "https://www.youtube.com/watch?v=4w3VqzwJ1j4&list=PL8C3D47E6FA9CDDC4&index=1";
      // main menu - PvZost
    break;
    case 3:
      b1sound = "https://www.youtube.com/watch?v=uQHf9T_9Uno&list=PL72BLeZJTSROUYz97aZdVdl9590M7qZD-&index=2";
      // main screen - wii sports ost
      break;
      case 4:
        b1sound = "https://www.youtube.com/watch?v=8gkTtNefxws&list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ&index=33";
        // the world is revolving - DOST
        break;
        case 5:
          b1sound = "https://www.youtube.com/watch?v=IJjYlFAFnoA&list=PLoqOgJJaN57YiiY-JrdSvBVCprMPednXl&index=2";
          //overture - SMGOST
          break;
          case 6:
            b1sound = "https://www.youtube.com/watch?v=hMa4hZQbrms&list=PLpJl5XaLHtLX-pDk4kctGxtF4nq6BIyjg&index=77";
            // asgore - UOST
            break;
            case 7:
              b1sound = "https://www.youtube.com/watch?v=qq-RGFyaq0U&list=PLefKpFQ8Pvy5aCLAGHD8Zmzsdljos-t2l&index=1";
              // minecraft - MVA
              break;
              case 8:
                b1sound = "https://www.youtube.com/watch?v=-8p8VowCmgE&list=PLEUKcNuP7bDX9RoW3HqYR6EFvWZh12upZ&index=81";
                // big shot - DOST
                break;

}