// Get elements
const emailButton = document.getElementById("userEmail");
const menuOptions = document.getElementById("menuOptions");
const upgradeButton = document.querySelector(".upgradeAccount button");
const popUpWindow = document.querySelector(".popUpWindow");
const popUpContent = document.querySelector(".popUpContent");

// Arrays and variables
let showLeftSideButton;
let allArray = [];
let allArrayNames = [];
let currentChatArray = null;

// Function to toggle the menu display
const toggleMenu = () => {
  menuOptions.classList.toggle("show");
};

// Event listeners
emailButton.addEventListener("click", toggleMenu);
document.addEventListener('click', (event) => {
  if (!emailButton.contains(event.target) && !menuOptions.contains(event.target)) {
    menuOptions.classList.remove('show');
  }
});

// Function to show the pop-up window
const showPopUp = () => {
  popUpWindow.style.display = "block";
};

// Function to hide the pop-up window
const hidePopUp = () => {
  popUpWindow.style.display = "none";
};

// Event listeners for pop-up
upgradeButton.addEventListener("click", showPopUp);
popUpWindow.querySelector(".closeButton").addEventListener("click", hidePopUp);
document.addEventListener("click", (event) => {
  if (!popUpContent.contains(event.target) && event.target !== upgradeButton) {
    hidePopUp();
  }
});

// Function to toggle the left side area
const toggleLeftSide = () => {
  const leftSide = document.querySelector(".leftSide");
  const container3 = document.querySelector(".container3");
  const showLeftSideButton = document.getElementById("showLeftSideButton");
  const toggleButton = document.getElementById("toggleButton");

  leftSide.classList.toggle("hidden");
  container3.classList.toggle("expandedContainer");

  if (leftSide.classList.contains("hidden")) {
    showLeftSideButton.style.display = "block";
    toggleButton.style.display = "none";
    container3.style.width = "100%";
  } else {
    showLeftSideButton.style.display = "none";
    toggleButton.style.display = "block";
    container3.style.width = "75%";
  }
};

// Event listeners for left side toggle buttons
document.getElementById("showLeftSideButton").addEventListener("click", toggleLeftSide);
document.getElementById("toggleButton").addEventListener("click", toggleLeftSide);

// Function to generate a random array name
const generateRandomArrayName = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let arrayName = "";
  for (let i = 0; i < 10; i++) {
    arrayName += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return arrayName;
};

// Function to generate random Lorem text response
const generateRandomResponse = () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// Function to create a new chat array
const createNewChatArray = () => {
  const currentChatArrayName = generateRandomArrayName();
  currentChatArray = { arrayName: currentChatArrayName, messages: [] };

  allArray.push(currentChatArray);
  allArrayNames.push(currentChatArrayName);

  const questionList = document.querySelector(".questionList");
  const newButton = document.createElement("button");
  newButton.innerHTML = `<span class="arrayIcon">&#128172;</span> ${currentChatArrayName}`;
  newButton.addEventListener("click", () => showChatArray(currentChatArrayName));
  questionList.appendChild(newButton);
};

// Function to add a message to the chat area
const addMessageToChat = (messageObj) => {
  const chatArea = document.getElementById("chattingArea");
  const chatList = document.createElement("ul");
  chatList.classList.add("chatList");

  const questionItem = document.createElement("li");
  questionItem.innerHTML = `<span class="question">Question : </span>  ${messageObj.question}`;
  chatList.appendChild(questionItem);

  const answerItem = document.createElement("li");
  answerItem.innerHTML = `<span>Answer : </span> ${messageObj.answer}`;
  chatList.appendChild(answerItem);

  chatArea.appendChild(chatList);
};

// Function to handle user input and generate random response
const handleUserInput = () => {
  const inputBox = document.getElementById("input-box");
  const userQuestion = inputBox.value.trim();

  if (userQuestion !== "") {
    if (!currentChatArray) {
      createNewChatArray();
    }

    const randomResponse = generateRandomResponse();
    const messageObj = { question: userQuestion, answer: randomResponse };

    currentChatArray.messages.push(messageObj);
    addMessageToChat(messageObj);

    inputBox.value = "";
  }
};

// Event listeners for user input
document.getElementById("search-button").addEventListener("click", handleUserInput);
document.getElementById("input-box").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleUserInput();
  }
});

// Function to handle "New Chat" button click
const handleNewChat = () => {
  clearChatArea();
  currentChatArray = null;
};

// Event listener for "New Chat" button click
document.getElementById("newChatButton").addEventListener("click", handleNewChat);

// Function to show the chat array when a button is clicked
const showChatArray = (arrayName) => {
  currentChatArray = allArray.find((item) => item.arrayName === arrayName);
  updateChatDisplay();

  const buttons = document.querySelectorAll(".questionList button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  const currentArrayButton = buttons.find((button) => button.textContent.includes(arrayName));
  currentArrayButton.classList.add("active");
};

// Function to update the chat display in the chattingArea
const updateChatDisplay = () => {
  const chatArea = document.getElementById("chattingArea");
  chatArea.innerHTML = "";

  if (currentChatArray) {
    currentChatArray.messages.forEach((messageObj) => {
      const chatList = document.createElement("ul");
      chatList.classList.add("chatList");

      const questionItem = document.createElement("li");
      questionItem.innerHTML = `<span class="question">Question : </span>  ${messageObj.question}`;
      chatList.appendChild(questionItem);

      const answerItem = document.createElement("li");
      answerItem.innerHTML = `<span>Answer : </span> ${messageObj.answer}`;
      chatList.appendChild(answerItem);

      chatArea.appendChild(chatList);
    });
  }
};

// Function to clear the chat area
const clearChatArea = () => {
  const chatArea = document.getElementById("chattingArea");
  chatArea.innerHTML = "";
};
