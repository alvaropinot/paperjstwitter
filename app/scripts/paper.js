var layer = project.activeLayer;
layer.selected = true;


/*
var path = new Path();
path.strokeColor = '#567e37';
path.strokeWidth = 5;

var firstPoint = new Point(500, 550);
path.add(firstPoint);

var throughPoint = new Point(575, 400);
var toPoint = new Point(600, 250);
var body = path.arcTo(throughPoint, toPoint);

path.fullySelected = true;

var bulb = new Path.Circle(new Point(0, 250), 10);
bulb.fillColor = '#567e37';
*/
//var circle = new Path.Circle(throughPoint, 5);
//circle.fillColor = '#CC0000';

/*var group = new Group();
group.addChild(bulb);
group.addChild(body);*/

/*var group = bulb;

var dest = new  Point(1800, 800);

function rotateMove ( angle) {
    if (group.position.x < 850 && group.position.y < 650) {
        var vector = dest - group.position;
        group.position += vector / 150;

        //angle += angle;
        //group.rotate(angle);
    } else {
        isOffScreen = true
    }
}

console.log(bulb);

*/



var Particle = function (opts) {


	this.radius = 10;
	this.body = new Path.Circle(new Point(0, 250), this.radius);

	this.body.fillColor = (Math.random() < 0.5) ? "#ff0066" : "#111111";
	this.height = opts.height;

	this.body.position.x = opts.x;
	this.animated = true;
	
	//self reference
	this.body.data = this;

	this.scale = 1.2;

	/*this.animateTop = function (qty) {

		console.log(qty);
		if (this.animated){
			return;
		}
		//var dest = new Point(1800, 800);
		
		//if (group.position.x < 850 && group.position.y < 650) {
        //var vector = dest - this.body.position;


        if(this.body.position.y > 100){
        	this.body.position.y -= 100 / 15;
        }

        //angle += angle;
        //group.rotate(angle);
    	//}
	};*/

	this.animateSin = function (qty) {

		if (!this.animated){
			return;
		}

		//console.log(this.body.scaling.x);
		/*if(this.body.scaling.x < this.scale){
			this.body.scale(1.1);
		}*/



		// A cylic value between -1 and 1
		var sinus = Math.sin(qty * opts.vel/2);
		
		// Change the y position of the segment point:
		this.body.position.y = sinus * this.height + view.size.height - this.radius;
		//this.body.position.y = sinus * this.height + view.size.height - this.height/2 - this.radius;

		//this.body.position.x += 1-Math.random()*2;
	}
};


var particles = [];

var maxWidth = view.size.width,
	numParticles = maxWidth/10;


for (var i = 0; i < numParticles; i++){
	particles.push(new Particle({
									height:Math.random()*100+30,
									x:Math.random()*maxWidth,
									vel:Math.random()*5+1,
								}
						)
					);
}


function onFrame(event) {
    /*for (var i = 0; i < seedCount; i++) {
        if (!seeds[i].isOffscreen()) {
            seeds[i].rotateMove(random(2, 4));
        }
    }*/

    //rotateMove();


    for (var i = particles.length - 1; i >= 0; i--) {
    	particles[i].animateSin(event.time);
    	//particles[i].animateTop(event.time);
    };




}



function onMouseDown(event) {

	if(!event.item){
		return;
	}



	var p = event.item.data;



	console.log(p);

	p.animated = !p.animated;

	p.animateTop();
	//p.body.position.y = 100;

	//p.body.scale(5);



/*particles.push(new Particle({
								height:Math.random()*100+30,
								x:Math.random()*maxWidth,
								vel:Math.random()*5+1,
							}
					)
				);*/

	//event.item.position.y = 100;
	/*segment = path = null;


	var hitResult = project.hitTest(event.point, hitOptions);
	if (!hitResult)
		return;

	if (event.modifiers.shift) {
		if (hitResult.type == 'segment') {
			hitResult.segment.remove();
		};
		return;
	}

	if (hitResult) {
		path = hitResult.item;
		if (hitResult.type == 'segment') {
			segment = hitResult.segment;
		} else if (hitResult.type == 'stroke') {
			var location = hitResult.location;
			segment = path.insert(location.index + 1, event.point);
			path.smooth();
		}
	}
	movePath = hitResult.type == 'fill';
	if (movePath)
		project.activeLayer.addChild(hitResult.item);*/
}

//function onMouseMove(event) {
function onMouseDrag(event) {
	/*project.activeLayer.selected = false;
	if (event.item)
		event.item.selected = true;*/

	/*if(!event.item){
		return;
	}*/


	/*particles.push(new Particle({
								height:Math.random()*100+30,
								x:Math.random()*maxWidth,
								vel:Math.random()*5+1,
							}
					)
				);*/

	//event.item.position.y = 100;
	/*var p = event.item.data;

	p.animated = false;
	//p.body.position.y = 100;
	p.body.position = event.point;*/


}
