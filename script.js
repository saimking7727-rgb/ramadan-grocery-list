// Step 1: Get elements
const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

// Step 2: Button click event
button.addEventListener("click", function() {

    const itemText = input.value.trim();

    // Prevent empty item
    if (itemText === "") {
        return;
    }

    // Step 3: Create new <li> element
    const li = document.createElement("li");

    // Step 4: Add Bootstrap class dynamically
    li.className = "list-group-item";

    // Step 5: Add text inside <li>
    li.textContent = itemText;

    // Step 6: Attach <li> to <ul>
    list.appendChild(li);

    // Step 7: Clear input
    input.value = "";
});