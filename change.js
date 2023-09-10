const passwordBox=document.getElementById("Password");
const size=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*(_\+>?|";1

const allChairs=numbers+upperCase+lowerCase+symbols;
function randomPassword()
{
    let password="";
    password+=upperCase[Math.floor(Math.random() *upperCase.length)];
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password+=numbers[Math.floor(Math.random() * numbers.length)];
    password+=symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length<size)
    {
        password=password+allChairs[Math.floor(Math.random() * allChairs.length)];
    }
    passwordBox.value=password;
}
function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");
}
