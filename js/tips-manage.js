const serverAddress = "localhost/gardening/";
const tipsContent = document.querySelector(".manage-tips .content");

const renderTips = () => {
  fetch(`API/tips/getAll.php`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      tipsContent.innerHTML = "";
      res.forEach((tip) => {
        tipsContent.innerHTML += getTipDiv(tip);
      });
    });
};

const getTipDiv = (tip) => {
  return `
      <div class="tip flex-column" id="tip${tip.id}">

        <div class="tip-content">${tip.content}</div>

        <div class="flex-row manage-buttons"> 
          <div class="edit manage-button" onclick="editTip()" >Edytuj</div>
          <div class="delete manage-button" onclick="deleteTip(${tip.id})" >Usuń</div>
        </div>

      </div>
    `;
};

const deleteTip = (tipID) => {
  const element = document.querySelector(`#tip${tipID}`);

  fetch(`API/tips/delete.php?tipID=${tipID}`).then(() => {
    element.remove();
  });
};

const addTip = () => {
  const newTipContent = document.querySelector("#new-tip-content").value;

  managePopupBoxVisibility("hidden");

  if (newTipContent === "") {
    return;
  }

  fetch(`API/tips/add.php?tipContent=${newTipContent}`).then(() => {
    renderTips();
  });
};

const editTip = (id, content) => {
  const editPopup = document.querySelector(".edit");

  editPopup.innerHTML = "";
  editPopup.innerHTML = `
    <h2>Edytuj poradę</h2>
    <textarea id="edited-tip-content" rows="7" cols="40">
      ${content}
    </textarea>
    <div class="submit-button" onclick="updateEditedTip(${id})">Edytuj</div>
  `;
};

const updateEditedTip = (id) => {
  fetch(
    `API/tips/edit.php?tipID=${id}&newContent=${
      document.querySelector("#edited-tip-content").value
    }`
  ).then(() => {
    managePopupBoxVisibility("hidden");
  });
};

const showDeleteSubmitWindow = () => {};

const managePopupBoxVisibility = (state) => {
  document.querySelector(
    ".manage-tips .popup-manage-box"
  ).style.visibility = state;
};

document.querySelector("#add-tip").addEventListener("click", () => {
  managePopupBoxVisibility("visible");
});

renderTips();
