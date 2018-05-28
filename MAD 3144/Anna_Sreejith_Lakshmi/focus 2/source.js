

function auto()
{

     json_operations();
     startTime();
     backgr();


}


function backgr()
{
    var backimg = ["images/pic.jpg","images/pic2.jpeg","images/pic3.jpeg"];
    var randimg =Math.floor(Math.random()*3);
    document.body.background = backimg[randimg];
    setInterval(backgr,300000);
}

function startTime()
  {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("current_time").innerHTML =
    h + ":" + m ;

    if ((h > 12) && (h < 18))
    {
      document.getElementById("greeting_time_msg").innerHTML = "afternoon,";
    }
    else if ((h >= 18) && (h <= 23))
    {
       document.getElementById("greeting_time_msg").innerHTML = "evening,";
    }
    else
    {
       document.getElementById("greeting_time_msg").innerHTML = "morning,";
    }


    var t = setTimeout(startTime, 500);
  }

function checkTime(i)
  {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function check_key()
  {
    if(event.keyCode === 13)
    {
      var task = $("input#focuses").val();
      var HTML_content = "<ul> <li> "+ task +"  </li>  </ul>";
      $("#focuses").replaceWith(HTML_content);
      $("#hidden").show();
    }
    else
    {

    }
 }


function json_operations()
{
  var xhr = new XMLHttpRequest();
  getLocation();

  var lat = localStorage.getItem("lat");
  var lon  = localStorage.getItem("lon");

  url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=3b887932d40c57775ab6a7f8ee55a44f";
  xhr.open('GET', url,true);
  xhr.send();



  xhr.onreadystatechange = processRequest;


  function processRequest(e)
    {
      if (xhr.readyState == 4 && xhr.status == 200)
      {
          var response = JSON.parse(xhr.responseText);
          document.getElementById("label_location").innerHTML = response.name;
          document.getElementById("temp").innerHTML = Math.round(response.main.temp - 273.15);    // converting kelvin to celcius.


           //icon changing code

          // switch (JSON.stringify(response.weather.main))
          // {
          //   case Clouds:
          //   {
          //
          //     $("#icon").attr("src", "images/cloudy.png");
          //
          //     break;
          //   }
          //   case clear sky:
          //   {
          //     var HTML_content = "<img id="\"icon"\" src ="\"images/sunny.png"\">";
          //       $("#icon").attr("src", "images/sunny.png");
          //     break;
          //   }
          //
          // }

      }
    }


}

function getLocation()
{
    if (navigator.geolocation)
    {
       navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        alert("Geolocation is not supported by this browser.");
    }

}

function showPosition(position)
{
    localStorage.setItem("lat",position.coords.latitude);
    localStorage.setItem("lon",position.coords.longitude);

}
