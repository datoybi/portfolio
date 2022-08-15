export function Contacts({ $app, initialState }) {
  this.state = initialState;

  this.render = () => {
    $app.innerHTML = `<article>
		<section class="pt-11">
			<h1 class="text-5xl font-bold inline p-2 highlight">개발자 ${
        this.state.name
      } 입니다.</h1>
			<table class="min-w-full mt-11 mb-11 table-auto">
				<tbody>
					${this.state.contacts.reduce((acc, contact) => {
            const key = Object.getOwnPropertyNames(contact);
            return (
              acc +
              `<tr class="border-y">
								<td class="px-8 w-1/3 py-4 text-right">${key}</td>
								<td class="px-8 w-2/3">
								<a
									href="#"
									>${contact[key]}</a
								>
								</td>  			
							</tr>
						`
            );
          }, "")}
				</tbody>
			</table>
		</section>`;
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
