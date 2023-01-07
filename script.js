function addMedicine() {
    var medicine = document.getElementById("medicine").value;
    var dosage = document.getElementById("dosage").value;
    var frequency = document.getElementById("frequency").value;
    var timeOfDay = document.getElementById("time-of-day").value;
  
    var medicineList = document.getElementById("medicine-list");
    var newMedicine = document.createElement("div");
    newMedicine.innerHTML = medicine + " - " + dosage + " - " + frequency + " - " + timeOfDay;
    medicineList.appendChild(newMedicine);
  
    document.getElementById("medicine").value = "";
    document.getElementById("dosage").value = "";
}  