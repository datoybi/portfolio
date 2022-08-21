export function Projects({ $app, initialState, title }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;

    htmlString += `<section class="pt-11">
		<h1 class="text-5xl font-bold pb-16">${title}</h1>
		${this.state.reduce(
      (outerAcc, outerEl) =>
        outerAcc +
        `<div class="flex md:flex-row flex-col border-b">
						<div class="md:w-2/5 pb-7 md:text-left text-center">
							<h2 class="text-2xl font-bold mb-4">${outerEl.company}</h2>
							<p>${outerEl.position}</p>
							<p class="-mt-1.5">${outerEl.date}</p>
						</div>
						<div class="md:w-3/5 pb-7">
						${outerEl.projects.reduce(
              (innerAcc, innerEl, i) =>
                innerAcc +
                `
										<div class="pb-16 ${i === outerEl.projects.length - 1 ? "" : "border-b"}">
										${
                      innerEl.title
                        ? `<h2 class="text-2xl font-bold mb-4 md:text-left text-center
										${i === 0 ? `` : `pt-16`}">${innerEl.title}</h2>`
                        : ""
                    }
											${
                        innerEl.date
                          ? `<p class="mb-6 md:text-left text-center">${innerEl.date}</p>`
                          : ""
                      }
											<h3 class="text-xl font-bold mb-2 md:text-left text-center">Description</h3>
											<p class="mb-4 md:text-left text-center">${innerEl.description}</p>
											<h3 class="text-xl font-bold mb-2 md:text-left text-center">What did I do</h3>
											<ul class="mb-4">
												${innerEl.todo.reduce((todoAcc, todo) => todoAcc + `<li>${todo}</li>`, "")}
											</ul>
											<h3 class="text-xl font-bold mb-2 md:text-left text-center">Tech Stack</h3>
											<p class="mb-4 md:text-left text-center">${innerEl.stack}</p>
											${
                        innerEl.gif
                          ? `<img class="inline-block md:text-left text-center" src="${innerEl.gif}" />`
                          : ""
                      } 
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
