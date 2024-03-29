export function Others({ $app, initialState, title }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;
    htmlString += `<section class="pt-16">
			<h1 class="text-5xl font-bold mb-11">${title}</h1>
			${this.state.reduce(
        (acc, element, i) =>
          acc +
          `<div class="pb-16 ${i === this.state.length - 1 ? `` : "border-b"}">
						<h2 class="${i !== 0 ? "pt-16" : ""} text-2xl font-bold mb-4">${
            element.title
          }</h2>
						<p>${element.subTitle}</p>
						<p class="-mt-1.6 mb-6">${element.date}</p>
						<p>${element.description}</p>
					</div>`,
        ""
      )}
		</section>`;
    this.$target.innerHTML = htmlString;
  };

  this.render();
}
