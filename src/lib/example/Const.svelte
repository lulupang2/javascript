<script>
  import img1 from "../../assets/const-1.png";
  import img2 from "../../assets/const-2.png";
  import img3 from "../../assets/const-3.png";
</script>

<p class="m-4">
  <span class="text-2xl italic text-green-500 font-bold" id="const">const</span
  ><br /><br />
  <span class="font-bold">constant</span> 수식에서 변하지 않는 값<br /> <br />
  <span class="text-lg italic">특징</span><br />
</p>
<div class="text-container border px-3.5">
  <span class="font-bold">선언과 초기화</span> : const 키워드로 선언한 변수는
  반드시 선언과 동시에 초기화 해야한다. 그렇지 않으면 문법 에러가 발생한다.<br
  />
  <img src={img1} alt="선언시 초기화" />
  <span class="text-sm text-red-500 underline"
    >let 키워드와 마찬가지로 블록레벨 스코프를 가지고 변수 호이스팅 또한
    발생하지 않는 것처럼 동작함.
  </span>
</div>

<div class="text-container border px-3.5">
  <span class="font-bold">재할당 금지</span> : var또는 let은 재할당이 자유롭지만
  const로 선언한 변수는 재할당이 금지됨
  <img src={img2} alt="재할당 금지" />
</div>
<div class="text-container border px-3.5">
  <br /><span class="font-bold">상수</span> : 변수의 상대개념인 상수는 재할당이
  금지된 변수를 말한다. 상수도 값을저장하기 위한 메모리 공간이 필요하므로
  변수라고 할 수 있지만<br />
  변수는 언제든지 재할당을 통해 변수 값을 변경할 수 있지만, 상수는재할당이 금지된다.<br
  />상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.<br
  />
  <span class="text-sm text-red-500 underline"
    >생각없이 const로 도배만 하다가 에러 날 경우에만 let으로 수정했었는데
    다시한번 확인하자
  </span><br />
</div>

<div class="text-container border px-3.5">
  <span class="font-bold">const 키워드와 객체</span> : const 키워드로 선언된
  변수에 원시 값을 할당 한 경우 값을 변경 할 수 없다. 하지만 const 키워드로
  선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.<br />
  <img src={img3} alt="const 객체값 변경" /><br />
  이 경우 아무런 문제 없이 값이 변경된다.<br />
  <span class="text-sm text-red-500 underline"
    >※원시 값(primitive, 또는 원시 자료형)이란 객체가 아니면서 메서드도 가지지
    않는 데이터</span
  ><br />
</div>
