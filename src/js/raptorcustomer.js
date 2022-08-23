var splideCustomer = new Splide( '.splide.splide-customer', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    breakpoints: {
        944: {
          perPage: 2,
        },
        670: {
          perPage: 1,
        },
    }
  } );
  
  splideCustomer.mount();