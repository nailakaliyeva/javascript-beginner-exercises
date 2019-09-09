

function getColor(selection)
{
	switch(selection){
		//Add more options here
		case "Red": return true;
		break;
		case "Green": return true;
		break;
		case "Blue": return true;
		break;
	    default :
	    	return false;//return false because the user pick a unavailable color

	}
}

//var colorname = window.prompt('What color do you want?');
colorname = "Red"//colorname.toLowerCase();

//Need to uncomment lines 19 and 20
var newColor = colorname.charAt(0).toUpperCase()+colorname.slice(1);
var isAvailable = getColor(newColor);
if(isAvailable) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');
module.exports = {getColor, colorname, isAvailable};