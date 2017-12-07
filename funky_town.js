var fibonacci = function (n){
    if(n == 0){
	return 0;
    }
    if (n == 1){
	return 1;
    }
    if (n == 2){
	return 1;
    }
    else {
	return fibonacci(n-1) + fibonacci(n-2);
    }
}

var gcd = function(a,b){
    if(a == 0)
	return 0;
    if(b == 0)
	return a;   
    return gcd(b, b%a);
}

var randomStudent = function(){
    var nameList = ["sasha", "bob", "james" , "george"];
    var rand = Math.floor(Math.random() * (nameList.length-1));
    return nameList[rand];
}
