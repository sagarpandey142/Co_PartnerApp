// reducers/signupReducer.js
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: 'India',
    agreeTerms: false,
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SIGNUP_DATA':
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      default:
        return state;
    }
  };
  
  export default signupReducer;
  