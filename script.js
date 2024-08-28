function addUrls() {
  const urlInput = document.getElementById('urlInput').value;
  const urlArray = urlInput.split('\n').filter(url => url.trim() !== '');

  const tableBody = document.querySelector('#urlTable tbody');
  urlArray.forEach(url => {
    const row = document.createElement('tr');
    row.innerHTML = `
                    <td contenteditable="true">${url.trim()}</td>
                    <td><button onclick="removeRow(this)">Remover</button></td>
                `;
    tableBody.appendChild(row);
  });
  document.getElementById('urlInput').value = '';
}

function removeRow(button) {
  const row = button.closest('tr');
  row.remove();
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  if (win) {
    win.focus();
  } else {
    alert('Exibição de popup bloqueado ou falhou ao abrir. Habilite os popups para este site.');
  }
}

function handleDownload(files) {
  files.forEach(url => {
    openInNewTab(url);
  });
}

function downloadAll() {
  const urls = [];
  const rows = document.querySelectorAll('#urlTable tbody tr');

  rows.forEach(row => {
    const url = row.querySelector('td').innerText;
    if (url) {
      urls.push(url);
    }
  });

  if (urls.length > 0) {
    handleDownload(urls)
  } else {
    alert('Sem URLs para baixar!');
  }
}
