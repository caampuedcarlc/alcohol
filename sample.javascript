function calculateTotal() {
    // Get the consumption values from the input fields
    const submeter1 = parseFloat(document.getElementById('submeter1').value) || 0;
    const submeter2 = parseFloat(document.getElementById('submeter2').value) || 0;
    const submeter3 = parseFloat(document.getElementById('submeter3').value) || 0;

    // Define the rate per kWh (example rate)
    const ratePerKWh = 0.15; // Adjust this rate as necessary

    // Calculate total amount due for each submeter
    const total1 = submeter1 * ratePerKWh;
    const total2 = submeter2 * ratePerKWh;
    const total3 = submeter3 * ratePerKWh;

    // Calculate the overall total
    const overallTotal = total1 + total2 + total3;

    // Display the results
    document.getElementById('result').innerHTML = `
        <strong>Bill Summary:</strong><br>
        Submeter 1: \$${total1.toFixed(2)}<br>
        Submeter 2: \$${total2.toFixed(2)}<br>
        Submeter 3: \$${total3.toFixed(2)}<br>
        <strong>Total Amount Due: \$${overallTotal.toFixed(2)}</strong>
    `;
}
