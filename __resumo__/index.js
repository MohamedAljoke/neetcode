const express = require("express");
const app = express();

function* dataGenerator() {
  for (let i = 1; i <= 10; i++) {
    yield `Data chunk ${i}\n`;
  }
}

app.get("/stream", async (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Transfer-Encoding", "chunked");

  const generator = dataGenerator();
  for (const chunk of generator) {
    res.write(chunk);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  }

  res.end();
});

app.listen(3000, () => console.log("Server running on port 3000"));
