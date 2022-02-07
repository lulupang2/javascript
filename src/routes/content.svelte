<script>
  import Const from "$lib/example/Const.svelte";

  import Let from "$lib/example/Let.svelte";
  import Var from "$lib/example/Var.svelte";
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
            <Var />
            <Let />
            <Const />
            <br />
          </p>
          <div class="text-container border px-3.5 w-full">
            <p class="mb-5 w-full" id="1">
              <span class="text-2xl">정리</span><br />
              무엇을 써야하는가?<br />
              변수선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에
              사용하는 것이 좋다.<br />
              const를 사용하면 의도치 않은 재할당을 방지하기 때문에 좀 더 안전하다.<br
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
