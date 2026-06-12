const homepage = document.getElementById("homepage");
const formpage1 = document.getElementById("formpage1");
const formpage2 = document.getElementById("formpage2");
const formpage4 = document.getElementById("formpage4");
const formpage3 = document.getElementById("formpage3");
const resultspage = document.getElementById("resultspage");
const mealspage = document.getElementById("mealspage");
const mealsGrid = document.getElementById("meals-grid");
const mealsDescription = document.getElementById("meals-description");
const mealDetailPage = document.getElementById("meal-detail-page");
const mealDetailContent = document.getElementById("meal-detail-content");
const startButton = document.getElementById("start-button");
const browseMealsButton = document.getElementById("browse-meals-button");
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
    {
        name: "Thai-Marinated Steak Salad",
        image: "images/Thai-Marinated Steak Salad.jpg",
        category: "weight-loss",
        dietaryNote: "Dairy free",
        calories: 395.5,
        fat: 19.5,
        carbs: 21,
        protein: 39.5,
        ingredients: [
            {
                group: "Thai Steak Marinade",
                items: [
                    { amount: 0.75, unit: "tablespoon", name: "low sodium soy sauce, or tamari" },
                    { amount: 0.25, unit: "tablespoon", name: "fish sauce" },
                    { amount: 0.25, unit: "tablespoon", name: "fresh lime juice" },
                    { amount: 0.25, unit: "teaspoon", name: "lime zest" },
                    { amount: 0.25, unit: "tablespoon", name: "brown sugar, or honey" },
                    { amount: 0.25, unit: "tablespoon", name: "avocado oil, or neutral oil" },
                    { amount: 0.5, unit: "garlic clove", name: "minced" },
                    { amount: 0.25, unit: "teaspoon", name: "freshly grated ginger" },
                    { amount: 0.25, unit: "teaspoon", name: "sriracha, or chili garlic sauce" }
                ]
            },
            {
                group: "For the Dressing",
                items: [
                    { amount: 0.13, unit: "cup", name: "PBfit peanut butter powder, or PB2" },
                    { amount: 0.06, unit: "cup", name: "lime juice" },
                    { amount: 0.75, unit: "tablespoon", name: "water" },
                    { amount: 1, unit: "teaspoon", name: "low sodium soy sauce, or gluten free tamari" },
                    { amount: 1, unit: "teaspoon", name: "maple syrup, or sugar free syrup" },
                    { amount: 0.38, unit: "tablespoon", name: "toasted sesame oil, or avocado oil" },
                    { amount: 0.5, unit: "teaspoon", name: "sriracha, or sambal oelek; omit if you do not like spice" },
                    { amount: 0.5, unit: "teaspoon", name: "grated ginger, or ginger paste" }
                ]
            },
            {
                group: "Salad",
                items: [
                    { amount: 0.31, unit: "pound", name: "flank steak" },
                    { amount: 0.5, unit: "teaspoon", name: "neutral oil, such as avocado oil" },
                    { amount: 1.25, unit: "cup", name: "mixed baby greens" },
                    { amount: 0.19, unit: "cup", name: "shredded carrot" },
                    { amount: 0.25, unit: "", name: "English cucumber, chopped" },
                    { amount: 0.25, unit: "", name: "shallot, thinly sliced" },
                    { amount: 0.08, unit: "cup", name: "cilantro leaves" },
                    { amount: 0.08, unit: "cup", name: "mint leaves" },
                    { amount: null, unit: "", name: "Chopped roasted peanuts, optional for serving" }
                ]
            }
        ],
        instructions: [
            "Combine the marinade ingredients and add the steak. Marinate in the refrigerator 2 to 8 hours. Let it sit room temperature one hour before cooking.",
            "To make the dressing, add all of the ingredients to a small mixing bowl and whisk until smooth. Set aside.",
            "When the steak is ready to cook, remove from marinade and pat the meat dry with paper towels, discard the marinade. Heat a large cast iron pan or grill pan, or grill over medium high heat. Once the pan is hot, add the oil. Place the steak in the pan and cook, undisturbed, for 5 minutes, until a nice crust has formed, flip the steak and cook for another 6 -7 minutes for medium-rare (130-135° F) or longer to your desired doneness. Remove the steak from the pan and let rest for 10 minutes before slicing.",
            "To assemble the salad, add the lettuce, carrot, cucumber, and shallot in 4 shallow bowls. Drizzle with the dressing.",
            "Thinly slice the steak against the grain and arrange it on top of the salad. Top with the cilantro and mint leaves and peanuts (if using) before serving."
        ]
    },
    {
        name: "Chicken Crust Pizza",
        image: "images/Chicken-Crust-Pizza-16.jpg",
        category: "weight-loss",
        dietaryNote: "Gluten free",
        calories: 287,
        fat: 14.5,
        carbs: 7,
        protein: 34,
        ingredients: [
            {
                group: "Ingredients",
                items: [
                    { amount: 0.25, unit: "pound", name: "ground 93% chicken" },
                    { amount: 0.13, unit: "cup", name: "grated parmesan cheese" },
                    { amount: 0.25, unit: "large egg", name: "" },
                    { amount: 0.25, unit: "teaspoon", name: "garlic powder" },
                    { amount: 0.25, unit: "teaspoon", name: "onion powder" },
                    { amount: 0.13, unit: "teaspoon", name: "Italian seasoning" },
                    { amount: 0.25, unit: "teaspoon", name: "kosher salt" },
                    { amount: 0.13, unit: "cup", name: "pizza sauce or marinara" },
                    { amount: 0.19, unit: "cup", name: "low-moisture, part-skim mozzarella" },
                    { amount: 0.13, unit: "cup", name: "sliced bell pepper" },
                    { amount: 0.13, unit: "cup", name: "broccoli crowns" },
                    { amount: 0.06, unit: "cup", name: "sliced red onion" }
                ]
            }
        ],
        instructions: [
            "Preheat oven to 425°F. Prepare 2 large baking sheet with parchment and spray with cooking oil.",
            "In a large bowl combine ground chicken parmesan, egg, garlic powder, onion powder, Italian seasoning and salt. Split into four balls with wet hands so it doesn’t stick.",
            "Flatten each ball onto the sheet tray until it is ¼” thin and in a circular shape, about 7 inches round.",
            "Bake at 425°F for 20 minutes until the chicken is cooked through and golden.",
            "Flip and evenly top with the tomato sauce, mozzarella, bell peppers, broccoli crowns and onion. (2 tablespoons sauce each, 3 tablespoons cheese each)",
            "Cook an additional 10 minutes until the toppings are cooked through!"
        ]
    },
    {
        name: "Apple Chia Pudding and Peanut Butter",
        image: "images/Chia-Pudding-with-Apples-and-Peanut-Butter-10.webp",
        category: "weight-loss",
        dietaryNote: "Vegetarian and gluten free",
        calories: 373,
        fat: 15,
        carbs: 46,
        protein: 24.5,
        ingredients: [
            {
                group: "Ingredients",
                items: [
                    { amount: 0.13, unit: "cup", name: "chia seeds" },
                    { amount: 0.5, unit: "cup", name: "fat-free milk, almond milk, or milk of choice" },
                    { amount: 0.25, unit: "teaspoon", name: "vanilla extract" },
                    { amount: 0.5, unit: "cup", name: "nonfat plain Greek yogurt" },
                    { amount: 0.5, unit: "tablespoon", name: "maple syrup, sugar-free syrup, or sweetener of choice" },
                    { amount: 0.25, unit: "teaspoon", name: "ground cinnamon, plus more for optional topping" },
                    { amount: 1, unit: "tablespoon", name: "natural unsweetened creamy peanut butter, melted in the microwave for 30 seconds" },
                    { amount: 0.5, unit: "large apple", name: "cored and diced" }
                ]
            }
        ],
        instructions: [
            "Pour 2 tablespoons chia seeds each into 2 (16-ounce) mason jars or containers with lids.",
            "Add ½ cup milk and ¼ teaspoon vanilla to each jar then mix with a fork until chia seeds are evenly distributed. Add ½ cup yogurt, ½ tablespoon syrup and ¼ teaspoon cinnamon to each jar and mix again, scraping the bottom and sides of the jar as you mix so the chia seeds don’t clump.",
            "Seal and refrigerate for at least 2 hours. When ready to eat, add ½ the diced apple to each jar. Top with a dash of cinnamon and drizzle with melted peanut butter.",
            "To serve, mix in the jar and enjoy."
        ]
    },
    {
        name: "Bell Pepper and Potato Frittata",
        image: "images/Adobe Express - file.webp",
        category: "weight-loss",
        dietaryNote: "Vegetarian, gluten free, and dairy free",
        calories: 147,
        fat: 6,
        carbs: 12,
        protein: 11,
        ingredients: [
            {
                group: "Ingredients",
                items: [
                    { amount: 3, unit: "thin slice", name: "green bell pepper, cut crosswise into 1/4-inch slices" },
                    { amount: 4, unit: "large egg", name: "" },
                    { amount: 4, unit: "large egg white", name: "3/4 cup plus 1 tablespoon" },
                    { amount: 0.5, unit: "teaspoon", name: "kosher salt, plus black pepper to taste" },
                    { amount: 1, unit: "teaspoon", name: "olive oil" },
                    { amount: 0.25, unit: "cup", name: "minced shallots" },
                    { amount: 1, unit: "medium Yukon Gold potato", name: "peeled and diced into 1/2-inch pieces (7 oz)" },
                    { amount: 0.25, unit: "teaspoon", name: "garlic powder" },
                    { amount: 0.25, unit: "teaspoon", name: "paprika" }
                ]
            }
        ],
        instructions: [
            "Preheat the oven to 400°F.",
            "Crack the eggs and egg whites into a large bowl. Add 1/4 teaspoon salt and fresh cracked pepper and beat until blended.",
            "Heat a 10-inch nonstick oven safe skillet over medium heat.",
            "Add the oil and the potatoes, season with 1/4 teaspoon salt, garlic powder, paprika and black pepper. Cover and cook the potatoes over medium-low heat, stirring occasionally, until crisp and tender, about 12 to 15 minutes adding the shallots to the pan the last 2 to 3 minutes.",
            "Pour the egg mixture into the skillet. Carefully arrange the bell peppers on top to create a shamrock pattern if desired. Reduce the heat to low and cook until the edges are set, 6 to 8 minutes.",
            "Transfer the skillet to the oven and bake until the frittata is completely set and cooked through, 8 to 10 minutes.",
            "Remove from the oven and transfer onto a large plate. Cut into 4 wedges and serve."
        ]
    },
    {
        name: "Air Fryer Mushrooms",
        image: "images/Air-Fryer-Breaded-Mushrooms-7.jpg",
        category: "weight-loss",
        dietaryNote: "Vegetarian",
        calories: 173.5,
        fat: 6,
        carbs: 19,
        protein: 11,
        ingredients: [
            {
                group: "Ingredients",
                items: [
                    { amount: 4, unit: "ounce", name: "white button mushrooms" },
                    { amount: 0.5, unit: "large egg", name: "" },
                    { amount: 1 / 6, unit: "cup", name: "seasoned breadcrumbs, or gluten-free crumbs" },
                    { amount: 1.5, unit: "tablespoon", name: "grated Pecorino Romano cheese" },
                    { amount: 1, unit: "garlic clove", name: "finely chopped" },
                    { amount: 0.5, unit: "tablespoon", name: "fresh rosemary, finely chopped" },
                    { amount: 0.5, unit: "tablespoon", name: "fresh thyme, finely chopped" },
                    { amount: 0.25, unit: "teaspoon", name: "kosher salt" },
                    { amount: null, unit: "", name: "Spray oil" }
                ]
            }
        ],
        instructions: [
            "Clean mushrooms with a damp paper towel and pat dry. If very large, cut in half; leave small ones whole. There is no need to remove the inside of the mushroom.",
            "In one bowl, add egg and whisk lightly. In another bowl, mix breadcrumbs, grated cheese, garlic, rosemary, thyme and salt.",
            "Dip each mushroom into the egg, letting excess drip off. Roll in the breadcrumb mixture until well coated.",
            "Arrange mushrooms in a single layer in the air fryer basket, leaving space between them for air circulation.",
            "Air fry 375°F for 8-10 minutes, gently shaking the basket halfway through, until golden and crisp.",
            "Once golden brown and crispy, remove the mushrooms and serve immediately with your favorite dipping sauce, such as ranch, garlic aioli or creamy horseradish sauce.",
            "Serve: Enjoy immediately as a snack, appetizer, or side."
        ]
    },
    {
        name: "Grilled Chicken with Mango Black Bean Salad",
        image: "images/Grilled-Chicken-with-Black-Bean-Mango-Salsa-9.jpg",
        category: "weight-loss",
        dietaryNote: "Gluten free and dairy free",
        calories: 261,
        fat: 6,
        carbs: 24,
        protein: 30.5,
        fiber: 5,
        ingredients: [
            {
                group: "Chicken",
                items: [
                    { amount: 4, unit: "ounce", name: "boneless skinless chicken breast, sliced lengthwise into thin cutlets" },
                    { amount: 0.25, unit: "teaspoon", name: "kosher salt, plus freshly cracked pepper to taste" },
                    { amount: 0.75, unit: "garlic clove", name: "minced" },
                    { amount: 0.25, unit: "teaspoon", name: "cumin" },
                    { amount: 0.13, unit: "teaspoon", name: "dried oregano" },
                    { amount: 0.25, unit: "lime", name: "juiced" }
                ]
            },
            {
                group: "Mango Black Bean Salsa",
                items: [
                    { amount: 0.06, unit: "cup", name: "red onion, chopped" },
                    { amount: 0.75, unit: "tablespoon", name: "lime juice" },
                    { amount: 0.25, unit: "tablespoon", name: "olive oil" },
                    { amount: 0.06, unit: "teaspoon", name: "kosher salt, or more to taste" },
                    { amount: 0.25, unit: "cup", name: "canned black beans, rinsed and drained" },
                    { amount: 0.25, unit: "ripe mango", name: "peeled and diced" },
                    { amount: 0.06, unit: "cup", name: "fresh cilantro, minced" },
                    { amount: 0.25, unit: "jalapeno", name: "chopped; keep the seeds for more spice" }
                ]
            }
        ],
        instructions: [
            "Season chicken with salt and pepper and place in a large non-reactive bowl with remaining ingredients, toss well to coat and refrigerate at least 1 hour.",
            "In a medium bowl, combine the red onion, lime juice, olive oil and season with salt, to taste.",
            "Mix well then combine with the remaining ingredients; refrigerate until ready to serve.",
            "Heat the grill or a grill pan to medium high, discard the chicken marinade and grill the chicken breasts about 3 minutes on each side, or until the center is cooked through.",
            "Transfer to a cutting board and slice the chicken on the bias.",
            "Serve the sliced chicken topped with mango black bean salsa."
        ]
    },
    {
        name: "Buffalo Chicken Potato Skins",
        image: "images/Buffalo-Chicken-Potato-Skins-9.jpg",
        category: "weight-loss",
        dietaryNote: "Gluten free",
        calories: 133,
        fat: 7.5,
        carbs: 7.5,
        protein: 8.5,
        fiber: 1,
        ingredients: [
            {
                group: "Potato Skins",
                items: [
                    { amount: 0.5, unit: "medium potato", name: "Idaho or Russet" },
                    { amount: null, unit: "", name: "Cooking spray" },
                    { amount: null, unit: "", name: "Kosher salt, to taste" },
                    { amount: null, unit: "", name: "Black pepper, to taste" }
                ]
            },
            {
                group: "Chicken",
                items: [
                    { amount: 1, unit: "ounce", name: "boneless skinless chicken breast or tenderloins" },
                    { amount: 0.08, unit: "celery rib", name: "" },
                    { amount: 0.08, unit: "garlic clove", name: "" },
                    { amount: 1.33, unit: "ounce", name: "low-sodium chicken broth" },
                    { amount: 0.03, unit: "cup", name: "hot cayenne pepper sauce, such as Frank's" }
                ]
            },
            {
                group: "Toppings",
                items: [
                    { amount: 1, unit: "tablespoon", name: "shredded cheddar cheese" },
                    { amount: 0.04, unit: "cup", name: "carrots, cut into 2-inch matchsticks" },
                    { amount: 0.08, unit: "large celery rib", name: "cut into 2-inch matchsticks" },
                    { amount: 0.02, unit: "cup", name: "blue cheese dressing, homemade or store-bought" }
                ]
            }
        ],
        instructions: [
            "In the slow cooker, combine chicken, celery rib, garlic and broth (enough to cover your chicken, use water if the can of broth isn't enough). Cover and cook on HIGH 4 hours or LOW 6 hours.",
            "Remove the chicken from pot, reserve ½ cup broth and discard the rest (or save for other recipes). Shred the chicken with two forks, return to the slow cooker with the ½ cup of the broth and the hot sauce.",
            "Cook on HIGH for an additional 30 minutes. (Makes 1 ½ cups chicken)",
            "Meanwhile, pierce potato with a fork a few times all around. Place in microwave and cook on high about 5 minutes per potato; set aside to cool OR use my baked potato method or air fryer baked potato recipe. OR use my air fryer baked potato recipe, or my oven baked potatoes recipe instead.",
            "Let cool, then slice in half and scoop out the potatoes, leaving ¼-inch of potatoes attached to the skins. Skins should weigh about 1 oz each.",
            "(IF POTATOES WERE MADE IN THE MICROWAVE) Heat oven to 450°F. Lightly spray potato skins on both sides with oil and place a foil lined baking sheet. Season with salt and pepper and bake 10 minutes. (OMIT THIS STEP IF AIR FRIED OR BAKED, SKINS WILL BE CRISP).",
            "Remove from the oven, add 2 tablespoons of chicken meat filling into each potato skin, top with 1 tbsp shredded cheese and bake 5 minutes or until cheese is melted.",
            "Top each with 1 tsp blue cheese dressing, shredded carrots and celery and start eating!"
        ]
    },
    {
        name: "Lobster mac & cheese",
        image: "images/Lobster mac & cheese.webp",
        category: "calorie-dense",
        calories: 731,
        fat: 32,
        carbs: 71,
        protein: 34,
        ingredients: [
            {
                group: "Lobster Mac & Cheese",
                items: [
                    { amount: 1, unit: "frozen lobster", name: "about 500 g, defrosted" },
                    { amount: 1, unit: "tablespoon", name: "olive oil" },
                    { amount: 1, unit: "onion", name: "roughly chopped" },
                    { amount: null, unit: "", name: "Big pinch of cayenne pepper" },
                    { amount: 1, unit: "tablespoon", name: "tomato puree" },
                    { amount: 1, unit: "liter", name: "milk" },
                    { amount: 400, unit: "gram", name: "macaroni" },
                    { amount: 50, unit: "gram", name: "butter" },
                    { amount: 150, unit: "milliliter", name: "white wine" },
                    { amount: 50, unit: "gram", name: "plain flour" },
                    { amount: 150, unit: "gram", name: "brown crab meat, or equal parts white and brown crab meat" },
                    { amount: 1, unit: "teaspoon", name: "Dijon mustard" },
                    { amount: 160, unit: "gram", name: "extra mature cheddar, grated, plus extra for topping" }
                ]
            },
            {
                group: "Garlic Breadcrumbs",
                items: [
                    { amount: 2, unit: "garlic clove", name: "" },
                    { amount: 2, unit: "tablespoon", name: "olive oil" },
                    { amount: 50, unit: "gram", name: "breadcrumbs" },
                    { amount: 1, unit: "lemon", name: "zested" }
                ]
            }
        ],
        instructions: [
            "Take the lobster and twist the claws off, then use a rolling pin to crack the claws and pick the meat out. Peel the tail, exposing and removing the fleshy meat. Roughly chop all of the meat, then cover and set aside in a bowl in the fridge. Bash all the pieces of shell with the rolling pin to break them up a bit.",
            "Heat the oil in large frying pan over a high heat, add the onion and a large pinch of salt and cook for around five minutes until softened and well coloured, then add the lobster shell and fry for a couple of minutes more. Add the cayenne pepper and tomato purée and stir to coat everything, the turn the heat down to medium and add the milk. Stir well, then remove from the heat when it is just coming to a simmer and set aside for 30 mins to infuse. Meanwhile, mix the garlic, olive oil and lemon zest together with some seasoning to make the breadcrumb topping, then set aside. Strain the milk mixture into a jug and discard the shell.",
            "Heat oven to 180C/160C fan/gas 4. Boil the macaroni in salted water until it has a slight bite (around two minutes less than on the packet instructions), drain and set aside. Melt the butter in a large frying pan over a medium heat until foaming, then add the wine and cook for 5 minutes until the wine has reduced by half, then whisk in the flour to make a sandy paste. Turn down the heat and pour the strained milk into the pan a little at a time, whisking constantly and allowing each addition of milk to be fully absorbed before adding any more.",
            "Add the chopped lobster meat, mustard, crab and cheese. Stir well until the cheese has melted, then season to taste. Tip in the macaroni and stir to coat everything in the sauce. Tip into an ovenproof baking dish (or six small ones) and top with a sprinkling of grated cheese and the garlic breadcrumbs. Bake for 20 mins until golden and bubbling, then allow to cool a little before serving."
        ]
    },
    {
        name: "Cajun chicken burgers",
        image: "images/Cajun chicken burgers.webp",
        category: "calorie-dense",
        calories: 721,
        fat: 36,
        carbs: 51,
        protein: 51,
        ingredients: [
            {
                group: "Cajun Chicken Burgers",
                items: [
                    { amount: 4, unit: "skinless chicken breast", name: "" },
                    { amount: 2, unit: "tablespoon", name: "olive oil" },
                    { amount: 4, unit: "rasher", name: "smoked bacon" },
                    { amount: 2, unit: "avocado", name: "" },
                    { amount: 4, unit: "ciabatta roll", name: "split" },
                    { amount: 4, unit: "thin slice", name: "your favorite cheese" },
                    { amount: 4, unit: "small handful", name: "baby spinach leaves" },
                    { amount: null, unit: "", name: "Mayonnaise, optional for serving" }
                ]
            },
            {
                group: "Cajun Seasoning",
                items: [
                    { amount: 1, unit: "tablespoon", name: "ground cumin" },
                    { amount: 1, unit: "tablespoon", name: "ground coriander" },
                    { amount: 1, unit: "tablespoon", name: "paprika" }
                ]
            }
        ],
        instructions: [
            "Mix the seasoning ingredients together with a good grinding of black pepper and a sprinkling of salt, then set aside in a large dish. Heat grill to high. On a board, flatten out the chicken slightly, then drizzle half the oil over and toss in the seasoning until completely coated. Heat the remaining oil in a large frying pan, sizzle the chicken for 5 mins on each side until firm, push to one side of the pan, then fry the bacon for a few mins until cooked.",
            "While the chicken is cooking, halve, stone, peel and slice the avocados, and toast the cut sides of the buns. Cover the tops of the buns with cheese, then grill until melted.",
            "To assemble the burgers, spread the buns with mayonnaise if you want, top with a handful of spinach, then a rasher of bacon. To keep the avocado in place, slice the chicken, then alternate between a slice of chicken and avocado. Top with the bun, press down lightly and serve."
        ]
    },
    {
        name: "Vegan protein pancakes",
        image: "images/Vegan protein pancakes.webp",
        category: "calorie-dense",
        dietaryNote: "Vegan and dairy free",
        calories: 798,
        fat: 32,
        carbs: 91,
        protein: 29,
        ingredients: [
            {
                group: "Batter",
                items: [
                    { amount: 2, unit: "tablespoon", name: "ground flaxseeds" },
                    { amount: 20, unit: "gram", name: "ground almonds" },
                    { amount: 300, unit: "milliliter", name: "soy milk" },
                    { amount: 200, unit: "gram", name: "quinoa flour" },
                    { amount: 1, unit: "medium banana", name: "mashed" },
                    { amount: 2, unit: "tablespoon", name: "maple syrup" },
                    { amount: null, unit: "", name: "Coconut oil, for frying" }
                ]
            },
            {
                group: "Blueberry Chia Jam",
                items: [
                    { amount: 200, unit: "gram", name: "blueberries, mashed" },
                    { amount: 2, unit: "tablespoon", name: "chia seeds" },
                    { amountRange: [1, 2], unit: "tablespoon", name: "maple syrup, to taste" },
                    { amount: 2, unit: "teaspoon", name: "lemon juice" }
                ]
            },
            {
                group: "Stack",
                items: [
                    { amount: 100, unit: "gram", name: "coconut yogurt or Greek yogurt" },
                    { amount: 1, unit: "tablespoon", name: "pistachio nuts or pumpkin seeds, chopped and optionally toasted" },
                    { amount: 2, unit: "teaspoon", name: "hulled hemp seeds" },
                    { amount: null, unit: "", name: "Mixed berries" }
                ]
            }
        ],
        instructions: [
            "In a small bowl stir the flaxseeds with 6 tbsp water and set aside to soak while you make the jam.",
            "Mash the blueberries with a fork in a pan then set over a low-medium heat until syrupy and bubbling. Remove from the heat and stir in the chia seeds, maple syrup and lemon juice. Leave to cool slightly then transfer to a small serving jar.",
            "Put the ground almonds, milk, flour, banana, maple syrup and a pinch of salt in a blender. Stir the flax to make sure it has become thick and gloopy, like an egg, then tip into the mix and blitz until smooth and thick.",
            "Heat 1 tsp of coconut oil in a large frying pan over a medium heat and add tablespoon dollops of batter into the pan. Cook for a couple of mins on one side until the edges are browning, and bubbles have formed on top. Once the pale, white batter has turned a sandy colour, flip over with a spatula and cook for another few mins till dark golden brown. Set aside and keep warm while you repeat the process with the remaining batter, adding another tsp of coconut oil with each batch. You should make about 16 pancakes.",
            "Pile the pancakes high between two plates, alternating the layers with spoonfuls of jam and yogurt. Dollop any remaining yogurt and another spoonful of jam on top then scatter over the nuts, seeds and berries to serve. Leftover jam will keep in the fridge for up to 1 week."
        ]
    },
    {
        name: "5-a-day burger",
        image: "images/5-a-day burger.webp",
        category: "calorie-dense",
        dietaryNote: "Vegetarian",
        calories: 814,
        fat: 40,
        carbs: 76,
        protein: 28,
        ingredients: [
            {
                group: "Burgers",
                items: [
                    { amount: 1, unit: "tablespoon", name: "dried porcini mushrooms" },
                    { amount: 1, unit: "tablespoon", name: "oil" },
                    { amount: 200, unit: "gram", name: "button mushrooms, chopped small" },
                    { amount: 215, unit: "gram", name: "canned butter beans, drained" },
                    { amount: 1, unit: "garlic clove", name: "crushed" },
                    { amount: 2, unit: "ciabatta roll", name: "" },
                    { amount: 150, unit: "gram", name: "cherry tomatoes, halved" },
                    { amount: 1, unit: "teaspoon", name: "capers" },
                    { amount: null, unit: "", name: "Small bunch of basil, chopped" },
                    { amount: 6, unit: "sun-dried tomato", name: "packed in oil and chopped, plus 1 tablespoon of the oil" },
                    { amount: 1, unit: "avocado", name: "sliced" },
                    { amount: 0.5, unit: "lemon", name: "juiced" },
                    { amount: null, unit: "", name: "A few chives, chopped" },
                    { amount: null, unit: "", name: "Handful of pea shoots" },
                    { amount: 50, unit: "gram", name: "mature cheddar cheese, sliced" }
                ]
            },
            {
                group: "Peach Ketchup",
                items: [
                    { amount: 1, unit: "teaspoon", name: "rapeseed oil" },
                    { amount: 1, unit: "shallot", name: "chopped very small" },
                    { amount: 1, unit: "garlic clove", name: "crushed" },
                    { amount: 213, unit: "gram", name: "canned peaches in juice, drained" },
                    { amount: 1, unit: "teaspoon", name: "brown sugar" },
                    { amount: 1, unit: "tablespoon", name: "cider vinegar" },
                    { amount: 1, unit: "teaspoon", name: "salt" },
                    { amount: 1, unit: "teaspoon", name: "soy sauce" },
                    { amount: 0.25, unit: "teaspoon", name: "cinnamon" },
                    { amount: 0.5, unit: "teaspoon", name: "mild curry powder" }
                ]
            }
        ],
        instructions: [
            "Start by making the peach ketchup. Put the shallot and oil into a small saucepan over a medium-high heat for 4-5 mins or until sizzling and starting to soften. Add all the other ketchup ingredients bring to a simmer then take off the heat. Allow to cool briefly, then place into the bowl of a food processor. Blitz until smooth then pour everything back into the saucepan. Bring to the boil and reduce for 3-4 mins or until thick. Remove from the heat and set aside until needed.",
            "To make the burgers put the porcini mushrooms into a small bowl and pour over 1 tbsp boiling water and allow to steep until soft. Meanwhile, put 1 tsp of oil into another saucepan and cook the chopped button mushrooms until soft and all the liquid has evaporated. Chop the porcini mushrooms and add to the pan along with the butter beans. Remove from the heat and using a potato masher squish everything together until the butter beans are completely mashed and are thoroughly mixed with the mushrooms. Tip the mixture into a bowl and stir in a crushed garlic clove and season well with salt and pepper.",
            "When cool enough to handle, shape the bean and mushroom mix into 2 large burger patties and place on a plate ready for cooking.",
            "Heat oven to 180C/160C fan/gas 4. Cut each of the ciabatta rolls in half through the middle. Carefully pull out a little of the bread from the middle of the bottom half of each roll, leaving the crust in tact. You just want to make a little extra space here for the salad. Tear the bread you have pulled out into small chunks and place onto a baking tray along with the cut halves of the rolls. Place in the oven for 5-6 mins or until warmed through and the bread pieces are a little drier.",
            "To make the panzanella-style salad put the toasted pieces of bread into a bowl along with the cherry tomatoes, capers, sundried tomatoes and the oil. Season with salt and pepper.",
            "Lay the avocado halves on a plate, pour over the lemon juice and sprinkle with the chives.",
            "Heat the remaining oil in a large non-stick frying pan and cook the bean and mushroom burgers for 3-4 mins on each side, try not to turn them too much as they can break up a little, if they do just push them back together with a spatula.",
            "To build the burger, fill the cavity in each of the bottom halves of the burger buns with the panzanella salad. Balance the burger on top of the salad, then top with the cheese, followed by the peashoots, and avocado. Spread the peach ketchup on the top pieces of the roll to finish Serve immediately with any remaining ketchup on the side to dip."
        ]
    },
    {
        name: "Beefy melanzane parmigiana",
        image: "images/Beefy melanzane.webp",
        category: "calorie-dense",
        dietaryNote: "Gluten free",
        calories: 787,
        fat: 58,
        carbs: 18,
        protein: 45,
        ingredients: [
            {
                group: "Ingredients",
                items: [
                    { amount: 2, unit: "tablespoon", name: "olive oil, plus extra for brushing" },
                    { amount: 800, unit: "gram", name: "beef mince" },
                    { amount: 3, unit: "garlic clove", name: "crushed" },
                    { amount: 3, unit: "thyme sprig", name: "" },
                    { amount: 3, unit: "rosemary sprig", name: "" },
                    { amount: 3, unit: "bay leaf", name: "" },
                    { amount: 2, unit: "400 g can", name: "chopped tomatoes" },
                    { amount: null, unit: "", name: "A glass of red wine" },
                    { amount: 1, unit: "beef stock cube", name: "" },
                    { amount: 1, unit: "tablespoon", name: "sugar" },
                    { amount: 5, unit: "aubergine", name: "sliced lengthwise into 5 mm slices" },
                    { amount: 2, unit: "125 g ball", name: "mozzarella, torn into small chunks" },
                    { amount: 50, unit: "gram", name: "Parmesan, grated" },
                    { amount: 250, unit: "gram", name: "mascarpone" }
                ]
            }
        ],
        instructions: [
            "Heat the oil in a large frying pan or flameproof casserole dish. Add the mince and brown over a high heat, breaking up with a wooden spoon as you go. (You may need to do this in batches.) Once well browned, tip onto a plate.",
            "Add the remaining oil, the garlic and herbs to the pan and gently cook for 1 min. Tip in the tomatoes and red wine, and bring to a simmer, stirring up any meaty bits stuck to the bottom of the pan. Return the mince to the pan, crumble in the stock cube, and add sugar and seasoning. Gently simmer for at least 1 hr, stirring occasionally, splashing in more water to keep it saucy if you need to. If you have time to simmer for longer, go for it – the longer the better. Fish out the herb stalks and bay leaves.",
            "Meanwhile, heat a griddle or frying pan. Brush the aubergine slices on both sides with olive oil, then griddle in batches. You want each slice softened and slightly charred, so don’t have the heat too high or the aubergine will char before softening. Remove to a plate as you go.",
            "Heat oven to 180C/160C fan/gas 4. Set aside some of each cheese to go on the top. In a large baking dish spread a spoonful of mince sauce over the base then top with a layer of aubergines and season well. Spoon over some more mince sauce, then scatter over some mozzarella, Parmesan and blobs of mascarpone. Add another layer of aubergines and some seasoning. Repeat, layering everything up and finish with a layer of meat sauce. Top with your reserved cheese and bake for 30-40 mins until the top is crisp and golden and mince bubbling."
        ]
    }
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
let mealsReturnPage = "results";
let displayedMeals = meals;

window.onload = function () {
    showHomePage();
};

startButton.addEventListener("click", handleStartButtonClick);
browseMealsButton.addEventListener("click", () => showMealsPage("home"));
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
    mealDetailPage.classList.add("hidden");
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
    mealDetailPage.classList.add("hidden");
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
    mealDetailPage.classList.add("hidden");
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
    mealDetailPage.classList.add("hidden");
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
    mealDetailPage.classList.add("hidden");
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
    mealDetailPage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");
    updateResultsSummary();
}

function showMealsPage(returnPage = "results") {
    window.scrollTo(0, 0);
    mealsReturnPage = returnPage;
    homepage.classList.add("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.remove("hidden");
    mealDetailPage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");

    const isRecommendationView = returnPage === "results";
    displayedMeals = isRecommendationView ? getRecommendedMeals() : meals;
    mealsDescription.textContent = isRecommendationView
        ? getRecommendationDescription(displayedMeals)
        : "Browse all meals. Select a meal to view its nutrition details.";
    renderMeals(displayedMeals);
}

function handleBackButtonClick() {
    if (!mealDetailPage.classList.contains("hidden")) {
        showMealsPage(mealsReturnPage);
        return;
    }

    if (!mealspage.classList.contains("hidden")) {
        if (mealsReturnPage === "home") {
            showHomePage();
        } else {
            showResultsPage();
        }
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

    document.getElementById("generate-meals-button").addEventListener("click", () => showMealsPage("results"));
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

function getGoalAdjustedDailyCalories() {
    const dailyCalories = Number(resultsFormValues.caloriesBurnedPerDay);
    const goalMultipliers = {
        "weight-loss": 0.85,
        maintenance: 1,
        "muscle-gain": 1.1
    };

    return dailyCalories * (goalMultipliers[resultsFormValues.goal] || 1);
}

function getRecommendedMeals() {
    const dailyCalories = Number(resultsFormValues.caloriesBurnedPerDay);
    const weightLossMeals = meals.filter((meal) => meal.category === "weight-loss");
    const calorieDenseMeals = meals.filter((meal) => meal.category === "calorie-dense");

    if (!dailyCalories || !resultsFormValues.goal) {
        return [];
    }

    if (resultsFormValues.goal === "weight-loss") {
        const recommendations = rankMealsByCalorieTarget(weightLossMeals, 7);

        if (dailyCalories >= 2400) {
            recommendations.push(...rankMealsByCalorieTarget(calorieDenseMeals, 2));
        }

        return recommendations;
    }

    if (resultsFormValues.goal === "maintenance") {
        return rankMealsByCalorieTarget(meals, 8);
    }

    return rankMealsByCalorieTarget(calorieDenseMeals, calorieDenseMeals.length);
}

function rankMealsByCalorieTarget(mealsToRank, maximumResults) {
    const targetMealCalories = getGoalAdjustedDailyCalories() / 3;

    return [...mealsToRank]
        .sort((firstMeal, secondMeal) => {
            const firstDifference = Math.abs(firstMeal.calories - targetMealCalories);
            const secondDifference = Math.abs(secondMeal.calories - targetMealCalories);
            return firstDifference - secondDifference;
        })
        .slice(0, maximumResults);
}

function getRecommendationDescription(recommendedMeals) {
    const adjustedDailyCalories = Math.round(getGoalAdjustedDailyCalories());

    if (!recommendedMeals.length) {
        return "No calorie-dense meals currently match this goal and daily calorie level. More meal categories can be added as nutrition data becomes available.";
    }

    const highCalorieNote = resultsFormValues.goal === "weight-loss"
    && Number(resultsFormValues.caloriesBurnedPerDay) >= 2400
        ? " Higher-calorie options are included because of your higher daily calorie use."
        : "";

    return `${recommendedMeals.length} meals selected for ${formatGoalValue(resultsFormValues.goal)} using an adjusted daily target of about ${adjustedDailyCalories} calories.${highCalorieNote}`;
}

function getRecommendedServings(meal) {
    if (mealsReturnPage !== "results" || !meal.calories) {
        return 1;
    }

    const targetMealCalories = getGoalAdjustedDailyCalories() / 3;
    const rawServings = targetMealCalories / meal.calories;
    const roundedServings = Math.round(rawServings * 4) / 4;

    return Math.min(4, Math.max(0.5, roundedServings));
}

function formatNutritionAmount(amount) {
    return Number.isInteger(amount) ? amount : amount.toFixed(1);
}

function formatIngredientAmount(amount) {
    return Number(amount.toFixed(2)).toString();
}

function formatIngredientUnit(unit, amount) {
    if (!unit || amount === 1) {
        return unit;
    }

    const pluralUnits = {
        tablespoon: "tablespoons",
        teaspoon: "teaspoons",
        cup: "cups",
        pound: "pounds",
        "garlic clove": "garlic cloves",
        "large egg": "large eggs",
        "large apple": "large apples",
        "large egg white": "large egg whites",
        "thin slice": "thin slices",
        "medium Yukon Gold potato": "medium Yukon Gold potatoes",
        ounce: "ounces",
        lime: "limes",
        "ripe mango": "ripe mangoes",
        jalapeno: "jalapenos",
        "medium potato": "medium potatoes",
        "celery rib": "celery ribs",
        "large celery rib": "large celery ribs",
        "frozen lobster": "frozen lobsters",
        onion: "onions",
        liter: "liters",
        gram: "grams",
        milliliter: "milliliters",
        lemon: "lemons",
        "skinless chicken breast": "skinless chicken breasts",
        rasher: "rashers",
        avocado: "avocados",
        "ciabatta roll": "ciabatta rolls",
        "small handful": "small handfuls",
        "medium banana": "medium bananas",
        "sun-dried tomato": "sun-dried tomatoes",
        shallot: "shallots",
        "thyme sprig": "thyme sprigs",
        "rosemary sprig": "rosemary sprigs",
        "bay leaf": "bay leaves",
        "400 g can": "400 g cans",
        "beef stock cube": "beef stock cubes",
        aubergine: "aubergines",
        "125 g ball": "125 g balls"
    };

    return pluralUnits[unit] || unit;
}

function renderIngredients(ingredientGroups, servings) {
    if (!ingredientGroups?.length) {
        return "";
    }

    const groupsHtml = ingredientGroups.map((ingredientGroup) => {
        const itemsHtml = ingredientGroup.items.map((ingredient) => {
            if (ingredient.amount === null) {
                return `<li>${ingredient.name}</li>`;
            }

            if (ingredient.amountRange) {
                const minimumAmount = ingredient.amountRange[0] * servings;
                const maximumAmount = ingredient.amountRange[1] * servings;
                const amountText = `${formatIngredientAmount(minimumAmount)}-${formatIngredientAmount(maximumAmount)}`;
                const unitText = formatIngredientUnit(ingredient.unit, maximumAmount);

                return `<li><strong>${amountText} ${unitText}</strong> ${ingredient.name}</li>`;
            }

            const scaledAmount = ingredient.amount * servings;
            const amountText = formatIngredientAmount(scaledAmount);
            const unitText = formatIngredientUnit(ingredient.unit, scaledAmount);
            const spacing = unitText ? " " : "";

            return `<li><strong>${amountText}${spacing}${unitText}</strong> ${ingredient.name}</li>`;
        }).join("");

        return `
            <div class="ingredient-group">
                <h3>${ingredientGroup.group}</h3>
                <ul>${itemsHtml}</ul>
            </div>
        `;
    }).join("");

    return `
        <section class="nutrition-section ingredients-section">
            <h2>Ingredients for ${servings} serving${servings === 1 ? "" : "s"}</h2>
            ${groupsHtml}
        </section>
    `;
}

function renderInstructions(instructions) {
    if (!instructions?.length) {
        return "";
    }

    const stepsHtml = instructions
        .map((instruction) => `<li>${instruction}</li>`)
        .join("");

    return `
        <section class="nutrition-section instructions-section">
            <h2>Instructions</h2>
            <ol>${stepsHtml}</ol>
        </section>
    `;
}

function showMealDetails(meal) {
    window.scrollTo(0, 0);
    homepage.classList.add("hidden");
    formpage1.classList.add("hidden");
    formpage2.classList.add("hidden");
    formpage4.classList.add("hidden");
    formpage3.classList.add("hidden");
    resultspage.classList.add("hidden");
    mealspage.classList.add("hidden");
    mealDetailPage.classList.remove("hidden");
    homeButton.classList.remove("hidden");
    backButton.classList.remove("hidden");

    if (!meal.calories) {
        mealDetailContent.innerHTML = `
            <h1>${meal.name}</h1>
            <img class="meal-detail-image" src="${meal.image}" alt="${meal.name}">
            <p>Nutrition facts for this meal have not been added yet.</p>
        `;
        return;
    }

    const servings = getRecommendedServings(meal);
    const scaledCalories = Math.round(meal.calories * servings);
    const scaledFat = formatNutritionAmount(meal.fat * servings);
    const scaledCarbs = formatNutritionAmount(meal.carbs * servings);
    const scaledProtein = formatNutritionAmount(meal.protein * servings);
    const scaledFiber = Number.isFinite(meal.fiber)
        ? formatNutritionAmount(meal.fiber * servings)
        : null;
    const hasPersonalRecommendation = mealsReturnPage === "results";

    mealDetailContent.innerHTML = `
        <h1>${meal.name}</h1>
        <img class="meal-detail-image" src="${meal.image}" alt="${meal.name}">
        ${meal.dietaryNote ? `<p class="dietary-note">${meal.dietaryNote}</p>` : ""}
        <section class="nutrition-section">
            <h2>Nutrition Per Serving</h2>
            <div class="nutrition-grid">
                <p><strong>Calories</strong><span>${formatNutritionAmount(meal.calories)} kcal</span></p>
                <p><strong>Fat</strong><span>${meal.fat} g</span></p>
                <p><strong>Carbs</strong><span>${meal.carbs} g</span></p>
                <p><strong>Protein</strong><span>${meal.protein} g</span></p>
                ${Number.isFinite(meal.fiber) ? `<p><strong>Fiber</strong><span>${meal.fiber} g</span></p>` : ""}
            </div>
        </section>
        <section class="nutrition-section">
            <h2>${hasPersonalRecommendation ? "Recommended Amount" : "Example Amount"}</h2>
            <p class="serving-amount">${servings} serving${servings === 1 ? "" : "s"}</p>
            ${hasPersonalRecommendation ? "" : "<p>Complete the form to receive a serving amount based on your calorie needs and goal.</p>"}
            <div class="nutrition-grid">
                <p><strong>Calories</strong><span>${scaledCalories} kcal</span></p>
                <p><strong>Fat</strong><span>${scaledFat} g</span></p>
                <p><strong>Carbs</strong><span>${scaledCarbs} g</span></p>
                <p><strong>Protein</strong><span>${scaledProtein} g</span></p>
                ${scaledFiber !== null ? `<p><strong>Fiber</strong><span>${scaledFiber} g</span></p>` : ""}
            </div>
        </section>
        ${renderIngredients(meal.ingredients, servings)}
        ${renderInstructions(meal.instructions)}
    `;
}

function renderMeals(mealsToRender) {
    mealsGrid.innerHTML = "";

    if (!mealsToRender.length) {
        mealsGrid.innerHTML = '<p class="no-meals-message">No matching meals are available yet.</p>';
        return;
    }

    mealsToRender.forEach((meal) => {
        const mealButton = document.createElement("button");
        const mealName = document.createElement("span");

        mealButton.classList.add("meal-card");
        mealButton.type = "button";
        mealButton.addEventListener("click", () => showMealDetails(meal));
        mealName.textContent = meal.name;

        if (meal.image) {
            const mealImage = document.createElement("img");
            mealImage.classList.add("meal-card-image");
            mealImage.src = meal.image;
            mealImage.alt = meal.name;
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