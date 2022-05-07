function updaterate()
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateval}%`; 
}
function compute()
{
    let amount = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let year = document.getElementById("years").value;

    let interest = ((amount*rate)/100)*year;
    year = new Date().getFullYear() + year;
    document.getElementById("result").innerHTML = `If you deposit <mark>${amount}</mark>, <br>
    at an interest rate of <mark>${rate}%</mark>. <br>
    You will receive an amount of <mark>${interest}</mark> <br>
    in the year of <mark>${year}</mark>`
}
        
