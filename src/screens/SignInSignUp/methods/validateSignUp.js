export const isPasswordMatch=({ getFieldValue }) => ({
    validator(rule,value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      return Promise.reject('The two passwords that you entered do not match!');
}});