$(document).ready(function () {
	function pizaa(crust, topping, size) {
		this.crust = crust;
		this.topping = topping;
		this.size = size;


	};
	var newOder = []
	var total = 0
	pizaa.prototype.myToppingPrice = function () {
		if (this.crust === "crispy") {
			if (this.topping === "pepe") {
				return 150
			} else
				if (this.topping === "mash") {
					return 200
				} else {
					return 250
				};


		} else
			if (this.crust === "Stuff") {
				if (this.topping === "pepe") {
					return 170
				} else
					if (this.topping === "mash") {
						return 220
					} else {
						return 270
					};
			} else {
				if (this.topping === "pepe") {
					return 170
				} else
					if (this.topping === "mash") {
						return 220
					} else {
						return 270
					};
			};
	};
	pizaa.prototype.myCrustPrice = function () {
	if(this.crust === "crispy") {
		return 150
	} else 
	if(this.crust === "stuff"){
		return 200
	}else{
		return 250
	};	
	};
	pizaa.prototype.mySizePrize = function () {
		if (this.crust === "crispy") {
			if (this.size === "small") {
				return 100
			} else
				if (this.topping === "medium") {
					return 200
				} else {
					return 300
				};


		} else if (this.crust === "Stuff") {
			if (this.size === "small") {
				return 100
			} else
				if (this.topping === "medium") {
					return 200
				} else {
					return 300
				};


		} else {
			if (this.size === "small") {
				return 100
			} else
				if (this.topping === "medium") {
					return 200
				} else {
					return 200
				};
		};
	};
	pizaa.prototype.totalprice = function () {
		return this.myToppingPrice() + this.mySizePrize() + this.myCrustPrice()
	};
	// total = newOder.totalprice();



	$("#type").submit(function (event) {
		event.preventDefault();
		event.stopPropagation();
		var crust2 = $("#crust1").val();
		var topping2 = $("#topping1").val();
		var size2 = $("#size1").val();
		var newPizzaOder = new pizaa(crust2, topping2, size2);
		newOder.push(newPizzaOder.totalprice());
		$("#crust1").val("");
		$("#topping1").val("");
		$("#size1").val("");
		
		
		total = newOder.reduce((counter, element) => counter + element, 0)
		let newPizza = newPizzaOder
		$("#table").append(
			"<tr>" +
			'<th scope="row">' +

			newPizza.crust +
			"  @ " +
			newPizza.myCrustPrice() +
			"</th>" +
			"<td>" +
			newPizza.topping +
			" @ " +
			newPizza.myToppingPrice() +
			"</td>" +
			"<td>" +
			newPizza.size +
			" @ " +
			newPizza.mySizePrize() +
			"</td>" +
			"<td>" +
			newPizza.totalprice() +
			"</td>" +
			"</tr>"
		);
		// console.log('hkibibnvu')
		// console.log(crust2)
		// console.log('jgv ohkbugj')

		$("#table").append("");
		if (newOder.length > 0) {
			$("#form-title").empty();
			$("#form-title").append("Add Another Order");
			// console.log(newOder)
			// console.log("Nothing!!!")
		}

		$("#Amount2").fadeIn();
		$("#Procced").fadeIn();
		$("#orders-div").fadeIn();

		$("#Amount2").empty();
		$("#Amount2").append(total);
		$(".Amount2").show();
	});








	$("#Procced").click(function () {
		$(".checkout-options").show();
	});

	$("#proceed-forms").submit(function(event) {
		event.preventDefault();
		event.stopPropagation();
		var name = $("#name1").val();
		var deliveryOption = $("#option1").val();
		// console.log(name)
		customerName = name;
		$("#name1").val("");
		$("#option1").val("");
		$(".checkout-options").hide();
		$("#Procced").hide();
		$("#Amount2").empty();
		if (deliveryOption === "deliver") {
			$(".location").show();
			$(".delivery-cost").show();
			$("#Amount2").empty();
			$("#delivery-amount").append(200);
			total += 200;
			$("#Amount2").empty();
			$("#Amount2").empty();
			$("#Amount2").append(total);
			$(".Amount2").show();

			
		} else {
			alert(customerName + ": Your total bill is Ksh. " + total + ". Your order will be ready for collection in the next one hours");
		}
	});

	$(".location-form").submit(function (event) {
		event.preventDefault();
		var estateEntered = $("#estate").val();
		var houseNumberEntered = $("#house-number").val();
		estate = estateEntered;
		houseNumber = houseNumberEntered;
		$("#checkout").hide();
		$(".location").hide();
		$("#Amount2").empty();
		$("#Amount2").append(total);
		$(".Amount2").show();
		alert(customerName + ": Your total bill is Ksh. " + total + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hours");
	});


})