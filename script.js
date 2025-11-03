fetch('/.netlify/functions/adsterra')
  .then(res => res.json())
  .then(data => {
    // tampilkan di halaman
    console.log(data);
  });
