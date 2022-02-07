<script>
  import img2 from "../../assets/var-2.png";
</script>

<p class="m-4">
  <span class="text-2xl italic text-green-500 font-bold" id="var">var</span><br
  /><br />
  const와 let이 도입되기 전까진 var 키워드를 사용해야 변수를 선언할수 있었음.<br
  />
  <span class="text-lg italic">특징</span><br />
  <span class="font-bold">변수중복 선언 허용</span> : var로 선언된 변수는 같은
  스코프 내에서 중복선언을 허용<br />
  초기화 문이 있는 변수 선언문은 var키워드가 없는것 처럼 작동하고 초기화 문이 없는
  변수 선언문은 무시됨<br />
  <span class="text-sm text-red-500 underline"
    >※초기화? 초기값 선언이랑 같은의미? 나중에 체크
  </span><br /><br />
  <span class="font-bold">함수 레벨 스코프</span> : var로 선언한 변수는 오로지
  함수의 코드 블록만을 지역스코프로 인정한다<br />
  따라서 함수 외부에서 var키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역변수가
  된다.<br />
  <span class="text-sm text-red-500 underline"
    >※스코프 : 코드가 식별자 자신을 참조할 수 있는 유효한 범위
  </span><br />
  <img src={img2} alt="스코프" />
  for 또는 if 등의 조건문,반복문에서 var 키워드로 선언한 변수도 전역 변수가 된다.<br
  />
  <span class="text-sm text-red-400 underline"
    >전역변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역변수를 사용해야한다.
    변수의 스코프는 좁을수록 좋다. (아직까지 전역변수를 꼭 써야하는 경우를 못
    만남)
  </span><br />
  <br /><span class="font-bold">변수 호이스팅</span> : var키워드로 변수를
  선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼
  동작함.<br />
  변수 선언문 이전에 참조될 경우 언제나 undefined를 반환함
  <br /><span class="text-sm text-red-500 underline"
    >※변수 호이스팅 : 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는
    자바스크립트 고유의 특징 (변수를 만들기전에 먼저 그 변수를 사용하는 경우?)
  </span><br />
  <span class="text-lg italic">코드 연습</span><br />
  <iframe
    src="https://codesandbox.io/embed/vigilant-sanderson-6e6dd?codemirror=1&eslint=1&fontsize=16&moduleview=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="vigilant-sanderson-6e6dd"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
</p>
