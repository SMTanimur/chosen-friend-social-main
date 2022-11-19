const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        black33: "#333333",
        redff4: "#ff424e",
        orangeee4: "#ee4d2d",
        gray999: "#999",
        blue08f: "#08f",
        green00b: "#00bfa5",
      },
      fontFamily: {
        dm: ['"DM Sans"', " sans-serif"],
      },
      backgroundImage: {
        linearfef5: "linear-gradient(0, #fe6433, #f53e2d)",
        linearOrange: "linear-gradient(-180deg,#f53d2d,#f63)",
      },
      screens: {
        max5se: { max: "320.98px" },
        maxsm: { max: "768.98px" },
      },
    },
  },
  plugins: [],
};
