// Helpers
var findNumberDigitsAfterDot = function(Num) {
	// Check if Num is an Integer
	if (Number.isInteger(Num)) {
		// if its an integer, no length after dot 
		// cause there's no dot....
		return 0
	} else {
		var NumToString = Num.toString();
		var Decimal_Place = NumToString.indexOf(".");
		var trimNumAfterDecimal = NumToString.slice(Decimal_Place + 1, NumToString.length);
		var lengthAfterDot = trimNumAfterDecimal.length;		
		return lengthAfterDot
	}
}

// can only round to integers in Javscript
// but we want to round to floats (0.5, 0.75)



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
	}





}