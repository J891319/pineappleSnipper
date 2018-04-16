var totalPineapples = 0;
var pineapplesPerClick = 1;
var upgradeCost = 10;
var upgrade0Cost = 500;
var upgrade1Cost = 2000;
var autoClickerCost = 250;
var stats = document.getElementById('stats');
var ppc = document.getElementById('ppc');
var upgardeButton = document.getElementById('upgradeButton');
var upgrade0Button = document.getElementById('upgrade0Button');
var upgarde1Button = document.getElementById('upgrade1Button');
var autoClickerButton = document.getElementById('autoClick');

function buyPineapples() {
    totalPineapples = totalPineapples + pineapplesPerClick;
    stats.innerHTML = 'Pineapples Snipped: ' + totalPineapples;
    ppc.innerHTML = 'Pineapples Per Click: ' + pineapplesPerClick;
}

function upgrade() {
    if (totalPineapples >= upgradeCost) {
        totalPineapples = totalPineapples - upgradeCost;
        pineapplesPerClick = pineapplesPerClick + 0.5;
        stats.innerHTML = 'Pineapples Snipped: ' + totalPineapples;
        upgradeCost = upgradeCost * 2;
        upgradeButton.innerHTML = 'double trouble (+0.5): ' + upgradeCost;
    } else {
        alert('you do not have enough pineapples!');
    }
}

function upgrade0() {
    if (totalPineapples >= upgrade0Cost) {
        totalPineapples = totalPineapples - upgrade0Cost;
        pineapplesPerClick = pineapplesPerClick + 2.5;
        stats.innerHTML = 'Pineapples Snipped: ' + totalPineapples;
        upgrade0Cost = upgrade0Cost * 2;
        upgrade0Button.innerHTML = 'Pineapple Tree (+2.5): ' + upgrade0Cost;
    } else {
        alert('you do not have enough pineapples!');
    }
}

function upgrade1() {
    if (totalPineapples >= upgrade1Cost) {
        totalPineapples = totalPineapples - upgrade1Cost;
        pineapplesPerClick = pineapplesPerClick + 5;
        stats.innerHTML = 'Pineapples Snipped: ' + totalPineapples;
        upgrade1Cost = upgrade1Cost * 2;
        upgrade1Button.innerHTML = 'Pineapple Farm (+5): ' + upgrade1Cost;
    } else {
        alert('you do not have enough pineapples!');
    }
}

function autoClickerStart() {
    totalPineapples = totalPineapples + 0.25;
    stats.innerHTML = 'Pineapples Snipped: ' + totalPineapples;
    //autoClicker;
}

function autoClicker() {
    if (totalPineapples >= autoClickerCost) {
        totalPineapples = totalPineapples - autoClickerCost;
        autoClickerCost = autoClickerCost * 1.7;
        setInterval(autoClickerStart, 1000);
        autoClickerButton.innerHTML = 'auto clicker (+0.25/S): ' + autoClickerCost;
    } else {
        alert('you do not have enough pineapples!');
    }
}
