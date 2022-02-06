



var var1 = 1; // 전역 변수
{
  var var1 = 10; // 전역 변수
  var var2 = 100; // 전역 변수
}
function vartest() {
  var var1 = 1000; // 지역변수
  var var2 = 10000; // 지역변수
  console.log(var1); // 1000출력
  console.log(var2); // 10000출력
}

console.log(var1); // 10출력
console.log(var2); // 100출력


vartest();

let 변수 = 1; // 전역 변수
{
  let 변수 = 5; // 지역 변수
  let 변수2 = 7; // 지역 변수
}
console.log(변수);
console.log(변수2);
