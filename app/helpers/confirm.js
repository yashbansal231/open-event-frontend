import Ember from 'ember';
const { Helper, inject: { service } } = Ember;

/**
 * Helper to execute an action after a confirmation dialog
 */
export default Helper.extend({
  confirm: service(),

  compute(params) {
    return () => {
      if (params.length >= 2) {
        this.get('confirm').prompt(params[0])
          .then(() => {
            params[1]();
          });
      } else {
        this.get('confirm').prompt()
          .then(() => {
            params[0]();
          });
      }
    };
  }
});
