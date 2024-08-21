// src/reducers/formReducer.js

export const initialState = {
    values: {},
    errors: {},
  };
  
  export function formReducer(state, action) {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          values: {
            ...state.values,
            [action.field]: action.value,
          },
        };
      case 'SET_ERROR':
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.field]: action.error,
          },
        };
      case 'CLEAR_ERROR':
        const newErrors = { ...state.errors };
        delete newErrors[action.field];
        return {
          ...state,
          errors: newErrors,
        };
      default:
        return state;
    }
  }
  