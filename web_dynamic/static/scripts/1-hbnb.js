$( document ).ready(function () {
    let amenities = []
    $('input:checkbox').change(
        function(){
            if ($(this).is(':checked')){
                amenities.push(this)
            } else {
                function remove(amenities, this) {
                    return amenities.filter(e => e !== this);
            }
        });
    let result = []
    for (let i = 0; i < amenities.length; i++) {
        let obj = JSON.stringify(amenities[i]);
        result.push(obj)
    }
    $('.amenties h4').replaceWith(result)
});
