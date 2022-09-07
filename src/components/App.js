import { Contacts } from "./Contacts.js";
import { About } from "./About.js";
import { ProjectsPage } from "./ProjectsPage.js";
import { Others } from "./Others.js";
import { Title } from "./Title.js";
import { Footer } from "./Footer.js";

export function App({ $app, initialState }) {
  this.state = initialState;

  new Title({ $app, initialState: this.state.name });
  new About({ $app, initialState: this.state.aboutMe });
  new Contacts({
    $app,
    initialState: {
      name: this.state.name,
      contacts: this.state.contacts,
    },
  });
  new ProjectsPage({
    $app,
    initialState: this.state.workProject,
    title: "Work Experience",
  }); // Work Expeience
  new ProjectsPage({
    $app,
    initialState: this.state.personalProject,
    title: "Personal Experience",
  }); // Personal Expeience
  new Others({ $app, initialState: this.state.others });
  new Footer({ $app, initialState: this.state.updateDate });
}
