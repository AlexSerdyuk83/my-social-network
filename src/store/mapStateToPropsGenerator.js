export const mapStateToPropsGenerator = (component) => {
  switch (component) {
    case 'Profile':
      return (state) => ({
        profilePageData: state.profilePageData
      });
    case 'Dialogs':
      return (state) => ({
        dialogsPageData: state.dialogsPageData
      });
    case 'Users':
      debugger
      return (state) => ({
        usersPageData: state.usersPageData
      })
    default:
      return  undefined;
  }
};
