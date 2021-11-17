
const addBtn = document.querySelector('#add')

addBtn.addEventListener('click', () => {
    addNewNotes()
})

function addNewNotes() {
    let card = document.createElement('div')
    card.classList.add('note-card')

    card.innerHTML = `
        <div class="note-header">
            <button id="editBtn"><i class="far fa-edit"></i></button>
            <button id="delBtn"><i class="far fa-trash-alt"></i></button>

        </div>
        <div class="note-main">

        </div>
        <textarea class="hidden"></textarea>
    `

    document.body.appendChild(card)

    const editBtn = card.querySelector('#editBtn');
    const textarea = card.querySelector('textarea');
    const note = card.querySelector('.note-main');
    const delBtn = card.querySelector('#delBtn');

    delBtn.addEventListener('click', () => {
        card.remove()
    })

    editBtn.addEventListener('click', () => {
        note.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })

    textarea.addEventListener('input', (e) => {
        const { value } = e.target;

        note.innerHTML = marked(value);
    })

    let allNotes = document.querySelectorAll('.note-main')
    console.log(allNotes)
}

let allNotes = document.querySelectorAll('.note-main')
