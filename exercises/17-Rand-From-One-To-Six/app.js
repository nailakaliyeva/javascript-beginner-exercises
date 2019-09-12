function getRandomInt()
{
	var randomNumber = Math.ceil(Math.random()*6);
	return randomNumber;
}
console.log(getRandomInt());
module.exports=getRandomInt;