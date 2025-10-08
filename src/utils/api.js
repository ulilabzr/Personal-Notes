const BASE_URL = 'https://notes-api.dicoding.dev/v1';

function getAccessToken() {
  return localStorage.getItem('accessToken') || '';
}

function putAccessToken(token) {
  if (token) localStorage.setItem('accessToken', token);
  else localStorage.removeItem('accessToken');
}

let loadingHooks = null;
export function attachLoadingHooks(hooks) { loadingHooks = hooks; }

async function fetchWithAuth(path, options = {}) {
  const token = getAccessToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  loadingHooks?.begin?.();
  const response = await fetch(`${BASE_URL}${path}`, { ...options, headers });
  const body = await response.json().catch(() => ({}));
  if (!response.ok || body.status !== 'success') {
    const message = body.message || 'Request failed';
    loadingHooks?.end?.();
    throw new Error(message);
  }
  loadingHooks?.end?.();
  return body;
}

// Auth
async function register({ name, email, password }) {
  const res = await fetchWithAuth('/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { Authorization: undefined },
  });
  return res;
}

async function login({ email, password }) {
  const res = await fetchWithAuth('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { Authorization: undefined },
  });
  const token = res.data.accessToken;
  putAccessToken(token);
  return token;
}

async function getUserLogged() {
  const res = await fetchWithAuth('/users/me');
  return res.data;
}

function logout() {
  putAccessToken('');
}

// Notes
async function getNotes() {
  const res = await fetchWithAuth('/notes');
  return res.data;
}

async function getArchivedNotes() {
  const res = await fetchWithAuth('/notes/archived');
  return res.data;
}

async function getNote(id) {
  const res = await fetchWithAuth(`/notes/${id}`);
  return res.data;
}

async function addNote({ title, body }) {
  const res = await fetchWithAuth('/notes', {
    method: 'POST',
    body: JSON.stringify({ title, body }),
  });
  return res.data;
}

async function deleteNote(id) {
  await fetchWithAuth(`/notes/${id}`, { method: 'DELETE' });
}

async function archiveNote(id) {
  await fetchWithAuth(`/notes/${id}/archive`, { method: 'POST' });
}

async function unarchiveNote(id) {
  await fetchWithAuth(`/notes/${id}/unarchive`, { method: 'POST' });
}

export {
  // token helpers
  getAccessToken,
  putAccessToken,
  // auth
  register,
  login,
  getUserLogged,
  logout,
  // notes
  getNotes,
  getArchivedNotes,
  getNote,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
};
