const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-result');
const width = document.querySelector("#width");
const height = document.querySelector("#height"); 

  function getValue(url){
    return fetch(url)
      .then((response) => {
      // Объект ответа на запрос
        console.log('response', response);
        return response.url;
      })
      .catch(() => {
        console.log('error');
      });
  }
    btn.addEventListener('click', async () => {
    let wN = Number(width.value);
    let hN = Number(height.value);
    if (wN >= 100 && wN <= 300  && hN >= 100 && hN <= 300){
      const result = await getValue(`https://picsum.photos/${wN}/${hN}`);
      resultNode.innerHTML = `<img src = "${result}"/>`;
    }else
      alert("числа вне диапазона от 100 до 300")
});