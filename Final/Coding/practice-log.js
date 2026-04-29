var logForm = document.getElementById("log-form");
var logList = document.getElementById("log-list");
var logEmpty = document.getElementById("log-empty");
var logStats = document.getElementById("log-stats");

function getSessions() {
  var stored = localStorage.getItem("inkHarmonySessions");
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
}

function saveSessions(sessions) {
  localStorage.setItem("inkHarmonySessions", JSON.stringify(sessions));
}

function renderStats(sessions) {
  if (sessions.length === 0) {
    logStats.innerHTML = "";
    return;
  }
  var totalMinutes = 0;
  sessions.forEach(function (s) {
    totalMinutes += parseInt(s.duration, 10);
  });
  logStats.innerHTML =
    '<span class="log-stat-item"><strong>' + sessions.length + '</strong> sessions</span>' +
    '<span class="log-stat-item"><strong>' + totalMinutes + '</strong> minutes total</span>';
}

function renderSessions() {
  var sessions = getSessions();
  logList.innerHTML = "";

  if (sessions.length === 0) {
    logEmpty.style.display = "block";
    renderStats(sessions);
    return;
  }

  logEmpty.style.display = "none";
  renderStats(sessions);

  sessions.forEach(function (session, index) {
    var entry = document.createElement("div");
    entry.className = "log-entry";

    entry.innerHTML =
      '<div class="log-entry-top">' +
        '<div>' +
          '<span class="log-entry-date">' + session.date + '</span>' +
          '<span class="log-entry-script">' + session.script + '</span>' +
        '</div>' +
        '<div class="log-entry-right">' +
          '<span class="log-entry-duration">' + session.duration + ' min</span>' +
          '<button class="log-delete-btn" data-index="' + index + '">Remove</button>' +
        '</div>' +
      '</div>' +
      (session.notes ? '<p class="log-entry-notes">' + session.notes + '</p>' : '');

    logList.appendChild(entry);
  });

  var deleteBtns = document.querySelectorAll(".log-delete-btn");
  deleteBtns.forEach(function (btn) {
    btn.onclick = function () {
      var idx = parseInt(btn.getAttribute("data-index"), 10);
      var sessions = getSessions();
      sessions.splice(idx, 1);
      saveSessions(sessions);
      renderSessions();
    };
  });
}

logForm.onsubmit = function (event) {
  event.preventDefault();

  var newSession = {
    date: document.getElementById("log-date").value,
    duration: document.getElementById("log-duration").value,
    script: document.getElementById("log-script").value,
    notes: document.getElementById("log-notes").value
  };

  var sessions = getSessions();
  sessions.unshift(newSession);
  saveSessions(sessions);
  logForm.reset();
  renderSessions();
};

renderSessions();
