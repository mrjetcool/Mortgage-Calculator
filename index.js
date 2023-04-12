function calculateMortgage() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
    const years = parseInt(document.getElementById("years").value) * 12;
  
    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -years));
    const totalPayment = monthlyPayment * years;
    const totalInterest = totalPayment - principal;
  
    document.getElementById("monthly-payment").innerHTML = "$" + monthlyPayment.toFixed(2);
    document.getElementById("total-payment").innerHTML = "$" + totalPayment.toFixed(2);
    document.getElementById("total-interest").innerHTML = "$" + totalInterest.toFixed(2);
  
    document.getElementById("results").style.display = "block";
  }
  