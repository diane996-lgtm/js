function triangle(val1, type1, val2, type2) {

    console.log("Використання: triangle(val1, type1, val2, type2)");
    console.log("Типи: leg, hypotenuse, adjacent angle, opposite angle, angle");

    const epsilon = 0.000001;

    let a, b, c, alpha, beta;

    // Перевірка чисел
    if (!Number.isFinite(val1) || !Number.isFinite(val2)) {
        console.log("Аргументи повинні бути числами");
        return "failed";
    }

    if (val1 <= 0 || val2 <= 0) {
        console.log("zero or negative input");
        return "failed";
    }

    // Перевірка типів
    let types = [
        "leg",
        "hypotenuse",
        "adjacent angle",
        "opposite angle",
        "angle"
    ];

    if (!types.includes(type1) || !types.includes(type2)) {
        console.log("Невідомий тип аргументу");
        return "failed";
    }

    // Перевірка кутів
    if (type1.includes("angle") && val1 >= 90 ||
        type2.includes("angle") && val2 >= 90) {
        console.log("Кут повинен бути меншим за 90 градусів");
        return "failed";
    }

    // Якщо перший аргумент є кутом, міняємо аргументи місцями
    if (type1.includes("angle") && !type2.includes("angle")) {

        let temp = val1;
        val1 = val2;
        val2 = temp;

        temp = type1;
        type1 = type2;
        type2 = temp;
    }

    // Два катети
    if (type1 === "leg" && type2 === "leg") {

        a = val1;
        b = val2;

        c = Math.sqrt(a * a + b * b);
        alpha = Math.atan(a / b) * 180 / Math.PI;
    }

    // Катет і гіпотенуза
    else if (type1 === "leg" && type2 === "hypotenuse" ||
             type1 === "hypotenuse" && type2 === "leg") {

        if (type1 === "leg") {
            a = val1;
            c = val2;
        } else {
            a = val2;
            c = val1;
        }

        if (a >= c) {
            console.log("Катет не може бути більшим або рівним гіпотенузі");
            return "failed";
        }

        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
    }

    // Катет і протилежний кут
    else if (type1 === "leg" && type2 === "opposite angle") {

        a = val1;
        alpha = val2;

        c = a / Math.sin(alpha * Math.PI / 180);
        b = a / Math.tan(alpha * Math.PI / 180);
    }

    // Катет і прилеглий кут
    else if (type1 === "leg" && type2 === "adjacent angle") {

        a = val1;
        beta = val2;

        alpha = 90 - beta;

        c = a / Math.cos(beta * Math.PI / 180);
        b = a * Math.tan(beta * Math.PI / 180);
    }

    // Гіпотенуза і кут
    else if (type1 === "hypotenuse" && type2 === "angle") {

        c = val1;
        alpha = val2;

        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.cos(alpha * Math.PI / 180);
    }

    // Інші комбінації
    else {
        console.log("Некоректні типи аргументів. Ознайомтеся з інструкцією.");
        return "failed";
    }

    beta = 90 - alpha;

    // Перевірка результату за допомогою epsilon
    if (Math.abs(a * a + b * b - c * c) > epsilon * c * c) {
        console.log("Помилка обчислення");
        return "failed";
    }

    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    console.log("alpha =", alpha);
    console.log("beta =", beta);

    return "success";
}