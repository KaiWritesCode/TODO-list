const addForm = document.querySelector('#top-form')
const listItems = document.querySelector('#list-items')
const removeForm = document.querySelector('#form-box')
const btn = document.querySelector('.btn')
const status = document.querySelector('#status')

addForm.addEventListener('submit', addItem)
listItems.addEventListener('click', removeItem)


function addItem(e) {
    e.preventDefault()
    const newItem = document.getElementById('add-items').value
    const li = document.createElement('li')
    li.className = 'item'
    li.appendChild(document.createTextNode(newItem))

    const newCheck = document.createElement('button')
    newCheck.className = 'btn'
    newCheck.appendChild(document.createTextNode('✓'))
    li.appendChild(newCheck)
    listItems.appendChild(li)

    const span = document.createElement('span')
    let status = getStatus()
    span.classList.add(status)
    li.insertBefore(span, newCheck)
    listItems.appendChild(li)
}


function removeItem(e) {
    e.preventDefault()
    if (e.target.classList.contains('btn')) {
        if (confirm('Remove Item From List?')) {
            const li = e.target.parentElement
            listItems.removeChild(li)
        }
    }
}

function getStatus() {
    const select = document.getElementById("status")
    let color = select.options[select.selectedIndex].value
    if (color === 'whenever') {
        return 'green'
    } else if (color === 'mid') {
        return 'orange'
    } else if (color === 'urgent') {
        return 'red'
    } else {
        return 'none'
    }
    console.log(test)
}






