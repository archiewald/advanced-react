const { forwardTo } = require("prisma-binding");

const Query = {
  // don't need custom logic? forwardTo is your friend
  items: forwardTo("db")
  // async items(parent, args, context, info) {
  //   const items = await context.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
