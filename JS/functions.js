$(document).ready(function(){
    $(".dropdown").click(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideToggle("400");
            $(this).toggleClass('open');        
        }
    );
});
