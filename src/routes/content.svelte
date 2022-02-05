<script>
</script>

<main id="content">
  <div class="mockup-window bg-base-300 w-10/12	mx-auto">
    <div class="px-4 py-16 bg-base-200">
      <h1 class="mb-5 text-3xl font-bold">Javascript 정리</h1>
      <div class="flex flex-col w-full">
        <div
          class="grid h-auto card bg-base-300 rounded-box place-items-center"
        >
          <p class="mb-5 w-full" id="1">
            <span class="text-2xl">변수선언</span><br />
            변수선언이란 변수를 생성하는 것을 말함. 좀 더 자세히 말하자면 값을 저장하기
            위한 메모리 공간을 확보하고 변수이름과 확보된 메모리 공간의 주소를 연결해서
            값을 저장할 수 있게 준비하는 것이다.<br />
            ES6에서 const와 let이 도입되기전까지는 var로 변수를 선언했었음 (옛날엔
            생략하면서 썼던걸로 기억함 X)
          </p>
        </div>
        <div class="divider" />
        <span class="text-3xl p-2">종류</span><br />
        <div
          class="grid h-auto card bg-base-300 rounded-box place-items-center"
        >
          <p class="mb-5 w-full">
            <br />
            <span class="text-2xl italic text-green-500 font-bold" id="var"
              >var</span
            ><br /><br />
            const와 let이 도입되기 전까진 var 키워드를 사용해야 변수를 선언할수 있었음.<br
            />
            <span class="text-lg italic">특징</span><br />
            <span class="font-bold">변수중복 선언 허용</span> : var로 선언된
            변수는 같은 스코프 내에서 중복선언을 허용<br />
            초기화 문이 있는 변수 선언문은 var키워드가 없는것 처럼 작동하고 초기화
            문이 없는 변수 선언문은 무시됨<br />
            <span class="text-sm text-red-500 underline"
              >※초기화? 초기값 선언이랑 같은의미? 나중에 체크
            </span><br /><br />
            <span class="font-bold">함수 레벨 스코프</span> : var로 선언한
            변수는 오로지 함수의 코드 블록만을 지역스코프로 인정한다<br />
            따라서 함수 외부에서 var키워드로 선언한 변수는 코드 블록 내에서 선언해도
            모두 전역변수가 된다.<br />
            <span class="text-sm text-red-500 underline"
              >※스코프 : 코드가 식별자 자신을 참조할 수 있는 유효한 범위
            </span><br />
            for 또는 if 등의 조건문,반복문에서 var 키워드로 선언한 변수도 전역 변수가
            된다.<br />
            <span class="text-sm text-red-400 underline"
              >전역변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역변수를
              사용해야한다. 변수의 스코프는 좁을수록 좋다. (아직까지 전역변수를
              꼭 써야하는 경우를 못 만남)
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
            <span class="text-2xl italic text-green-500 font-bold" id="let"
              >let</span
            ><br /><br />
            <span class="text-2xl italic text-green-500 font-bold" id="const"
              >const</span
            >
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
