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
    var word = $('#input-text').val().toLowerCase();
    $('#table').text('')
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x = "";
        response.forEach(element => {
            if(element.id.toLowerCase().includes(word)||element.name.toLowerCase().includes(word)||element.gender.toLowerCase().includes(word)||element.class.toLowerCase().includes(word)){
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
            else if(element.name == word){
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
            // else if(element.gender.includes($('#input-text').val())){
            //     console.log(element.id,element.name)
            //     x +="<tr>"+
            //     "<td>"+element.id+"</td>"+
            //     "<td>"+element.name+"</td>"+
            //     "<td>"+element.gender+"</td>"+
            //     "<td>"+element.age+"</td>"+
            //     "<td>"+element.class+"</td>"+
            //     "<td>"+element.Atk+"</td>"+
            //     "<td>"+element.MAtk+"</td>"+
            //     "<td>"+element.Def+"</td>"+
            //     "<td>"+element.SPD+"</td>"+
            //     "</tr>";
            //     $('#datatable').html(x);
            // }
            // else if(element.age.includes($('#input-text').val())){
            //     console.log(element.id,element.name)
            //     x +="<tr>"+
            //     "<td>"+element.id+"</td>"+
            //     "<td>"+element.name+"</td>"+
            //     "<td>"+element.gender+"</td>"+
            //     "<td>"+element.age+"</td>"+
            //     "<td>"+element.class+"</td>"+
            //     "<td>"+element.Atk+"</td>"+
            //     "<td>"+element.MAtk+"</td>"+
            //     "<td>"+element.Def+"</td>"+
            //     "<td>"+element.SPD+"</td>"+
            //     "</tr>";
            //     $('#datatable').html(x);
            // }
            // else if(element.class.includes($('#input-text').val())){
            //     console.log(element.id,element.name)
            //     x +="<tr>"+
            //     "<td>"+element.id+"</td>"+
            //     "<td>"+element.name+"</td>"+
            //     "<td>"+element.gender+"</td>"+
            //     "<td>"+element.age+"</td>"+
            //     "<td>"+element.class+"</td>"+
            //     "<td>"+element.Atk+"</td>"+
            //     "<td>"+element.MAtk+"</td>"+
            //     "<td>"+element.Def+"</td>"+
            //     "<td>"+element.SPD+"</td>"+
            //     "</tr>";
            //     $('#datatable').html(x);
            // }
        });
    });
});

// $('#search-btn').on('click',function(){
//     $.getJSON("data.json",function(data){
//         var search = $("#search-btn").val();
//         var regex = new RegExp(search, 'i');
//         var output;
//         $.each(data, function(key,val){
//             if((val.id.search(regex) != -1) || (val.name.search(regex) != -1)){
//                 output += "<tr>";
//                 output += "<td id='"+key+"'>"+val.id+"</td>";
//                 output += "<td id='"+key+"'>"+val.name+"</td>";
//                 output += "<td id='"+key+"'>"+val.gender+"</td>";
//                 output += "<td id='"+key+"'>"+val.age+"</td>";
//                 output += "<td id='"+key+"'>"+val.class+"</td>";
//                 output += "<td id='"+key+"'>"+val.Atk+"</td>";
//                 output += "<td id='"+key+"'>"+val.MAtk+"</td>";
//                 output += "<td id='"+key+"'>"+val.Def+"</td>";
//                 output += "<td id='"+key+"'>"+val.SPD+"</td>";
//                 output += "</tr>";
//             }
//         });
//         $('#datatable').html(output);
//     })
// })