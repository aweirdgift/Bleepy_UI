$(".apply-theme").on( "click",function(){
    var targetTheme = $(this).val()
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
});