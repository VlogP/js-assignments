'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Пожалуйста, прочтите информацию по ссылкам перед выполнением заданий:                                 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Возврщает 'Fizz','Buzz' или начальное число согласно следеющим правилам:
 * 1) если не подпадает под следйющте правила вернуть начальное число
 * 2) число делится нацело на 3 вернуть 'Fizz'
 * 3) число кратно 5 вернуть 'Buzz'
 * 4) если число кратно 3 и 5 одновременно вернуть 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
	if(num%3==0){if(num%5==0)return 'FizzBuzz';else return 'Fizz';}
	if(num%5==0){if(num%3==0)return 'FizzBuzz';else return 'Buzz';}
	return num;
}


/**
 * Возвращает факториал переданного целого числа n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
	for(var i=n-1;i>=1;i--)
	n=n*i;	
   return n;
}


/**
 * Возвращается сумму целых чисел в промежутке между переданными числами, включая их
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
   var sum=0;
   for(var i=n1;i<=n2;i++){
	sum+=i;  
   }
   return sum;
}


/**
 * Возвращает true, если с помощью трех переданных длин сторон a,b,c можно
 * посроить треугольник, если нет - false
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
	if(a+b>c)if(a+c>b)if(c+b>a)return true;
   return false;
}


/**
 * Возвращает true, если 2 определенных прямоуголника перекрываются, если нет false.
 * Каждый прямоуголник представлен обьектом
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Пожлауйтса используйте принцип задания координат для canvas (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * этот способ отличается от декартовой системы координат.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {

	if ((rect1.left + rect1.width >= rect2.left) && (rect1.left <= rect2.left + rect2.width)) if ((rect1.top + rect1.height >= rect2.top) && (rect1.top <= rect2.top + rect2.height)) return true;
	
	return false;
}


/**
 * Возвращает true если точка лежим в пределах круга, если нет то false
 * Круг представляет собой объект:
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Точка представляет собой объект:
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
   
   if(Math.pow((point.x - circle.center.x),2) + Math.pow((point.y - circle.center.y),2) < circle.radius*circle.radius) return true;
  return false;
}


/**
 * Возврщает первый неповторяющийся символ в строке, если его нет то возвращает null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    var Flag2=false;
	for(var i=0;i<str.length;i++)
	{
	Flag2=true;
	for(var j=0;j<str.length;j++)
		{
		if(j!=i)
		if(str[i]==str[j])
		Flag2=false;
		}
		if(Flag2)return str[i];
	} 
	
}


/**
 * Возвращает интервальную строку по 2 определенным числам и (включить / исключить) критериям.
 * Подробное описание задачи: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Обратите внимание на то, что меньшее число должно идти первым в описании
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * меньшее число должно быть впереди :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    var start,end;
	var number1,number2;
	
	if(isStartIncluded)start='[';else start='(';
	if(isEndIncluded)end=']';else end=')';
	if(b>=a){number1=a;number2=b;}else {number1=b;number2=a;}
	return start+number1+', '+number2+end;
}


/**
 * Переворачивает переданную строку (ставит все символы строки в обратном порядке)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
	 var str1='';	 
	for(var i=str.length-1;i>=0;i--)str1=str1.concat(str[i]);
		
    return str1;	
    
}


/**
 * Переворачивает переданное целое число (ставит все цифры числа в обратном порядке)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
   	var str1='';	 
	var str2=String(num);
	for(var i=str2.length-1;i>=0;i--)str1=str1.concat(str2[i]);
		
    return Number(str1);	
}


/**
 * Проверяет на валидность CCN (credit card number) и возвращает true если CCN валиден
 * и возвращает false в противном случае.
 *
 * Описание алгоритма по ссылке : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
	var sum=0;
	var stringbuf=String(ccn);
	var digits=stringbuf.length;
	var parity=digits%2;
	var dig=0;
	
	for (var i=0;i<digits;i++){
		dig=Number(stringbuf[i]);
		if(i%2==parity)
		{
			dig=dig*2;
			if(dig>9)
				dig=dig-9;
		}
		sum=sum+dig;
		
	}
   if(sum%10==0)return true; else return false; 
}


/**
 * Возвращает сумму всех цифр переданного чила след. образом:
 *   step1 : найти сумму всех цифр исходного числа
 *   step2 : если сумма на step1 больше 9 нужно проделать step1 с полученной суммой
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
	var sum=0;
	var str=String(num);
	for (var i=0;i<String(num).length;i++){
		sum+=Number(str[i]);
	}
	if(sum>9){str=String(sum);sum=0;sum=Number(str[0])+Number(str[1]);}
   return sum;
}


/**
 * Возвращает true если переданная строка представляет собой правильную скобочную
 * структура, если нет -false
 * Правильная скобочная структура состоит из соответствующих закрывающихся,
 * открывающихся фигурных скобок, стоящих на соответствующих местях.
 * Скобочная последовательность может содержать:  [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
	var cir,squ,tri,bea;
   cir=0;squ=0;tri=0;bea=0;
   for(var i=0;i<str.length;i++){
	   if(str[i]=='['){cir++;if(i!=str.length)if(str[i+1]==')'||str[i+1]=='}'||str[i+1]=='>')return false;}
	   if(str[i]==']')cir--;
	   if(str[i]=='('){squ++;if(i!=str.length)if(str[i+1]==']'||str[i+1]=='}'||str[i+1]=='>')return false;}
	   if(str[i]==')')squ--;
	   if(str[i]=='<'){tri++;if(i!=str.length)if(str[i+1]=='}'||str[i+1]==']'||str[i+1]==')')return false;}		  
       if(str[i]=='>')tri--;
	   if(str[i]=='{'){bea++;if(i!=str.length)if(str[i+1]==']')return false;}
	   if(str[i]=='}')bea--;
	   if(cir<0||tri<0||bea<0||squ<0){return false;}
   }
   if(cir==0&&squ==0&&tri==0&&bea==0)
   return true;
	else
	return false;
}


/**
 * Возвращает строку, составленной на основе периода от переданного начала и конца периода
 * Конечная строка должна удовлетворять следующим правилам:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
var str="";
var buf,buf1,buf2;
 buf=(endDate.getYear()-startDate.getYear())*60*60*24*30*12;
 buf+=(endDate.getMonth()-startDate.getMonth())*60*60*24*30;
 buf+=(endDate.getDate()-startDate.getDate())*60*60*24;
 buf+=(endDate.getHours()-startDate.getHours())*60*60;
 buf+=(endDate.getMinutes()-startDate.getMinutes())*60;
 buf+=endDate.getSeconds()-startDate.getSeconds();

 buf+=(endDate.getMilliseconds()-startDate.getMilliseconds())/100;
 buf2=(endDate.getMilliseconds()-startDate.getMilliseconds())/100;

if(buf<=60*60*24*345)
{
  if(buf<=60*60*24*25)
  {
	  if(buf<=60*60*22)	  
	  {
		  if(buf<=60*90) 
		  {
			 if(buf<=90) 
			 {
				 if(buf<=45)return 'a few seconds ago';
				 if(buf>45&&buf<=90) return 'a minute ago';
			 }
			  if(buf>90&&buf<=120) return '2 minutes ago';else if(buf>120&&buf<=60*45){buf1=Math.floor(buf/60);return   String(buf1)+' minutes ago';}else return 'an hour ago';
		  }
		  if(buf>60*90&&buf<=60*120) return '2 hours ago';else if(buf>60*90&&buf<=60*60*22){buf1=Math.fround(buf/(60*60));if(buf1-0.5<=Math.floor(buf/(60*60))) {buf1=Math.floor(buf/(60*60));}else {buf1=Math.round(buf1)}
    	  return String(buf1)+' hours ago';}else return 'a day ago';		  
	  }
	if(buf>60*60*22&&buf<=60*60*36)return 'a day ago';else if(buf>60*60*36&&buf<=60*60*24*25){buf1=Math.fround(buf/(60*60*24));if(buf1-0.5<=Math.floor(buf/(60*60*24))) {buf1=Math.floor(buf/(60*60*24));}else {buf1=Math.round(buf1)}return   String(buf1)+' days ago';  }
  }
  if(buf>60*60*24*25&&buf<60*60*24*45)return 'a month ago';else if(buf>=60*60*24*45&&buf<=60*60*24*345){buf1=Math.round(buf/(60*60*24*30));if(buf<=60*60*24*340)return   String(buf1)+' months ago';  }
  
}
	 if(buf>=60*60*24*340&&buf<=60*60*24*545)return 'a year ago';else if(buf>60*60*24*545){buf1=Math.round(buf/(60*60*24*365));return   String(buf1)+' years ago';  }
   
}

/**
 * Вернуть строку с представление числа в n-ой (бинарной, десятичной, и т.д., где n<=10) системе исчисления.
 * Более подробное описание
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
	var str='';
    var buf=num,buf1,buf2;
	
	while(buf>=n){
	buf1=buf%n;
	
		if(buf1==0){buf=buf/n;str='0'+str;}
		if(buf1!=0){buf=Math.floor(buf/n);str=String(buf1)+str;}
	
	if(buf<n){str=String(buf)+str}
	
	}
	return str;
}


/**
 * Возбращает общий путь к директории из всех путей переданных в массиве
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
	var str1='',str2='',bufstr3='';
	var s=0;
	var arr=[];
	
	for(var i=0;i<pathes.length;i++)
	{ 
	arr.push(pathes[i].split('/'));
	}
	if(pathes.length==2)
	for(var i=0;i<pathes.length;i++)
	for(var j=0;j<arr[i].length;j++)
		{
			
			if(arr[0][j]==arr[1][j]){
				if(j==0)bufstr3=bufstr3+'/';
				if(arr[0][j]=='')
				{}
				else
				bufstr3=bufstr3+String(arr[0][j])+'/';
			}
			else return bufstr3
			
		
		}
	else
		for(var i=0;i<pathes.length;i++)
		for(var j=0;j<arr[i].length;j++)
		{
			
			if(arr[0].toString[j]==arr[1][j]==arr[2][j]){
				if(j==0)bufstr3=bufstr3+'/';
				if(arr[0][j]=='')
				{}
				else
				bufstr3=bufstr3+String(arr[0][j])+'/';
			}
			else return bufstr3
			
		
		}
	
    return bufstr3;
	 
}


/**
 * Возвращает произведение двух переданных матриц.
 * Более подробное описание: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
	var rowsA = m1.length, colsA = m1[0].length,
        rowsB = m2.length, colsB = m2[0].length,
        C = [];



    for (var i = 0; i < rowsA; i++) C[i] = [];

    for (var k = 0; k < colsB; k++)
     { for (var i = 0; i < rowsA; i++)
        { var temp = 0;
          for (var j = 0; j < rowsB; j++) temp += m1[i][j]*m2[j][k];
          C[i][k] = temp;
        }
     }

    return C;
    
}


/**
 * Возвращает результат игры крестики-нолики для текущих позиций 'X', 'O'
 * Более подробное описание: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Позиции X и O представлены в виде матрицы 3x3 cо значениями: 'X','0', undefined
 * Функция должна возвращать победиля игры по текущей позиции.
 * Результат должен быть в виде: 'X' или '0' или undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
var res1=0,res2=0;

for(var i=0;i<position.length;i++)
{
	
	for(var j=0;j<position[i].length;j++)
	{
		if(position[i][j]=='X')
		res1++;
		if(position[i][j]=='0')
		res2++;
	}	
		 if(res1==3)return 'X';
	if(res2==3)return '0';
	res1=0;res2=0;
		
}
   

	for(var j=0;j<3;j++)
	{
		res1=0;res2=0;
		
		for(var z=0;z<position[j].length;z++)
		{
			
		if(position[z][j]=='X')
		res1++;
		if(position[z][j]=='0')
		res2++;
		}	
		 if(res1==3)return 'X';
		 if(res2==3)return '0';
	}	
	
	     if(res1==3)return 'X';
	     if(res2==3)return '0';
	     res1=0;res2=0;
	
		
		for(var z=0,j=0;z<3;z++,j++)
		{
		if(position[j][z]=='X')
		res1++;
		if(position[j][z]=='0')
		res2++;
		}
		 
		 if(res1==3)return 'X';
	     if(res2==3)return '0';
	     res1=0;res2=0;
		 
		for(var z=2,j=0;z>=0;z--,j++)
		{
		if(position[j][z]=='X')
		res1++;
		if(position[j][z]=='0')
		res2++;
		}
				
		
	if(res1==3)return 'X';
	if(res2==3)return '0';
    return undefined;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
