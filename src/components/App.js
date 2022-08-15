import { Contacts } from "./Contacts.js";
import { AboutMe } from "./AboutMe.js";
import { Projects } from "./Projects.js";
import { Others } from "./Others.js";

export function App({ $app, initialState }) {
  this.state = initialState;

  this.contacts = new Contacts({
    $app,
    initialState: {
      name: this.state.name,
      contacts: this.state.contacts,
    },
  });

  this.aboutMe = new AboutMe({ $app, initialState: this.state.aboutMe });
  this.projects = new Projects({ $app, initialState: this.state.projects });
  this.others = new Others({ $app, initialState: this.state.others });

  this.setState = (nextState) => {
    this.state = nextState;
  };
}
