export async function handler() {
  const token = process.env.API_TOKEN;
  const res = await fetch("https://api.adsterra.com/v1/report", {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
