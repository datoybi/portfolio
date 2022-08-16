export function Contacts({ $app, initialState }) {
  this.state = initialState;
  this.$target = $app.querySelector("article");

  this.render = () => {
    let htmlString = this.$target.innerHTML;
    htmlString += `
		<section class="pt-11 pb-11">
			<table class="min-w-full  table-auto">
				<tbody>
					${this.state.contacts.reduce((acc, contact) => {
            const key = Object.getOwnPropertyNames(contact);
            return (
              acc +
              `<tr class="border-y">
								<td class="px-8 w-1/3 py-4 text-right text-lg">${key}</td>
								<td class="px-8 w-2/3 text-lg">
								<a href="${contact[key]}" class="p-1">${contact[key]}</a>
								</td>  			
							</tr>
						`
            );
          }, "")}
				</tbody>
			</table>
		</section>`;
    this.$target.innerHTML = htmlString;
  };

  this.render();
}
