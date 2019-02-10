$(document).ready(function() {
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var t = "";
        response.forEach(element => {
            console.log(element.id, element.name);
            t +="<tr>"+
            "<td>"+element.id+"</td>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.gender+"</td>"+
            "<td>"+element.age+"</td>"+
            "<td>"+element.class+"</td>"+
            "<td>"+element.Atk+"</td>"+
            "<td>"+element.MAtk+"</td>"+
            "<td>"+element.Def+"</td>"+
            "<td>"+element.SPD+"</td>" +
            "</tr>";
            $('#datatable').html(t);
        });
    });
});

$('#search-btn').click(function() {
    $('#table').text('')
    let val = $(this).val()
    val = val.toLowerCase()
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x = "";
        response.forEach(element => {
            if(element.id.includes($('#input-text').val())){
                console.log(element.id,element.name)
                x +="<tr>"+
                "<td>"+element.id+"</td>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.gender+"</td>"+
                "<td>"+element.age+"</td>"+
                "<td>"+element.class+"</td>"+
                "<td>"+element.Atk+"</td>"+
                "<td>"+element.MAtk+"</td>"+
                "<td>"+element.Def+"</td>"+
                "<td>"+element.SPD+"</td>"+
                "</tr>";
                $('#datatable').html(x);
            }
            else if(element.name.includes($('#input-text').val())){
                console.log(element.id,element.name)
                x +="<tr>"+
                "<td>"+element.id+"</td>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.gender+"</td>"+
                "<td>"+element.age+"</td>"+
                "<td>"+element.class+"</td>"+
                "<td>"+element.Atk+"</td>"+
                "<td>"+element.MAtk+"</td>"+
                "<td>"+element.Def+"</td>"+
                "<td>"+element.SPD+"</td>"+
                "</tr>";
                $('#datatable').html(x);
            }
            else if(element.gender.includes($('#input-text').val())){
                console.log(element.id,element.name)
                x +="<tr>"+
                "<td>"+element.id+"</td>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.gender+"</td>"+
                "<td>"+element.age+"</td>"+
                "<td>"+element.class+"</td>"+
                "<td>"+element.Atk+"</td>"+
                "<td>"+element.MAtk+"</td>"+
                "<td>"+element.Def+"</td>"+
                "<td>"+element.SPD+"</td>"+
                "</tr>";
                $('#datatable').html(x);
            }
            else if(element.age.includes($('#input-text').val())){
                console.log(element.id,element.name)
                x +="<tr>"+
                "<td>"+element.id+"</td>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.gender+"</td>"+
                "<td>"+element.age+"</td>"+
                "<td>"+element.class+"</td>"+
                "<td>"+element.Atk+"</td>"+
                "<td>"+element.MAtk+"</td>"+
                "<td>"+element.Def+"</td>"+
                "<td>"+element.SPD+"</td>"+
                "</tr>";
                $('#datatable').html(x);
            }
            else if(element.class.includes($('#input-text').val())){
                console.log(element.id,element.name)
                x +="<tr>"+
                "<td>"+element.id+"</td>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.gender+"</td>"+
                "<td>"+element.age+"</td>"+
                "<td>"+element.class+"</td>"+
                "<td>"+element.Atk+"</td>"+
                "<td>"+element.MAtk+"</td>"+
                "<td>"+element.Def+"</td>"+
                "<td>"+element.SPD+"</td>"+
                "</tr>";
                $('#datatable').html(x);
            }
        });
    });
});
