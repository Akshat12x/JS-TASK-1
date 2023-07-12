window.onload = function() {
    var dateContainer = document.getElementById('date');
    var dayContainer = document.getElementById('day');
  
    var currentDate = new Date();
    var formattedDate = ("0" + currentDate.getDate()).slice(-2) + "/" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "/" + currentDate.getFullYear();
    var formattedDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  
    dateContainer.textContent = "Today Date: " + formattedDate;
    dayContainer.textContent = "Today Day: " + formattedDay;
  };




  function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    document.getElementById("addition").textContent = parseFloat(num1) + parseFloat(num2);
    document.getElementById("subtraction").textContent = parseFloat(num1) - parseFloat(num2);
    document.getElementById("multiplication").textContent = parseFloat(num1) * parseFloat(num2);
    document.getElementById("division").textContent = parseFloat(num1) / parseFloat(num2);
  }





  function showName() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("displayName").innerText = name;
  }