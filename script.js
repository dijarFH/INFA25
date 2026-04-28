// Data Dummy Login
const users = {
    "admin": "admin123",
    "anggota": "kelasA"
};

function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');

    if (users[user] && users[user] === pass) {
        document.getElementById('login-overlay').classList.add('d-none');
        document.getElementById('main-content').classList.remove('d-none');
        
        if (user === 'admin') {
            enableAdminFeatures();
        }
    } else {
        errorMsg.classList.remove('d-none');
    }
}

function enableAdminFeatures() {
    // Menampilkan elemen khusus admin
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(el => el.style.display = 'block');
    console.log("Mode Admin Aktif");
}

function logout() {
    location.reload(); // Reset halaman ke login
}

// Fitur Edit Jadwal Sederhana
function editJadwal() {
    const table = document.getElementById('table-jadwal');
    const newMatkul = prompt("Masukkan Mata Kuliah Baru:");
    if (newMatkul) {
        const row = table.insertRow(-1);
        row.innerHTML = `<td>Baru</td><td>${newMatkul}</td><td>-</td>`;
    }
}