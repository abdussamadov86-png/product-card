const save = localStorage.getItem("users");
const statusE1 = document.getElementById("status");
const containerE1 = document.getElementById("users-container");

async function loadUsers() {
  statusE1.textContent = "Загрузка данных...";
  try {
  const response = await fetch("users.json");
  if (!response.ok) {
    throw new Error("Данные не загружены");
  }
  const data = await response.json();
  localStorage.setItem("users", JSON.stringify(data));
  renderUsers(data);
  } catch (error) {
    statusE1.textContent = "Данные не загружены!";
    console.error(error);
  }
}

function renderUsers(users) {
  statusE1.textContent = "";
  containerE1.innerHTML = "";
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <button class="delete-user-button" data-id="${user.id}">Удалить</button>
    `;
    containerE1.appendChild(userCard);
  });

  const deleteButtons = document.querySelectorAll(".delete-user-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = event.target.getAttribute("data-id");
      const updatedUsers = users.filter((user) => user.id !== parseInt(userId));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      renderUsers(updatedUsers);
    });
  });
}

if (save) {
  statusE1.textContent = "Данные загружены!";
    const users = JSON.parse(save);
    renderUsers(users);
} else if (!localStorage.getItem("isDeleted")) {
  loadUsers();
}

const deleteAllButton = document.getElementById("delete-all");
deleteAllButton.addEventListener("click", () => {
  localStorage.removeItem("users");
  containerE1.innerHTML = "";
  statusE1.textContent = "Все карточки удалены!";
  localStorage.setItem("isDeleted", "true");
});

const showAllButton = document.getElementById("show-all");
showAllButton.addEventListener("click", () => {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers) {
    const users = JSON.parse(savedUsers);
    if (containerE1.children.length === users.length) {
      statusE1.textContent = "Все карточки уже отображены!";
    } else {
      renderUsers(users);
    }
  }
});
