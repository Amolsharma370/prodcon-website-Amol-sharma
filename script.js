document.getElementById('regForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('confirmation').classList.remove('hidden');
});
