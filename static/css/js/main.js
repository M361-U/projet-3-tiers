
function ouvrirModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.add('ouvert');
}
 
function fermerModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.remove('ouvert');
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('ouvert');
  }
});
 
function ouvrirModalStatut(incidentId, titre) {
  document.getElementById('statut-incident-id').value = incidentId;
  document.getElementById('modalStatutTitre').textContent = titre;
  ouvrirModal('modalStatut');
}
 

function choisirRole(btn, role) {
  document.querySelectorAll('.role-btn').forEach(function(b) {
    b.classList.remove('actif');
  });
  btn.classList.add('actif');
  var input = document.getElementById('role-input');
  if (input) input.value = role;
}
 

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.ouvert').forEach(function(modal) {
      modal.classList.remove('ouvert');
    });
  }
});