var options = document.getElementsByClassName('options');
for (const item of options) {
    for (const child of item.children) {
        if (child.tagName === 'SELECT') {
            var lastBtn = null
            for (const option of child.options) {
                var btn = makeOptionButton(option.innerText, option.value)
                btn.addEventListener("click", (e) => { handleOptionButtonClicked(e.target, child) })
                item.appendChild(btn)
                if (lastBtn == null) { item.prepend(btn) } else { item.insertBefore(btn, lastBtn.nextSibling) }
                lastBtn = btn;
            }
            item.parentNode.insertBefore(child, item)
            child.style.display = "none"
            item.classList.add("pills")
        }
    }
}

function handleOptionButtonClicked(optionBtn, select) {
    optionBtn.classList.add("selected")
    select.value = optionBtn.value
}

function makeOptionButton(text, value) {
    var btn = document.createElement("button")
    btn.value = value
    btn.type = "button"
    btn.innerText = text
    return btn
}