module.exports = {
  isPermission: (permissions, value) => {
    return permissions.find((permission) => permission.value === value);
  },
};
