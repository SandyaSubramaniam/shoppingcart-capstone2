let items = new Array();
items[items.length] = { name: "Strawberry", price: 1.00, quantity: 0 };
items[items.length] = { name: "Blueberry", price: 1.50, quantity: 0 };
items[items.length] = { name: "Orange", price: 1.25, quantity: 0 };
items[items.length] = { name: "Apple", price: 0.50, quantity: 0 };

function calcTotal(pick) {
    for (i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.name === pick) {
            item.quantity += 1;
        }
    }
}

function displayItemList() {
    let l = "<table border = 1>"
    l += "<tr>"
    l += "<th>"
    l += "Item"
    l += "</th>"
    l += "<th>"
    l += "Price"
    l += "</th>"
    l += "<th>"
    l += "-"
    l += "</th>"
    l += "</tr>"
    for (i = 0; i < items.length; i++) {
        let item = items[i];
        l += "<tr>"
        l += "<td>"
        l += item.name;
        l += "</td>"
        l += "<td class='numberCell'>"
        l += "$" + item.price.toFixed(2);
        l += "</td>"
        l += "<td class='buttonCell'>"
        l += "<button type = 'button' onclick = 'calcTotal(\"" + item.name + "\")'>Add to cart</button>"
        l += "</td>"
        l += "</tr>"
    }
    l += "<tr>"
    l += "<td colspan = 3 class='buttonCell'>"
    l += "<button type = 'button' onclick = 'checkoutItemList()'>Checkout</button>"
    l += "</td>"
    l += "</tr>"
    l += "</table>"
    return l;
}

function checkoutItemList() {
    let sum = 0;
    let l = "<table border = 1>"
    l += "<tr>"
    l += "<th>"
    l += "Item"
    l += "</th>"
    l += "<th>"
    l += "Price"
    l += "</th>"
    l += "<th>"
    l += "Quantity"
    l += "</th>"
    l += "<th>"
    l += "Amount"
    l += "</th>"
    l += "</tr>"
    for (i = 0; i < items.length; i++) {
        let item = items[i];
        l += "<tr>"
        l += "<td>"
        l += item.name;
        l += "</td>"
        l += "<td class='numberCell'>"
        l += "$" + item.price.toFixed(2);
        l += "</td>"
        l += "<td class='numberCell'>"
        l += item.quantity
        l += "</td>"
        l += "<td class='numberCell'>"
        let itemAmount = (item.price * item.quantity);
        l += "$" + itemAmount.toFixed(2)
        sum += itemAmount
        l += "</td>"
        l += "</tr>"
    }
    l += "<tr>"
    l += "<td colspan=3 class='numberCell'>"
    l += "Tax 6%"
    l += "</td>"
    l += "<td class='numberCell'>"
    l += "$" + (sum * .06).toFixed(2)
    l += "</td>"
    l += "</tr>"
    l += "<tr>"
    l += "<td colspan=3 class='numberCell'>"
    l += "Total"
    l += "</td>"
    l += "<td class='numberCell'>"
    l += "$" + (sum * 1.06).toFixed(2)
    l += "</td>"
    l += "</tr>"
    l += "</table>"
    document.getElementById("checkout").innerHTML = l;
}