carArray = [
  (line00 =
    "                                                       ..:---=---::..... "),
  (line01 =
    "                                             ::+#%@@@@@@@@@@@@@@@@@@@@%=..#=."),
  (line02 =
    "           .=***#=                   :=-=#@@@@@@%##++---::::::::--=++#@@@@# .**."),
  (line03 =
    "            =###****#=  .=      .+++++*@@@@@@@%*****%@+*###########**++==#@@@@=+@*+."),
  (line04 =
    "             +#*#%@@@@@@-:-=++++++++++=-:@@@@@%%#####@#+*****************+=    .-.-%*++."),
  (line05 =
    "             =@#%@@-::.-=+++*******+++++=----=*#%@@@@@@%%%@@@@@@@@@@@@%%%%@@@@@@@@@*-%@@@%@#+"),
  (line06 =
    "             :##*+=-=++*+++++++++==-----------::...::.::------------------.  .#@@#-=+=+====--=+++++=:"),
  (line07 =
    "        @@@*====-=*%%+==-::..    .=*########***+++*---:::------::-::::::::=%@%%+:.::::::=::::-::::=:..     ..-=+**:"),
  (line08 =
    "        :-#%@@@@@@*:=--.*%@@@@@@@@%#++**********#*##%@@@@%+*%%%%%%%%%%@@@%%#****#%%%%%%%%@%%%%##*=--#@@@@@@@@@- .:-::@@*"),
  (line9 =
    "       -*+==--:--=+*++#@@@+=+=====*@@%++*###*%##%#@%%##%%%%%#**********************************+#@@@@+=*+++++*@@@*+*=-:-*@="),
  (line10 =
    "       #**#####***+=+@@++*##@@@@#%#*-%@%+*****@#####*++++++*************************************@@=-*#@@@@@%@#*=+@##%##*+===+++:"),
  (line11 =
    "       %*********+++@%*##*%##****%#%**+@@+*****%#####*#############################*##*##*#****@#=#%@#*=**#=#*%##=@%+**######**=-:-."),
  (line12 =
    "       **#######*+*@%*#*%%*###%#%*#@%#*+@#*****+%%####*#################################**#**+@%+##%**###*###*#%#%+@*====++=+=+*##@@*"),
  (line13 =
    "      +#*+==+++++**@*#=#%**##+=*#%+***#+%@+**##**#%####*##%%%#########################**###***@#*##*+%##=++**#*#***#@#@%%#*####+%@@%#"),
  (line14 =
    "      ++#####*#***#@*#*%#+*#%%#%##*+%***#%**####**+%@@%++***###%%%%%%%%%%%%%%%%%%%%%%%%%#%##*#%#**####**%@%###*##+*#%+%####***%%%@==:"),
  (line15 =
    "      -##*********#%**=#@#*#+*:@-%#%%+#*%%**********++*#=--::.:::::::::::::::-----------==++=*%%+*+@*#@=*-*-%+*@+#*%%*#####**%@@@#+#-"),
  (line16 =
    "       %##%#%#######%#*-+@#=+###-+%@=**##%**############%%@@@@@@@@@@@@%%%%%%%%%%%%%%%%######*#%%#**-%##*###*##@-+*##%*%#*##+=-=--:::"),
  (line17 =
    "      =%##%##%#%%%###%%#+=*@@@@@%@=+**%###**#****************************#*########**########*###%**==#@@@@@*==**%###+***###%%%%@@@@@#"),
  (line18 =
    "    +@%################%%**+::::=**#%%#######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#####%%#**=-:-=+*#%%####%%%%####%#######%*:"),
  (line19 =
    "     .           +@@@@@@@@@@@%@%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@+                                 .....:.:...                         "),
];

function renderToDom() {
  document.getElementById("car0").innerHTML = carArray[0];
  document.getElementById("car1").innerHTML = carArray[1];
  document.getElementById("car2").innerHTML = carArray[2];
  document.getElementById("car3").innerHTML = carArray[3];
  document.getElementById("car4").innerHTML = carArray[4];
  document.getElementById("car5").innerHTML = carArray[5];
  document.getElementById("car6").innerHTML = carArray[6];
  document.getElementById("car7").innerHTML = carArray[7];
  document.getElementById("car8").innerHTML = carArray[8];
  document.getElementById("car9").innerHTML = carArray[9];
  document.getElementById("car10").innerHTML = carArray[10];
  document.getElementById("car11").innerHTML = carArray[11];
  document.getElementById("car12").innerHTML = carArray[12];
  document.getElementById("car13").innerHTML = carArray[13];
  document.getElementById("car14").innerHTML = carArray[14];
  document.getElementById("car15").innerHTML = carArray[15];
  document.getElementById("car16").innerHTML = carArray[16];
  document.getElementById("car17").innerHTML = carArray[17];
  document.getElementById("car18").innerHTML = carArray[18];
  document.getElementById("car19").innerHTML = carArray[19];
}

let space = "  ";
let array = ["1", "2", "3"];
let i = 0;

function drive() {
  setTimeout(() => {
    for (let c = 0; c < carArray.length; c++) {
      carArray[c] = space + carArray[c];
      i++;
      renderToDom();
    }
    console.log(i)
    if (i < 6000) {
      drive();
    }
  }, 3);
}

drive();
