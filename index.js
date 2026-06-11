const homepage = document.getElementById("homepage");
const formpage1 = document.getElementById("formpage1");
const formpage2 = document.getElementById("formpage2");
const formpage4 = document.getElementById("formpage4");
const formpage3 = document.getElementById("formpage3");
const resultspage = document.getElementById("resultspage");
const mealspage = document.getElementById("mealspage");
const mealsGrid = document.getElementById("meals-grid");
const startButton = document.getElementById("start-button");
const homeButton = document.getElementById("home-button");
const backButton = document.getElementById("back-button");
const formpage2NextButton = document.getElementById("formpage2-next-button");
const activityForm = document.getElementById("activity-form");
const activityOptions = document.querySelectorAll(".activity-option");
const goalForm = document.getElementById("goal-form");
const goalOptions = document.querySelectorAll(".goal-option");
const loginForm = document.getElementById("login-form");
const loginEmailInput = document.getElementById("login-email");
const saveModal = document.getElementById("save-modal");
const saveUserForm = document.getElementById("save-user-form");
const saveCancelButton = document.getElementById("save-cancel-button");
const userNameInput = document.getElementById("user-name");
const userEmailInput = document.getElementById("user-email");
const heightWeightForm = document.getElementById("height-weight-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const ageInput = document.getElementById("age");
const sexInput = document.getElementById("sex");
const belly = document.getElementById("belly");
const sliderValueLabel = document.getElementById("slider-value-label");
const MIN_BODY_FAT = 15;
const MAX_BODY_FAT = 50;
const ACTIVITY_MULTIPLIERS = {
    mild: 1.2,
    moderate: 1.35,
    high: 1.55
};
const meals = [
    "Thai-Marinated Steak Salad",
    "Chicken Crust Pizza",
    "Apple Chia Pudding and Peanut Butter",
    "Bell Pepper and Potato Frittata",
    "Air Fryer Mushrooms",
    "Grilled Chicken with Mango Black Bean Salad",
    "Buffalo Chicken Potato Skins",
    "Lobster mac & cheese",
    "Cajun chicken burgers",
    "Vegan protein pancakes",
    "5-a-day burger",
    "Beefy melanzane parmigiana",
];
const mealBackgrounds = [
    "images/Thai-Marinated Steak Salad.jpg",
    "images/Chicken-Crust-Pizza-16.jpg",
    "images/Chia-Pudding-with-Apples-and-Peanut-Butter-10.webp",
    "images/Adobe Express - file.webp",
    "images/Air-Fryer-Breaded-Mushrooms-7.jpg",
    "images/Grilled-Chicken-with-Black-Bean-Mango-Salsa-9.jpg",
    "images/Buffalo-Chicken-Potato-Skins-9.jpg",
    "images/Lobster mac & cheese.webp",
    "images/Cajun chicken burgers.webp",
    "images/Vegan protein pancakes.webp",
    "images/5-a-day burger.webp",
    "images/Beefy melanzane.webp"
];
const savedFormValues = {
    name: "",
    email: "",
    height: "",
    weight: "",
    age: "",
    sex: "",
    activity: "",
    bodyFat: MIN_BODY_FAT,
    bmr: "",
    caloriesBurnedPerDay: "",
    goal: ""
};
let resultsFormValues = { ...savedFormValues };
let sliderLoaded = false;
let positionSliderButton = function () {};

window.onload = function () {
    showHomePage();
};

startButton.addEventListener("click", handleStartButtonClick);
homeButton.addEventListener("click", showHomePage);
backButton.addEventListener("click", handleBackButtonClick);
formpage2NextButton.addEventListener("click", showFormPage4);
activityOptions.forEach((activityOption) => {
    activityOption.addEventListener("click", handleActivitySelection);
});
goalOptions.forEach((goalOption) => {
    goalOption.addEventListener("click", handleGoalSelection);
});
heightWeightForm.addEventListener("submit", handleHeightWeightSubmit);
activityForm.addEventListener("submit", handleActivitySubmit);
goalForm.addEventListener("submit", handleGoalSubmit);
saveUserForm.addEventListener("submit", handleSaveUserSubmit);
saveCancelButton.addEventListener("click", handleSaveCancel);
loginForm.addEventListener("submit", handleLoginSubmit);

function showHomePage() {
    homepage.classList.remove("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.add("hidden");
    saveModal.classList.add("hidden");
    homeButton.classList.add("hidden");
    backButton.classList.add("hidden");
}

function handleStartButtonClick() {
    resetCurrentForm();
    showFormPage1();
}

function showFormPage1() {
    homepage.classList.add("hidden");
    formpage1.classList.remove("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.add("hidden");
}

function showFormPage2() {
    homepage.classList.add("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.remove("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
    requestAnimationFrame(loadSlider);
}

function showFormPage4() {
    homepage.classList.add("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.remove("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
}

function showFormPage3() {
    homepage.classList.add("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.remove("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
}

function showResultsPage() {
    homepage.classList.add("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.remove("hidden");
    mealspage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
    updateResultsSummary();
}

function showMealsPage() {
    homepage.classList.add("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.remove("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
    renderMeals();
}

function handleBackButtonClick() {
    if (!mealspage.classList.contains("hidden")) {
        showResultsPage();
        return;
    }

    if (!resultspage.classList.contains("hidden")) {
        showFormPage3();
        return;
    }

    if (!formpage3.classList.contains("hidden")) {
        showFormPage4();
        return;
    }

    if (!formpage4.classList.contains("hidden")) {
        showFormPage2();
        return;
    }

    showFormPage1();
}

function handleHeightWeightSubmit(event) {
    event.preventDefault();

    savedFormValues.height = heightInput.value;
    savedFormValues.weight = weightInput.value;
    savedFormValues.age = ageInput.value;
    savedFormValues.sex = sexInput.value;

    showFormPage2();
}

function handleGoalSelection(event) {
    savedFormValues.goal = event.currentTarget.dataset.goal;
    selectGoal(savedFormValues.goal);
}

function handleGoalSubmit(event) {
    event.preventDefault();

    if (!savedFormValues.goal) {
        alert("Please select a goal.");
        return;
    }

    showFormPage3();
}

function handleActivitySelection(event) {
    savedFormValues.activity = event.currentTarget.dataset.activity;
    selectActivity(savedFormValues.activity);
}

function handleActivitySubmit(event) {
    event.preventDefault();

    if (!savedFormValues.activity) {
        alert("Please select an activity level.");
        return;
    }

    saveModal.classList.remove("hidden");
    userNameInput.focus();
}

function handleSaveUserSubmit(event) {
    event.preventDefault();

    const email = userEmailInput.value.toLowerCase();
    const savedUserKey = getSavedUserKey(email);

    if (localStorage.getItem(savedUserKey)) {
        const shouldOverride = confirm("You had form data saved to this email. Do you wish to override your previous form?");

        if (!shouldOverride) {
            userEmailInput.focus();
            return;
        }
    }

    savedFormValues.name = userNameInput.value;
    savedFormValues.email = email;
    const calorieResults = calculateCalorieResults();
    savedFormValues.bmr = calorieResults.bmr;
    savedFormValues.caloriesBurnedPerDay = calorieResults.caloriesBurnedPerDay;

    localStorage.setItem(savedUserKey, JSON.stringify(savedFormValues));
    resultsFormValues = { ...savedFormValues };
    resetCurrentForm();
    saveModal.classList.add("hidden");
    showResultsPage();
}

function handleSaveCancel() {
    saveModal.classList.add("hidden");
    showFormPage3();
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const email = loginEmailInput.value.toLowerCase();
    const savedUser = localStorage.getItem(getSavedUserKey(email));

    if (!savedUser) {
        alert("No saved form found for that email.");
        return;
    }

    Object.assign(savedFormValues, { bodyFat: MIN_BODY_FAT }, JSON.parse(savedUser));
    if (!savedFormValues.bmr || !savedFormValues.caloriesBurnedPerDay) {
        const calorieResults = calculateCalorieResults();
        savedFormValues.bmr = calorieResults.bmr;
        savedFormValues.caloriesBurnedPerDay = calorieResults.caloriesBurnedPerDay;
    }
    resultsFormValues = { ...savedFormValues };
    heightInput.value = savedFormValues.height;
    weightInput.value = savedFormValues.weight;
    ageInput.value = savedFormValues.age || "";
    sexInput.value = savedFormValues.sex || "";
    selectGoal(savedFormValues.goal);
    selectActivity(savedFormValues.activity);
    showResultsPage();
}

function selectActivity(activity) {
    activityOptions.forEach((activityOption) => {
        const isSelected = activityOption.dataset.activity === activity;
        activityOption.classList.toggle("selected", isSelected);
    });
}

function selectGoal(goal) {
    goalOptions.forEach((goalOption) => {
        const isSelected = goalOption.dataset.goal === goal;
        goalOption.classList.toggle("selected", isSelected);
    });
}

function getSavedUserKey(email) {
    return `macro-calculator-user:${email}`;
}

function updateResultsSummary() {
    const resultsSummary = document.querySelector(".results-summary");

    resultsSummary.innerHTML = `
        <p>Results Summary:</p>
        <p>Height: ${resultsFormValues.height || "Not set"} inches</p>
        <p>Weight: ${resultsFormValues.weight || "Not set"} lbs</p>
        <p>Age: ${resultsFormValues.age || "Not set"} years old</p>
        <p>Sex: ${formatResultValue(resultsFormValues.sex)}</p>
        <p>Body Fat %: ${resultsFormValues.bodyFat || "Not set"}%</p>
        <p>Goal: ${formatGoalValue(resultsFormValues.goal)}</p>
        <p>Activity level: ${formatResultValue(resultsFormValues.activity)}</p>
        <p>BMR: ${resultsFormValues.bmr || "Not set"} calories</p>
        <p>Cal burned per day: ${resultsFormValues.caloriesBurnedPerDay || "Not set"} calories</p>
        <button id="generate-meals-button" type="button">Generate Meals</button>
    `;

    document.getElementById("generate-meals-button").addEventListener("click", showMealsPage);
}

function resetCurrentForm() {
    Object.assign(savedFormValues, {
        name: "",
        email: "",
        height: "",
        weight: "",
        age: "",
        sex: "",
        activity: "",
        goal: "",
        bodyFat: MIN_BODY_FAT,
        bmr: "",
        caloriesBurnedPerDay: ""
    });

    heightWeightForm.reset();
    goalForm.reset();
    activityForm.reset();
    saveUserForm.reset();
    loginForm.reset();
    selectGoal("");
    selectActivity("");
    positionSliderButton();
}

function calculateCalorieResults() {
    const weightKg = Number(savedFormValues.weight) / 2.20462;
    const heightCm = Number(savedFormValues.height) * 2.54;
    const age = Number(savedFormValues.age);
    const activityMultiplier = ACTIVITY_MULTIPLIERS[savedFormValues.activity];

    if (!weightKg || !heightCm || !age || !activityMultiplier || !savedFormValues.sex) {
        return {
            bmr: "",
            caloriesBurnedPerDay: ""
        };
    }

    const bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    const sexAdjustedBmr = savedFormValues.sex === "female" ? bmr - 161 : bmr + 5;
    const activityAdjustedCalories = sexAdjustedBmr * activityMultiplier;
    const averagedDailyCalories = (activityAdjustedCalories / 2) + (sexAdjustedBmr / 2);

    return {
        bmr: Math.round(sexAdjustedBmr),
        caloriesBurnedPerDay: Math.round(averagedDailyCalories)
    };
}

function formatResultValue(value) {
    if (!value) {
        return "Not set";
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatGoalValue(goal) {
    if (!goal) {
        return "Not set";
    }

    const goalLabels = {
        "weight-loss": "Weight Loss",
        maintenance: "Maintenance",
        "muscle-gain": "Muscle Gain"
    };

    return goalLabels[goal] || goal;
}

function renderMeals() {
    mealsGrid.innerHTML = "";

    meals.forEach((meal, index) => {
        const mealButton = document.createElement("button");
        const mealName = document.createElement("span");
        const mealBackground = mealBackgrounds[index];

        mealButton.classList.add("meal-card");
        mealButton.type = "button";
        mealName.textContent = meal;

        if (mealBackground) {
            const mealImage = document.createElement("img");
            mealImage.classList.add("meal-card-image");
            mealImage.src = mealBackground;
            mealImage.alt = meal;
            mealButton.appendChild(mealImage);
        } else {
            const mealPlaceholder = document.createElement("div");
            mealPlaceholder.classList.add("meal-card-placeholder");
            mealButton.appendChild(mealPlaceholder);
        }

        mealButton.appendChild(mealName);
        mealsGrid.appendChild(mealButton);
    });
}

function loadSlider() {
    if (sliderLoaded) {
        positionSliderButton();
        return;
    }

    sliderLoaded = true;

    //Slider Code
    const line = document.querySelector('.horizontal-line');
    const btn = document.getElementById('slider-btn');

    let isDragging = false;

    function moveButton(clientX) {
        const lineRect = line.getBoundingClientRect();
        const containerRect = line.parentElement.getBoundingClientRect();

        const minX = lineRect.left - containerRect.left;
        const maxX = lineRect.right - containerRect.left;

        let currentX = clientX - containerRect.left;

        if (currentX < minX) currentX = minX;
        if (currentX > maxX) currentX = maxX;

        btn.style.left = `${currentX}px`;
        sliderValueLabel.style.left = `${currentX}px`;
        updateBodyPreview((currentX - minX) / (maxX - minX));
    }

    positionSliderButton = function () {
        const lineRect = line.getBoundingClientRect();
        const containerRect = line.parentElement.getBoundingClientRect();

        const startX = lineRect.left - containerRect.left;
        //const lineWidth = lineRect.width;

        btn.style.left = `${startX //+ lineWidth*0.25
        }px`;
        sliderValueLabel.style.left = `${startX //+ lineWidth*0.25
        }px`;
        updateBodyPreview(0);
    };

    positionSliderButton();

    //Drag Event
    btn.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mouseup', () => isDragging = false);

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveButton(e.clientX);
    });

    //Drag Event mobile
    btn.addEventListener('touchstart', () => isDragging = true);
    document.addEventListener('touchend', () => isDragging = false);

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        moveButton(e.changedTouches[0].clientX);
    }, { passive: false });

    //Resize Browser
    window.addEventListener('resize', () => {
        const lineRect = line.getBoundingClientRect();
        const containerRect = line.parentElement.getBoundingClientRect();

        const currentLeft = parseFloat(btn.style.left);
        const minX = lineRect.left - containerRect.left;
        const maxX = lineRect.right - containerRect.left;

        if (currentLeft < minX) btn.style.left = `${minX}px`;
        if (currentLeft > maxX) btn.style.left = `${maxX}px`;
    });
}

function updateBodyPreview(sliderValue) {
    const bellySize = 18 + (sliderValue * 42);
    const bodyFat = MIN_BODY_FAT + (sliderValue * (MAX_BODY_FAT - MIN_BODY_FAT));
    const roundedBodyFat = Math.ceil(bodyFat);

    belly.setAttribute("rx", bellySize);
    savedFormValues.bodyFat = roundedBodyFat;
    sliderValueLabel.textContent = `${roundedBodyFat}%`;
}