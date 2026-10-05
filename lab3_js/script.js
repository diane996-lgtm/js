(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Частина 1: Перевірка на першу літеру J/j
  console.log("=== Частина 1: Перевірка на першу літеру J/j ===");
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  // Частина 2 (Додатковий функціонал): Перевірка на останню літеру
  console.log("\n=== Частина 2: Селекція за останньою літерою ===");
  console.log("Анотація: якщо ім'я закінчується на голосну 'a', кажемо Goodbye, інакше — Hello.");

  for (var i = 0; i < names.length; i++) {
    var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();

    if (lastLetter === "a") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();