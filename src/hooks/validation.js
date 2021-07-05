import { reactive } from "vue";

const useValidation = (item) => {
  const errors = reactive({});

  const validation = (checkValidation = {}) => {
    let formValidate = true;
    for (let [key, value] of Object.entries(item)) {
      if (!value && checkValidation[key] !== false) {
        formValidate = false;
        errors[key] = `Please enter the ${key} field.`;
      }
    }
    return formValidate;
  };

  const clearValidation = (key) => {
    if (item[key]) {
      errors[key] = "";
    } else {
      errors[key] = `Please enter the ${key} field.`;
    }
  };
  return { clearValidation, validation, errors };
};

export default useValidation;
