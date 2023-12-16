export const getError = (errors, name) => {
  if (errors.length) {
    errors = errors[0];
    return errors[name];
  }
};
