$(document).ready(function () {
  $(".bot_hamburguer").click(function(){
    if($("#menu").is(':visible')){
      $("#menu").hide();
      $("#content").addClass('col-md-12').addClass('col-12').removeClass('col-md-10').removeClass('col-10');;
    }
    else{
      $("#menu").show();
      $("#content").removeClass('col-md-12').removeClass('col-12').addClass('col-md-10').addClass('col-10');;
    }
  })

  $(".gatilho").click(function(){
    $("#tipo_gatilho").val($(this).attr('rel'));
    $(".gatilho").removeClass('gatilho_ativo');
    $(this).addClass('gatilho_ativo');
  })

  $(".ver_template").click(function(){
    $(".template_content").hide();
    $("#"+$(this).attr("rel")).toggle();
  })

  $(".seleciona_template").click(function(e){
    $(".template_content").hide()
    $(".template_selecionado").html("Template selecionado:<br><strong>"+$(this).text()+"</strong>");
    $("#template").val($(this).attr('rel'));
    $("#bloco1").show();
    $("#bloco2").hide();
  })

  $('#datatable').DataTable({
    searching: false,
    ordering:  false,
    info:false,
    paging:false
  });

  $(".template_selecionado").click(function(){
    if($("#bloco1").is(':visible')){
      $("#bloco2").show();
      $("#bloco1").hide();
    }else{
      $("#bloco1").show();
      $("#bloco2").hide();
    }
  })

  var table = new DataTable('#datatable2', {
      language: {
          url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/pt-BR.json',
      },
  });
});
