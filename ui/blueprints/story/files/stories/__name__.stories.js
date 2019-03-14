/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
//import notes from './<%= dasherizedModuleName %>.md';

storiesOf('<%= classifiedModuleName %>/', module)
  .addParameters({ options: { showPanel: true } })
  .add(`<%= classifiedModuleName %>`, () => ({
    template: hbs`
        <h5 class="title is-5"><%= header %></h5>
        <<%= classifiedModuleName %>/>
    `,
    context: {},
  }),
  //{ notes }
);
