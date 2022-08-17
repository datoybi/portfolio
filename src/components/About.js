export function About({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;
    htmlString += `<section class="pt-16 md:text-left text-center">
			<p class="mb-11 big-paragraph">
				${this.state}
			</p>
		</section>`;
    this.$target.innerHTML = htmlString;
  };

  this.render();
}
