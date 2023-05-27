const URL = "https://6471c75e6a9370d5a41aab5c.mockapi.io/api/todos";

// 1. POST - створення нового ресурсу(об'єкт тудушки), після натискання на кнопку
function createTask(value) {
fetch(URL. {
      method: "POST",
      body: JSON.srtringify(value),
  headers: {
  "Content-Type": "application/json",
  },
      })
}

// 2. GET - забираємо масив об'єктів туду з серверу (підвантаження після перезавантаження сторінки)
function getTasks() {
return fetch(URL).then((res) => res.json());
}

// 3. DELETE - видаляємо тудушку при натискані на хрестик
function deleteTask(id) {
fetch(${URL}/${id}, {
  method: "DELETE",
});
}


// 4. PUT - змынювати статус isDone при натисканні та тудушку
function updateTsk(id, status) {
  fetch(${URL}/${id}, {
method: "PUT",
  body: JSON.stringify({ isDone: status }),
    headers: {
  "Content-Type": "application/json",
  },
});
}



