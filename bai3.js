let user = [];
let fullName, email, dob, address, phone;

fetch('https://randomuser.me/api/')
.then(res => res.json()).then(res => {
    user = res.results[0];
    fullName = user.name.title + ". " + user.name.first + " " + user.name.last;
    email = user.email;
    dob = user.dob.date;
    address = user.location.street.number + "," + user.location.street.name + "," + user.location.city
    + "," + user.location.state + "," + user.location.country;
    phone = user.cell;
    document.getElementById('name').innerHTML += fullName;
    document.getElementById('email').innerHTML += email;
    document.getElementById('dob').innerHTML += dob;
    document.getElementById('address').innerHTML += address;
    document.getElementById('phone').innerHTML += phone;
})