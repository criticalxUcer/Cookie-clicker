let balance = 0; // Баланс в очках
let incomeRate = 0; // Доход в секунду в очках
let clickRate = 1; // Доход за клик в очках
let incomePerSecCost = 100; // Стоимость улучшения дохода за секунду в очках
let incomePerClickCost = 50; // Стоимость улучшения дохода за клик в очках
let rank = 1; // Текущий ранг
let progress = 0; // Текущий прогресс

const balanceDisplay = document.getElementById("balance");
const incomeRateDisplay = document.getElementById("incomeRate");
const clickRateDisplay = document.getElementById("clickRate");
const rankDisplay = document.getElementById("rank");
const progressDisplay = document.getElementById("progress");

const clickBtn = document.getElementById("clickBtn");
const incomePerSecBtn = document.getElementById("incomePerSecBtn");
const incomePerClickBtn = document.getElementById("incomePerClickBtn");

// Функция обновления отображения
function updateDisplay() {
    balanceDisplay.textContent = balance;
    incomeRateDisplay.textContent = incomeRate;
    clickRateDisplay.textContent = clickRate;
    rankDisplay.textContent = rank;
    progressDisplay.style.width = progress + "%";
}

// Обновление прогресса и ранга
function updateProgress() {
    progress += 1; // Увеличиваем прогресс на 0.1% за каждый клик

    if (progress >= 100) {
        rank += 1;  // Повышаем ранг при полном заполнении прогресса
        progress = 0; // Сбрасываем прогресс
    }

    updateDisplay();
}

// Добавление дохода при клике
clickBtn.addEventListener("click", () => {
    balance += clickRate;
    updateProgress();
    updateDisplay();
});

// Увеличение дохода за секунду
incomePerSecBtn.addEventListener("click", () => {
    if (balance >= incomePerSecCost) {
        balance -= incomePerSecCost;
        incomeRate += 1;
        incomePerSecCost *= 2; // Увеличение стоимости улучшения
        incomePerSecBtn.textContent = `Увеличить доход за секунду (Стоимость: ${incomePerSecCost})`;
        updateDisplay();
    } else {
        alert("Недостаточно очков для улучшения дохода за секунду!");
    }
});

// Увеличение дохода за клик
incomePerClickBtn.addEventListener("click", () => {
    if (balance >= incomePerClickCost) {
        balance -= incomePerClickCost;
        clickRate += 1;
        incomePerClickCost *= 2; // Увеличение стоимости улучшения
        incomePerClickBtn.textContent = `Увеличить доход за клик (Стоимость: ${incomePerClickCost})`;
        updateDisplay();
    } else {
        alert("Недостаточно очков для улучшения дохода за клик!");
    }
});

// Автоматическое добавление дохода каждую секунду
setInterval(() => {
    balance += incomeRate;
    updateDisplay();
}, 1000);

updateDisplay();
