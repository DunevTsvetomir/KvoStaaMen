function openCity(evt, cityName) {
    var i;
    var cities = document.getElementsByClassName("city");
    for (i = 0; i < cities.length; i++) {
      cities[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(cityName + "Text").style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  function showOcean() {
    var ocean = document.getElementById("ocean");
    var sea = document.getElementById("sea");
    ocean.style.display = "block";
    sea.style.display = "none";
  }
  
  function showSea() {
    var ocean = document.getElementById("ocean");
    var sea = document.getElementById("sea");
    ocean.style.display = "none";
    sea.style.display = "block";
  }