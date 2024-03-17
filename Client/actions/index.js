// actions/index.js
export const updateSignupData = (formData) => {
    return {
      type: 'UPDATE_SIGNUP_DATA',
      payload: formData,
    };
  };
  