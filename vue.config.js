module.exports = {
  chainWebpack: (config) => {
    // Загрузчик GraphQL
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};
