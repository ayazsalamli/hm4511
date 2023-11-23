let user = prompt ( 'LOGIN');
let parol = prompt ( 'PASWORD');
let netice;

 if (user == 'admin' && parol == '123456') {
    netice = ' ADMIN , HI you are admin';
}

if (user == 'vahid' && parol == '1234') {
    netice = 'Vahid , HI ';
}
else {
    netice = 'login and pasword is not correct';
}

document.getElementById('ayaz').innerHTML = netice;