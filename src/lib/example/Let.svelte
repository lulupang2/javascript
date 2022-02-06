<script></script>

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
  <span class="text-sm text-red-500 underline"
    >※같은 스코프 내에서 중복 선언 허용하지 않음.
  </span><br /><br />
  <span class="font-bold">블록 레벨 스코프</span> : let으로 선언한 변수는 모든
  코드 블록을 지역스코프로 인정하는 블록레벨 스코프를 따른다<br />
  따라서 함수 외부에서 var키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역변수가
  된다.<br />
  <span class="text-sm text-red-500 underline"
    >※코드블록 : 함수,조건문,제어문 등 그룹지어진 코드섹션
  </span><br />
  for 또는 if 등의 조건문,반복문에서 var 키워드로 선언한 변수도 전역 변수가 된다.<br
  />
  <span class="text-sm text-red-400 underline"
    >전역변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역변수를 사용해야한다.
    변수의 스코프는 좁을수록 좋다. (아직까지 전역변수를 꼭 써야하는 경우를 못
    만남)
  </span><br />
  <br /><span class="font-bold">변수 호이스팅</span><br /><br />
  <span class="text-lg italic">코드 연습</span><br />
  <iframe
    src="https://codesandbox.io/embed/vigilant-sanderson-6e6dd?codemirror=1&eslint=1&fontsize=16&moduleview=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="vigilant-sanderson-6e6dd"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
</p>
