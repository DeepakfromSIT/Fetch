let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data1) => {
    console.log(data1.fact);
    return fetch(url);
  })
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data2) => {
    console.log(data2.fact);
    return fetch(url);
  })
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data3) => {
    console.log(data3.fact);
  })
  .catch((err) => {
    console.log(err);
  });
