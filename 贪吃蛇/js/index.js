window.onload=function () {
	var spend=300;
	var num=0;
	var over1 = document.getElementById("over1");
	var over2 = document.getElementById("over2");
	var input1 = document.getElementsByTagName("input")[0];
	var input2 = document.getElementsByTagName("input")[1];
	var stop= document.getElementById("stop");
    var guanka= document.getElementById("guanka");
	var grade=document.getElementById("grade");
	var continues=document.getElementById("continue");
	guanka.onchange=function aa() {
		if (guanka.value == "初级") {
			spend = 300;
		}
		if (guanka.value == "中级") {
			spend = 150;
		}
		if (guanka.value == "高级") {
			spend = 50;
		}
		return spend;
	}
	// 重新开始
	var returns= document.getElementById("return");
	returns.onclick=function () {
		location.reload();
	}

	class TCS {
		constructor() {
			this.sence = this.getid("sence");
			this.she = [{x: 0, y: 0},
				{x: 0, y: 1},
				{x: 0, y: 2}];
			this.fx = "right";
			this.food = {};
			this.t;
			this.flag = true;
		}

		play() {
			//创建场景
			this.createSence();
			//创建蛇
			this.createSnake();
			//创建食物
			this.createFood();
			//蛇动
			this.snakeMove();
			//方向
			this.controlSnake();
		}

		createSence() {
			for (var i = 0; i < 20; i++) {
				for (var j = 0; j < 20; j++) {
					var gezi = document.createElement("div");
					gezi.id = i + "-" + j;
					gezi.classList.add("gezi");
					this.sence.appendChild(gezi);
				}
			}
		}

		createSnake() {
			for (var i in this.she) {
				var id = this.she[i].x + "-" + this.she[i].y;
				this.getid(id).classList.add("she");
				this.getid(id).classList.remove("shetou");
			}
			var touid = this.she[this.she.length - 1].x + "-" + this.she[this.she.length - 1].y;
			this.getid(touid).classList.add("shetou");
			if(fx==right){
				this.getid(touid).transform
			}

			var weiid = this.she[0].x + "-" + this.she[0].y;
			this.getid(weiid).classList.add("shewei");
		}

		createFood() {
			do {
				this.food.x = Math.floor(Math.random() * 20)
				this.food.y = Math.floor(Math.random() * 20)
			} while (check(this.she, this.food.x, this.food.y))
			this.getid(this.food.x + "-" + this.food.y).classList.add("shiwu");
			function check(she, fx, fy) {
				for (var i in she) {
					if (she[i].x == fx && she[i].y == fy) {
						return true;
					}
				}
				return false;
			}
		}

		snakeMove() {
			var that = this;
			this.t = setInterval(function move() {
				if (that.fx == "right") {
					var newtouX = that.she[that.she.length - 1].x;
					var newtouY = that.she[that.she.length - 1].y + 1;
				} else if (that.fx == "left") {
					var newtouX = that.she[that.she.length - 1].x;
					var newtouY = that.she[that.she.length - 1].y - 1;
				} else if (that.fx == "up") {
					var newtouX = that.she[that.she.length - 1].x - 1;
					var newtouY = that.she[that.she.length - 1].y;
				} else if (that.fx == "down") {
					var newtouX = that.she[that.she.length - 1].x + 1;
					var newtouY = that.she[that.she.length - 1].y;
				}
				var newtou = {x: newtouX, y: newtouY};
				for (var i in that.she) {
					if (newtouX == that.she[i].x && newtouY == that.she[i].y) {
						clearInterval(that.t);
						over1.style.display = "block";
						over2.style.display = "block";
						for (var i in that.she) {
							var id = that.she[i].x + "-" + that.she[i].y;
							that.getid(id).classList.remove("she");
							that.getid(id).classList.remove("shetou");
							that.getid(id).classList.remove("shewei");
						}

						that.getid(that.food.x + "-" + that.food.y).classList.remove("shiwu");
						input1.onclick = function () {
							// over1.style.display = "none";
							// over2.style.display = "none";
							// var tcs = new TCS();
							// tcs.play();
							location.reload();
						}
						input2.onclick = function () {
							var Exit = confirm("您确定要退出吗?");
							if (Exit == true){
								window.close();
							}
						}
					}
				}

				if (newtouX <= -1 || newtouX >= 20 || newtouY <= -1 || newtouY >= 20) {
					clearInterval(that.t);
					over1.style.display = "block"
					over2.style.display = "block"
					that.createSence();
					for (var i in that.she) {
						var id = that.she[i].x + "-" + that.she[i].y;
						that.getid(id).classList.remove("she");
						that.getid(id).classList.remove("shetou");
						that.getid(id).classList.remove("shewei");
					}
					that.getid(that.food.x + "-" + that.food.y).classList.remove("shiwu");
					input1.onclick = function () {
						grade.innerHTML="本次得分:0";
						// over1.style.display = "none"
						// over2.style.display = "none"
						// var tcs = new TCS();
						// tcs.play();
						location.reload();
					}
					input2.onclick = function () {
						var Exit=confirm("您确定要退出吗?");
						if (Exit == true) {
							window.close();
						}
					}

				}
				that.she.push(newtou);
				if (newtouX == that.food.x && newtouY == that.food.y) {
					num++;
					grade.innerHTML=`本次得分:${num}`;
					that.getid(that.food.x + "-" + that.food.y).classList.remove("shiwu");
					that.createFood();
				} else {
					var weiba = that.she.shift();
					that.getid(weiba.x + "-" + weiba.y).classList.remove("she")
					that.getid(weiba.x + "-" + weiba.y).classList.remove("shewei")
				}
				that.createSnake();
				that.flag = true;
				//点击时的暂停与继续效果
				stop.onclick=function () {
						clearInterval(that.t);
					}
				continues.onclick=function () {
					console.log(123);
					that.snakeMove();
				}

			}, spend)
			// stop.onclick=function () {
			//
			// }
		}
		controlSnake() {
			var that = this;
			document.onkeydown = function (e) {
				if (that.flag) {
					if (e.keyCode == 37) {
						if (that.fx != 'right') {
							that.fx = "left";
						}
					}
					if (e.keyCode == 38) {
						if (that.fx != 'down') {
							that.fx = "up";
						}
					}
					if (e.keyCode == 39) {
						if (that.fx != 'left') {
							that.fx = "right";
						}
					}
					if (e.keyCode == 40) {
						if (that.fx != 'up') {
							that.fx = "down";
						}
					}
				}
			}
		}

		getid(id) {
			return document.getElementById(id)
		}
	}
	var play=document.getElementById("play");
	document.onkeydown=play.onclick=function(e){
		if(e.keyCode==13){
			play.style.display="none";
			var tcs = new TCS();
			tcs.play();
		}
		play.style.display="none";
		var tcs = new TCS();
		tcs.play();
	}













}