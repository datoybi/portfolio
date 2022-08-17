export function Others({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;
    htmlString += `<section class="pt-16">
			<h1 class="text-5xl font-bold mb-11">Other Experience</h1>
			${this.state.reduce(
        (acc, element, i) =>
          acc +
          `<div class="pb-16 ${i === this.state.length - 1 ? `` : "border-b"}">
						<h2 class="${i !== 0 ? "pt-16" : ""} text-2xl font-bold mb-4">${
            element.title
          }</h2>
						<p>${element.subTitle}</p>
						<p class="-mt-1.5 mb-6">${element.date}</p>
						<p>${element.description}</p>
					</div>`,
        ""
      )}
			<footer class="pt-16 pb-16">
				<p class="text-sm	text-center	italic">last updated: 2022.08.17</p>
			</footer>
		</section>`;
    this.$target.innerHTML = htmlString;
  };

  this.render();
}
