var linksData = {
	"links": [
	{
		"display": "JavaScript Tutorial",
		"url": "http://www.w3schools.com/js/default.asp"
	},
	{
		"display": "HTML Tutorial",
		"url": "http://www.w3schools.com/html/default.asp"
	},
	{
		"display": "CSS Tutorial",
		"url": "http://www.w3schools.com/css/default.asp"
	}
	]
};

function genDisplay(obj) {
    var out = "<p>Working?</p>";
    var i;
    for(i = 0; i<obj.links.length; i++) {
        out += '<a href="' + obj.links[i].url + '">' + 
        obj.links[i].display + '</a><br>';
    }
    console.log(out);
    document.getElementById("id01").innerHTML = out;
}

genDisplay(linksData);