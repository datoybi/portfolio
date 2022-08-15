export function Projects({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;

    htmlString += `<section class="pt-11">
		<h1 class="text-5xl font-bold pb-16">Work Experience</h1>
		${this.state.reduce(
      (outerAcc, outerEl) =>
        outerAcc +
        `<div class="flex border-b">
						<div class="w-2/5">
							<h2 class="text-2xl font-bold mb-4">${outerEl.company}</h2>
							<p>${outerEl.position}</p>
							<p class="-mt-1.5">${outerEl.date}</p>
						</div>
						<div class="w-3/5 pb-7">
						${outerEl.projects.reduce(
              (innerAcc, innerEl, i) =>
                innerAcc +
                `
										<div class="pb-7 ${i === outerEl.projects.length - 1 ? "" : "border-b"}">
										<h2 class="text-2xl font-bold mb-4
											${i === 0 ? `` : `pt-7`}">${innerEl.title}</h2>
											<p class="mb-6">${innerEl.date}</p>
											<h3 class="text-xl font-bold mb-2">Description</h3>
											<p class="mb-4">${innerEl.description}</p>
											<h3 class="text-xl font-bold mb-2">What did I do</h3>
											<ul class="ml-7 mb-4 tracking-tight marker:text-yellow-500 list-disc">
												${innerEl.todo.reduce((todoAcc, todo) => todoAcc + `<li>${todo}</li>`, "")}
											</ul>
											<h3 class="text-xl font-bold mb-2">Tech Stack</h3>
											<p>${innerEl.stack}</p>
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

  this.render();
}
