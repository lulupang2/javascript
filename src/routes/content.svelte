<script lang="ts">
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
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
