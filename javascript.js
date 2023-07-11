function tempfromcel(valNum) {
    console.log(valNum);
    valNum = parseFloat(valNum);
    document.getElementById("Fahrenheit").value = (valNum*1.8) + 32;
    document.getElementById("Kelvin").value = (valNum + 273.15);
    changeColor();
  }
  function tempfromfah(valNum) {
    console.log(valNum);
    valNum = parseFloat(valNum);
    document.getElementById("Celcius").value = (valNum - 32) / 1.8;
    document.getElementById("Kelvin").value = ((valNum - 32) / 8) + 273.15;
    changeColor();
  }
  function tempfromkel(valNum) {
    console.log(valNum);
    valNum = parseFloat(valNum);
    document.getElementById("Celcius").value = ((valNum - 273.15) * 1.8) + 32;
    document.getElementById("Fahrenheit").value = (valNum - 273.15);
    changeColor();
  }
  function changeColor()
  {
    let temp = document.getElementById("Celcius").value;
    let bg = document.getElementById("cont");
    if(temp <= 20)
    {
      bg.style.backgroundColor = "#068FFF";
    }
    if(temp > 20 && temp < 50)
    {
      bg.style.backgroundColor = "orange";
    }
    if(temp >= 50)
    {
      bg.style.backgroundColor = "red";
    }
  }