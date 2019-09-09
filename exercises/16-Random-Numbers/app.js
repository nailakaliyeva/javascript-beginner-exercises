function getRandomInt()
{
	var randomNumber = Math.random();

  let integer=	Math.ceil(randomNumber*10);
  return integer;
}


console.log(getRandomInt());
module.exports=getRandomInt;