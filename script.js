document.addEventListener('DOMContentLoaded', () => {
  const noteInput = document.getElementById('noteInput');
  const clearBtn = document.getElementById('clearNoteBtn');
  const savedTag = document.getElementById('savedIndicator');

  const STORAGE_KEY = 'quick_notes_content';
  noteInput.value = localStorage.getItem(STORAGE_KEY) || '';

  let timer = null;

  noteInput.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, noteInput.value);
    savedTag.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => {
      savedTag.classList.remove('show');
    }, 1500);
  });

  clearBtn.addEventListener('click', () => {
    noteInput.value = '';
    localStorage.removeItem(STORAGE_KEY);
    savedTag.classList.remove('show');
    noteInput.focus();
  });
});
