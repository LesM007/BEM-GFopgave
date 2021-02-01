// JavaScript Document

//CONTACT formular
const myForm = document.querySelector("form");
myForm.addEventListener("submit", validate);

function validate() {
  let error = "";
  document.querySelector("#message").textContent = error;

  if (myForm.name.value == "") {
    error = "udfyld for- og efternavn";
    document.querySelector("#message").textContent = error;
    myForm.name.focus();
    event.preventDefault();
    return false;
  }
  if (myForm.email.value == "") {
    error = "udfyld din emailadresse";
    document.querySelector("#message").textContent = error;
    myForm.email.focus();
    event.preventDefault();
    return false;
  }
  const atpos = form.email.value.indexOf("@");
  const dotpos = form.email.value.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || f.email.value.length <= dotpos + 2) {
    error = "Please use a valid email";
    document.querySelector("#message").textContent = error;
    myForm.email.focus();
    event.preventDefault();
    return false;
}  
  return true;
}

//Slider
const photoArray = ["thecirle", "boredranger", "getin"];
const textArray = ["The Circle", "The Bored Ranger", "Get in"];

let index = 0;

document.querySelector("#right_arrow").addEventListener("click",next);
document.querySelector("#left_arrow").addEventListener("click",previous);

function next(){
	if(index < photoArray.length-1){ //så længe index er mindre end 9 = fotoListe.length-1...
		index++;
	}else{
		index = 0;
	}
	change();
}
function previous(){ //tilsvarende men omvendt.
	if(index > 0){  //så længe index er mindre end 9 = fotoListe.length-1...
		index--;
	}else{
		index = photoArray.length-1;
	}
	change(); //her kalder vi funktionen vi har lavet samlet nederst: skiftFoto. Variationen nyFoto kunne også stå begge steder dvs. under frem og tilbage
}
function change(){
	let newPhoto = "images/" + photoArray[index] + ".jpg";
	let newText = textArray[index];
	
	document.querySelector("#galleryPhoto").setAttribute("src",newPhoto); //her bruger vi vores forløkke ved at sætte stinavnet på det billede vi gerne vil hente
	
	document.querySelector("#caption").textContent = newText;
}