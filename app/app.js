var RandomHelpers = {
	hexPasser: function(string) {
	    var hex = string;
	    var numberOfCharThatAreHex = (hex.match(/[0-9a-f]/gi)).length;
	    if (hex.length !== numberOfCharThatAreHex || numberOfCharThatAreHex == null) {
	    	alert("HexPasser: "+hex+" Not valid Hex");
	    } else {
			return hex;    	
	    }
	}
}

var hexToNumber = function(hex) {

}

var numberToHex = function(number) {

}

var Random = {
	//////////////////////////////
	//							//
	//		Private Helpers		//
	//							//
	//////////////////////////////

	// http://stackoverflow.com/questions/6137986/javascript-roundoff-number-to-nearest-0-5
	_round: function(value, step) {
	    step || (step = 1.0);
	    var inv = 1.0 / step;
	    return Math.round(value * inv) / inv;
	},
	Between: function(Value1, Value2, Step) {

		// Set Max and Min
		if (Value1 > Value2) { 
			var Max = Value1;
			var Min = Value2;
		} else if (Value1 <= Value2) { 
			var Max = Value2;
			var Min = Value1;
		}

		// Set Ranges
		// if both are positive or both are negative
		if ((Max <= 0 && Min <= 0) || (Max >= 0 && Min >= 0)) {
			var range = Math.abs(Math.abs(Max) - Math.abs(Min));
		// Max is negative and Min is Positive
		} else if (Max < 0 && Min >= 0) {
			var range = Math.abs(Max) + Min;
		// Min is negative and Max is positive
		} else if (Max >= 0 && Min < 0) {
			var range = Math.abs(Min) + Max;
		}

		if (!Step) {
			var Random = ((Math.random() * range) + Min); 
			return Random;
		} else if (Step) {
			if (range % Step == 0) {
				var steppedRange = range;
			} else { 
				var steppedRange = range - Step;
			}
			var randomWithStep = this._round(((Math.random() * steppedRange) + Min), Step); 
			return randomWithStep;
		}
	},

	BetweenHex: function(Hex1, Hex2, Step) {
		var validHex1 = RandomHelpers.hexPasser(Hex1);
		var validHex2 = RandomHelpers.hexPasser(Hex2);
		var privateStep = Step;
		if (validHex1.length > validHex2.length) {
			var finalLength = validHex1.length;
		} else { 
			var finalLength = validHex2.length;
		}
		var value1 = parseInt(validHex1, 16);
		var value2 = parseInt(validHex2, 16);
		var resultNumber = this.Between(value1, value2, privateStep);
		var rawResultHex = resultNumber.toString(16);
		if (rawResultHex.length == finalLength) {
			var finalResultHex = rawResultHex;
		} else if (rawResultHex.length < finalLength) {
			var finalResultHex = rawResultHex.toString();
			var lengthDiff = finalLength - rawResultHex.length;
			for (i = 0; i < lengthDiff ; i++ ) {
				finalResultHex = "0" + finalResultHex;
			}
		} else {
			var finalResultHex = "I don't know if this can happen";
		}
		return finalResultHex;
	}





}