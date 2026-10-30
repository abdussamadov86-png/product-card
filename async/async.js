const storageUsers = localStorage.getItem("users");
const statusEl = document.getElementById("status");
const containerEl = document.getElementById("users-container");

async function loadUsers() {
  statusEl.textContent = "Загрузка данных...";
  try {
    const response = await fetch("users.json");
    if (!response.ok) {
      throw new Error("Данные не загружены");
    }
    const data = await response.json();
    localStorage.setItem("users", JSON.stringify(data));
    renderUsers(data);
  } catch (error) {
    statusEl.textContent = "Данные не загружены!";
    console.error(error);
  }
}

function renderUsers(users) {
  statusEl.textContent = "";
  containerEl.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const nameTitle = document.createElement("h3");
    nameTitle.textContent = user.name;

    const emailTitle = document.createElement("p");
    emailTitle.textContent = user.email;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("delete-user-button");
    deleteBtn.dataset.id = user.id;

    deleteBtn.addEventListener("click", (event) => {
      const updatedUsers = users.filter((u) => u.id !== user.id);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      renderUsers(updatedUsers);
    });

    userCard.append(nameTitle, emailTitle, deleteBtn);
    containerEl.appendChild(userCard);
  });
}

if (storageUsers) {
  statusEl.textContent = "Данные загружены!";
  const users = JSON.parse(storageUsers);
  renderUsers(users);
} else if (!localStorage.getItem("isDeleted")) {
  loadUsers();
}

const deleteAllButton = document.getElementById("delete-all");
deleteAllButton.addEventListener("click", () => {
  localStorage.removeItem("users");
  containerEl.innerHTML = "";
  statusEl.textContent = "Все карточки удалены!";
  localStorage.setItem("isDeleted", "true");
});

const showAllButton = document.getElementById("show-all");
showAllButton.addEventListener("click", () => {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers) {
    const users = JSON.parse(savedUsers);
    if (containerEl.children.length === users.length) {
      statusEl.textContent = "Все карточки уже отображены!";
    } else {
      renderUsers(users);
    }
  }
});
