function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " are great Animals!";
    switch (Animals) {
        case "Dogs":
            Animal_Output = "Dosg" + Animal_String;
            break;
        case "Cats":
            Animal_Output = "Cats" + Animal_String;
            break;
        case "Bats":
            Animal_Output = "Bats" + Animal_String;
            break;
        case "Cows":
            Animal_Output = "Cows" + Animal_String;
            break;
        case "Foxes":
            Animal_Output = "Foxes" + Animal_String;
            break;
        case "Owls":
            Animal_Output = "Owls" + Animal_String;
            break;
            default:
            Animal_Output = "Please enter your favorite Animal exactly as written on the above list.";
      }
      document.getElementById("Output").innerHTML = Animal_Output;




}