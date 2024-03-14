module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
//    content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  };
};
