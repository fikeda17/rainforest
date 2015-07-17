$(document).on('ready page:load', function(){
  $('search-form').submit(function(event){
    event.preventDefault();
    var searchValue = $('#search').val()

    $.getScript('/products?search=' + searchValue);
    });
  var nextPageUrl;

  $(window).scroll(function(e){
    var $window = $(window);
    var bottomOfWindow = $window.scrollTop() + $window.height();
    var distanceFromBottom = $(document).height() - bottomOfWindow;
    var proposedNextPageUrl = $('.page > a[rel=next]').attr('href');

    if( distanceFromBottom <= 100 && (nextPageUrl !== proposedNextPageUrl) ){
      nextPageUrl = proposedNextPageUrl;
      console.log('near the bottom');

    $.ajax({
      url: nextPageUrl,
      type: 'GET',
      dataType: 'script'
      // success: function(result) {
      //   $('#products').append(result);
      // }
    })
    }

    // var distanceFromBottom = $('.pagination span.next').children().attr('href');
    //  if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
    //   $('.pagination').text('Fetching more products...');
    //   return $.getScript(url);
    //   }
    });
});

//1. When user scroll near the bottom of teh page
//2. Send an AJAX request to fecth next set
//3. Use the response to update the page
//4. DOn´t load more if we are at the end 



