var eingabe = { Eingabetext: "Wie viele es sind in diesem Text?" };
var count= 0;
var settings;

function setup() {
  createCanvas(700,300);
  settings = QuickSettings.create(20, 20, "Häufigkeitsanalyse");
  settings.setWidth(width-30);
  settings.bindText("Eingabetext", "Wie viele es sind in diesem Text?", eingabe);
  settings.addTextArea("Analyse ergibt", count);
  settings.addButton("Buchstabe \'e\' zählen", function() { analyse(); });	
}

function analyse() {
  
//Ihr Loesungscode
 
  settings.setValue("Analyse ergibt", count);
}