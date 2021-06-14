function Order() {
    var op1 = document.getElementById("OldiesAttack");
    var op2 = document.getElementById("GrilledChicken");
    var op3 = document.getElementById("SmokeyChicken");
    var op4 = document.getElementById("ChickenCaramellized");
    var op5 = document.getElementById("Colorado");
    var op6 = document.getElementById("Marselia");
    var op7 = document.getElementById("BBQChickenPizza");
    var op8 = document.getElementById("CheeseLoversPizza");
    var op9 = document.getElementById("HotDogPizza");
    var op10 = document.getElementById("SeafoodPizza");
    var op11 = document.getElementById("MixChickenPizza");
    var op12 = document.getElementById("SuperSupremePizza");
    var op13 = document.getElementById("JuicyLusy");
    var op14 = document.getElementById("Mafia");
    var op15 = document.getElementById("Caramelo");
    var op16 = document.getElementById("Galadtor");
    var op17 = document.getElementById("Brisket");
    var op18 = document.getElementById("Milanu");

    var totalcost = 0;

    if (op1.selected) {
        var item = document.createElement("td");
        item.innerText = "Oldies Attak";
        totalcost = totalcost + 70;
        document.getElementById("product").append(item);
    }
    if (op2.selected) {
        var item = document.createElement("td");
        item.innerText = "Grilled Chicken";
        totalcost = totalcost + 50;
        document.getElementById("product").append(item);
    }
    if (op3.selected) {
        var item = document.createElement("td");
        item.innerText = "Smokey Chicken";
        totalcost = totalcost + 65;
        document.getElementById("product").append(item);
    }
    if (op4.selected) {
        var item = document.createElement("td");
        item.innerText = "Chicken Caramellized";
        totalcost = totalcost + 45;
        document.getElementById("product").append(item);
    }
    if (op5.selected) {
        var item = document.createElement("td");
        item.innerText = "Colorado";
        totalcost = totalcost + 80;
        document.getElementById("product").append(item);
    }
    if (op6.selected) {
        var item = document.createElement("td");
        item.innerText = "Marselia";
        totalcost = totalcost + 40;
        document.getElementById("product").append(item);
    }


    if (op7.selected) {
        var item = document.createElement("td");
        item.innerText = "BBQ Chicken Pizza";
        totalcost = totalcost + 60;
        document.getElementById("product").append(item);
    }
    if (op8.selected) {
        var item = document.createElement("td");
        item.innerText = "Cheese Lovers Pizza";
        totalcost = totalcost + 50;
        document.getElementById("product").append(item);
    }
    if (op9.selected) {
        var item = document.createElement("td");
        item.innerText = "Hot Dog Pizza";
        totalcost = totalcost + 55;
        document.getElementById("product").append(item);
    }
    if (op10.selected) {
        var item = document.createElement("td");
        item.innerText = "Seafood Pizza";
        totalcost = totalcost + 70;
        document.getElementById("product").append(item);
    }
    if (op11.selected) {
        var item = document.createElement("td");
        item.innerText = "Mix Chicken Pizza";
        totalcost = totalcost + 65;
        document.getElementById("product").append(item);
    }
    if (op12.selected) {
        var item = document.createElement("td");
        item.innerText = "Super Supreme Pizza";
        totalcost = totalcost + 60;
        document.getElementById("product").append(item);
    }


    if (op13.selected) {
        var item = document.createElement("td");
        item.innerText = "Juicy Lusy";
        totalcost = totalcost + 80;
        document.getElementById("product").append(item);
    }
    if (op14.selected) {
        var item = document.createElement("td");
        item.innerText = "Mafia";
        totalcost = totalcost + 50;
        document.getElementById("product").append(item);
    }
    if (op15.selected) {
        var item = document.createElement("td");
        item.innerText = "Caramelo";
        totalcost = totalcost + 55;
        document.getElementById("product").append(item);
    }
    if (op16.selected) {
        var item = document.createElement("td");
        item.innerText = "Galadtor";
        totalcost = totalcost + 45;
        document.getElementById("product").append(item);
    }
    if (op17.selected) {
        var item = document.createElement("td");
        item.innerText = "Brisket";
        totalcost = totalcost + 80;
        document.getElementById("product").append(item);
    }
    if (op18.selected) {
        var item = document.createElement("td");
        item.innerText = "Milanu";
        totalcost = totalcost + 40;
        document.getElementById("product").append(item);
    }

    var item = document.createElement("td");
    item.innerText = totalcost;
    document.getElementById("cost").append(item);

}

function myFunction() {
    alert("Hello! you will receive your order soon.");
}