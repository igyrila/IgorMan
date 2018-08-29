let num = prompt('Hi, I will generate for you a random string, just define the lenght of it');
let rnd = makeid().toString();
alert(rnd);
function makeid()
{
    var text = "";
    var possible = "123456789";

    for( var i=0; i < parseInt(num); i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}