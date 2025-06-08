"use strict";

const { resolve } = require("node:path");

const uvPath = resolve(__dirname, "..", "dist");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ultraviolet running on port ${PORT}`);
});

exports.uvPath = uvPath;
