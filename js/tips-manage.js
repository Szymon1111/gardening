const APIaddress = 'https://gardeningapi.epizy.com/API'
const tipsContent = document.querySelector(".tips-container");

printTips = () => {
  fetch(`${APIaddress}/tips/getAll.php`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      tipsContent.innerHTML = "";

      res.forEach((tip) => {
        tipsContent.innerHTML += `
          <div class="tip">${tip.content}</div>
        `;
      });
    });
};

printTips();
