document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("zakupy-form");
    const input = document.getElementById("item-input");
    const list = document.getElementById("zakupy-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addItem(input.value);
        input.value = "";
    });

    function addItem(text) {
        if (text.trim() === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <button class="edit">✏️</button>
                <button class="delete">🗑️</button>
            </div>
        `;

        list.appendChild(li);


        li.querySelector(".edit").addEventListener("click", () => {
            const newText = prompt("Edytuj przedmiot:", text);
            if (newText) li.querySelector("span").textContent = newText;
        });


        li.querySelector(".delete").addEventListener("click", () => {
            li.remove();
        });
    }
});
