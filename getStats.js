export async function handler(event, context) {
  const API_TOKEN = process.env.API_TOKEN;
  const DOMAIN_ID = process.env.DOMAIN_ID;

  const dateFrom = "2025-11-01";
  const dateTo = "2025-11-03";

  const res = await fetch(
    `https://api3.adsterratools.com/publisher/statistics?domain_id=${DOMAIN_ID}&date_from=${dateFrom}&date_to=${dateTo}`,
    {
      headers: {
        Accept: "application/json",
        "X-API-Key": API_TOKEN
      }
    }
  );

  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
