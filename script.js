document.addEventListener("DOMContentLoaded", function () {
    const button = 
        document.getElementById("calculate-button");
    const container = 
        document.getElementById("result");

    button.addEventListener("click", function () {
        const initialInvestment = 
            parseFloat(document.getElementById("initial-investment").value);
        const interestRate = 
            parseFloat(document.getElementById("interest-rate").value);
        const investmentYears =
            parseInt(document.getElementById("investment-years").value);
        let totalAmount = initialInvestment;

        for (let i = 1; i <= investmentYears; i++) {
            totalAmount = (initialInvestment*interestRate*investmentYears)/100;
        }

        container.innerHTML = 
        `After ${investmentYears} years, your Simple Interest`+
        ` will be Rs.${totalAmount.toFixed(2)}.`;
    });
});
