const ranks = [
  [0, "Code Beginner"],
  [180, "Python Apprentice"],
  [420, "Logic Warrior"],
  [760, "Loop Master"],
  [1120, "Function Mage"],
  [1540, "Data Guardian"],
  [2100, "Python Hero"],
];

const worlds = [
  {
    id: "forest",
    icon: "{}",
    title: "Forest of Variables",
    theme: "A calm cyber forest powered by data crystals.",
    topics: ["print()", "variables", "strings", "input()", "types"],
    boss: "Bug Beast",
    gradient: "linear-gradient(135deg, #223a33, #1b3442)",
    lesson: {
      title: "Variables Store Power",
      analogy: "A variable is like a labeled energy box. Put a value inside, then reuse the label anywhere.",
      learn:
        "Variables let programs remember information. In Python, you create one with a name, an equals sign, and a value.",
      watch: ["name = \"Pyro\"", "level = 3", "print(name)", "print(level)"],
      question: "Which line correctly stores a player's XP?",
      options: ["xp = 50", "50 = xp", "xp : 50", "set xp 50"],
      answer: 0,
      hint: "The variable name goes on the left side of the equals sign.",
      code: "name = \"Pyro\"\nxp = 50\nprint(name)\nprint(xp)",
      reward: 50,
      badge: "Hello World Hero",
    },
  },
  {
    id: "kingdom",
    icon: "if",
    title: "Kingdom of Conditions",
    theme: "Logic gates open doors, traps, and machines.",
    topics: ["if", "else", "elif", "and", "comparisons"],
    boss: "False King",
    gradient: "linear-gradient(135deg, #203247, #332b48)",
    lesson: {
      title: "Choose With Conditions",
      analogy: "A condition is a smart gate. It opens only when the rule is true.",
      learn:
        "Use if, elif, and else to let your program choose different paths based on truth.",
      watch: ["health = 8", "if health > 5:", "    print(\"Fight!\")", "else:", "    print(\"Heal\")"],
      question: "What does health > 5 produce when health is 8?",
      options: ["True", "False", "\"health\"", "A syntax error"],
      answer: 0,
      hint: "Compare the number 8 with the number 5.",
      code: "health = 8\nif health > 5:\n    print(\"Fight!\")\nelse:\n    print(\"Heal\")",
      reward: 70,
      badge: "Bug Destroyer",
    },
  },
  {
    id: "loop",
    icon: "↻",
    title: "Loop Dimension",
    theme: "A time dimension controlled by repeated actions.",
    topics: ["for", "while", "nested loops", "range()"],
    boss: "Infinite Bug",
    gradient: "linear-gradient(135deg, #243a38, #3a2e43)",
    lesson: {
      title: "Repeat With Loops",
      analogy: "A loop is an auto-caster. Tell it the pattern once, and it repeats the spell.",
      learn:
        "For loops repeat a block of code for every item in a sequence. range() creates a stream of numbers.",
      watch: ["for crystal in range(3):", "    print(\"charge\")"],
      question: "How many times does range(3) repeat?",
      options: ["3", "2", "4", "Forever"],
      answer: 0,
      hint: "range(3) gives 0, 1, and 2.",
      code: "for crystal in range(3):\n    print(\"charge\")",
      reward: 90,
      badge: "Loop Master",
    },
  },
  {
    id: "temple",
    icon: "fn",
    title: "Temple of Functions",
    theme: "Ancient cyber temples powered by reusable code spells.",
    topics: ["functions", "parameters", "return", "scope"],
    boss: "Shadow Compiler",
    gradient: "linear-gradient(135deg, #3b3427, #302e4a)",
    lesson: {
      title: "Reusable Code Spells",
      analogy: "A function is a named spell. Cast it whenever you need the same action again.",
      learn:
        "Functions group code into reusable blocks. Parameters let the function accept changing inputs.",
      watch: ["def boost(power):", "    return power * 2", "print(boost(5))"],
      question: "What value does boost(5) return?",
      options: ["10", "5", "power", "None"],
      answer: 0,
      hint: "The function doubles the input.",
      code: "def boost(power):\n    return power * 2\nprint(boost(5))",
      reward: 110,
      badge: "Function Wizard",
    },
  },
  {
    id: "city",
    icon: "[]",
    title: "Data City",
    theme: "A futuristic city powered by lists, dictionaries, tuples, and sets.",
    topics: ["lists", "dicts", "tuples", "sets", "indexing"],
    boss: "Data Corruptor",
    gradient: "linear-gradient(135deg, #203947, #343927)",
    lesson: {
      title: "Organize With Lists",
      analogy: "A list is an inventory belt. Each slot has a number starting at zero.",
      learn:
        "Lists store multiple values in order. Use square brackets and index numbers to access items.",
      watch: ["items = [\"key\", \"gem\", \"map\"]", "print(items[1])"],
      question: "What is stored at items[1]?",
      options: ["gem", "key", "map", "Nothing"],
      answer: 0,
      hint: "Python indexes start at 0, so index 1 is the second item.",
      code: "items = [\"key\", \"gem\", \"map\"]\nprint(items[1])",
      reward: 130,
      badge: "Data Guardian",
    },
  },
  {
    id: "oop",
    icon: "AI",
    title: "OOP Universe",
    theme: "A robotic sci-fi universe where players build AI warriors.",
    topics: ["classes", "objects", "inheritance", "constructors"],
    boss: "Object Overlord",
    gradient: "linear-gradient(135deg, #332b48, #422b3b)",
    lesson: {
      title: "Blueprints And Objects",
      analogy: "A class is a robot blueprint. An object is a robot built from that blueprint.",
      learn:
        "Classes package data and behavior. Constructors initialize each new object with its starting state.",
      watch: ["class Bot:", "    def __init__(self, name):", "        self.name = name"],
      question: "What does a class act like?",
      options: ["A blueprint", "A typo", "A database only", "A loop"],
      answer: 0,
      hint: "Objects are built from it.",
      code: "class Bot:\n    def __init__(self, name):\n        self.name = name\n\nprint(\"Bot online\")",
      reward: 150,
      badge: "Python Legend",
    },
  },
];

const missions = [
  ["Daily Code Quest", "Solve 3 practice stages"],
  ["Debug Drill", "Fix one broken program"],
  ["Mastery Push", "Complete a boss stage"],
  ["Mini Project", "Build the world project after level 10"],
];

const automationNodes = [
  ["Trigger", "Daily quest starts"],
  ["n8n", "Route event"],
  ["LangChain", "Tutor analyzes code"],
  ["LangGraph", "Update learning memory"],
  ["Reward", "XP, badge, reminder"],
];

const aiMissionTemplates = [
  "Generate a revision quest for {weak} with one small coding task and one debug task.",
  "Create an adaptive boss fight that uses {weak} and rewards careful retries.",
  "Build an automation puzzle where n8n sends XP after a correct {weak} challenge.",
  "Design a LangChain tutor prompt that explains a {weak} mistake in beginner words.",
];

const stageTemplates = [
  ["Tutorial", "Read the concept and run the starter code.", "guided"],
  ["Guided Practice", "Edit one line to satisfy the objective.", "write"],
  ["Memory Shift", "Change a stored value and predict the new result.", "write"],
  ["Combine Ideas", "Use two concepts together in real code.", "write"],
  ["Input Mission", "Prepare code that works with user input.", "write"],
  ["Type Mission", "Convert or organize values correctly.", "write"],
  ["Mini Coding Mission", "Build a tiny useful program.", "project"],
  ["Debug Stage", "Repair the broken code.", "debug"],
  ["Speed Coding", "Write the solution cleanly with fewer retries.", "speed"],
  ["Boss Battle", "Use the whole topic to defeat the boss.", "boss"],
];

const practiceBanks = {
  forest: {
    topic: "Variables",
    project: "Calculator",
    stages: [
      ["print() Signal", "Print your name.", "Use print() with a string inside quotation marks.", "print(\"Alex\")", ["print(", "\"", ")"], "Strings in Python need quotation marks."],
      ["Store XP", "Create a variable named xp and store 50.", "Use the name xp on the left side of equals.", "xp = 50\nprint(xp)", ["xp", "=", "50"], "A variable assignment looks like name = value."],
      ["Change Value", "Set score to 10, then change it to 25.", "Reassigning a variable updates the value in memory.", "score = 10\nscore = 25\nprint(score)", ["score", "10", "25"], "Use the same variable name again to replace the value."],
      ["Join Text", "Create first and last variables, then print the full name.", "Use + to join strings.", "first = \"Ada\"\nlast = \"Lovelace\"\nprint(first + \" \" + last)", ["first", "last", "+"], "Strings join with +, and spaces are strings too."],
      ["Input Prep", "Store input(\"Age: \") in a variable named age.", "input() returns text from the player.", "age = input(\"Age: \")\nprint(age)", ["age", "input("], "Put input() on the right side of the assignment."],
      ["Type Convert", "Convert text_age to a number and store it in age.", "Use int() when a number is typed as text.", "text_age = \"18\"\nage = int(text_age)\nprint(age)", ["int(", "text_age"], "int(value) converts number-looking text into an integer."],
      ["Mini Mission", "Make a tiny profile card with name, age, and level.", "Create three variables and print them.", "name = \"Mira\"\nage = 18\nlevel = 2\nprint(name)\nprint(age)\nprint(level)", ["name", "age", "level", "print"], "Break the profile into small variables."],
      ["Debug Bug Beast", "Fix the broken print statement.", "The word Hello should be text.", "print(\"Hello\")", ["print(", "\"Hello\""], "Bare words are treated as variable names unless quoted."],
      ["Speed Run", "In two lines, store coins as 100 and print it.", "Keep it simple and exact.", "coins = 100\nprint(coins)", ["coins", "100", "print(coins)"], "One assignment, one print."],
      ["Boss: Bug Beast", "Create hero, xp, and rank, then print all three.", "Use everything from the variable path.", "hero = \"Pyro\"\nxp = 300\nrank = \"Apprentice\"\nprint(hero)\nprint(xp)\nprint(rank)", ["hero", "xp", "rank", "print"], "The boss falls when every value is named and printed."],
    ],
  },
  kingdom: {
    topic: "Conditions",
    project: "Age Checker",
    stages: [
      ["True Gate", "Create age = 18 and print age >= 18.", "Comparisons create True or False.", "age = 18\nprint(age >= 18)", ["age", ">="], "Use a comparison operator."],
      ["If Door", "Print Enter when score is greater than 5.", "Use an if block.", "score = 8\nif score > 5:\n    print(\"Enter\")", ["if", "score > 5", "print"], "The indented line runs only when the condition is true."],
      ["Else Trap", "Print Heal when health is not above 5.", "Use else for the fallback path.", "health = 3\nif health > 5:\n    print(\"Fight\")\nelse:\n    print(\"Heal\")", ["else:", "Heal"], "else handles the false route."],
      ["Elif Tower", "Print Gold for score above 90, Silver above 70.", "Check the strongest condition first.", "score = 82\nif score > 90:\n    print(\"Gold\")\nelif score > 70:\n    print(\"Silver\")\nelse:\n    print(\"Bronze\")", ["elif", "score > 70"], "elif means otherwise, check another rule."],
      ["And Lock", "Open only when key is 1 and code is 7.", "Both conditions must be true.", "key = 1\ncode = 7\nprint(key == 1 and code == 7)", ["and", "=="], "and requires both sides to be true."],
      ["Or Switch", "Allow admin or mentor.", "or accepts either path.", "role = \"mentor\"\nprint(role == \"admin\" or role == \"mentor\")", ["or", "role"], "or passes if at least one side is true."],
      ["Mini Mission", "Build a voting eligibility checker.", "Create age and print Can vote or Wait.", "age = 18\nif age >= 18:\n    print(\"Can vote\")\nelse:\n    print(\"Wait\")", ["age", "if", "else"], "Compare age with 18."],
      ["Debug False King", "Fix the missing colon.", "if lines must end with a colon.", "power = 9\nif power > 5:\n    print(\"Strike\")", ["if", ":"], "Python uses : before an indented block."],
      ["Speed Run", "Print True if coins are at least 10.", "Use >=.", "coins = 12\nprint(coins >= 10)", ["coins", ">="], "At least means greater than or equal."],
      ["Boss: False King", "Use if/elif/else to rank score.", "Cover high, medium, and low.", "score = 76\nif score >= 90:\n    print(\"S\")\nelif score >= 60:\n    print(\"A\")\nelse:\n    print(\"B\")", ["if", "elif", "else"], "The boss needs a complete decision chain."],
    ],
  },
  loop: {
    topic: "Loops",
    project: "Number Guessing Game",
    stages: [
      ["Repeat Signal", "Print charge three times.", "Use range(3).", "for step in range(3):\n    print(\"charge\")", ["for", "range(3)", "print"], "A for loop repeats the indented block."],
      ["Counter Trail", "Print numbers from range(5).", "The loop variable changes every repeat.", "for number in range(5):\n    print(number)", ["number", "range(5)"], "Print the loop variable to see it update."],
      ["Table Start", "Print 2 times numbers 0 to 4.", "Use multiplication inside the loop.", "for n in range(5):\n    print(n * 2)", ["n", "* 2"], "The variable n changes each repeat."],
      ["While Gate", "Count from 0 while count < 3.", "Update count inside the loop.", "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1", ["while", "count + 1"], "A while loop needs a changing value."],
      ["Nested Pattern", "Use two loops to print row and col.", "One loop can live inside another.", "for row in range(2):\n    for col in range(2):\n        print(row + col)", ["for row", "for col"], "Nested loops repeat inside repeats."],
      ["Range Mission", "Use range(1, 4) to print 1, 2, 3.", "range can have start and stop.", "for n in range(1, 4):\n    print(n)", ["range(1, 4)"], "The stop number is not included."],
      ["Mini Mission", "Build a small multiplication table for 3.", "Loop through five values.", "for n in range(1, 6):\n    print(n * 3)", ["range", "* 3"], "Use n * 3 inside the loop."],
      ["Debug Infinite Bug", "Fix the loop by increasing count.", "Without an update, while loops can run forever.", "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1", ["count = count + 1"], "Always change the condition value."],
      ["Speed Run", "Print ready four times.", "Use a for loop.", "for i in range(4):\n    print(\"ready\")", ["range(4)"], "Four repeats means range(4)."],
      ["Boss: Infinite Bug", "Print a countdown from 3 to 1.", "Use a while loop and subtract.", "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1", ["while", "count - 1"], "The boss loses when the loop ends."],
    ],
  },
  temple: {
    topic: "Functions",
    project: "Battle Simulator",
    stages: [
      ["Create Spell", "Define greet() and print Hello inside it.", "A function starts with def.", "def greet():\n    print(\"Hello\")\ngreet()", ["def greet", "greet()"], "Define the function, then call it."],
      ["Parameter Flow", "Create boost(power) and print power.", "Parameters receive values.", "def boost(power):\n    print(power)\nboost(5)", ["power", "boost(5)"], "The argument 5 flows into power."],
      ["Return Value", "Return power * 2 from boost.", "return sends a value back.", "def boost(power):\n    return power * 2\nprint(boost(5))", ["return", "* 2"], "print the function call to see the returned value."],
      ["Two Arguments", "Create add(a, b) and return their sum.", "Functions can receive multiple values.", "def add(a, b):\n    return a + b\nprint(add(2, 3))", ["a, b", "a + b"], "Separate parameters with commas."],
      ["Scope Signal", "Use a local variable inside a function.", "Local variables live inside the function.", "def make_score():\n    score = 10\n    return score\nprint(make_score())", ["score", "return"], "Return local values if you need them outside."],
      ["Default Power", "Create attack(power=3) and print it.", "Default parameters have fallback values.", "def attack(power=3):\n    print(power)\nattack()", ["power=3"], "A default is used when no argument is passed."],
      ["Mini Mission", "Build a damage calculator function.", "Return base + bonus.", "def damage(base, bonus):\n    return base + bonus\nprint(damage(8, 4))", ["def damage", "return"], "Make the reusable calculation a function."],
      ["Debug Compiler", "Fix the missing parentheses in the call.", "Function calls need ().", "def cast():\n    print(\"spark\")\ncast()", ["cast()"], "Use the function name followed by parentheses."],
      ["Speed Run", "Create double(x) and print double(4).", "Return x * 2.", "def double(x):\n    return x * 2\nprint(double(4))", ["double", "return"], "Tiny function, clear return."],
      ["Boss: Shadow Compiler", "Create heal and attack functions, then call both.", "Use multiple reusable actions.", "def heal(points):\n    return points + 5\ndef attack(power):\n    return power * 2\nprint(heal(10))\nprint(attack(6))", ["heal", "attack", "return"], "Reusable spells win the fight."],
    ],
  },
  city: {
    topic: "Data Structures",
    project: "Inventory Manager",
    stages: [
      ["List Inventory", "Create items with three strings.", "Lists use square brackets.", "items = [\"key\", \"gem\", \"map\"]\nprint(items)", ["[", "]", "items"], "Put multiple values in a list."],
      ["Index Access", "Print the second item.", "Index 1 means second item.", "items = [\"key\", \"gem\", \"map\"]\nprint(items[1])", ["items[1]"], "Python starts counting at 0."],
      ["Append Item", "Add potion to items.", "append() adds to the end.", "items = [\"key\"]\nitems.append(\"potion\")\nprint(items)", ["append"], "Use list.append(value)."],
      ["Dictionary Decode", "Create player with name and xp.", "Dictionaries use key/value pairs.", "player = {\"name\": \"Pyro\", \"xp\": 50}\nprint(player[\"name\"])", ["{", "\"name\"", "\"xp\""], "Access a dictionary by key."],
      ["Tuple Signal", "Create position as (2, 5).", "Tuples are ordered and stable.", "position = (2, 5)\nprint(position)", ["(", ")"], "Tuples use parentheses."],
      ["Set Cleanse", "Remove duplicates with a set.", "Sets keep unique values.", "badges = {\"A\", \"A\", \"B\"}\nprint(badges)", ["{"], "A set stores unique items."],
      ["Mini Mission", "Build a shopping cart list and print first item.", "Use list plus indexing.", "cart = [\"apple\", \"book\", \"pen\"]\nprint(cart[0])", ["cart", "[0]"], "The first item is index 0."],
      ["Debug Corruptor", "Fix the list indexing brackets.", "Use square brackets for indexes.", "items = [\"key\", \"gem\"]\nprint(items[0])", ["items[0]"], "Function calls use (), indexes use []."],
      ["Speed Run", "Create scores list and print index 2.", "Index 2 is the third value.", "scores = [10, 20, 30]\nprint(scores[2])", ["scores[2]"], "Third value, index 2."],
      ["Boss: Data Corruptor", "Create inventory dict with items and coins.", "Mix a dictionary and list.", "inventory = {\"items\": [\"key\", \"map\"], \"coins\": 20}\nprint(inventory[\"items\"][0])\nprint(inventory[\"coins\"])", ["inventory", "\"items\"", "\"coins\""], "Nested access defeats corrupted data."],
    ],
  },
  oop: {
    topic: "OOP",
    project: "Mini RPG using OOP",
    stages: [
      ["Class Blueprint", "Create an empty Bot class.", "Classes are blueprints.", "class Bot:\n    pass\nprint(\"Bot ready\")", ["class Bot"], "Class names usually start uppercase."],
      ["Constructor", "Give Bot a name in __init__.", "Constructors prepare objects.", "class Bot:\n    def __init__(self, name):\n        self.name = name\nprint(\"ready\")", ["__init__", "self.name"], "self stores data on the object."],
      ["Create Object", "Create bot = Bot(\"Pyro\").", "Objects are built from classes.", "class Bot:\n    def __init__(self, name):\n        self.name = name\nbot = Bot(\"Pyro\")\nprint(bot.name)", ["Bot(", "bot.name"], "Use the class like a function to create an object."],
      ["Method Power", "Add a speak method.", "Methods are functions inside classes.", "class Bot:\n    def speak(self):\n        print(\"Online\")\nbot = Bot()\nbot.speak()", ["def speak", "bot.speak()"], "Methods receive self."],
      ["Attributes", "Store hp on the object.", "Attributes hold object state.", "class Hero:\n    def __init__(self):\n        self.hp = 100\nhero = Hero()\nprint(hero.hp)", ["self.hp"], "Use self.name for object data."],
      ["Inheritance", "Create Mage(Hero).", "Inheritance reuses a parent class.", "class Hero:\n    pass\nclass Mage(Hero):\n    pass\nprint(\"Mage ready\")", ["Mage(Hero)"], "Put the parent class in parentheses."],
      ["Mini Mission", "Build a Player class with name and level.", "Create and print an object.", "class Player:\n    def __init__(self, name, level):\n        self.name = name\n        self.level = level\nplayer = Player(\"Ada\", 3)\nprint(player.name)\nprint(player.level)", ["Player", "self.level"], "Store both values in __init__."],
      ["Debug Overlord", "Fix the missing self parameter.", "Methods inside classes need self.", "class Bot:\n    def speak(self):\n        print(\"beep\")\nBot().speak()", ["self"], "The first method parameter is self."],
      ["Speed Run", "Create Enemy with hp and print it.", "Use __init__.", "class Enemy:\n    def __init__(self, hp):\n        self.hp = hp\nenemy = Enemy(40)\nprint(enemy.hp)", ["Enemy", "self.hp"], "Make the object remember hp."],
      ["Boss: Object Overlord", "Build Hero and Mage, then print mage power.", "Use inheritance and attributes.", "class Hero:\n    def __init__(self, power):\n        self.power = power\nclass Mage(Hero):\n    pass\nmage = Mage(12)\nprint(mage.power)", ["class Mage(Hero)", "mage.power"], "Inherited constructors can still create useful objects."],
    ],
  },
};

const $ = (selector) => document.querySelector(selector);

const fallbackProgress = {
  xp: 0,
  combo: 1,
  streak: 1,
  activeWorldIndex: 0,
  currentStage: {},
  completed: [],
  solvedStages: [],
  history: [],
  savedTasks: [],
  aiMissions: [],
  badges: [],
  collectibles: ["DATA-01"],
  hintLevels: {},
  stats: {
    attempts: 0,
    solved: 0,
    correct: 0,
    retries: 0,
    practiceMinutes: 0,
    weakConcepts: {},
  },
};

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Some embedded browsers restrict file:// localStorage. The app still works for the session.
    }
  },
};

const state = loadState();
let activeWorld = worlds[state.activeWorldIndex] ?? worlds[0];
let activeStep = "learn";

function loadState() {
  const saved = storage.get("pythonQuestProgress");
  if (!saved) {
    return { ...fallbackProgress };
  }
  try {
    const parsed = JSON.parse(saved);
    return {
      ...fallbackProgress,
      ...parsed,
      currentStage: { ...fallbackProgress.currentStage, ...(parsed.currentStage ?? {}) },
      history: parsed.history ?? [],
      savedTasks: parsed.savedTasks ?? [],
      aiMissions: parsed.aiMissions ?? [],
      stats: {
        ...fallbackProgress.stats,
        ...(parsed.stats ?? {}),
        weakConcepts: {
          ...fallbackProgress.stats.weakConcepts,
          ...(parsed.stats?.weakConcepts ?? {}),
        },
      },
    };
  } catch {
    return { ...fallbackProgress };
  }
}

function saveState() {
  storage.set("pythonQuestProgress", JSON.stringify(state));
}

function freshProgress() {
  return {
    ...fallbackProgress,
    currentStage: {},
    completed: [],
    solvedStages: [],
    history: [],
    savedTasks: [],
    aiMissions: [],
    badges: [],
    collectibles: ["DATA-01"],
    hintLevels: {},
    stats: {
      ...fallbackProgress.stats,
      weakConcepts: {},
    },
  };
}

function rankForXp(xp) {
  return ranks.reduce((current, next) => (xp >= next[0] ? next : current), ranks[0])[1];
}

function nextRankXp(xp) {
  return ranks.find(([need]) => need > xp)?.[0] ?? ranks[ranks.length - 1][0];
}

function updateHUD() {
  const next = nextRankXp(state.xp);
  $("#rankLabel").textContent = rankForXp(state.xp);
  $("#xpValue").textContent = state.xp;
  $("#streakValue").textContent = state.streak;
  $("#comboValue").textContent = state.combo;
  $("#xpFill").style.width = `${Math.min(100, (state.xp / next) * 100)}%`;
  $("#collectibles").innerHTML = state.collectibles.map((item) => `<span class="collectible">${item}</span>`).join("");
  $("#badges").innerHTML = state.badges.map((badge) => `<span class="badge">${badge}</span>`).join("");
}

function renderMissions() {
  $("#missionList").innerHTML = missions
    .map(([title, body], index) => {
      const done = index === 0 ? state.stats.solved >= 3 : index === 1 ? state.stats.retries > 0 : state.completed.length > 0;
      return `<li><strong>${done ? "Done: " : ""}${title}</strong><span>${body}</span></li>`;
    })
    .join("");
  renderSavedTasks();
  renderHistory();
}

function addHistory(entry) {
  state.history.unshift({
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    ...entry,
  });
  state.history = state.history.slice(0, 12);
}

function renderHistory() {
  const history = $("#historyList");
  if (!history) return;
  history.innerHTML = state.history.length
    ? state.history
        .map(
          (item) => `
            <div class="history-item ${item.status === "Solved" ? "success" : "retry"}">
              <strong>${escapeHtml(item.status)}</strong>
              <span>${escapeHtml(item.world)} · L${item.level} · ${escapeHtml(item.title)}</span>
              <small>${escapeHtml(item.time)}</small>
            </div>
          `,
        )
        .join("")
    : `<p class="empty-copy">Run code to build history.</p>`;
}

function renderSavedTasks() {
  const list = $("#taskList");
  if (!list) return;
  list.innerHTML = state.savedTasks.length
    ? state.savedTasks
        .map(
          (task, index) => `
            <button class="stored-task" data-load-task="${index}">
              <strong>${escapeHtml(task.title)}</strong>
              <span>${escapeHtml(task.world)} · Level ${task.level}</span>
            </button>
          `,
        )
        .join("")
    : `<p class="empty-copy">Save a practice task here.</p>`;

  document.querySelectorAll("[data-load-task]").forEach((button) => {
    button.addEventListener("click", () => loadSavedTask(Number(button.dataset.loadTask)));
  });
}

function renderAiLab() {
  $("#workflowMap").innerHTML = automationNodes
    .map(
      ([title, body], index) => `
        <div class="workflow-node">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(body)}</span>
          ${index < automationNodes.length - 1 ? "<i></i>" : ""}
        </div>
      `,
    )
    .join("");

  const weak = bestConcept(true);
  const practice = getPractice();
  $("#chainOutput").innerHTML = `
    <div class="agent-line"><strong>Input</strong><span>${escapeHtml(practice.objective)}</span></div>
    <div class="agent-line"><strong>Analysis</strong><span>Check code structure, missing concepts, output, and memory state.</span></div>
    <div class="agent-line"><strong>Tutor Reply</strong><span>${escapeHtml(practice.hint)}</span></div>
  `;
  $("#graphOutput").innerHTML = `
    <div class="agent-line"><strong>Weak topic</strong><span>${escapeHtml(weak)}</span></div>
    <div class="agent-line"><strong>Retries</strong><span>${state.stats.retries}</span></div>
    <div class="agent-line"><strong>Next policy</strong><span>${escapeHtml(adaptivePolicy())}</span></div>
    <div class="agent-line"><strong>Saved AI missions</strong><span>${state.aiMissions.length}</span></div>
  `;
}

function adaptivePolicy() {
  const accuracy = state.stats.attempts ? state.stats.correct / state.stats.attempts : 1;
  if (accuracy < 0.45) return "Decrease difficulty and recommend revision stages.";
  if (state.stats.retries > state.stats.solved + 2) return "Generate debug-first missions with stronger hints.";
  if (accuracy > 0.8 && state.stats.solved > 3) return "Increase difficulty and unlock automation puzzles.";
  return "Keep balanced practice with one coding task and one explanation task.";
}

function generateAiMission() {
  const weak = bestConcept(true);
  const template = aiMissionTemplates[state.aiMissions.length % aiMissionTemplates.length];
  const mission = template.replaceAll("{weak}", weak === "None yet" ? getPractice().topic : weak);
  state.aiMissions.unshift({
    title: "AI Generated Mission",
    mission,
    createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
  state.aiMissions = state.aiMissions.slice(0, 8);
  addHistory({
    status: "AI Mission",
    world: "Automation Lab",
    level: state.aiMissions.length,
    title: mission,
  });
  saveState();
  renderAiLab();
  renderHistory();
  speak("AI Automation Lab generated a personalized mission.");
  showToast(mission);
}

function getStageIndex(worldId = activeWorld.id) {
  return state.currentStage?.[worldId] ?? 0;
}

function setStageIndex(index) {
  state.currentStage[activeWorld.id] = Math.max(0, Math.min(9, index));
  activeStep = "try";
  saveState();
  renderAll();
}

function getPractice(world = activeWorld) {
  const bank = practiceBanks[world.id];
  const index = getStageIndex(world.id);
  const template = stageTemplates[index];
  const data = bank.stages[index];
  return {
    index,
    number: index + 1,
    type: template[2],
    stageName: template[0],
    stageGoal: template[1],
    topic: bank.topic,
    project: bank.project,
    title: data[0],
    objective: data[1],
    explanation: data[2],
    starterCode: data[3],
    checks: data[4],
    hint: data[5],
  };
}

function stageKey(worldId = activeWorld.id, index = getStageIndex(worldId)) {
  return `${worldId}:${index}`;
}

function continueQuest() {
  const firstOpenWorld = worlds.find((world, worldIndex) => {
    const unlocked = worldIndex <= Math.floor(state.xp / 170) + 1;
    const hasUnsolvedStage = stageTemplates.some((_, stageIndex) => !state.solvedStages.includes(stageKey(world.id, stageIndex)));
    return unlocked && hasUnsolvedStage;
  }) ?? worlds[0];
  const worldIndex = worlds.findIndex((world) => world.id === firstOpenWorld.id);
  const nextStage = stageTemplates.findIndex((_, stageIndex) => !state.solvedStages.includes(stageKey(firstOpenWorld.id, stageIndex)));

  state.activeWorldIndex = worldIndex;
  activeWorld = firstOpenWorld;
  state.currentStage[activeWorld.id] = nextStage === -1 ? 0 : nextStage;
  activeStep = "try";
  saveState();
  renderAll();

  document.getElementById("questBoard")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const practice = getPractice();
  speak(`Continue Quest loaded: ${activeWorld.title}, Level ${practice.number}. Write the code and press Run.`);
  showToast(`Continue: ${practice.title}`);
}

function saveCurrentTask() {
  const practice = getPractice();
  const task = {
    worldId: activeWorld.id,
    world: activeWorld.title,
    stageIndex: practice.index,
    level: practice.number,
    title: practice.title,
    objective: practice.objective,
    code: $("#codeEditor").value,
    savedAt: new Date().toISOString(),
  };
  const existingIndex = state.savedTasks.findIndex((item) => item.worldId === task.worldId && item.stageIndex === task.stageIndex);
  if (existingIndex >= 0) {
    state.savedTasks[existingIndex] = task;
  } else {
    state.savedTasks.unshift(task);
  }
  state.savedTasks = state.savedTasks.slice(0, 10);
  saveState();
  renderSavedTasks();
  showToast("Task saved");
  speak(`${practice.title} saved to task storage.`);
}

function loadSavedTask(index) {
  const task = state.savedTasks[index];
  if (!task) return;
  const worldIndex = worlds.findIndex((world) => world.id === task.worldId);
  if (worldIndex < 0) return;
  state.activeWorldIndex = worldIndex;
  activeWorld = worlds[worldIndex];
  state.currentStage[activeWorld.id] = task.stageIndex;
  activeStep = "try";
  renderAll();
  $("#codeEditor").value = task.code;
  $("#codeEditor").dataset.stage = stageKey();
  document.getElementById("questBoard")?.scrollIntoView({ behavior: "smooth", block: "start" });
  speak(`Loaded saved task: ${task.title}.`);
  showToast("Saved task loaded");
}

function resetProgress() {
  const confirmed = window.confirm("Reset Python Quest progress, history, saved tasks, XP, and badges?");
  if (!confirmed) return;
  const fresh = freshProgress();
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, fresh);
  activeWorld = worlds[0];
  activeStep = "learn";
  saveState();
  $("#codeEditor").dataset.stage = "";
  renderAll();
  speak("Progress reset. Forest of Variables is ready.");
  showToast("Progress reset");
}

function renderWorlds() {
  $("#worldGrid").innerHTML = worlds
    .map((world, index) => {
      const locked = index > Math.floor(state.xp / 170) + 1;
      const solvedCount = state.solvedStages.filter((item) => item.startsWith(`${world.id}:`)).length;
      const mastery = ["Beginner", "Learner", "Skilled", "Advanced", "Master"][Math.min(4, Math.floor(solvedCount / 2))];
      return `
        <article class="world-card ${world.id === activeWorld.id ? "active" : ""}" style="--world-gradient:${world.gradient}">
          <span class="world-icon">${world.icon}</span>
          <h3>${world.title}</h3>
          <p>${world.theme}</p>
          <div class="world-meta">
            ${world.topics.slice(0, 4).map((topic) => `<span>${topic}</span>`).join("")}
            <span>Boss: ${world.boss}</span>
            <span>${solvedCount}/10 stages</span>
            <span>${mastery}</span>
          </div>
          <button class="primary-btn" data-world="${index}" data-locked="${locked}">
            ${locked ? "Preview Locked World" : "Enter World"}
          </button>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-world]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.world);
      if (button.dataset.locked === "true") {
        const requiredXp = Math.max(0, (index - 1) * 170);
        speak(`${worlds[index].title} is locked. Earn ${requiredXp} XP to unlock it.`);
        showToast(`Locked: earn ${requiredXp} XP first`);
        return;
      }
      selectWorld(index);
    });
  });
}

function renderSkillTree() {
  const skills = ["Syntax Spark", "Logic Gate", "Loop Engine", "Spell Forge", "Data Lens", "Class Core"];
  $("#skillTree").innerHTML = skills
    .map((skill, index) => {
      const unlocked = state.xp >= index * 180;
      return `<div class="skill-node ${unlocked ? "" : "locked"}"><span>${unlocked ? "✓" : "·"}</span>${skill}</div>`;
    })
    .join("");
}

function selectWorld(index) {
  state.activeWorldIndex = index;
  activeWorld = worlds[index];
  activeStep = "learn";
  saveState();
  renderAll();
  speak(`${activeWorld.title} loaded. The ${activeWorld.boss} is waiting.`);
  location.hash = "questBoard";
}

function renderLesson() {
  const lesson = activeWorld.lesson;
  const practice = getPractice();
  $("#lessonWorld").textContent = activeWorld.title;
  $("#lessonTitle").textContent = `${practice.topic}: Level ${practice.number}`;
  $("#questVisual").className = `quest-visual ${activeWorld.id}`;
  $("#floatingCode").textContent = practice.starterCode.split("\n")[0];
  if ($("#codeEditor").dataset.stage !== stageKey()) {
    $("#codeEditor").value = practice.starterCode;
    $("#codeEditor").dataset.stage = stageKey();
  }
  renderStageStrip();
  renderPracticeBrief(practice);
  renderAnalytics();

  document.querySelectorAll(".step").forEach((step) => {
    step.classList.toggle("active", step.dataset.step === activeStep);
  });

  if (activeStep === "learn") {
    $("#lessonCard").innerHTML = `
      <h3>${practice.stageName}</h3>
      <p>${practice.stageGoal}</p>
      <p>${practice.explanation}</p>
      <p><strong>Mastery path:</strong> Tutorial, guided practice, challenge, revision, debug, speed run, boss level, then mini project: ${practice.project}.</p>
      <p><code>${escapeHtml(practice.starterCode.split("\n")[0])}</code></p>
    `;
  }

  if (activeStep === "watch") {
    const lines = practice.starterCode.split("\n");
    $("#lessonCard").innerHTML = `
      <h3>Execution Flow</h3>
      <ol>
        ${lines.map((line) => `<li><code>${escapeHtml(line)}</code></li>`).join("")}
      </ol>
      <p>Run the code to see output, memory changes, and a line-by-line tutor explanation.</p>
    `;
    visualizeCode(practice.starterCode);
  }

  if (activeStep === "try") {
    $("#lessonCard").innerHTML = `
      <h3>Practice Mission</h3>
      <p><strong>Problem:</strong> ${practice.title}</p>
      <p><strong>Objective:</strong> ${practice.objective}</p>
      <p>Write real Python in the editor, run it, retry, and improve. This stage checks for the required concepts and explains every line after execution.</p>
      <div class="check-list">
        ${practice.checks.map((check) => `<span>${escapeHtml(check)}</span>`).join("")}
      </div>
    `;
  }

  if (activeStep === "feedback") {
    const solved = state.solvedStages.includes(stageKey());
    $("#lessonCard").innerHTML = `
      <h3>${solved ? "Stage Cleared" : "Feedback Console"}</h3>
      <p id="feedbackCopy">${solved ? "Good work. Move to the next level or replay for cleaner code." : "Run your code to receive XP, hints, line explanations, and Pyro's diagnosis."}</p>
      <div class="feedback-actions">
        <button class="primary-btn" id="nextStageBtn">${practice.number === 10 ? `Start ${practice.project}` : "Next Level"}</button>
        <button class="ghost-btn" id="bossBtn">Fight ${activeWorld.boss}</button>
      </div>
    `;
    $("#nextStageBtn").addEventListener("click", () => {
      if (practice.number === 10) {
        speak(`${practice.project} unlocked. Use the editor to build it with the skills from this world.`);
        showToast(`Mini project unlocked: ${practice.project}`);
        return;
      }
      setStageIndex(practice.index + 1);
    });
    $("#bossBtn").addEventListener("click", bossFight);
  }
}

function renderStageStrip() {
  $("#stageStrip").innerHTML = stageTemplates
    .map((stage, index) => {
      const solved = state.solvedStages.includes(stageKey(activeWorld.id, index));
      const current = index === getStageIndex();
      return `<button class="stage-dot ${current ? "active" : ""} ${solved ? "solved" : ""}" data-stage="${index}">
        <span>${index + 1}</span>
        <small>${stage[0]}</small>
      </button>`;
    })
    .join("");
  document.querySelectorAll("[data-stage]").forEach((button) => {
    button.addEventListener("click", () => setStageIndex(Number(button.dataset.stage)));
  });
}

function renderPracticeBrief(practice) {
  $("#practiceBrief").innerHTML = `
    <strong>${practice.title}</strong>
    <span>${practice.objective}</span>
    <small>${practice.type.toUpperCase()} · Mini project: ${practice.project}</small>
  `;
}

function answerChallenge(index, button) {
  const lesson = activeWorld.lesson;
  const correct = index === lesson.answer;
  document.querySelectorAll("[data-option]").forEach((item) => {
    item.disabled = true;
    item.classList.toggle("correct", Number(item.dataset.option) === lesson.answer);
  });

  if (correct) {
    state.combo += 1;
    grantXp(lesson.reward);
    unlockBadge(lesson.badge);
    button.classList.add("correct");
    speak(`Clean strike. ${lesson.badge} unlocked.`);
    showToast(`+${lesson.reward} XP · ${lesson.badge}`);
  } else {
    state.combo = 1;
    button.classList.add("wrong");
    $("#pyro").classList.add("sad");
    speak(`Almost. ${lesson.hint}`);
    showToast(`Hint: ${lesson.hint}`);
  }
  saveState();
  updateHUD();
  renderSkillTree();
}

function bossFight() {
  const alreadyDone = state.completed.includes(activeWorld.id);
  if (!alreadyDone) {
    state.completed.push(activeWorld.id);
    grantXp(60 * state.combo);
    state.collectibles.push(`${activeWorld.id.toUpperCase()}-${String(state.completed.length + 1).padStart(2, "0")}`);
  }
  speak(`${activeWorld.boss} destabilized. The world is cleaner now.`);
  $("#pyro").classList.add("dance");
  setTimeout(() => $("#pyro").classList.remove("dance"), 1500);
  saveState();
  renderAll();
}

function grantXp(amount) {
  state.xp += amount * state.combo;
}

function unlockBadge(badge) {
  if (!state.badges.includes(badge)) {
    state.badges.push(badge);
  }
}

function speak(message) {
  $("#pyroSpeech").textContent = message;
  $("#pyro").classList.remove("sad");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function runCode() {
  const code = $("#codeEditor").value;
  const practice = getPractice();
  const key = stageKey();
  const result = simulatePython(code);
  const judge = judgePractice(code, practice, result);
  state.stats.attempts += 1;
  if (!judge.pass) {
    state.stats.retries += 1;
    state.stats.weakConcepts[practice.topic] = (state.stats.weakConcepts[practice.topic] ?? 0) + 1;
    addHistory({
      status: "Retry",
      world: activeWorld.title,
      level: practice.number,
      title: practice.title,
    });
  }
  $("#outputBox").textContent = result.output.join("\n") || "No output";
  $("#runtimeMemory").innerHTML =
    Object.keys(result.memory).length === 0
      ? "<span class=\"memory-item\">No variables tracked</span>"
      : Object.entries(result.memory)
          .map(([key, value]) => `<span class="memory-item">${key} = ${escapeHtml(JSON.stringify(value))}</span>`)
          .join("");
  renderMemoryBank(result.memory);
  renderLineExplanation(code, result, judge);
  if (!judge.pass) {
    const hint = nextHint(practice, result, judge);
    saveState();
    renderHistory();
    renderAnalytics();
    speak(hint);
    showToast(hint);
  } else {
    if (!state.solvedStages.includes(key)) {
      state.solvedStages.push(key);
      state.stats.solved += 1;
      grantXp(25 + practice.number * 8);
      unlockBadge(`${practice.topic} ${masteryRank(activeWorld.id)}`);
    }
    addHistory({
      status: "Solved",
      world: activeWorld.title,
      level: practice.number,
      title: practice.title,
    });
    state.stats.correct += 1;
    state.combo += 1;
    saveState();
    updateHUD();
    renderMissions();
    renderWorlds();
    renderSkillTree();
    renderStageStrip();
    renderAnalytics();
    speak(`Stage ${practice.number} cleared. ${practice.topic} mastery improved.`);
    showToast(`Solved: +${25 + practice.number * 8} XP`);
  }
}

function judgePractice(code, practice, result) {
  const normalized = code.replace(/\s+/g, " ");
  const missing = practice.checks.filter((check) => !normalized.includes(check.replace(/\s+/g, " ")));
  const syntaxIssue = result.errors[0];
  return {
    pass: missing.length === 0,
    missing,
    syntaxIssue,
  };
}

function nextHint(practice, result, judge) {
  const key = stageKey();
  const level = (state.hintLevels[key] ?? 0) + 1;
  state.hintLevels[key] = Math.min(level, 4);
  saveState();
  if (judge.syntaxIssue) return `There is an error in your code. ${makeErrorFriendly(judge.syntaxIssue)}`;
  if (level === 1) return `There is something missing. ${practice.hint}`;
  if (level === 2) return `Check this part: add or fix ${judge.missing[0] ?? practice.checks[0]}.`;
  if (level === 3) return `Easy explanation: ${practice.explanation}`;
  return `One correct way is: ${practice.starterCode.replace(/\n/g, " | ")}`;
}

function makeErrorFriendly(error) {
  if (error.includes("not defined")) return "Python thinks one word is a variable, but it has no value yet. If it is text, put it inside quotes.";
  if (error.includes("variable names belong")) return "The variable name should be on the left side, and the value should be on the right side.";
  if (error.includes("loop needs")) return "A loop needs an indented line under it, so Python knows what to repeat.";
  if (error.includes("prototype")) return "This practice runner supports the basics here. Try using simple assignments, print(), if/else, loops, lists, or functions.";
  return error;
}

function masteryRank(worldId) {
  const solved = state.solvedStages.filter((item) => item.startsWith(`${worldId}:`)).length;
  return ["Beginner", "Learner", "Skilled", "Advanced", "Master"][Math.min(4, Math.floor(solved / 2))];
}

function renderLineExplanation(code, result, judge) {
  const lines = code.replace(/\r/g, "").split("\n").filter((line) => line.trim());
  const status = judge.pass
    ? `<div class="feedback-note success-note"><strong>No error found.</strong><span>Your code matches this task.</span></div>`
    : `<div class="feedback-note error-note"><strong>There is an error.</strong><span>${escapeHtml(nextVisibleIssue(judge))}</span></div>`;
  const html = lines
    .map((line, index) => {
      const text = line.trim();
      const hasIssue = judge.syntaxIssue?.includes(`Line ${index + 1}`);
      return `
        <div class="explain-line ${hasIssue ? "error-line" : ""}">
          <strong>Line ${index + 1}</strong>
          <code>${escapeHtml(text)}</code>
          <span>${escapeHtml(explainLine(text))}</span>
        </div>
      `;
    })
    .join("");
  $("#lineExplanation").innerHTML = `${status}${html || "<p>No code yet.</p>"}`;
}

function nextVisibleIssue(judge) {
  if (judge.syntaxIssue) return makeErrorFriendly(judge.syntaxIssue);
  if (judge.missing.length) return `This task needs: ${judge.missing.join(", ")}. Add that part and run again.`;
  return "Check the task goal and try again.";
}

function explainLine(line) {
  if (line.startsWith("print(")) return "This shows something on the screen.";
  if (/^\w+\s*=/.test(line)) return "This saves a value in a named box, called a variable.";
  if (line.startsWith("if ")) return "This asks a yes/no question. If it is true, the indented code runs.";
  if (line.startsWith("elif ")) return "This asks another question if the first one was false.";
  if (line.startsWith("else")) return "This runs when the earlier question was false.";
  if (line.startsWith("for ")) return "This repeats the indented code a set number of times.";
  if (line.startsWith("while ")) return "This repeats while the condition is still true.";
  if (line.startsWith("def ")) return "This creates a reusable block of code called a function.";
  if (line.startsWith("return ")) return "This sends an answer back from a function.";
  if (line.startsWith("class ")) return "This creates a blueprint for making objects.";
  if (line.includes(".append(")) return "This adds a new item to the end of a list.";
  return "Python reads this line from top to bottom.";
}

function renderAnalytics() {
  const accuracy = state.stats.attempts ? Math.round((state.stats.correct / state.stats.attempts) * 100) : 0;
  const strongest = bestConcept(false);
  const weakest = bestConcept(true);
  $("#analyticsGrid").innerHTML = `
    <span><strong>${accuracy}%</strong><small>Accuracy</small></span>
    <span><strong>${state.stats.solved}</strong><small>Solved</small></span>
    <span><strong>${state.combo}x</strong><small>Combo</small></span>
    <span><strong>${state.streak}</strong><small>Streak</small></span>
    <span><strong>${strongest}</strong><small>Strongest</small></span>
    <span><strong>${weakest}</strong><small>Needs revision</small></span>
  `;
}

function bestConcept(weak) {
  const entries = Object.entries(state.stats.weakConcepts);
  if (!entries.length) return weak ? "None yet" : getPractice().topic;
  entries.sort((a, b) => weak ? b[1] - a[1] : a[1] - b[1]);
  return entries[0][0];
}

function simulatePython(source) {
  const memory = {};
  const output = [];
  const errors = [];
  const lines = source.replace(/\r/g, "").split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    const line = raw.trim();
    if (!line || line.startsWith("#") || line.startsWith("def ") || line.startsWith("class ")) continue;

    const forMatch = line.match(/^for\s+(\w+)\s+in\s+range\((\d+)\):$/);
    if (forMatch) {
      const [, variable, countRaw] = forMatch;
      const count = Number(countRaw);
      const next = lines[i + 1]?.trim();
      if (!next) {
        errors.push(`Line ${i + 1}: loop needs an indented action.`);
        continue;
      }
      for (let n = 0; n < count; n += 1) {
        memory[variable] = n;
        executeSimple(next, memory, output, errors, i + 2);
      }
      i += 1;
      continue;
    }

    const ifMatch = line.match(/^if\s+(.+):$/);
    if (ifMatch) {
      const condition = evaluateExpression(ifMatch[1], memory);
      const next = lines[i + 1]?.trim();
      const elseLine = lines[i + 2]?.trim();
      const elseAction = lines[i + 3]?.trim();
      if (condition && next) executeSimple(next, memory, output, errors, i + 2);
      if (!condition && elseLine === "else:" && elseAction) executeSimple(elseAction, memory, output, errors, i + 4);
      i += elseLine === "else:" ? 3 : 1;
      continue;
    }

    executeSimple(line, memory, output, errors, i + 1);
  }

  return { memory, output, errors };
}

function executeSimple(line, memory, output, errors, lineNumber) {
  if (line.startsWith("return ")) return;
  const printMatch = line.match(/^print\((.*)\)$/);
  if (printMatch) {
    try {
      output.push(String(evaluateExpression(printMatch[1], memory)));
    } catch (error) {
      errors.push(`Line ${lineNumber}: ${error.message}`);
    }
    return;
  }

  const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
  if (assignMatch) {
    try {
      memory[assignMatch[1]] = evaluateExpression(assignMatch[2], memory);
    } catch (error) {
      errors.push(`Line ${lineNumber}: ${error.message}`);
    }
    return;
  }

  if (line.includes("=") && /^\d/.test(line)) {
    errors.push(`Line ${lineNumber}: variable names belong on the left, values on the right.`);
    return;
  }

  errors.push(`Line ${lineNumber}: I can visualize assignments, print(), if/else, and range() loops in this prototype.`);
}

function evaluateExpression(expr, memory) {
  const trimmed = expr.trim();
  if (/^["'].*["']$/.test(trimmed)) return trimmed.slice(1, -1);
  if (/^\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  if (/^\[.*\]$/.test(trimmed)) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => evaluateExpression(item.trim(), memory));
  }
  const indexMatch = trimmed.match(/^(\w+)\[(\d+)\]$/);
  if (indexMatch) return memory[indexMatch[1]]?.[Number(indexMatch[2])];
  const comparison = trimmed.match(/^(.+)\s*(==|!=|>=|<=|>|<)\s*(.+)$/);
  if (comparison) {
    const left = evaluateExpression(comparison[1], memory);
    const right = evaluateExpression(comparison[3], memory);
    return compare(left, right, comparison[2]);
  }
  const math = trimmed.match(/^(.+)\s*([+*])\s*(.+)$/);
  if (math) {
    const left = evaluateExpression(math[1], memory);
    const right = evaluateExpression(math[3], memory);
    return math[2] === "+" ? left + right : left * right;
  }
  if (Object.hasOwn(memory, trimmed)) return memory[trimmed];
  if (trimmed.endsWith(")") && trimmed.includes("(")) {
    return "function call visualized";
  }
  throw new Error(`${trimmed} is not defined yet.`);
}

function compare(left, right, operator) {
  if (operator === "==") return left === right;
  if (operator === "!=") return left !== right;
  if (operator === ">=") return left >= right;
  if (operator === "<=") return left <= right;
  if (operator === ">") return left > right;
  return left < right;
}

function visualizeCode(code) {
  const result = simulatePython(code);
  renderMemoryBank(result.memory);
  $("#outputBox").textContent = result.output.join("\n") || "Watch mode ready";
  $("#runtimeMemory").innerHTML = Object.entries(result.memory)
    .map(([key, value]) => `<span class="memory-item">${key} = ${escapeHtml(JSON.stringify(value))}</span>`)
    .join("");
}

function renderMemoryBank(memory) {
  const entries = Object.entries(memory).slice(0, 4);
  $("#memoryBank").innerHTML =
    entries.length === 0
      ? `<div class="memory-box"><strong>Memory</strong><span>Awaiting code signal</span></div>`
      : entries
          .map(([key, value]) => `<div class="memory-box"><strong>${key}</strong><span>${escapeHtml(JSON.stringify(value))}</span></div>`)
          .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAll() {
  updateHUD();
  renderMissions();
  renderWorlds();
  renderSkillTree();
  renderLesson();
  renderAiLab();
}

function initEvents() {
  document.querySelectorAll(".step").forEach((step) => {
    step.addEventListener("click", () => {
      activeStep = step.dataset.step;
      renderLesson();
    });
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      $("#modeLabel").textContent = `${tab.dataset.mode} Mode`;
      speak(`${tab.dataset.mode} systems armed.`);
    });
  });

  $("#continueBtn").addEventListener("click", () => {
    continueQuest();
  });

  $("#hintBtn").addEventListener("click", () => {
    const practice = getPractice();
    const hint = nextHint(practice, { errors: [] }, { missing: practice.checks });
    speak(hint);
    showToast(hint);
  });

  $("#runBtn").addEventListener("click", runCode);
  $("#saveTaskBtn").addEventListener("click", saveCurrentTask);
  $("#resetBtn").addEventListener("click", resetProgress);
  $("#generateMissionBtn").addEventListener("click", generateAiMission);

  $("#codeEditor").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const editor = event.currentTarget;
    const beforeCursor = editor.value.slice(0, editor.selectionStart);
    const currentLine = beforeCursor.split("\n").pop() ?? "";
    const indent = currentLine.match(/^\s*/)?.[0] ?? "";
    const extra = currentLine.trim().endsWith(":") ? "    " : "";
    event.preventDefault();
    const insert = `\n${indent}${extra}`;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = `${editor.value.slice(0, start)}${insert}${editor.value.slice(end)}`;
    editor.selectionStart = editor.selectionEnd = start + insert.length;
  });

}

function drawStars() {
  const canvas = $("#starfield");
  const ctx = canvas.getContext("2d");
  const stars = Array.from({ length: 130 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.8 + 0.2,
  }));

  function renderStaticStars() {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
      ctx.beginPath();
      ctx.fillStyle = star.r > 1.2 ? "rgba(159,216,192,.5)" : "rgba(141,184,214,.35)";
      ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  addEventListener("resize", renderStaticStars);
  renderStaticStars();
}

drawStars();
initEvents();
renderAll();
