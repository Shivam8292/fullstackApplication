fetch("http://localhost:3000/bfhl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: ["M", "1", "334", "4", "B"] })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
  