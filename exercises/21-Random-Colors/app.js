function getColor(colorNumber=0)
{

	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
		case 4: return "green"; break;
		default: return "black"; break;
	}
}

function getAllStudentColors(){
	let myArray = [];
  for (i=1; i<11; i++){
  myArray.push(Math.ceil(Math.random()*4));
}

  let newA = myArray.map(item=>getColor(item));
  return newA;
}

console.log(getAllStudentColors());
module.exports = getAllStudentColors;