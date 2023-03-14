const statusMessages = {
  successfulLogIn: 'Successfully logged in',
  wrongEmailOrPass: 'Wrong email or password, please check and try again',
  noToken: 'Token is required for authentication',
  invalidToken: 'Token is invalid',
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
