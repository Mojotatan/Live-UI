hotels.forEach(function(hotel) {
    $('#hotel-choices').append(`<option value="${hotel.place.location}">${hotel.name}</option>`)
    // $('#hotel-choices').append('<option value="' + hotel.name + '">' + hotel.name + '</option>')
})

restaurants.forEach(function(restaurant) {
    $('#restaurant-choices').append(`<option value="${restaurant.place.location}">${restaurant.name}</option>`)
})

activities.forEach(function(activity) {
    $('#activity-choices').append(`<option value="${activity.place.location}">${activity.name}</option>`)
})


$('#options-panel div:nth-child(1) button').click(function() {
    var selectHotel = $('#hotel-choices option:selected')[0]
    $('#my-hotels').append(`<div class="itinerary-item"><span class="title">${selectHotel.text}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`)
    drawMarker('hotel', selectHotel.value.split(','))
})

$('#options-panel div:nth-child(2) button').click(function() {
    var selectRestaurant = $('#restaurant-choices option:selected')[0]
    $('#my-restaurants').append(`<div class="itinerary-item"><span class="title">${selectRestaurant.text}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`)
    drawMarker('restaurant', selectRestaurant.value.split(','))
})

$('#options-panel div:nth-child(3) button').click(function() {
    var selectActivity = $('#activity-choices option:selected')[0]
    $('#my-activities').append(`<div class="itinerary-item"><span class="title">${selectActivity.text}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`)
    drawMarker('activity', selectActivity.value.split(','))
    $(fasdflhaj).data(markArr.length - 1)
})

$('#itinerary').on('click', 'button', (function() {
    $(this).parent().remove()
})
)