exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /miniraf/,
            use: loaders.null(),
          },
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /jquery.svg3dtagcloud/,
            use: loaders.null(),
          }
        ],
      },
    });
  }
}