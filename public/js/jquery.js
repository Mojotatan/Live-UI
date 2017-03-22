var dayNum = 1;

var dayArr = [{ hotels: [], restaurants: [], activities: []}]

var dayCur = 1;

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
    var content = `<div class="itinerary-item"><span class="title">${selectHotel.text}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`
    $('#my-hotels').append(content)
    drawMarker('hotel', selectHotel.value.split(','))
    $('#my-hotels div:last-child').data('marker',markArr.length - 1)
    dayArr[dayCur - 1].hotels.push({content: content, marker: markArr.length - 1})
    console.log(dayArr[dayCur - 1].hotels)
})

$('#options-panel div:nth-child(2) button').click(function() {
    var selectRestaurant = $('#restaurant-choices option:selected')[0]
    var content = `<div class="itinerary-item"><span class="title">${selectRestaurant.text}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`
    $('#my-restaurants').append(content)
    drawMarker('restaurant', selectRestaurant.value.split(','))
    $('#my-restaurants div:last-child').data('marker',markArr.length - 1)
    dayArr[dayCur - 1].restaurants.push({content: content, marker: markArr.length - 1})
})

$('#options-panel div:nth-child(3) button').click(function() {
    var selectActivity = $('#activity-choices option:selected')[0]
    var content = `<div class="itinerary-item"><span class="title">${selectActivity.text}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`
    $('#my-activities').append(content)
    drawMarker('activity', selectActivity.value.split(','))
    $('#my-activities div:last-child').data('marker',markArr.length - 1)
    dayArr[dayCur - 1].activities.push({content: content, marker: markArr.length - 1})

})

$('#my-hotels').on('click', 'button', (function() {
    dayArr[dayCur - 1].hotels.splice($(this).parent().index(), 1)
    markArr[$(this).parent().data().marker].setMap(null)
    $(this).parent().remove()
})
)

$('#my-restaurants').on('click', 'button', (function() {
    dayArr[dayCur - 1].restaurants.splice($(this).parent().index(), 1)
    markArr[$(this).parent().data().marker].setMap(null)
    $(this).parent().remove()
})
)

$('#my-activities').on('click', 'button', (function() {
    dayArr[dayCur - 1].activities.splice($(this).parent().index(), 1)
    markArr[$(this).parent().data().marker].setMap(null)
    $(this).parent().remove()
})
)

$('#day-add').click(function() {
    dayNum++
    $('#day-add').before('<button class="btn btn-circle day-btn">' + dayNum + '</button>')
    dayArr.push({ hotels: [], restaurants: [], activities: []})
})

$('.day-buttons').on('click', 'button', (function() {
    var day = $(this).text()

    if (day !== "+") {
        $('#daySel').attr('id', '')
        $(this).attr('id', 'daySel')
        dayCur = Number(day)
        setMapOnAll(null)
        $('#my-hotels').children().remove()
        dayArr[dayCur - 1].hotels.forEach(function(obj) {
            $('#my-hotels').append(obj.content)
            markArr[obj.marker].setMap(currentMap)
            $('#my-hotels div:last-child').data('marker', obj.marker)
        })
        $('#my-restaurants').children().remove()
        dayArr[dayCur - 1].restaurants.forEach(function(obj) {
            $('#my-restaurants').append(obj.content)
            markArr[obj.marker].setMap(currentMap)
            $('#my-restaurants div:last-child').data('marker', obj.marker)
        })
        $('#my-activities').children().remove()
        dayArr[dayCur - 1].activities.forEach(function(obj) {
            $('#my-activities').append(obj.content)
            markArr[obj.marker].setMap(currentMap)
            $('#my-activities div:last-child').data('marker', obj.marker)
        })
    }
}))

$('#day-title').on('click', 'button', (function() {
    dayArr.splice(dayCur - 1, 1)
    $(`.day-buttons button:nth-child(${dayNum})`).remove()
    dayNum--
    setMapOnAll(null)
    $('#my-hotels').children().remove()
    dayArr[dayCur - 1].hotels.forEach(function(obj) {
        $('#my-hotels').append(obj.content)
        markArr[obj.marker].setMap(currentMap)
        $('#my-hotels div:last-child').data('marker', obj.marker)
    })
    $('#my-restaurants').children().remove()
    dayArr[dayCur - 1].restaurants.forEach(function(obj) {
        $('#my-restaurants').append(obj.content)
        markArr[obj.marker].setMap(currentMap)
        $('#my-restaurants div:last-child').data('marker', obj.marker)
    })
    $('#my-activities').children().remove()
    dayArr[dayCur - 1].activities.forEach(function(obj) {
        $('#my-activities').append(obj.content)
        markArr[obj.marker].setMap(currentMap)
        $('#my-activities div:last-child').data('marker', obj.marker)
    })
}))