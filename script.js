emailjs.init("50cNXhwRT8aAQTkUP");

let users = JSON.parse(localStorage.getItem("users")) || [];

function addUser() {
  const username = document.getElementById("username").value;
  const userId = document.getElementById("userId").value;
  const email = document.getElementById("email").value;
  const reminderDay = parseInt(document.getElementById("reminderDay").value);

  if (!username || !userId || !email || !reminderDay) {
    showNotification("请填写所有字段！", "error");
    return;
  }

  users.push({ username, userId, email, reminderDay });
  localStorage.setItem("users", JSON.stringify(users));
  renderUserList();
  showNotification("用户添加成功！", "success");
}

function renderUserList() {
  const list = document.getElementById("userList");
  list.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.username} (${user.userId}) - 每月${user.reminderDay}号提醒`;
    list.appendChild(li);
  });
}

function sendReminders() {
  const today = new Date().getDate();
  users.forEach(user => {
    if (user.reminderDay === today) {
      emailjs.send("service_drdj5oh", "template_ytphmej", {
        to_email: user.email,
        to_name: user.username,
        message: `您好，今天是您设置的提醒日，请及时查询水电费账单。`
      }).then(() => {
        showNotification(`提醒已发送给 ${user.username}`, "success");
      }).catch(error => {
  alert("发送失败：" + JSON.stringify(error));
});


    }
  });
}

function showNotification(message, type) {
  const box = document.getElementById("notification");
  box.textContent = message;
  box.className = type === "success" ? "success" : "error";
  box.classList.remove("hidden");
  setTimeout(() => box.classList.add("hidden"), 4000);
}

window.onload = renderUserList;




