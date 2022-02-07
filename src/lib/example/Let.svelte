<script>
  import img1 from "../../assets/let-1.png";
  import img2 from "../../assets/let-2.png";
  import img3 from "../../assets/let-3.png";
</script>

<p class="m-4">
  <span class="text-2xl italic text-green-500 font-bold" id="let">let</span><br
  /><br />
  var 키워드의 단점을 보완하기 위해 ES6부터 새로운 변수 선언 키워드인 let이 도입됨.<br
  />
  <span class="text-lg italic">특징</span><br />
  <span class="font-bold">변수 중복 선언 금지</span> : var키워드로 이름이 동일한
  변수를 중복으로 선언하면 에러가 발생하지 않음.<br />
  이때 변수를 중복선언하면서 값까지 할당 했다면 먼저 선언된 변수 값이 재할당 되어변경되는
  부작용이 발생함. <br />
  이때 let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러가 발생한다.<br />
  <img src={img1} alt="중복선언금지" />
  <span class="text-sm text-red-500 underline"
    >※같은 스코프 내에서 중복 선언 허용하지 않음.
  </span><br /><br />
  <span class="font-bold">블록 레벨 스코프</span> : let으로 선언한 변수는 모든
  코드 블록을 지역스코프로 인정하는 블록레벨 스코프를 따른다<br />
  따라서 함수 외부에서 var키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역변수가
  된다.<br />
  <img src={img2} alt="스코프" />
  <span class="text-sm text-red-500 underline"
    >※코드블록 : 함수,조건문,제어문 등 그룹지어진 코드섹션
  </span><br />
  <br />
  <br /><span class="font-bold">변수 호이스팅</span> : var 키워드와 달리 let으로
  선언한 변수는 호이스팅이 발생하지 않는 것 처럼 동작함<br />
  <br />
  <img src={img3} alt="var경우" />
</p>
