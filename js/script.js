document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const spaContents = document.querySelectorAll('.spa-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get the target spa ID
            showSpa(targetId);
        });
    });

    function showSpa(id) {
        spaContents.forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(id).classList.remove('hidden');
    }
});
