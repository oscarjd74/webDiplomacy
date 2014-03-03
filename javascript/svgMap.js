var countries = [ 'neutral', 'england', 'france', 'italy', 'germany', 'austria', 'turkey', 'russia' ];
var territories = [
	{ id:  1, type: 'coast', supply: false, country: 1, coast: false,    coastParent:  1, name: 'Clyde'},
	{ id:  2, type: 'coast', supply: true,  country: 1, coast: false,    coastParent:  2, name: 'Edinburgh' },
	{ id:  3, type: 'coast', supply: true,  country: 1, coast: false,    coastParent:  3, name: 'Liverpool' },
	{ id:  4, type: 'coast', supply: false, country: 1, coast: false,    coastParent:  4, name: 'Yorkshire' },
	{ id:  5, type: 'coast', supply: false, country: 1, coast: false,    coastParent:  5, name: 'Wales' },
	{ id:  6, type: 'coast', supply: true,  country: 1, coast: false,    coastParent:  6, name: 'London' },
	{ id:  7, type: 'coast', supply: true,  country: 0, coast: false,    coastParent:  7, name: 'Portugal' },
	{ id:  8, type: 'coast', supply: true,  country: 0, coast: 'parent', coastParent:  8, name: 'Spain' },
	{ id:  9, type: 'coast', supply: false, country: 0, coast: false,    coastParent:  9, name: 'North Africa' },
	{ id: 10, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 10, name: 'Tunis' },
	{ id: 11, type: 'coast', supply: true,  country: 3, coast: false,    coastParent: 11, name: 'Naples' },
	{ id: 12, type: 'coast', supply: true,  country: 3, coast: false,    coastParent: 12, name: 'Rome' },
	{ id: 13, type: 'coast', supply: false, country: 3, coast: false,    coastParent: 13, name: 'Tuscany' },
	{ id: 14, type: 'coast', supply: false, country: 3, coast: false,    coastParent: 14, name: 'Piedmont' },
	{ id: 15, type: 'coast', supply: true,  country: 3, coast: false,    coastParent: 15, name: 'Venice' },
	{ id: 16, type: 'coast', supply: false, country: 3, coast: false,    coastParent: 16, name: 'Apulia' },
	{ id: 17, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 17, name: 'Greece' },
	{ id: 18, type: 'coast', supply: false, country: 0, coast: false,    coastParent: 18, name: 'Albania' },
	{ id: 19, type: 'land',  supply: true,  country: 0, coast: false,    coastParent: 19, name: 'Serbia' },
	{ id: 20, type: 'coast', supply: true,  country: 0, coast: 'parent', coastParent: 20, name: 'Bulgaria' },
	{ id: 21, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 21, name: 'Rumania' },
	{ id: 22, type: 'coast', supply: true,  country: 6, coast: false,    coastParent: 22, name: 'Constantinople' },
	{ id: 23, type: 'coast', supply: true,  country: 6, coast: false,    coastParent: 23, name: 'Smyrna' },
	{ id: 24, type: 'coast', supply: true,  country: 6, coast: false,    coastParent: 24, name: 'Ankara' },
	{ id: 25, type: 'coast', supply: false, country: 6, coast: false,    coastParent: 25, name: 'Armenia' },
	{ id: 26, type: 'coast', supply: false, country: 6, coast: false,    coastParent: 26, name: 'Syria' },
	{ id: 27, type: 'coast', supply: true,  country: 7, coast: false,    coastParent: 27, name: 'Sevastopol' },
	{ id: 28, type: 'land',  supply: false, country: 7, coast: false,    coastParent: 28, name: 'Ukraine' },
	{ id: 29, type: 'land',  supply: true,  country: 7, coast: false,    coastParent: 29, name: 'Warsaw' },
	{ id: 30, type: 'coast', supply: false, country: 7, coast: false,    coastParent: 30, name: 'Livonia' },
	{ id: 31, type: 'land',  supply: true,  country: 7, coast: false,    coastParent: 31, name: 'Moscow' },
	{ id: 32, type: 'coast', supply: true,  country: 7, coast: 'parent', coastParent: 32, name: 'St. Petersburg' },
	{ id: 33, type: 'coast', supply: false, country: 7, coast: false,    coastParent: 33, name: 'Finland' },
	{ id: 34, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 34, name: 'Sweden' },
	{ id: 35, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 35, name: 'Norway' },
	{ id: 36, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 36, name: 'Denmark' },
	{ id: 37, type: 'coast', supply: true,  country: 4, coast: false,    coastParent: 37, name: 'Kiel' },
	{ id: 38, type: 'coast', supply: true,  country: 4, coast: false,    coastParent: 38, name: 'Berlin' },
	{ id: 39, type: 'coast', supply: false, country: 4, coast: false,    coastParent: 39, name: 'Prussia' },
	{ id: 40, type: 'land',  supply: false, country: 4, coast: false,    coastParent: 40, name: 'Silesia' },
	{ id: 41, type: 'land',  supply: true,  country: 4, coast: false,    coastParent: 41, name: 'Munich' },
	{ id: 42, type: 'land',  supply: false, country: 4, coast: false,    coastParent: 42, name: 'Ruhr' },
	{ id: 43, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 43, name: 'Holland' },
	{ id: 44, type: 'coast', supply: true,  country: 0, coast: false,    coastParent: 44, name: 'Belgium' },
	{ id: 45, type: 'coast', supply: false, country: 2, coast: false,    coastParent: 45, name: 'Picardy' },
	{ id: 46, type: 'coast', supply: true,  country: 2, coast: false,    coastParent: 46, name: 'Brest' },
	{ id: 47, type: 'land',  supply: true,  country: 2, coast: false,    coastParent: 47, name: 'Paris' },
	{ id: 48, type: 'land',  supply: false, country: 2, coast: false,    coastParent: 48, name: 'Burgundy' },
	{ id: 49, type: 'coast', supply: true,  country: 2, coast: false,    coastParent: 49, name: 'Marseilles' },
	{ id: 50, type: 'coast', supply: false, country: 2, coast: false,    coastParent: 50, name: 'Gascony' },
	{ id: 51, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 51, name: 'Barents Sea' },
	{ id: 52, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 52, name: 'Norwegian Sea' },
	{ id: 53, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 53, name: 'North Sea' },
	{ id: 54, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 54, name: 'Skagerrack' },
	{ id: 55, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 55, name: 'Heligoland Bight' },
	{ id: 56, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 56, name: 'Baltic Sea' },
	{ id: 57, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 57, name: 'Gulf of Bothnia' },
	{ id: 58, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 58, name: 'North Atlantic Ocean' },
	{ id: 59, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 59, name: 'Irish Sea' },
	{ id: 60, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 60, name: 'English Channel' },
	{ id: 61, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 61, name: 'Mid-Atlantic Ocean' },
	{ id: 62, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 62, name: 'Western Mediterranean' },
	{ id: 63, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 63, name: 'Gulf of Lyons' },
	{ id: 64, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 64, name: 'Tyrrhenian Sea' },
	{ id: 65, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 65, name: 'Ionian Sea' },
	{ id: 66, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 66, name: 'Adriatic Sea' },
	{ id: 67, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 67, name: 'Aegean Sea' },
	{ id: 68, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 68, name: 'Eastern Mediterranean' },
	{ id: 69, type: 'sea',   supply: false, country: 0, coast: false,    coastParent: 69, name: 'Black Sea' },
	{ id: 70, type: 'land',  supply: false, country: 5, coast: false,    coastParent: 70, name: 'Tyrolia' },
	{ id: 71, type: 'land',  supply: false, country: 5, coast: false,    coastParent: 71, name: 'Bohemia' },
	{ id: 72, type: 'land',  supply: true,  country: 5, coast: false,    coastParent: 72, name: 'Vienna' },
	{ id: 73, type: 'coast', supply: true,  country: 5, coast: false,    coastParent: 73, name: 'Trieste' },
	{ id: 74, type: 'land',  supply: true,  country: 5, coast: false,    coastParent: 74, name: 'Budapest' },
	{ id: 75, type: 'land',  supply: false, country: 5, coast: false,    coastParent: 75, name: 'Galicia' },
	{ id: 76, type: 'coast', supply: false, country: 0, coast: 'child',  coastParent:  8, name: 'Spain (North Coast)' },
	{ id: 77, type: 'coast', supply: false, country: 0, coast: 'child',  coastParent:  8, name: 'Spain (South Coast)' },
	{ id: 78, type: 'coast', supply: false, country: 7, coast: 'child',  coastParent: 32, name: 'St. Petersburg (North Coast)' },
	{ id: 79, type: 'coast', supply: false, country: 7, coast: 'child',  coastParent: 32, name: 'St. Petersburg (South Coast)' },
	{ id: 80, type: 'coast', supply: false, country: 0, coast: 'child',  coastParent: 20, name: 'Bulgaria (North Coast)' },
	{ id: 81, type: 'coast', supply: false, country: 0, coast: 'child',  coastParent: 20, name: 'Bulgaria (South Coast)' }
];

function territoryByID (id) {
	id = id.toString().replace(/^terr/, '');
	for (var i = 0; i < territories.length; i++) {
		if (territories[i].id == id) return territories[i];
	}
	return false;
}

function Point (x , y) {
	this.x = x;	this.y = y;	this.toString = function () { return x + ',' + y; }
}

function getCoordinates (terrID) {
	var domNode = terrID.tagName ? terrID : document.getElementById((terrID.toString().match(/^terr/) ? '' : 'terr') + terrID);
	domNode = domNode.tagName == 'g' ? domNode.getElementsByTagName('path')[0] : domNode;
	return new Point(domNode.pathSegList[0].x, domNode.pathSegList[0].y);
}

function getDistance (from, to) {
	return Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
}

function getAngle (from, to, degrees = true) {
	if (from.x == to.x) return from.y == to.y ? false : (degrees ? 90 : Math.PI / 2) * (from.y < to.y ? 1 : -1);
	if (from.y == to.y) return from.x > to.x ? (degrees ? 180 : Math.PI) : 0;
	return (Math.atan((from.y - to.y)/(from.x - to.x)) + Math.PI * (from.x < to.x ? 0 : from.y < to.y ? 1 : -1)) * (degrees ? 180 / Math.PI : 1);
}

function bezierData (distance, a = 10, b = 1.5, c = 0.65) {
	var control = new Point((distance - a) / 2, b * Math.sqrt((distance - a)));
	var angle = getAngle(control, { x: distance, y: 0 }, false);
	var end = new Point(distance - a * Math.cos(angle), - a * Math.sin(angle));
	var p = c * c;
	var q = 2 * (c - p);
	var connect = new Point(p * end.x + q * control.x, p * end.y + q * control.y);
	return { control: control, connect: connect, end: end, angle: angle };
}

function createElement(tag, attributes) {
	var element = document.createElementNS('http://www.w3.org/2000/svg', tag);
	for (var i in attributes) element.setAttribute(i, attributes[i]);
	return element;
}

function createPath (data, attributes = {}) {
	attributes.d = data;
	return createElement('path', attributes);
}

function createLine (from, to, attributes = {}) {
	return createPath('M' + from + 'L' + to, attributes);
}

function createBezier (from, control, to, attributes = {}) {
	return createPath('M' + from + 'Q' + control + ' ' + to, attributes);
}

function createCircle (center, radius, attributes = {}) {
	attributes.cx = center.x; attributes.cy = center.y; attributes.r = radius;
	return createElement('circle', attributes);
}

function createRectangle (position, width, height, attributes = {}) {
	attributes.x = position.x; attributes.y = position.y; attributes.width = width; attributes.height = height;
	return createElement('rect', attributes);
}

function createUse (id, attributes = {}) {
	var use = createElement('use', attributes);
	use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + id); 
	return use;
}

function createParent (tagName, children, attributes = {}) {
	var parent = createElement(tagName, attributes);
	for (i = 0; i < children.length; i++) parent.appendChild(children[i]);
	return parent;
}

function drawUnit (countryID, terrID, type = 'A', dislodged = false) {
	var coords = getCoordinates(terrID);
	var territory = territoryByID(terrID);
	var unit = createUse(type == 'A' ? 'army' : 'fleet', {
		class: countries[countryID],
		title: (type == 'A' ? 'Army ' : 'Fleet ') + territory.name,
		transform: 'translate(' + coords + ')' + (dislodged ? ' rotate(135) scale(0.9)' : '')
	});
	document.getElementById('units').appendChild(unit);
}

function drawMove (success, from, to) {
	var distance = getDistance(from, to);
	var angle = getAngle(from, to);
	var bezier = bezierData(distance);

	var path_edge = createBezier(tmp = new Point(0, 0), bezier.control, bezier.end, { class: success + ' edge path' });
	var path = createBezier(tmp, bezier.control, bezier.end, { class: success + ' path' });
	var arrow_edge = createUse('arrowhead', { class: success + ' edge shape', transform: 'translate(' + bezier.end + ') rotate(' + (bezier.angle * 180 / Math.PI) + ')' });
	var arrow = createUse('arrowhead', { class: success + ' shape', transform: 'translate(' + bezier.end + ') rotate(' + (bezier.angle * 180 / Math.PI) + ') translate(-1.2) scale(0.7)' });

	g = createParent('g', [ path_edge, arrow_edge, path, arrow ] , { transform: 'translate(' + from + ') rotate(' + angle + ')' });
	document.getElementById('orders').appendChild(g);
}

function drawSupportHold (success, from, to) {
	var distance = getDistance(from, to);
	var angle = getAngle(from, to);
	var bezier = bezierData(distance, 13);

	var rect =  createRectangle({ x: -400, y: -400 }, distance + 800, 800, { style: 'fill:white;stroke:none' });
	var circle = createCircle({ x: distance, y: 0 }, 12, { style: 'fill:black;stroke:none' });
	var maskID = 'mask_' + from;
	var mask = createParent('mask' , [ rect, circle ], { id: maskID });

	var path_edge = createBezier(tmp = new Point(0, 0), bezier.control, bezier.end, { class: success + ' edge path' });
	var path = createBezier(tmp, bezier.control, bezier.end, { class: success + ' path' });
	var circle_edge = createCircle({ x: distance, y: 0 }, 16, { class: success + ' edge shape' });
	circle = createCircle({ x: distance, y: 0 }, 15, { class: success + ' shape' });

	g = createParent('g', [ mask, path_edge, circle_edge, path, circle ] , { transform: 'translate(' + from + ') rotate(' + angle + ')', mask: 'url(#' + maskID + ')' });
	document.getElementById('orders').appendChild(g);
}

function drawSupportMove (success, by, from, to) {
	var distanceTo = getDistance(from, to);
	var angleTo = getAngle(from, to, false);
	var distanceBy = getDistance(from, by);
	var angleBy = getAngle(from, by, false);
	var bypoint = new Point(Math.cos(angleBy - angleTo) * distanceBy, Math.sin(angleBy - angleTo) * distanceBy);
	var bezier = bezierData(distanceTo);

	var path_edge = createLine(bypoint, bezier.connect, { class: success + ' edge path' });
	var path = createLine(bypoint, bezier.connect, { class: success + ' path' });
	var circle_edge = createCircle(bezier.connect, 5, { class: success + ' edge shape' });
	var circle = createCircle(bezier.connect, 4, { class: success + ' shape' });

	g = createParent('g', [ path_edge, circle_edge, path, circle ] , { transform: 'translate(' + from + ') rotate(' + (angleTo * 180 / Math.PI) + ')' });
	document.getElementById('orders').appendChild(g);
}

function drawConvoy (success, by, from, to) {
	var distanceTo = getDistance(from, to);
	var angleTo = getAngle(from, to, false);
	var distanceBy = getDistance(from, by);
	var angleBy = getAngle(from, by, false);
	var bypoint = new Point(Math.cos(angleBy - angleTo) * distanceBy, Math.sin(angleBy - angleTo) * distanceBy);
	var bezier = bezierData(distanceTo);
	var angleSquare = 45 + getAngle(bypoint, bezier.connect);

	var p1 = { x: Math.min(by.x, bezier.connect.x) - 400, y: Math.min(by.y, bezier.connect.y) - 400 };
	var p2 = { x: Math.max(by.x, bezier.connect.x) + 400, y: Math.min(by.y, bezier.connect.y) + 400 };
	var rect =  createRectangle(p1, p2.x - p1.x, p2.y - p1.y, { style: 'fill:white;stroke:none' });
	var square = createRectangle({ x: -6, y: -6 }, 12, 12, { style: 'fill:black;stroke:none', transform: 'translate(' + bezier.connect + ') rotate(' + angleSquare + ')' });
	var maskID = 'mask_' + by;
	var mask = createParent('mask' , [ rect, square ], { id: maskID });

	var path_edge = createLine(bypoint, bezier.connect, { class: success + ' edge path' });
	var path = createLine(bypoint, bezier.connect, { class: success + ' path' });
	var square_edge = createRectangle({ x: -9, y: -9 }, 18, 18, { class: success + ' edge shape', transform: 'translate(' + bezier.connect + ') rotate(' + angleSquare + ')' });
	square = createRectangle({ x: -8, y: -8 }, 16, 16, { class: success + ' shape', transform: 'translate(' + bezier.connect + ') rotate(' + angleSquare + ')' });

	g = createParent('g', [ mask, path_edge, square_edge, path, square ] , { transform: 'translate(' + from + ') rotate(' + (angleTo * 180 / Math.PI) + ')', mask: 'url(#' + maskID + ')' });
	document.getElementById('orders').appendChild(g);
}

function drawBuild (coords) {
	var circle_edge = createCircle({ x: 0, y: 0 }, 23, { class: 'edge success path' });
	var circle = createCircle({ x: 0, y: 0 }, 23, { class: 'success path' });
	var g = createParent('g', [ circle_edge, circle ], { transform: 'translate(' + coords +')' });
	document.getElementById('orders').appendChild(g);
}

function drawDestroy (coords) {
	var path_edge = createPath('M -12,-12 l 24,24 m -24,0 l 24,-24', { class: 'edge fail path' });
	var path = createPath('M -12,-12 l 24,24 m -24,0 l 24,-24', { class: 'fail path' });
	var g = createParent('g', [ path_edge, path ], { transform: 'translate(' + coords +')' });
	document.getElementById('orders').appendChild(g);
}

function drawOrder (type, success, terrID, toTerrID = null, fromTerrID = null) {
	var success = success ? 'success' : 'fail';
	var coordinates = getCoordinates(terrID);
	if (type == 'SM') {
		var fromParent, toParent;
		var fromTerr = territoryByID(fromTerrID);
		var toTerr = territoryByID(toTerrID);
		if ((fromParent = fromTerr.coast == 'parent') || (toParent = toTerr.coast == 'parent')) {
			var i, j, childTerrIDs, order;
			if (fromParent) {
				childTerrIDs = [];
				for (i = 0; i < territories.length; i++) {
					if (territories[i].coast == 'child' && territories[i].coastParent == fromTerrID) {
						childTerrIDs.push(territories[i].id);
					}
				}
			}
			for (i = 0; i < boardData.orders[phases[currentPhase].turn].length; i++) {
				order = boardData.orders[phases[currentPhase].turn][i];
				if (!fromParent || order.unitType == 'A') {
					if (order.terrID == fromTerrID) break; else continue;
				}
				for (j = 0; j < childTerrIDs.length && childTerrIDs[j] != order.terrID; j++) {}
				if (j != childTerrIDs.length) break;
			}
			if (i != boardData.orders[phases[currentPhase].turn].length) {
				fromTerrID = order.terrID;
				if (toParent && order.unitType == 'F') {
					childTerrIDs = [];
					for (i = 0; i < territories.length; i++) {
						if (territories[i].coast == 'child' && territories[i].coastParent == toTerrID) {
							childTerrIDs.push(territories[i].id);
						}
					}
					for (i = 0; i < childTerrIDs.length && childTerrIDs[i] != order.toTerrID; i++) {}
					if (i != childTerrIDs.length) toTerrID = order.toTerrID;
				}
			}
		}
	}	

	var to = toTerrID ? getCoordinates(toTerrID) : null;
	var from = fromTerrID ? getCoordinates(fromTerrID) : null;
	switch (type) {
	case 'M':
	case 'R':
		drawMove(success, coordinates, to); break;
	case 'SH':
		drawSupportHold(success, coordinates, to); break;
	case 'SM':
		drawSupportMove(success, coordinates, from, to); break;
	case 'C':
		drawConvoy(success, coordinates, from, to); break;
	case '+A':
	case '+F':
		drawBuild(coordinates); break;
	case '-':
	case 'D':
		drawDestroy(coordinates); break;
	}
}

function drawStandoff (coords) {
	var circle_edge = createCircle({ x: 0, y: 0 }, 15, { class: 'edge fail path',  });
	var circle = createCircle({ x: 0, y: 0 }, 15, { class: 'fail path', style: 'fill:white' });
	var line = createLine(new Point(-15, 0), new Point(15, 0), { class: 'fail path', transform: 'rotate(-45)', style: 'stroke-width:4' });
	var g = createParent('g', [ circle_edge, circle, line ], { transform: 'translate(' + coords +')' });
	document.getElementById('orders').appendChild(g);
}

function drawDislodgedFrom (coords, from) {
	var distance = getDistance(coords, from);
	var angle = getAngle(coords, from);
	var path_edge = createPath('M20,15v-30M20,0H' + distance, { class: 'edge fail path' });
	var path = createPath('M20,15v-30M20,0H' + distance, { class: 'fail path' });
	var g = createParent('g', [ path_edge, path ], { transform: 'translate(' + coords + ') rotate(' + angle + ')' });
	document.getElementById('orders').appendChild(g);
}

function drawTitle (turn, type, current = false) {
	document.getElementById('season').textContent = (turn % 2 == 0 ? 'Spring ' : 'Autumn ') + (1901 + Math.floor(turn / 2));
	document.getElementById('phase').textContent = type + (current ? ' (current)' : '');
}

function drawOwner (terrID, countryID) {
	var className, domNode = terrID.tagName ? terrID : document.getElementById((terrID.toString().match(/^terr/) ? '' : 'terr') + terrID);
	var paths = domNode.tagName == 'path' ? [ domNode ] : domNode.getElementsByTagName('path');
	for (j = 0; j < paths.length; j++) {
		if (!(className = paths[j].getAttribute('class')) || !className.match(/sea/)) paths[j].setAttribute('class', countries[countryID]);
	}
}

function drawOwnerships (phase) {
	var i, status, done = [], turn = phases[phase].turn - (phases[phase].turn % 2 == 1 && phases[phase].type != 'Adjustments' ? 1 : 0);

	for (i = 0; i < boardData.archive[turn].length; i++) {
		status = boardData.archive[turn][i];
		drawOwner(status.terrID, territoryByID(status.terrID).supply && status.countryID ? status.countryID : 0);
		done[status.terrID] = true;
	}
	for (i = 0; i < territories.length; i++) {
		if (done[territories[i].id] || territories[i].coast == 'child') continue;
		drawOwner(territories[i].id, territories[i].supply && territories[i].country ? territories[i].country : 0);
	}
}

function drawMoves (phase) {
	var order, dislodged = [];
	for (var i = 0; i < boardData.orders[phases[phase].turn].length; i++) {
		order = boardData.orders[phases[phase].turn][i];
		if (!order.type.match(/H|M|S|C/)) break;
		drawUnit(order.countryID, order.terrID, order.unitType);
		drawOrder(order.type, order.success, order.terrID, order.toTerrID, order.fromTerrID);
		if (order.dislodged) dislodged.push(order.terrID);
	}
	for (i = 0; i < dislodged.length; i++) drawOrder('-', true, dislodged[i]);
}

function drawRetreats (phase) {
	var i, j, order, dislodged, dislodgedFrom, status;
	for (i = 0; i < boardData.orders[phases[phase].turn].length; i++) {
		order = boardData.orders[phases[phase].turn][i];
		if (order.type + order.success == 'M1') {
			drawUnit(order.countryID, order.toTerrID, order.unitType);
		} else if (!order.dislodged && order.type.match(/H|M|S|C/)) {
			drawUnit(order.countryID, order.terrID, order.unitType);
		} else if (order.type.match(/R|D/)) {
			drawOrder(order.type, order.success, order.terrID, order.toTerrID);
			drawUnit(order.countryID, order.terrID, order.unitType, true);
			dislodged = { terrID: order.terrID, coastParent: territoryByID(order.terrID).coastParent };
			for (j = 0; j < boardData.orders[phases[phase].turn].length; j++) {
				order = boardData.orders[phases[phase].turn][j];
				if (order.type + order.success == 'M1' && territoryByID(order.toTerrID).coastParent == dislodged.coastParent) {
					dislodged.fromTerrID = territoryByID(order.terrID).coastParent;
					for (j = 0; j < boardData.orders[phases[phase].turn].length; j++) {
						order = boardData.orders[phases[phase].turn][j];
						if (order.type + order.success == 'M1' && territoryByID(order.toTerrID).coastParent == dislodged.fromTerrID) break;
					}
					if (j == boardData.orders[phases[phase].turn].length) {
						drawDislodgedFrom(getCoordinates(dislodged.terrID), getCoordinates(dislodged.fromTerrID));
					}
					break;
				}
			}
		}
	}
	for (i = 0; i < boardData.archive[phases[phase].turn].length; i++) {
		status = boardData.archive[phases[phase].turn][i];
		if (status.standoff) drawStandoff(getCoordinates(status.terrID));
	}
}

function drawAdjustments (phase) {
	var order, tmp ;
	for (var i = 0; i < boardData.orders[phases[phase].turn].length; i++) {
		order = boardData.orders[phases[phase].turn][i];
		if (order.type.match(/^M|R/) && order.success) {
			drawUnit(order.countryID, order.toTerrID, order.unitType);
		} else if ((!order.dislodged && order.type.match(/H|M|S|C/)) || (tmp = order.type.match(/\+/))) {
			drawUnit(order.countryID, order.terrID, order.unitType ? order.unitType : order.type.replace(/\+/, ''));
			if (tmp) drawOrder(order.type, true, order.terrID);
		} else if (order.type == '-') {
			drawOrder(order.type, true, order.terrID);
		}
	}
}

function drawCurrentBoard () {
	var i, j, status, territory, dislodged, order, done = [];
	for (i = 0; i < boardData.status.length; i++) {
		status = boardData.status[i];
		territory = territoryByID(status.terrID);
		drawOwner(status.terrID, territory.supply && status.countryID ? status.countryID : 0);
		if (status.unitType) drawUnit(status.unitCountryID, status.coastTerrID, status.unitType);
		if (boardData.phase == 'Retreats') {
			if (status.standoff) drawStandoff(getCoordinates(status.terrID));
			if (status.occupiedFromTerrID) {
				for (j = 0; j < boardData.orders[phases[phases.length - 1].turn].length; j++) {
					order = boardData.orders[phases[phases.length - 1].turn][j];
					if ((order.type + order.success).match(/^M0|S|H|C/) && territoryByID(order.terrID).coastParent == status.terrID) {
						drawUnit(order.countryID, order.terrID, order.unitType, true);
						dislodged = order.terrID;
						for (j = 0; j < boardData.orders[phases[phases.length - 1].turn].length; j++) {
							order = boardData.orders[phases[phases.length - 1].turn][j];
							if (order.type + order.success == 'M1' && territoryByID(order.toTerrID).coastParent == status.occupiedFromTerrID) break;
						}
						if (j == boardData.orders[phases[phases.length - 1].turn].length) {
							drawDislodgedFrom(getCoordinates(dislodged), getCoordinates(status.occupiedFromTerrID));
						}
						break;
					}
				}
			}
		}
		done[status.terrID] = true;
	}
	for (i = 0; i < territories.length; i++) {
		if (done[territories[i].id] || territories[i].coast == 'child') continue;
		drawOwner(territories[i].id, territories[i].supply && territories[i].country ? territories[i].country : 0);
	}
}

function drawBoard (phase) {
	document.getElementById('orders').textContent = document.getElementById('units').textContent = '';
	if (phase == phases.length) {
		drawCurrentBoard();
		drawTitle(boardData.turn, boardData.phase, true);
	} else {
		switch (phases[phase].type) {
			case 'Moves': drawMoves(phase); break;
			case 'Retreats': drawRetreats(phase); break;
			case 'Adjustments': drawAdjustments(phase); break;
		}
		drawOwnerships(phase);
		drawTitle(phases[phase].turn, phases[phase].type);
	}
}

function firstPhase () {
	drawBoard(currentPhase = 0);
}

function previousPhase () {
	drawBoard(currentPhase = currentPhase < 2 ? 0 : currentPhase - 1);
}

function nextPhase () {
	drawBoard(currentPhase = currentPhase > phases.length - 2 ? phases.length : currentPhase + 1);
}

function lastPhase () {
	drawBoard(currentPhase = phases.length);
}

var zoom = 1, pan = 0;
function zoomIn () {
	zoom = zoom == 1 ? 1.5 : zoom == 1.5 ? 2 : 3;
	document.getElementById('zoompan').setAttribute('transform', 'scale(' + zoom + ')');
}

function zoomOut () {
	zoom = zoom == 3 ? 2 : zoom == 2 ? 1.5 : 1;
	document.getElementById('zoompan').setAttribute('transform', 'scale(' + zoom + ')');
}

var territory;
var domterritories = document.getElementById('territories').childNodes;
for (var i = 0; i < domterritories.length; i++) {
	if (domterritories[i].nodeType !== 1) continue;
	territory = territoryByID(domterritories[i].id);
	domterritories[i].setAttribute('title', territory.name + '[' + territory.id + ']');
}
var paths = document.getElementById('coastalChilds').getElementsByTagName('path');
for (i = 0; i < paths.length; i++) {
	territory = territoryByID(paths[i].id);
	paths[i].setAttribute('title', territory.name + '[' + territory.id + ']');
}

var ajaxOptions = {	method: 'get', asynchronous: true, 
	onFailure: function(response) {
		document.write(response.responseText);
	},
	onSuccess: function(response) {
		var i, j, data, tmp, hasRetreats, hasAdjustments, orders = ['H','M','SH','SM','C','R','D','+A','+F','W','-'];
		eval(response.responseText);
		data = loadBoardData();
		boardData = { orders: [], archive: [], status: [], turn: data.t };
		switch (data.p) {
			case 'D':  boardData.phase = 'Moves'; break;
			case 'R':  boardData.phase = 'Retreats'; break;
			case 'B':  boardData.phase = 'Adjustments'; break;
// phase: '(P)re-game', '(D)iplomacy', '(R)etreats', '(B)uilds', '(F)inished'
		}
		for (i = 0; i < data.o.length; i++) {
			tmp = [];
			for (j = 0; j < data.o[i].length; j++) {
				tmp.push({
					terrID: data.o[i][j].l, countryID: data.o[i][j].c, unitType: data.o[i][j].u,
					success: data.o[i][j].s, dislodged: data.o[i][j].d, type: orders[data.o[i][j].o],
					toTerrID: data.o[i][j].t, fromTerrID: data.o[i][j].f
				});
			}
			boardData.orders.push(tmp);
		}
		for (i = 0; i < data.a.length; i++) {
			tmp = [];
			for (j = 0; j < data.a[i].length; j++) {
				tmp.push({ terrID: data.a[i][j].l, standoff: data.a[i][j].s, countryID: data.a[i][j].c });
			}
			boardData.archive.push(tmp);
		}
		for (i = 0; i < data.s.length; i++) {
			boardData.status.push({
				terrID: data.s[i].l, coastTerrID: data.s[i].L, unitType: data.s[i].u,
				occupiedFromTerrID: data.s[i].o, standoff: data.s[i].s, countryID: data.s[i].c, unitCountryID: data.s[i].U
			});
		}
		phases = [];
		for (i = 0; i < boardData.orders.length; i++) {
			phases.push({ turn: i, type: 'Moves' });
			hasRetreats = hasAdjustments = false;
			for (j = 0; j < boardData.orders[i].length; j++) {
				hasRetreats = hasRetreats || boardData.orders[i][j].type.match(/R|D/);
				hasAdjustments = i % 2 == 1 && (hasAdjustments || boardData.orders[i][j].type.match(/\+|-|W/));
				if (hasRetreats && (hasAdjustments || i % 2 == 0)) break;
			}
			if (hasRetreats) phases.push({ turn: i, type: 'Retreats' });
			if (hasAdjustments) phases.push({ turn: i, type: 'Adjustments' });
		}
		drawBoard(currentPhase = phases.length);
	}
};

if (window.location.href.match(/#static:/)) {
	var ajaxUrl = '../../../' + window.location.href.replace(/.*#static:/, '') + '?nocache=' + Math.floor(Math.random() * 99999);
} else {
	var ajaxUrl = '../../../map.php';
	ajaxOptions.parameters = { gameID: window.location.href.replace(/.*#/, ''), mapType: 'svg.json' };
}

//alert(window.location.href + '\n' + ajaxUrl);
new Ajax.Request(ajaxUrl, ajaxOptions);
