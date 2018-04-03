var circles = [];

function onKeyDown(event) {
	if(keyData[event.key]){

		var maxPoint = new Point(view.size.width, view.size.height);
		// console.log(maxPoint);
		var randomPoint = Point.random();
		// new Point(Math.random(), Math.random());
		var point = maxPoint * randomPoint;

		// new Path.Circle(new Point(100, 100), 10).fillColor = "orange";
		// circles.push(new Path.Circle(point, 10).fillColor = "orange");
		// console.log(view.size.height);
		// console.log(view.size.width);
		var newCircle = new Path.Circle(point, 500);

		newCircle.fillColor = keyData[event.key].color;
		keyData[event.key].sound.play();


		// // if key is "a"
		// if(event.key === "a"){
		// 	// play sound1
		// 	sound1.play();
		// 	newCircle.fillColor = "purple";
		// }
		// //if key is "s"
		// else if(event.key === "s"){
		// 	// play sound2
		// 	sound2.play();
		// 	newCircle.fillColor = "#16a085";
		// }
		// else {
		// 	newCircle.fillColor = "orange";
		// }


		circles.push(newCircle);
	}


}

// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = "red";

function onFrame(event){
	for(var i = 0; i < circles.length; i++){
		// console.log(circles[i]);
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
	}
	// animatedCircle.fillColor.hue += 1;
	// animatedCircle.scale(.9);
}