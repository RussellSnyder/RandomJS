# RandomJS
Tiny Library to help creating controlled chaos in the Javascript environment
Thi is an attempt to formalize randomness equations so that can safely create a random number without thinking about edge cases.

## Math.random() just isn't cutting it

Often I find myself needing a number that isn't between 0-1.  W3 schools says:

Return a random number between 1 and 100:
```javascript
Math.floor((Math.random() * 100) + 1);
```
which is actually wrong, because you can get a number that is over 100 (between 100-100.9999) which will case bugs if you really only need values between 1-100.  

Also, Javascript doesn't give a way to eailsy modify steps for random numbers.  You can round to the nearest integer, but that greatly limits your creativity if you can steps of 0.5 or 0.25 or 0.15 or wHaTeVeR. Here are some useful functions that come in this library:

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


