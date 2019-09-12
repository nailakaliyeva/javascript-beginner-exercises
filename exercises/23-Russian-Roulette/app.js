var bulletPosition = 3;

function spinChamber()
{
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
}

function fireGun(spinChamber)
{
if(spinChamber===bulletPosition) return 'you are dead!';
else return 'Keep playing :)';
}

fireGun(spinChamber);
module.exports = {bulletPosition, spinChamber, fireGun};