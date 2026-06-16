// Data extracted from your uploaded files
const trucks = [
    { name: "Peterbilt White 389", lastOdom: 1011126 },
    { name: "Mack Truck 384", lastOdom: 1020920 }
    // Add remaining trucks from Max End Odom.html here
];

// Set Date and Driver on load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tripDate').valueAsDate = new Date();
    // Assuming driver is stored in session after login
    document.getElementById('driver').value = "Tim"; 
    
    // Populate dropdown
    const select = document.getElementById('truckSelect');
    trucks.forEach(t => {
        let opt = document.createElement('option');
        opt.value = t.name;
        opt.innerHTML = t.name;
        select.appendChild(opt);
    });
});

function autoFillOdo() {
    const selected = document.getElementById('truckSelect').value;
    const truck = trucks.find(t => t.name === selected);
    document.getElementById('beginOdo').value = truck ? truck.lastOdom : '';
}

function calculate() {
    const begin = parseFloat(document.getElementById('beginOdo').value) || 0;
    const end = parseFloat(document.getElementById('endOdo').value) || 0;
    const total = end - begin;
    document.getElementById('totalMiles').value = total;
    document.getElementById('sdMiles').value = total; // Default logic
}