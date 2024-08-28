function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
};


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
};

$(document).ready(function() {
    $('#show-header').click(function() {
        $('#header').fadeIn('slow');
    });
});