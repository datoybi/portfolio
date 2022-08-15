export function Projects({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;

    htmlString += `<section class="pt-11">
		<h1 class="text-4xl font-bold mb-11">Work Experience</h1>
		${this.state.reduce(
      (outerAcc, outerEl) =>
        outerAcc +
        `<div class="flex border-b">
						<div class="w-2/5">
							<h2 class="text-2xl font-bold mb-4">${outerEl.company}</h2>
							<span>${outerEl.position}</span>
							<span class="-mt-1.5">${outerEl.date}</span>
						</div>
						<div class="w-3/5 pb-7">
						${outerEl.projects.reduce(
              (innerAcc, innerEl, i) =>
                innerAcc +
                `
										<div class="pb-7 ${i === outerEl.projects.length - 1 ? "" : "border-b"}">
										<h2 class="text-2xl font-bold mb-4
											${i === 0 ? `` : `pt-7`}">${innerEl.title}</h2>
											<span class="mb-6">${innerEl.date}</span>
											<h3 class="text-xl font-bold mb-2">Description</h3>
											<span class="mb-4">${innerEl.description}</span>
											<h3 class="text-xl font-bold mb-2">What did I do</h3>
											<ul class="ml-7 mb-4 tracking-tight marker:text-yellow-500 list-disc">
												${innerEl.todo.reduce((todoAcc, todo) => todoAcc + `<li>${todo}</li>`, "")}
											</ul>
											<h3 class="text-xl font-bold mb-2">Tech Stack</h3>
											<span>${innerEl.stack}</span>
										</div>
								`,
              ""
            )}                         
						</div>
					</div>
				</section>`,
      ""
    )}
		`;

    this.$target.innerHTML = htmlString;
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
