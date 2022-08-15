export function AboutMe({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;
    htmlString += `<section class=" border-b">
    	<ul class="ml-7 mb-11 tracking-tight marker:text-yellow-500 list-disc text-base">
    		${this.state.reduce((acc, element) => acc + `<li>${element}</li>`, "")}
    	</ul>
    </section>`;
    this.$target.innerHTML = htmlString;
  };

  this.setState = (newState) => {
    this.state = newState;
  };

  this.render();
}
