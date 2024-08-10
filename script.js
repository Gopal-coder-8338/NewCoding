function handleAddClick(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var form = document.getElementById('addForm');
    var type = form.querySelector('input[name="select"]:checked').value;
    var name = form.querySelector('#name-input').value;

    var forthTable = document.getElementById('forthTable');
    var newRow = document.createElement('tr');

    var directoryName = document.createElement('th');
    directoryName.style.display = 'grid';
    directoryName.innerHTML = `
        ${name}
        <div>
            <span class="bi bi-book"> 0</span>
            <span class="bi bi-folder"> 0</span>
        </div>
    `;
    
    var buttonsCell = document.createElement('th');
    buttonsCell.innerHTML = `
        <button class="btn btn-danger"><span class="bi bi-trash"></span></button>
        <button title="No. of folder: 0 ,No. of file: 0" class="btn btn-primary"><span class="bi bi-info-circle"></span></button>
    `;

    newRow.appendChild(directoryName);
    newRow.appendChild(buttonsCell);

    forthTable.querySelector('table tbody').appendChild(newRow);

    // Optionally clear the form
    form.reset();
}

function toggleTableVisibility(id) {
    var table = document.getElementById(id);
    table.style.display = table.style.display === "none" ? "block" : "none";
}

function firstAdd() {
    toggleTableVisibility("secondTable");
}

function secondAdd() {
    toggleTableVisibility("thirdTable");
}

function thirdClick() {
    toggleTableVisibility("forthTable");
}

function deleteTable(id) {
    var table = document.getElementById(id);
    if (confirm('Are you sure you want to delete all?')) {
        table.remove();
    }
}

function firstDelete() {
    deleteTable("secondTable");
}

function secondDelete() {
    deleteTable("thirdTable");
}

function thirdDelete() {
    deleteTable("forthTable");
}