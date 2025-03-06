import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",  // Set Webpack mode to development
  entry: "./src/index.js",  // Entry point for the application
  output: {
    filename: "main.bundle.js",  // Output file name
    path: path.resolve(__dirname, "dist"),  // Output directory
    clean: true,  // Clean the dist folder before each build
  },
  devtool:"source-map",  // Generate source maps for debugging
  plugins: [
    new HtmlWebpackPlugin({
      title: "Battleship Game",  // Title for the generated HTML file
      template: "./src/template.html",  // HTML template for the game
    }),
  ],
  devServer: {
    hot: true,  // Enable Hot Module Replacement (HMR)
    static: {
      directory: path.join(__dirname, "dist"),  // Serve static files from the dist folder
    },
    port: 8080,  // Specify the port for the dev server
    open: true,  // Open the browser automatically when the server starts
  },
  module: {
    rules: [
      {
        test: /\.css$/i,  // Rule for CSS files
        use: ["style-loader", "css-loader"],  // Load CSS into the page
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Rule for image files
        type: "asset/resource",  // Handle image files as resources
      },
      {
        test: /\.(js|mjs|cjs)$/,  // Rule for JavaScript files
        exclude: /node_modules/,  // Exclude files in node_modules
        use: {
          loader: "babel-loader",  // Use Babel to transpile the code
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".mjs", ".cjs"],  // Resolve these file extensions
  },
};
