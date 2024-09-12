// New List Addition Functions
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("mainInput");
  const todoList = document.getElementById("listNode");

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();

      // Get the value from the input field
      const todoText = input.querySelector('input[type="text"]').value.trim();

      if (todoText !== "") {
        // Create a new div for the todo item
        const newDiv = document.createElement("div");
        newDiv.className =
          "flex items-center w-full border-b border-gray-100 px-8 p-2";

        // Create the radio button
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "task";
        radioButton.className = "cursor-pointer form-radio text-blue-500 mr-3";

        // Create the input field for the todo text
        const todoInput = document.createElement("input");
        todoInput.type = "text";
        todoInput.value = todoText;
        todoInput.className = "outline-none placeholder:font-josefin p-4 border-none rounded-md w-full h-12 bg-transparent";

        // Append the radio button and input to the new div
        newDiv.appendChild(radioButton);
        newDiv.appendChild(todoInput);

        // Create the bottom hr line
        const hr = document.createElement("hr");
        hr.className = "line border-gray-100";

        // Add the new div and hr to the todo list
        todoList.appendChild(newDiv);
        todoList.appendChild(hr);

        // Clear the input field after adding the todo
        input.querySelector('input[type="text"]').value = "";
      }
    }
  });
});