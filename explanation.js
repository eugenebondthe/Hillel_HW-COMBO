"number" + 3 + 3;
// result: 'number33'
// as soon as 'number' is a string literal it means that '+' switches from addition symbol to a concatination one cuz in JS if at least one of the operands is a string all the others gna be turned to this type of data as well. Guess it calls type coerction or smthng.
// overall the result is formed by the next sequence:
//  1. cuz 'number' is a string '+' perfoms a concatination between 2 first strings 'number' and '3' and we're achiving a new string 'number3'
//  2. we'll receive the same behaviour as on a previous step '3' will be switched to a string and gna be concatinated with a previous result 'number3' giving us a final result of 'number33'

null + 3;
// result: 3
// again we're facing a basic JS type coercion but now with numbers. So whenever we're using '+' operand with a null and number JS will convert 'null' to a numeric value
// the sequence gna be:
//  1. converting 'null' to 0
//  2. completing the addition operation of 3 and 0 the result of which definitely will be 3

5 && "qwerty" + "40" + +"2" + "hillel";
// result: 'qwerty402hillel'
// here's the deal, logical AND operator returns LAST truthy value if all operands are truthy that's why:
//  1. 'qwerty' + '40'
//  2. 'qwerty40' + '2' - there's a thing, as soon as we're facing unary plus before '2' it basically converts this string to a number 2, but as we've faced in a previous example number converts back due to concat operation and we again receive '2'
//  3. 'qwerty402' + 'hillel' leads us to a final result

"10" - 5 === 6;
// result: false
// here we're facing the opposite to previous examples thing and due to substraction operation string '10' converts to a num and we're following next logic:
//  1. '10' === 10
//  2. 10 - 5 === 5
//  3. 5 != 6 === false
//  simple example i guess no need to write many words

true + false;
// result: 1
// as we remember if no string operands used with '+' operand than it's gna perform the addition operation instead of concatination, so we're following next logic
//  1. basically bool values after convertation to num always receiving their default values 1 for 'true' and 0 for 'false'
//  2. so our expression becomes nothing but 1 + 0 with a result of 1

"4px" - 3;
// result: NaN
// basicaly we've highlighted before that doing substraction operation gna bring us to default type coerction and JS will try to convert our string to a num
// but the thing is our string can't be converted due to having those 'px' symbols which means the only thing left to say here for JS is NaN (not a num)
// cuz we're trying to substruct smthng from NaN the given final result will be also NaN

"4" - 3;
// result: 1
// everything similar to prev. example but as soon as we're not facing extra symbols in our string type coerction will be done successfully
// so the expression will be transformed into 4 - 3 with a result of 1

"6" + 3 ** 0;
// result: 61
// '+' here is again a concatination operator cuz one of our operands is a string
// that means: 
//  1. we're taking 3 with a power of 0 which leads us to a value of 1
//  2. concat 2 strings '6' and '1' with a final result of 61 

12 / "6";
// result: 2
// same thing as with previous substruction ex.
// JS gna try to convert '6' to a num
// 12 will be devided by 6 with a result of 2

"10" + (5 === 6);
// result: 10false
//  1. comarisson operation result is false cuz 5 != 6
//  2. as soon as we have string JS will do concat of '10' and 'false' with result highlighted above

null == "";
// result: false
// null === null
// "" === 0
// null != 0
// (null == "") === false
// basicRule = null == undefined ? true : false;

3 ** (9 / 3);
// result: 27
// 9 / 3 === 3
// 3 ** 3 == 27

!!"false" == !!"true";
// result: true
// converting to bool by '!' => 'false' === true
// !true === false
// converting to bool by '!' => 'true' === true
// !true === false
// (false == false) === true

0 || ("0" && 1(+null == false) < 1);
// result: false
// '0' === true
// +null === 0
// (0 == false) === true
// 1(true) === 1 + true === 1 + 1 === 2
// 2 < 1 === false
// && => both operands are true => return true, otherwise return false
// (true && false) === false
// 0 === false
// false || false === false

(false && true) || true;
// result: true
// false && true === false
// || => if at least one of operands is true => return true, if both are false => return false
// false || true === true

false && (false || true);
// result: false
// false || true === true
// false && true === false

(+null == false) < 1 ** 5;
// result: false
// +null === 0
// false === 0
// 0 == 0 === true
// true === 1
// 1 ** 5 === 1
// 1 < 1 === false
