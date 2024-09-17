// script.js
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('task-list');
    let draggedItem = null;

    list.querySelectorAll('li').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => {
                e.target.classList.add('dragging');
            }, 0);
        });

        item.addEventListener('dragend', (e) => {
            setTimeout(() => {
                draggedItem.classList.remove('dragging');
                draggedItem = null;
            }, 0);
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.target.classList.add('over');
        });

        item.addEventListener('dragleave', (e) => {
            e.target.classList.remove('over');
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            e.target.classList.remove('over');
            if (e.target !== draggedItem && e.target.tagName === 'LI') {
                const allItems = [...list.querySelectorAll('li')];
                const draggedIndex = allItems.indexOf(draggedItem);
                const targetIndex = allItems.indexOf(e.target);
                if (draggedIndex < targetIndex) {
                    list.insertBefore(draggedItem, e.target.nextSibling);
                } else {
                    list.insertBefore(draggedItem, e.target);
                }
            }
        });
    });
