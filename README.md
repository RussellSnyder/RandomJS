# RandomJS
Tiny Library to help creating controlled chaos in the Javascript environment
Thi is an attempt to formalize randomness equations so that can safely create a random number without thinking about edge cases.

## Because Math.random() just isn't cutting it

Often I find myself needing a number that isn't between 0-1.  W3 schools says:

Return a random number between 1 and 100:
```javascript
Math.floor((Math.random() * 100) + 1);
```
which is actually wrong, because you can get a number that is over 100 (between 100-100.9999) which will case bugs if you really only need values between 1-100.  

Also, Javascript doesn't give a way to eailsy modify steps for random numbers.  You can round to the nearest integer, but that greatly limits your creativity if you can steps of 0.5 or 0.25 or 0.15 or wHaTeVeR. Here are some useful functions that come in this library:

#Functions Available

### Between(Value1, Value2, [Step])

With this library you can just write
```javascript
Random.Between(0, 10, 0.5);
```
and get a random number between 0, 10 that goes by 0.5 step like 5.5 or 3 or 2.5.  Oh... you wanted an integer? Done:
```javascript
Random.Between(0, 10, 1);
```
Oh... you mistyped the highest and lowest? no worries, still works:
```javascript
Random.Between(10, 1, 2);
```
Wait...you wanted a step 2? Done:
```javascript
Random.Between(0, 10, 2);
```
Oh... you wanted a float? Easy....
```javascript
Random.Between(0, 10);
```
Negatives? Fire away:
```javascript
Random.Between(-30, 60, 0.75);
```
### BetweenHex('Hex1', 'Hex2', [Step])

This works the same as Between, expect that you can put in Hex.  Really great for Stochastic Webpage coloring.  
The output Hex will always be the length of the longest hex put in.  So for example
```javascript
Random.BetweenHex('00', 'ffffff', 1);
```
Will output a valid hex that is 6 characters long.  This may cause errors if the length of a hex is too long.
You can do things like:
```javascript
Random.BetweenHex('00000', 'ffff', 256)
```
if you want the last two digits to be 00.  Not sure when you would use this...but you can! 

# Todo

### Distributed Randomness Functions

1. Create functions that generate several random number.
2. Create functions that can add/subtract/multiply/divide output from random numbers to shape number in certain ways

### Weighted Function

Pull numbers towards an array of numbers given

```javascript
Random.WeightedArray(elementsInArray, [arrNumbers], [arrWeight], randomGenerator)
```
Example
```javascript
Random.WeightedArray(20, [0,5,10], [90,50,50], Random.Between(0, 10, 0.5))
```
this would generate an Array of 20 numbers pulled towards the numbers int he first array by the percentages listed in the second array.  This example would generate more numbers closer to 0 than 10 because 90 is more than 50. 

### Pivot Functions

Generate Arrays that alterate around a certain number 

```javascript
Random.PivotArray(elementsInArray, [pivotPoints], randomGenerator)
```
Example
```javascript
Random.PivotArray(15, [5], randomFunction)
```
this would create an array of 15 numbers where every number in the array at an odd index will be less than the pivotPoint (which is 5 in this example) and every even will be more than the pivotPoint.
```javascript
Random.PivotArray(55, [2,5,18], Random.Between(0,20))
```
this would create an array of 55 numbers where every number in the array at (index*3 % 3 == 0) will be less than the first pivot point number (2), every number at (index*3 % 3 == 1) will be between 2-5 and every number at (index*3 % 3 == 3) will be greater than 18.  
Problems can arrise if the generative function does not fall into the range of the pivot array.
