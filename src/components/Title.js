export function Title({ $app, initialState }) {
  this.state = initialState;
  this.render = () => {
    $app.innerHTML = `
		<article>
			<section class="pt-16">
				<h1 class="text-6xl font-bold inline p-2 highlight leading-normal tracking-[-3px]">안녕하세요!<br>2년차 프론트앤드 개발자 ${this.state} 입니다.</h1>
			</section>
		</article>`;
  };

  this.render();
}
