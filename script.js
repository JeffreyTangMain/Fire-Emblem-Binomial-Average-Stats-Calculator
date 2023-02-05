var data = [];
var columns = {};
var settings = {};
var stats = new Statistics(data, columns, settings);

/*
var distribution = stats.binomialDistribution(5, 0.5);
var distribution2 = 1 - stats.binomialCumulativeValue(0, 30, .10);

console.log(distribution);
console.log(distribution2);
console.log("test");
console.log(1 - stats.binomialCumulativeValue(0, 30, .10));
*/

var interval = 1;

var hpincreases = 0;
var hpbase = +document.getElementById("hpbase").value;

var strincreases = 0;
var strbase = +document.getElementById("strbase").value;

var magincreases = 0;
var magbase = +document.getElementById("magbase").value;

var dexincreases = 0;
var dexbase = +document.getElementById("dexbase").value;

var spdincreases = 0;
var spdbase = +document.getElementById("spdbase").value;

var defincreases = 0;
var defbase = +document.getElementById("defbase").value;

var resincreases = 0;
var resbase = +document.getElementById("resbase").value;

var lckincreases = 0;
var lckbase = +document.getElementById("lckbase").value;

var bldincreases = 0;
var bldbase = +document.getElementById("bldbase").value;

var hppromo1 = +document.getElementById("hppromo1").value;
var hppromo2 = +document.getElementById("hppromo2").value;

var strpromo1 = +document.getElementById("strpromo1").value;
var strpromo2 = +document.getElementById("strpromo2").value;

var magpromo1 = +document.getElementById("magpromo1").value;
var magpromo2 = +document.getElementById("magpromo2").value;

var dexpromo1 = +document.getElementById("dexpromo1").value;
var dexpromo2 = +document.getElementById("dexpromo2").value;

var spdpromo1 = +document.getElementById("spdpromo1").value;
var spdpromo2 = +document.getElementById("spdpromo2").value;

var defpromo1 = +document.getElementById("defpromo1").value;
var defpromo2 = +document.getElementById("defpromo2").value;

var respromo1 = +document.getElementById("respromo1").value;
var respromo2 = +document.getElementById("respromo2").value;

var lckpromo1 = +document.getElementById("lckpromo1").value;
var lckpromo2 = +document.getElementById("lckpromo2").value;

var bldpromo1 = +document.getElementById("bldpromo1").value;
var bldpromo2 = +document.getElementById("bldpromo2").value;

var current1DArray = [level, hpbase, 0, 0, 0, 0, 0, 0, 0, 0];
var statTable2DArray = [
	["Level", "HP", "Str", "Mag", "Dex", "Spd", "Def", "Res", "Lck", "Bld"]];
//console.log(1 - stats.binomialCumulativeValue(hpincreases, interval, .1));

//console.log(statTable2DArray);

function updateStats() {
	interval = 1;

	hpincreases = 0;
	hpbase = +document.getElementById("hpbase").value;

	strincreases = 0;
	strbase = +document.getElementById("strbase").value;

	magincreases = 0;
	magbase = +document.getElementById("magbase").value;

	dexincreases = 0;
	dexbase = +document.getElementById("dexbase").value;

	spdincreases = 0;
	spdbase = +document.getElementById("spdbase").value;

	defincreases = 0;
	defbase = +document.getElementById("defbase").value;

	resincreases = 0;
	resbase = +document.getElementById("resbase").value;

	lckincreases = 0;
	lckbase = +document.getElementById("lckbase").value;

	bldincreases = 0;
	bldbase = +document.getElementById("bldbase").value;

	var level = +document.getElementById("level").value;
	var promotionLevel1 = +document.getElementById("promotionLevel1").value;
	var promotionLevel2 = +document.getElementById("promotionLevel2").value;
	var finalLevel = +document.getElementById("finalLevel").value;

	current1DArray = [level, hpbase, strbase, magbase, dexbase, spdbase, defbase, resbase, lckbase, bldbase];
	statTable2DArray = [
		["Level", "HP", "Str", "Mag", "Dex", "Spd", "Def", "Res", "Lck", "Bld"]];

	statTable2DArray.push(current1DArray.slice());
	for (let i = level; i < promotionLevel1; i++) {
		//console.log(i);
		//console.log("HP Increases:" + hpincreases);
		hpincreases = statCalc("hpgrowth", "hpconfidence", hpincreases, 1);
		strincreases = statCalc("strgrowth", "strconfidence", strincreases, 2);
		magincreases = statCalc("maggrowth", "magconfidence", magincreases, 3);
		dexincreases = statCalc("dexgrowth", "dexconfidence", dexincreases, 4);
		spdincreases = statCalc("spdgrowth", "spdconfidence", spdincreases, 5);
		defincreases = statCalc("defgrowth", "defconfidence", defincreases, 6);
		resincreases = statCalc("resgrowth", "resconfidence", resincreases, 7);
		lckincreases = statCalc("lckgrowth", "lckconfidence", lckincreases, 8);
		bldincreases = statCalc("bldgrowth", "bldconfidence", bldincreases, 9);
		interval++;
		current1DArray[0]++;
		//console.log(statTable2DArray);
		//console.log(current1DArray);
		statTable2DArray.push(current1DArray.slice());
	}

	current1DArray[0] = 1;
	interval = 1;
	level = 1;
	hpincreases = 0;
	strincreases = 0;
	magincreases = 0;
	dexincreases = 0;
	spdincreases = 0;
	defincreases = 0;
	resincreases = 0;
	lckincreases = 0;
	bldincreases = 0;
	current1DArray[1] += hppromo1;
	current1DArray[2] += strpromo1;
	current1DArray[3] += magpromo1;
	current1DArray[4] += dexpromo1;
	current1DArray[5] += spdpromo1;
	current1DArray[6] += defpromo1;
	current1DArray[7] += respromo1;
	current1DArray[8] += lckpromo1;
	current1DArray[9] += bldpromo1;

	statTable2DArray.push(current1DArray.slice());
	for (let i = level; i < promotionLevel2; i++) {
		//console.log(i);
		//console.log("HP Increases:" + hpincreases);
		hpincreases = statCalc("hpgrowth1", "hpconfidence", hpincreases, 1);
		strincreases = statCalc("strgrowth1", "strconfidence", strincreases, 2);
		magincreases = statCalc("maggrowth1", "magconfidence", magincreases, 3);
		dexincreases = statCalc("dexgrowth1", "dexconfidence", dexincreases, 4);
		spdincreases = statCalc("spdgrowth1", "spdconfidence", spdincreases, 5);
		defincreases = statCalc("defgrowth1", "defconfidence", defincreases, 6);
		resincreases = statCalc("resgrowth1", "resconfidence", resincreases, 7);
		lckincreases = statCalc("lckgrowth1", "lckconfidence", lckincreases, 8);
		bldincreases = statCalc("bldgrowth1", "bldconfidence", bldincreases, 9);
		interval++;
		current1DArray[0]++;
		//console.log(statTable2DArray);
		//console.log(current1DArray);
		statTable2DArray.push(current1DArray.slice());
	}

	current1DArray[0] = 1;
	interval = 1;
	level = 1;
	hpincreases = 0;
	strincreases = 0;
	magincreases = 0;
	dexincreases = 0;
	spdincreases = 0;
	defincreases = 0;
	resincreases = 0;
	lckincreases = 0;
	bldincreases = 0;
	current1DArray[1] += hppromo2;
	current1DArray[2] += strpromo2;
	current1DArray[3] += magpromo2;
	current1DArray[4] += dexpromo2;
	current1DArray[5] += spdpromo2;
	current1DArray[6] += defpromo2;
	current1DArray[7] += respromo2;
	current1DArray[8] += lckpromo2;
	current1DArray[9] += bldpromo2;

	statTable2DArray.push(current1DArray.slice());
	for (let i = level; i < finalLevel; i++) {
		//console.log(i);
		//console.log("HP Increases:" + hpincreases);
		hpincreases = statCalc("hpgrowth2", "hpconfidence", hpincreases, 1);
		strincreases = statCalc("strgrowth2", "strconfidence", strincreases, 2);
		magincreases = statCalc("maggrowth2", "magconfidence", magincreases, 3);
		dexincreases = statCalc("dexgrowth2", "dexconfidence", dexincreases, 4);
		spdincreases = statCalc("spdgrowth2", "spdconfidence", spdincreases, 5);
		defincreases = statCalc("defgrowth2", "defconfidence", defincreases, 6);
		resincreases = statCalc("resgrowth2", "resconfidence", resincreases, 7);
		lckincreases = statCalc("lckgrowth2", "lckconfidence", lckincreases, 8);
		bldincreases = statCalc("bldgrowth2", "bldconfidence", bldincreases, 9);
		interval++;
		current1DArray[0]++;
		//console.log(statTable2DArray);
		//console.log(current1DArray);
		statTable2DArray.push(current1DArray.slice());
	}

	createTable(statTable2DArray);
	/*
	try {
		hpcalc();
	} catch (error) {
		console.log("nothing");
	}
	*/
}

function statCalc(growth, confidence, increases, arrayLocation) {
	base = current1DArray[arrayLocation];
	growth = +document.getElementById(growth).value;
	confidence = +document.getElementById(confidence).value;
	/*
	console.log(increases);
	console.log(base);
	console.log(growth);
	console.log(confidence);
	*/
	if (1 - stats.binomialCumulativeValue(increases, interval, growth) > confidence) {
		//document.getElementById("hpbase").value = hpbase + 1;
		current1DArray[arrayLocation] = base + 1;
		return increases + 1;
	}
	return increases;
}

function createTable(tableData) {
	if (document.getElementById("statTable")) {
		document.getElementById("statTable").remove();
	}
	var table = document.createElement('table');
	table.setAttribute("id", "statTable");
	var tableBody = document.createElement('tbody');

	tableData.forEach(function (rowData) {
		var row = document.createElement('tr');

		rowData.forEach(function (cellData) {
			var cell = document.createElement('td');
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
		});

		tableBody.appendChild(row);
	});

	table.appendChild(tableBody);
	document.body.appendChild(table);
}