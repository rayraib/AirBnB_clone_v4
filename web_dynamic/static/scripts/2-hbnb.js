let url = "http://0.0.0.0:5002/api/v1/status/";
$.get(url, function(data, status) {
  if (status == 'success') {
    $("#api_status").addClass("available");
  }
  else {
    $("api_status").removeClass("available");
  }
});

$(document).ready(function () {
  let amenities = [];
  $('input:checkbox').change(
    function () {
      console.log(this);
      if ($(this).is(':checked')) {
        amenities.push(this);
      } else {
        amenities = amenities.filter(e => e !== this);
      }
      let result = [];
      for (let i = 0; i < amenities.length; i++) {
        let name = $(amenities[i]).attr('data-name');
        result.push(name);
      }
      if (result.length === 0) {
        $('.amenities h4').html('&nbsp;');
      } else {
        $('.amenities h4').text(result.join(', '));
      }
    });
});
