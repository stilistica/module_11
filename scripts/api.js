const URL = "https://6471c75e6a9370d5a41aab5c.mockapi.io/api/todos";

// 1. POST - створення нового ресурсу(об'єкт тудушки), після натискання на кнопку
function createTask(value) {
// return fetch(URL. {
//       method: "POST",
//       body: JSON.srtringify(value),
//   headers: {
//   "Content-Type": "application/json",
//   },
//       })
      return axios.post(URL, value);
}

// 2. GET - забираємо масив об'єктів туду з серверу (підвантаження після перезавантаження сторінки)
function getTasks() {
// return fetch(URL).then((res) => res.json());
      return axios.get(URL).then(({ data }) => data);
}

// 3. DELETE - видаляємо тудушку при натискані на хрестик
function deleteTask(id) {
// return fetch(${URL}/${id}, {
//   method: "DELETE",
// });
      return axios.delete(`${URL}/${id}`)
}


// 4. PUT - змынювати статус isDone при натисканні та тудушку
function updateTask(id, status) {
//  return fetch(${URL}/${id}, {
// method: "PUT",
//   body: JSON.stringify({ isDone: status }),
//     headers: {
//   "Content-Type": "application/json",
//   },
// });
      
      return axios.put(`${URL}/${id}`, { isDone: status })
}

export { createTask, getTasks, updateTask, deleteTask };

