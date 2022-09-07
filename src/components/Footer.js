export function Footer({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;
    htmlString += `
			<footer class="pt-16 pb-16">
				<p class="text-sm	text-center	italic">last updated: ${this.state}</p>
			</footer>
		</section>`;
    this.$target.innerHTML = htmlString;
  };

  this.render();
}
