$(document).on('ready', function() {

var saveBtn = ''
var closeBtn = ''
var inputInfo = ''
$('.editable').on('click', function(){
    $(this).hide()
    inputInfo = $('<textarea rows="5" cols="50" class="info">')
    $(this).after(inputInfo)
    closeBtn = $('<button class="close">Close</button>')
      .css({
        border: '2px solid black',
       })
    $(inputInfo).after(closeBtn)
    saveBtn = $('<button class="save">Save</button>')
        .css({
        border: '2px solid black',
        })
    $(inputInfo).after(saveBtn)
    $('textarea').focus();
});

$('body').on('click', '.close', function(){
    
    $(this).parent().children('.info').hide()
    $(this).parent().children('.editable').show()
    $(this).parent().children('.close').hide()
    $(this).parent().children('.save').hide()
});


$('body').on('click', '.save', function(){
    
    var userInput = $(this).siblings('textarea').val()
    // console.log(userInput);
    
    console.log($(this).siblings('p').html(userInput))
    
    $(this).parent().children('.info').hide()
    $(this).parent().children('.editable').show()
    $(this).parent().children('.close').hide()
    $(this).parent().children('.save').hide()

});



});