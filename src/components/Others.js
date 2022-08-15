export function Others({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;
    htmlString += `<section class="pt-11">
			<h1 class="text-5xl font-bold mb-11">Other Experience</h1>
			${this.state.reduce(
        (acc, element, i) =>
          acc +
          `<div class="pb-7 ${i === this.state.length - 1 ? `` : "border-b"}">
						<h2 class="text-2xl font-bold mb-4 pt-7">${element.title}</h2>
						<p>${element.subTitle}</p>
						<p class="mb-6">${element.date}</p>
						<p>${element.description}</p>
					</div>`,
        ""
      )}
			<footer class="pb-32"></footer>
		</section>`;
    this.$target.innerHTML = htmlString;
  };

  this.render();
}
