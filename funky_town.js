var fibonacci = function (n){
    if(n == 0){
	return 0;
    }
    if (n == 1){
	return 1;
    }
    
    else {
	return fibonacci(n-1) + fibonacci(n-2);
    }
}

var gcd = function(a,b){
    if(a == 0)
	return b;
    if(b == 0)
	return a;
    if (b> a)
	return gcd(a , b%a);
    else 
	return gcd(b, a%b);
}

var randomStudent = function(){
    var nameList = ["sasha", "bob", "james" , "george"];
    var rand = Math.floor(Math.random() * (nameList.length));
    return nameList[rand];
}
