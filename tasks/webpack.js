import path from "path";
import webpack from "webpack";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

console.log('Building in ' + mode + ' mode.')

let config = {
  mode: mode,
  entry: "./scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  context: path.resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
};

function scripts() {
  return new Promise(resolve =>
    webpack(config, (err, stats) => {
      if (err) console.log("Webpack", err);
      console.log(
        stats.toString({
          /* Stats Options */
        })
      );
      resolve();
    })
  );
}

export default scripts;
