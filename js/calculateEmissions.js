function calculate_on() {
    adults = Number(document.getElementById("user").value);
    children = Number(document.getElementById("child").value);
    pets = Number(document.getElementById("paw").value);
    cars = Number(document.getElementById("car").value);
    flights = Number(document.getElementById("plane").value);
    takeaways = Number(document.getElementById("cutlery").value);
    sum_all = 0.5 * adults + 8 * children + 0.7 * pets + 4.2 * cars + 1.5 * flights + 52 * 0.001 * takeaways;
    document.getElementById("footprint").innerHTML = "The carbon footprint of your household is: <h3>" + sum_all + " tons CO2e per year.*</h3><br>*This is just an estimation.";

}

function display_icons(id) {
    number = Number(document.getElementById(id).value);
    let icon = '<i class="fa fa-' + id + '"></i> ';
    document.getElementById(id + "-icon").innerHTML = icon.repeat(number);
}