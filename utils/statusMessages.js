const statusMessages = {
  successfulLogIn: 'Successfully logged in',
  wrongEmailOrPass: 'Wrong email or password, please check and try again',
  notLoggedIn: 'You must be logged in to view this page!',
  itemNotFound: 'Item not found',
  emptyDatabase: 'There is no data in the database',
  itemDeleted: 'Item successfully deleted',
  itemUpdated: 'Item successfully updated',
  enrollmentNotFound: 'Enrollment not found',
  enrollmentDeleted: 'Enrollment with the inserted StudentId and CourseId succesfully deleted',
  enrollmentUpdated: 'Enrollment updated successfully',
  addResultUnauthorized: 'Unauthorized access to create result',
  addResultNotProfessor: 'Forbidden, you can not create exam results',
  viewResultUnauthorized: 'Unauthorized access to other student\'s results'
};

module.exports = { statusMessages };
