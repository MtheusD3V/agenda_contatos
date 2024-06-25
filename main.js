document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Criar uma nova linha na tabela
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Adicionar as células na nova linha
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    // Definir o conteúdo das células
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    // Limpar os campos do formulário
    document.getElementById('contactForm').reset();
});
