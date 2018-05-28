<!DOCTYPE html>
<html>
<body>

<?php
$x =25;
$name="Anna";

if($x>10){
  echo "<h3>HI</h3>";
}
else{
  echo "bye";
}
echo "<h3>$name</h3>";
for($i = 0;$i < 5;$i++){
  echo "<br>HI";
}
$f=1;
while($f<=3){
  echo"<h3>hello<h3>";
  $f++;
}

function sayHello(){
  echo "Ananas<br>";
  echo "abacaxi<br>";
  echo "pineapple<br><br><br>";
}
sayHello();

function fruit($lang){
  if($lang== "gujarati" OR $lang == "punjabi"){
    echo "ananas";
  }
  else if($lang=="malayalam"){
    echo "kaithachakka<br><br><br>";
  }
  else if($lang=="br"){
    echo "abacaxi";
  }
  else if($lang=="gujarati"){
    echo "ananas";
  }
  else if ($lang=="viet"){
    echo "dua";
  }
  else{
    //sayHello();
  }
}

$k="malayalam";

fruit($k);


//arrays

$animals = [];
$animalss = array();

$animals[0]= "dog";
$animals[1]= "cat";
//echo $animal[0];
//echo $animal;

print_r($animals);  //displaying arrays

//another way to add things to array
//array_push(which array,what to add);
array_push($animals,"fox");
for($j = 0; $j < 5; $j++){
  array_push($animalss,"cow");
}
echo "<br>";
print_r($animalss);

$easy = array(
  "vt" => "de",
  "br" => "facile",
  "my" => "elupam",
  "gu" => "saral",
  "pu" => "sokha"
);
echo "<br>";
echo "<br>";
print_r($easy);
echo "<br>";
echo "<br>";
echo $easy["my"];

echo "<br>";
echo "###***----------***###";
echo "<br>";
foreach ($easy as $w => $v) {

  echo "   key is: ".$w . "<br>";
  echo "   value is: ".$v . "<br>";
  echo "###***----------***###" ."<br>";
  // code...
}




?>

</body>
</html>
