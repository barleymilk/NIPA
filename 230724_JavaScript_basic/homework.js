// 과제 (2)
// 주제 : null과 undefined의 차이점을 찾아보기
// 세부내용
// 1. 어떨때 값이 null이 되고 undefined으로 저장되는지 가능한 모든 케이스의 js 코드를 작성한다.
// 2. 각 케이스의 코드상에 저장된 변수가 왜 null이고 undefined인지 원인을 설명한다.
// 3. 비교연산자를 활용하여 각각의 케이스에 따라 null인지 undefined인지 확인하는 코드를 작성한다.
// ** 제출 방법 : 작성된 js 파일과 내용을 설명할 수 있는 텍스트를 주석을 활용하여 기입한다.

// null과 undefined
// null : object 타입, 아직 '값'이 정해지지 않은 것
// undefined : null과는 달리 '타입'이 정해지지 않은 것 -> 초기화되지 않은 변수나 존재하지 않는 값에 접근할 때 반환


// undefined 값을 반환하는 경우
console.log("undefined 값을 반환하는 경우")
var num;
console.log(num);                   // 초기화하지 않았으므로 undefined 값을 반환함.

console.log(typeof und_value);      // 정의되지 않은 변수에 접근하면 undefined 값을 반환함.

console.log(undefined);             // undefined.
console.log(typeof undefined);      // undefined의 타입은 undefined.

var a_array = [];
console.log(a_array[0]);            // 빈 배열에 인덱스를 지정하여 출력하면 undefined 값 반환함.
console.log(typeof Array()[0]);
var arrNewObj = new Array();
console.log(arrNewObj[0]);

var obj = {};
console.log(typeof obj[0]);         // 빈 해시에 키값을 지정하여 출력하면 undefined 값 반환함.


// 추가) 빈 배열와 0의 관계
console.log("추가) 빈 배열와 0의 관계")
console.log(a_array == 0);          // true
console.log(a_array === 0);         // false


// null 값 반환하는 경우
console.log("null 값을 반환하는 경우")
var str = null;                     // object 타입의 null 값
console.log(str);


// null과 undefined는 서로 같으며 자기 자신도 같음.
console.log("null과 undefined는 서로 같으며 자기 자신도 같음.")
console.log(null == null);          // true
console.log(null === null);         // true
console.log(undefined == undefined);    // true
console.log(undefined === undefined);   // true
console.log(null == undefined);     // true
console.log(null === undefined);    // false


// NaN은 어떠한 값(자기자신 포함)도 동일하지 않음
console.log("NaN은 어떠한 값(자기자신 포함)도 동일하지 않음");
console.log(NaN == null);		    // false
console.log(NaN == undefined);		// false
console.log(NaN == NaN);			// false


// 산술 연산자나 기타 비교 연산자(>, <, >=, <=)를 사용하면 null은 0으로, undefined는 NaN으로 변한다.
console.log("산술 연산자나 기타 비교 연산자(>, <, >=, <=)를 사용하면 null은 0으로, undefined는 NaN으로 변한다.")
console.log(null == 0);     // false

console.log(null > 0);      // false
console.log(null < 0);      // false
console.log(null >= 0);     // true


// undefined, null 확인 함수
function undefinedCheck(input) {
    if (input === undefined) {
        return "undefined O"
    } else {
        return "undefined X"
    }
}

function nullCheck(input) {
    if (input === null){
        return "null O"
    } else {
        return "null X"
    }
}

var num;
console.log("num :", undefinedCheck(num), nullCheck(num));      // num : undefined O null X
console.log("undefined :", undefinedCheck(undefined), nullCheck(undefined));    // undefined : undefined O null X

var a_array = [];
console.log("a_array[0] :", undefinedCheck(a_array[0]), nullCheck(a_array[0])); // a_array[0] : undefined O null X

var arrNewObj = new Array();
console.log("arrNewObj[0] :", undefinedCheck(arrNewObj[0]), nullCheck(arrNewObj[0]));   // arrNewObj[0] : undefined O null X

var str = null; 
console.log("str :", undefinedCheck(str), nullCheck(str));      // str : undefined X null O


// 참고로 typeof을 통해 나온 결과는 string 타입이다.
console.log("참고로 typeof을 통해 나온 결과는 string 타입이다.");
console.log(typeof(typeof und_value));              // string
console.log((typeof und_value) == "undefined");     // true
console.log((typeof und_value) === "undefined");    // true