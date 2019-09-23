$(document).ready(function() {
    $('.box').click(function() {
        $(this).toggleClass('ui-selecting');
        var items=$('.ui-selecting');
        if (items.length >0){
        $('#buttdel').removeAttr('disabled', false);
        } else {
            $('#buttdel').attr('disabled', true);
        }
    });

    
    $(function() {
        $( ".sortable" ).sortable({
            placeholder: "highlight"
        });
        $( ".sortable" ).disableSelection();
    });
    
            
    $('#buttdel').click(function() {
        var items=$('.ui-selecting');
        items.remove();
        $('#buttdel').attr('disabled', true);
    });

    $('.lin').click(function(){
        $('.mine2').addClass('bbox div');
    });
    
    $('.col').click(function(){
       $('.mine2').removeClass('bbox div');
    });

    $('.link1').click(function(){
        items = $('.mine2 .box');
        arItems = $.makeArray(items);
        arItems.sort(function(a, b) {
            return $(a).data("sort") - $(b).data("sort")
        });
        $(arItems).appendTo(".mine2");
    }); 
    $('.link2').click(function(){
        items = $('.mine2 .box');
        arItems = $.makeArray(items);
        arItems.sort(function(b, a) {
            return $(a).data("sort") - $(b).data("sort")
        });
        $(arItems).appendTo(".mine2");
    }); 
});