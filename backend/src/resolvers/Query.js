const { forwardTo } = require('prisma-binding');
// const { hasPermission, loggedIn } = require('../utils');

const Query = {
  projects: forwardTo('db'),
  project: forwardTo('db'),
  projectsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    //Check if there is a current user id
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  }
};

module.exports = Query;
