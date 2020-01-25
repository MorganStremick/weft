import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/ui/App'
import ProjectPage from '/imports/ui/pages/ProjectPage';

Meteor.startup(() => {
  render(<ProjectPage />, document.getElementById('react-target'));
});
