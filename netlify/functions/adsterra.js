export async function handler() {
  const token = process.env.API_TOKEN;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API_TOKEN tidak ditemukan di environment Netlify." }),
    };
  }

  try {
    const response = await fetch(
      "https://api3.adsterra.com/v1/report?date_from=2025-11-01&date_to=2025-11-03",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari Adsterra API");
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
