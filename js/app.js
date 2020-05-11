document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


  var caracteristicas = $('#caracteristicas').offset().top,
      imagenes = $('#fotos').offset().top,
      clientes = $('#clientes').offset().top,
      precios = $('#precios').offset().top,
      comentarios = $('#review').offset().top,
      contactos = $('#contactos').offset().top;

      $('#btn-caracteristicas').on('click', function(e){
        e.preventDefault;
        $('html, body').animate({
            scrollTop: caracteristicas
        }, 500);
    });

    $('#btn-imagenes').on('click', function(e){
      e.preventDefault;
      $('html, body').animate({
          scrollTop: imagenes
      }, 500);
  });

  $('#btn-clientes').on('click', function(e){
    e.preventDefault;
    $('html, body').animate({
        scrollTop: clientes
    }, 500);
  });

  $('#btn-precios').on('click', function(e){
    e.preventDefault;
    $('html, body').animate({
        scrollTop: precios
    }, 500);
  });

  $('#btn-comentarios').on('click', function(e){
    e.preventDefault;
    $('html, body').animate({
        scrollTop: comentarios
    }, 500);
  });

  $('#btn-contactos').on('click', function(e){
    e.preventDefault;
    $('html, body').animate({
        scrollTop: contactos
    }, 500);
  });
