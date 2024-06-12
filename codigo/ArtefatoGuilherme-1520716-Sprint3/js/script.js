// Função para carregar os dados do perfil salvo, se existirem
window.onload = function() {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        document.getElementById('inputName').value = profile.name;
        document.getElementById('inputEmail').value = profile.email;
        document.getElementById('inputPhone').value = profile.phone || '';
        document.getElementById('inputAddress').value = profile.address || '';
        document.getElementById('profile-picture').src = profile.picture;
        document.getElementById('profilePicHeader').src = profile.picture;
    }
}

document.getElementById('file-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('profile-picture').src = e.target.result;
        document.getElementById('profilePicHeader').src = e.target.result;
    }
    reader.readAsDataURL(file);
});

// Function to remove profile picture
document.getElementById('removeImage').addEventListener('click', function () {
    document.getElementById('profile-picture').src = '552721.png'; // Set the default placeholder image
    document.getElementById('profilePicHeader').src = '552721.png'; // Set the default placeholder image
});

document.querySelector('.btn-primary').addEventListener('click', function () {
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const phone = document.getElementById('inputPhone').value;
    const address = document.getElementById('inputAddress').value;
    const dateOfBirth = document.getElementById('inputDateOfBirth').value;
    const occupation = document.getElementById('inputOccupation').value;
    const picture = document.getElementById('profile-picture').src;
    
    const profile = { name, email, phone, address, dateOfBirth, occupation, picture };
    
    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Perfil salvo com sucesso!');
});
