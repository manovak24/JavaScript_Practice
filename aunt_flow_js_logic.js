history.pushState(null, "", location.href.split("hs_context")[0]);

const numberBathrooms = 9;
// const role = 'Operations%2FFacilities';
const role = 'Distributor';
const citronState = 'Massachusetts';
const taxExempt = false;

const url = `https://goauntflow.com/results/?how_many_bathrooms_does_your_organization_have_=${numberBathrooms}&how_many_people_with_periods_does_your_organization_have_=10&firstname=Ashli&lastname=Nixon&email=ashli%40meetbasis.co&phone=6146206266&which_title_best_describes_your_role_=${role}&0-2%2Fname=Test&country_region___citron_leads=United%20States&state___citron_leads=${citronState}`;

if(taxExempt) {
    console.log(url + '&are_you_tax_exempt_=true');
} else {
    console.log(url);
}


const job = 'Distributor';
const state = 'Michigan';
const bathrooms = 10;
const tax = null;

// show sales buttons based on bathroom customize
if (bathrooms > 9 && job != 'Distributor') {
    // $(".qualified-above-10").show();
    // console.log("meet with sales (10+ bathrooms OR distributor)")
}

if (bathrooms <= 9 && tax == 'true' && job != 'Distributor') {
    // $(".unqualified-under-10").show();
    // $(".need-help").show();
    // console.log("meet with sales (Less than 10 bathrooms AND tax exempt)")
}


if (bathrooms <= 9 && tax == null && job != 'Distributor') {
    // $(".need-help").hide();
    // $(".unqualified-under-10").hide();
    // $(".qualified-above-10").hide();
    // $(".fl-node-qk726h1gwzoa .fl-separator").hide();
    // console.log('Hide meet with sales')
}


if (job == 'Student') {
    //   $(".unqualified-under-10").hide();
    //   $(".qualified-above-10").hide();
    //   $(".need-help").hide();
    //   $(".unqualified-student").show();
    // console.log('Advocate');
}


if (job == 'Patron') {
    //   $(".unqualified-under-10").hide();
    //   $(".qualified-above-10").hide();
    //   $(".unqualified-student").show();
    // console.log('Advocate');
}


if (job == 'Parent') {
    //   $(".need-help").hide();
    // console.log('Advocate');
}

// Massachusetts

if (state == 'Massachusetts' && bathrooms <= 9 && job != 'Distributor') {
    // $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    // $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
    // console.log('10 or fewer Citron popup');
}

if (state == 'Massachusetts' && bathrooms > 9 && job != 'Distributor') {
    // $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    // $('#for_over_10_bathrooms a').attr('href', '');
    // console.log('10 or more Citron popup');
}

// New Hampshire

if (state == 'New Hampshire' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'New Hampshire' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

// Maine

if (state == 'Maine' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'Maine' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

// Connecticut

if (state == 'Connecticut' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'Connecticut' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

// New Jersey

if (state == 'New Jersey' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'New Jersey' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

// New York

if (state == 'New York' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'New York' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

// DC

if (state == 'District of Columbia' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'District of Columbia' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

// Maryland

if (state == 'Maryland' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'Maryland' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

// Virginia

if (state == 'Virginia' && bathrooms <= 9) {
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
}

if (state == 'Virginia' && bathrooms > 9) {
    $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    $('#for_over_10_bathrooms a').attr('href', '');
}

if(job === "Distributor" && bathrooms > 9) {
    // console.log("DIST - meet with sales (10+ bathrooms OR distributor)")
    // console.log("change meeting link")
}

if(job === "Distributor" && bathrooms <= 9) {
    // console.log("DIST - meet with sales (Less than 10 bathrooms AND tax exempt)")
    // console.log("change meeting link")
}




// // look at the URL and parse bathrooms and menstruators from the form entry
// // https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
// let webParams = (new URL(document.location)).searchParams;
// let getBathrooms = parseInt(webParams.get('how_many_bathrooms_does_your_organization_have_')); 
// let getMenstruators = parseInt(webParams.get('how_many_people_with_periods_does_your_organization_have_'));  
// let job = webParams.get('which_title_best_describes_your_role_');  
// let tax = webParams.get('are_you_tax_exempt_');  
// let state = webParams.get('state___citron_leads');

// jQuery(function($){
    
    
//     $( document ).ready(function() {
//       // only allow one checkbox at a time
//         $('input[type="checkbox"]').on('change', function() {
//             $('input[type="checkbox"]').not(this).prop('checked', false);
//         });
    
//       // set up variables for calculations
//       var bathrooms = getBathrooms; // # of bathrooms from URL - formatted with thousands separator
//       var menstruators = getMenstruators; // # of menstruators from URL - formatted with thousands separator
//       var numberRefills = (getMenstruators * 5);
//       var numberRefillsFormatted = numberRefills.toString().replace(/B(?=(d{3})+(?!d))/g, ","); // # of refills needed = number of menstruators * 5 products - formatted with thousands separator
    	
//       // cases of 500 pads needed for 1 year for Model P
//       // if less than 500 pads, show 1 case
//       // round up to nearest whole # because we cant split a case
//       if (numberRefills > 500) {
//         var numberPadsOnly = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberPadsOnly = 1;
//       }
    	
//       // cases of 500 pads needed for 1 year fir Model E or R
//       // if less than 500 pads, show 1 case
//       // divide by two since we can split amount needed between pads and tampons
//       if (numberRefills > 500) {
//         var numberPads = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberPads = 1;
//       }
    	
//       // cases of 500 tampons needed for 1 year for Model E or R
//       // if less than 500 tampons, show 1 case
//       // divide by two since we can split amount needed between pads and tampons
//       if (numberRefills > 500) {
//       var numberTampons = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberTampons = 1;
//       }
      
    	
//       //var numberPads = numberRefills / 500 / 2; // cases of 500 pads needed for 1 year for Model E or R
//       //var numberTampons = numberRefills / 500 / 2; // cases of 500 pads needed for 1 year for Model E or R
//       var tamponsSubtotal = 135.00 * numberTampons; // price of one case of tampons * number needed
//       var padsSubtotal = 135.00 * numberPads; // price of one case of pads * number needed
//       var padsOnlySubtotal = 135.00 * numberPadsOnly; // price of one case of pads * number needed
//       var dispensersSubtotalModelP = 300.00 * bathrooms; // cost of a Model P * number needed (1 in each bathroom)
//       var dispensersSubtotalModelE = 300.00 * bathrooms; // cost of a Model E * number needed (1 in each bathroom)
//       var dispensersSubtotalModelR = 450.00 * bathrooms; // cost of a Model R * number needed (1 in each bathroom)
//       var dispensersSubtotalModelO = 450.00 * bathrooms; // cost of a Model O * number needed (1 in each bathroom)
//       var totalModelP = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelP + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelE = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelE + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelR = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelR + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelO = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelO + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
      
//       // swap hyperlinks for customize + add to cart links
      
//       $(".atc-model-p a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B37270327132336%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B37270327132336%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B37270327132336%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B37270327132336%5D%5Bquantity%5D="+bathrooms+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-e a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B31904866009157%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B31904866009157%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B31904866009157%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B31904866009157%5D%5Bquantity%5D="+bathrooms+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-r a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B41638155583664%5D%5Bquantity%5D="+bathrooms+"&variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-o a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B42049774878896%5D%5Bquantity%5D="+bathrooms+"&variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
    
    
//       // show the calculations on screen
//       $('.bathrooms').replaceWith(bathrooms);
//       $('.menstruators').replaceWith(menstruators);
//       $('.number-refills').replaceWith(numberRefillsFormatted);
//       $('.tampons-calc').replaceWith(numberTampons);
//       $('.pads-calc').replaceWith(numberPads);
//       $('.pads-only-calc').replaceWith(numberPadsOnly);
//       $('.pads-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(padsSubtotal));
//       $('.tampons-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tamponsSubtotal));
//       $('.pads-only-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(padsOnlySubtotal));
//       $('#total-model-p').replaceWith(totalModelP);
//       $('#total-model-e').replaceWith(totalModelE);
//       $('#total-model-r').replaceWith(totalModelR);
//       $('#total-model-o').replaceWith(totalModelO);
      
      
//       // show hide various elements until a model selected
//       $('.dispensers-price').hide();
//       $('.refills-row').hide();
//       $('.total').hide();
//       $('.add-to-cart-calc-button').hide();
//       $('.qualified-above-10').hide();
//       $('.unqualified-under-10').hide();
//       $('.unqualified-student').hide();
    
      
//       $('#model-p').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads").hide();
//         $('.total').hide();
//         $('.dispensers-price').hide();
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-subtotal-o').html('');
//         $(".refills-row.pads-only").show();
//         $('.dispensers-price-p').show();
//         $('.dispensers-subtotal-p').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelP));
//         $('.total-model-p').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-p .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-p').show();
//       });
      
//       $('#model-e').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-price').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-subtotal-o').html('');
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-e').show();
//         $('.dispensers-subtotal-e').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelE));
//         $('.total-model-e').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-e .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-e').show();
//       });
      
//       $('#model-r').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-o').html('');
//         $('.dispensers-price').hide();
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-r').show();
//         $('.dispensers-subtotal-r').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelR));
//         $('.total-model-r').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-r .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-r').show();
//       });
    
//       $('#model-o').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-price').hide();
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-o').show();
//         $('.dispensers-subtotal-o').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelO));
//         $('.total-model-o').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-o .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-o').show();
//       });
      
      
//       // show sales buttons based on bathroom customize
//       if (bathrooms > 9) {
//         $(".qualified-above-10").show();
//       } 
      
//       if (bathrooms <= 9 && tax == 'true') {
//         $(".unqualified-under-10").show();
//         $(".need-help").show();
//       }
      
      
//       if (bathrooms <= 9 && tax == null) {
//         $(".need-help").hide();
//         $(".unqualified-under-10").hide();
//         $(".qualified-above-10").hide();
//         $(".fl-node-qk726h1gwzoa .fl-separator").hide();
//       }
      
      
//       if (job == 'Student') {
//           $(".unqualified-under-10").hide();
//           $(".qualified-above-10").hide();
//           $(".need-help").hide();
//           $(".unqualified-student").show();
//       }
      
      
//       if (job == 'Patron') {
//           $(".unqualified-under-10").hide();
//           $(".qualified-above-10").hide();
//           $(".unqualified-student").show();
//       }
      
      
//       if (job == 'Parent') {
//           $(".need-help").hide();
//       }
      
      
//       // Massachusetts

//       if (state == 'Massachusetts' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Massachusetts' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New Hampshire

//       if (state == 'New Hampshire' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New Hampshire' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Maine

//       if (state == 'Maine' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Maine' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Connecticut

//       if (state == 'Connecticut' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Connecticut' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New Jersey

//       if (state == 'New Jersey' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New Jersey' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New York

//       if (state == 'New York' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New York' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // DC

//       if (state == 'District of Columbia' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'District of Columbia' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Maryland

//       if (state == 'Maryland' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Maryland' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Virginia

//       if (state == 'Virginia' && bathrooms <=9) {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Virginia' && bathrooms >9) {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

     
      
      
//     });
// });






// BACKUP 12.16.23


// // look at the URL and parse bathrooms and menstruators from the form entry
// // https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
// let webParams = (new URL(document.location)).searchParams;
// let getBathrooms = parseInt(webParams.get('how_many_bathrooms_does_your_organization_have_')); 
// let getMenstruators = parseInt(webParams.get('how_many_people_with_periods_does_your_organization_have_'));  
// let job = webParams.get('which_title_best_describes_your_role_');  
// let tax = webParams.get('are_you_tax_exempt_');  
// let state = webParams.get('state___citron_leads');

// jQuery(function($){
    
    
//     $( document ).ready(function() {
//       // only allow one checkbox at a time
//         $('input[type="checkbox"]').on('change', function() {
//             $('input[type="checkbox"]').not(this).prop('checked', false);
//         });
    
//       // set up variables for calculations
//       var bathrooms = getBathrooms; // # of bathrooms from URL - formatted with thousands separator
//       var menstruators = getMenstruators; // # of menstruators from URL - formatted with thousands separator
//       var numberRefills = (getMenstruators * 5);
//       var numberRefillsFormatted = numberRefills.toString().replace(/B(?=(d{3})+(?!d))/g, ","); // # of refills needed = number of menstruators * 5 products - formatted with thousands separator
    	
//       // cases of 500 pads needed for 1 year for Model P
//       // if less than 500 pads, show 1 case
//       // round up to nearest whole # because we cant split a case
//       if (numberRefills > 500) {
//         var numberPadsOnly = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberPadsOnly = 1;
//       }
    	
//       // cases of 500 pads needed for 1 year fir Model E or R
//       // if less than 500 pads, show 1 case
//       // divide by two since we can split amount needed between pads and tampons
//       if (numberRefills > 500) {
//         var numberPads = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberPads = 1;
//       }
    	
//       // cases of 500 tampons needed for 1 year for Model E or R
//       // if less than 500 tampons, show 1 case
//       // divide by two since we can split amount needed between pads and tampons
//       if (numberRefills > 500) {
//       var numberTampons = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberTampons = 1;
//       }
      
    	
//       //var numberPads = numberRefills / 500 / 2; // cases of 500 pads needed for 1 year for Model E or R
//       //var numberTampons = numberRefills / 500 / 2; // cases of 500 pads needed for 1 year for Model E or R
//       var tamponsSubtotal = 135.00 * numberTampons; // price of one case of tampons * number needed
//       var padsSubtotal = 135.00 * numberPads; // price of one case of pads * number needed
//       var padsOnlySubtotal = 135.00 * numberPadsOnly; // price of one case of pads * number needed
//       var dispensersSubtotalModelP = 300.00 * bathrooms; // cost of a Model P * number needed (1 in each bathroom)
//       var dispensersSubtotalModelE = 300.00 * bathrooms; // cost of a Model E * number needed (1 in each bathroom)
//       var dispensersSubtotalModelR = 450.00 * bathrooms; // cost of a Model R * number needed (1 in each bathroom)
//       var dispensersSubtotalModelO = 450.00 * bathrooms; // cost of a Model O * number needed (1 in each bathroom)
//       var totalModelP = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelP + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelE = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelE + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelR = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelR + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelO = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelO + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
      
//       // swap hyperlinks for customize + add to cart links
      
//       $(".atc-model-p a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B37270327132336%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B37270327132336%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B37270327132336%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B37270327132336%5D%5Bquantity%5D="+bathrooms+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-e a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B31904866009157%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B31904866009157%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B31904866009157%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B31904866009157%5D%5Bquantity%5D="+bathrooms+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-r a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B41638155583664%5D%5Bquantity%5D="+bathrooms+"&variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-o a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B42049774878896%5D%5Bquantity%5D="+bathrooms+"&variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
    
    
//       // show the calculations on screen
//       $('.bathrooms').replaceWith(bathrooms);
//       $('.menstruators').replaceWith(menstruators);
//       $('.number-refills').replaceWith(numberRefillsFormatted);
//       $('.tampons-calc').replaceWith(numberTampons);
//       $('.pads-calc').replaceWith(numberPads);
//       $('.pads-only-calc').replaceWith(numberPadsOnly);
//       $('.pads-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(padsSubtotal));
//       $('.tampons-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tamponsSubtotal));
//       $('.pads-only-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(padsOnlySubtotal));
//       $('#total-model-p').replaceWith(totalModelP);
//       $('#total-model-e').replaceWith(totalModelE);
//       $('#total-model-r').replaceWith(totalModelR);
//       $('#total-model-o').replaceWith(totalModelO);
      
      
//       // show hide various elements until a model selected
//       $('.dispensers-price').hide();
//       $('.refills-row').hide();
//       $('.total').hide();
//       $('.add-to-cart-calc-button').hide();
//       $('.qualified-above-10').hide();
//       $('.unqualified-under-10').hide();
//       $('.unqualified-student').hide();
    
      
//       $('#model-p').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads").hide();
//         $('.total').hide();
//         $('.dispensers-price').hide();
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-subtotal-o').html('');
//         $(".refills-row.pads-only").show();
//         $('.dispensers-price-p').show();
//         $('.dispensers-subtotal-p').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelP));
//         $('.total-model-p').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-p .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-p').show();
//       });
      
//       $('#model-e').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-price').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-subtotal-o').html('');
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-e').show();
//         $('.dispensers-subtotal-e').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelE));
//         $('.total-model-e').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-e .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-e').show();
//       });
      
//       $('#model-r').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-o').html('');
//         $('.dispensers-price').hide();
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-r').show();
//         $('.dispensers-subtotal-r').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelR));
//         $('.total-model-r').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-r .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-r').show();
//       });
    
//       $('#model-o').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-price').hide();
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-o').show();
//         $('.dispensers-subtotal-o').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelO));
//         $('.total-model-o').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-o .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-o').show();
//       });
      
      
// // show sales buttons based on bathroom customize
//       if (bathrooms > 9 || job == 'Distributor') {
//         $(".qualified-above-10").show();
//       } 
      
//       if (bathrooms <= 9 && tax == 'true' && job != 'Distributor') {
//         $(".unqualified-under-10").show();
//         $(".need-help").show();
//       }
      
      
//       if (bathrooms <= 9 && tax == null && job != 'Distributor') {
//         $(".need-help").hide();
//         $(".unqualified-under-10").hide();
//         $(".qualified-above-10").hide();
//         $(".fl-node-qk726h1gwzoa .fl-separator").hide();
//       }
      
      
//       if (job == 'Student') {
//           $(".unqualified-under-10").hide();
//           $(".qualified-above-10").hide();
//           $(".need-help").hide();
//           $(".unqualified-student").show();
//       }
      
      
//       if (job == 'Patron') {
//           $(".unqualified-under-10").hide();
//           $(".qualified-above-10").hide();
//           $(".unqualified-student").show();
//       }
      
      
//       if (job == 'Parent') {
//           $(".need-help").hide();
//       }
      
      
//       // Massachusetts

//       if (state == 'Massachusetts' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Massachusetts' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New Hampshire

//       if (state == 'New Hampshire' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New Hampshire' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Maine

//       if (state == 'Maine' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Maine' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Connecticut

//       if (state == 'Connecticut' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Connecticut' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New Jersey

//       if (state == 'New Jersey' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New Jersey' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New York

//       if (state == 'New York' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New York' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // DC

//       if (state == 'District of Columbia' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'District of Columbia' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Maryland

//       if (state == 'Maryland' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Maryland' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Virginia

//       if (state == 'Virginia' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Virginia' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }
      
//     });
// });




// New solution 12.16.23


//   if (bathrooms > 9 && job != 'Distributor') {
//     $(".qualified-above-10").show();
//   } 
  
//   if (bathrooms <= 9 && tax == 'true' && job != 'Distributor') {
//     $(".unqualified-under-10").show();
//     $(".need-help").show();
//   }
  
  
//   if (bathrooms <= 9 && tax == null && job != 'Distributor') {
//     $(".need-help").hide();
//     $(".unqualified-under-10").hide();
//     $(".qualified-above-10").hide();
//     $(".fl-node-qk726h1gwzoa .fl-separator").hide();
//   }
  
  
//   if (job == 'Student') {
//       $(".unqualified-under-10").hide();
//       $(".qualified-above-10").hide();
//       $(".need-help").hide();
//       $(".unqualified-student").show();
//   }
  
  
//   if (job == 'Patron') {
//       $(".unqualified-under-10").hide();
//       $(".qualified-above-10").hide();
//       $(".unqualified-student").show();
//   }
  
  
//   if (job == 'Parent') {
//       $(".need-help").hide();
//   }
  
  
//   // Massachusetts

//   if (state == 'Massachusetts' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'Massachusetts' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // New Hampshire

//   if (state == 'New Hampshire' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'New Hampshire' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // Maine

//   if (state == 'Maine' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'Maine' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // Connecticut

//   if (state == 'Connecticut' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'Connecticut' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // New Jersey

//   if (state == 'New Jersey' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'New Jersey' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // New York

//   if (state == 'New York' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'New York' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // DC

//   if (state == 'District of Columbia' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'District of Columbia' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // Maryland

//   if (state == 'Maryland' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'Maryland' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // Virginia

//   if (state == 'Virginia' && bathrooms <=9 && job != 'Distributor') {
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//       $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//   }

//   if (state == 'Virginia' && bathrooms >9 && job != 'Distributor') {
//       $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//       $('#for_over_10_bathrooms a').attr('href','');
//   }

//   // Logic that handles form submitted with Distributor as role
//     if(job === "Distributor" && bathrooms > 9) {
//         $(".qualified-above-10").show();
//         $('#for_over_10_bathrooms a').attr('href','https://meetings.hubspot.com/katie-bryant/distributor-round-robin-');
//     }

//     if(job === "Distributor" && bathrooms <= 9) {
//         $(".unqualified-under-10").show();
//         $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','https://meetings.hubspot.com/katie-bryant/distributor-round-robin-');
//     }



// backup 12/20/23


// // look at the URL and parse bathrooms and menstruators from the form entry
// // https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
// let webParams = (new URL(document.location)).searchParams;
// let getBathrooms = parseInt(webParams.get('how_many_bathrooms_does_your_organization_have_')); 
// let getMenstruators = parseInt(webParams.get('how_many_people_with_periods_does_your_organization_have_'));  
// let job = webParams.get('which_title_best_describes_your_role_');  
// let tax = webParams.get('are_you_tax_exempt_');  
// let state = webParams.get('state___citron_leads');

// jQuery(function($){
    
    
//     $( document ).ready(function() {
//       // only allow one checkbox at a time
//         $('input[type="checkbox"]').on('change', function() {
//             $('input[type="checkbox"]').not(this).prop('checked', false);
//         });
    
//       // set up variables for calculations
//       var bathrooms = getBathrooms; // # of bathrooms from URL - formatted with thousands separator
//       var menstruators = getMenstruators; // # of menstruators from URL - formatted with thousands separator
//       var numberRefills = (getMenstruators * 5);
//       var numberRefillsFormatted = numberRefills.toString().replace(/B(?=(d{3})+(?!d))/g, ","); // # of refills needed = number of menstruators * 5 products - formatted with thousands separator
    	
//       // cases of 500 pads needed for 1 year for Model P
//       // if less than 500 pads, show 1 case
//       // round up to nearest whole # because we cant split a case
//       if (numberRefills > 500) {
//         var numberPadsOnly = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberPadsOnly = 1;
//       }
    	
//       // cases of 500 pads needed for 1 year fir Model E or R
//       // if less than 500 pads, show 1 case
//       // divide by two since we can split amount needed between pads and tampons
//       if (numberRefills > 500) {
//         var numberPads = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberPads = 1;
//       }
    	
//       // cases of 500 tampons needed for 1 year for Model E or R
//       // if less than 500 tampons, show 1 case
//       // divide by two since we can split amount needed between pads and tampons
//       if (numberRefills > 500) {
//       var numberTampons = Math.round(numberRefills / 500);
//       } 
//       else {
//     	  var numberTampons = 1;
//       }
      
    	
//       //var numberPads = numberRefills / 500 / 2; // cases of 500 pads needed for 1 year for Model E or R
//       //var numberTampons = numberRefills / 500 / 2; // cases of 500 pads needed for 1 year for Model E or R
//       var tamponsSubtotal = 150.00 * numberTampons; // price of one case of tampons * number needed
//       var padsSubtotal = 150.00 * numberPads; // price of one case of pads * number needed
//       var padsOnlySubtotal = 150.00 * numberPadsOnly; // price of one case of pads * number needed
//       var dispensersSubtotalModelP = 315.00 * bathrooms; // cost of a Model P * number needed (1 in each bathroom)
//       var dispensersSubtotalModelE = 315.00 * bathrooms; // cost of a Model E * number needed (1 in each bathroom)
//       var dispensersSubtotalModelR = 465.00 * bathrooms; // cost of a Model R * number needed (1 in each bathroom)
//       var dispensersSubtotalModelO = 465.00 * bathrooms; // cost of a Model O * number needed (1 in each bathroom)
//       var totalModelP = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelP + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelE = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelE + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelR = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelR + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
//       var totalModelO = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelO + tamponsSubtotal + padsSubtotal); // dispensers + refills = total, formatted in USD
      
//       // swap hyperlinks for customize + add to cart links
      
//       $(".atc-model-p a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B37270327132336%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B37270327132336%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B37270327132336%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B37270327132336%5D%5Bquantity%5D="+bathrooms+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-e a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B31904866009157%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B31904866009157%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B31904866009157%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B31904866009157%5D%5Bquantity%5D="+bathrooms+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-r a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B41638155583664%5D%5Bquantity%5D="+bathrooms+"&variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
      
//       $(".atc-model-o a").attr("href", "https://shop.goauntflow.com/apps/rebuy/cart?variants%5B42049774878896%5D%5Bquantity%5D="+bathrooms+"&variants%5B29461303754821%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B29461303754821%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B29461303754821%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Cart&variants%5B29461303754821%5D%5Bquantity%5D="+numberTampons+"&variants%5B41883647279280%5D%5Bproperties%5D%5B_source%5D=Rebuy&variants%5B41883647279280%5D%5Bproperties%5D%5B_widget_id%5D=33163&variants%5B41883647279280%5D%5Bproperties%5D%5B_attribution%5D=Rebuy%20Smart%20Links&variants%5B41883647279280%5D%5Bquantity%5D="+numberPads+"&clear_cart=yes&landing_page=shopify_checkout&smart_cart_show=no");
    
    
//       // show the calculations on screen
//       $('.bathrooms').replaceWith(bathrooms);
//       $('.menstruators').replaceWith(menstruators);
//       $('.number-refills').replaceWith(numberRefillsFormatted);
//       $('.tampons-calc').replaceWith(numberTampons);
//       $('.pads-calc').replaceWith(numberPads);
//       $('.pads-only-calc').replaceWith(numberPadsOnly);
//       $('.pads-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(padsSubtotal));
//       $('.tampons-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tamponsSubtotal));
//       $('.pads-only-subtotal').replaceWith(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(padsOnlySubtotal));
//       $('#total-model-p').replaceWith(totalModelP);
//       $('#total-model-e').replaceWith(totalModelE);
//       $('#total-model-r').replaceWith(totalModelR);
//       $('#total-model-o').replaceWith(totalModelO);
      
      
//       // show hide various elements until a model selected
//       $('.dispensers-price').hide();
//       $('.refills-row').hide();
//       $('.total').hide();
//       $('.add-to-cart-calc-button').hide();
//       $('.qualified-above-10').hide();
//       $('.unqualified-under-10').hide();
//       $('.unqualified-student').hide();
    
      
//       $('#model-p').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads").hide();
//         $('.total').hide();
//         $('.dispensers-price').hide();
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-subtotal-o').html('');
//         $(".refills-row.pads-only").show();
//         $('.dispensers-price-p').show();
//         $('.dispensers-subtotal-p').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelP));
//         $('.total-model-p').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-p .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-p').show();
//       });
      
//       $('#model-e').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-price').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-subtotal-o').html('');
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-e').show();
//         $('.dispensers-subtotal-e').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelE));
//         $('.total-model-e').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-e .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-e').show();
//       });
      
//       $('#model-r').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-o').html('');
//         $('.dispensers-price').hide();
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-r').show();
//         $('.dispensers-subtotal-r').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelR));
//         $('.total-model-r').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-r .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-r').show();
//       });
    
//       $('#model-o').click(function() { 
//         $('.model').removeClass("selected");
//         $(this).addClass("selected");
//         $(".refills-row.tampons").hide();
//         $(".refills-row.pads-only").hide();
//         $('.total').hide();
//         $('.dispensers-subtotal-p').html('');
//         $('.dispensers-subtotal-e').html('');
//         $('.dispensers-subtotal-r').html('');
//         $('.dispensers-price').hide();
//         $(".refills-row.pads").show();
//         $(".refills-row.tampons").show();
//         $('.dispensers-price-o').show();
//         $('.dispensers-subtotal-o').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dispensersSubtotalModelO));
//         $('.total-model-o').show();
//         $('.check-circle').removeClass('fill');
//         $('#model-o .check-circle').addClass('fill');
//         $('.add-to-cart-calc-button').hide();
//         $('.atc-model-o').show();
//       });
      
      
// // show sales buttons based on bathroom customize
//       if (bathrooms > 9 && job != 'Distributor') {
//         $(".qualified-above-10").show();
//       } 
      
//       if (bathrooms <= 9 && tax == 'true' && job != 'Distributor') {
//         $(".unqualified-under-10").show();
//         $(".need-help").show();
//       }
      
      
//       if (bathrooms <= 9 && tax == null && job != 'Distributor') {
//         $(".need-help").hide();
//         $(".unqualified-under-10").hide();
//         $(".qualified-above-10").hide();
//         $(".fl-node-qk726h1gwzoa .fl-separator").hide();
//       }
      
      
//       if (job == 'Student') {
//           $(".unqualified-under-10").hide();
//           $(".qualified-above-10").hide();
//           $(".need-help").hide();
//           $(".unqualified-student").show();
//       }
      
      
//       if (job == 'Patron') {
//           $(".unqualified-under-10").hide();
//           $(".qualified-above-10").hide();
//           $(".unqualified-student").show();
//       }
      
      
//       if (job == 'Parent') {
//           $(".need-help").hide();
//       }
      
      
//       // Massachusetts

//       if (state == 'Massachusetts' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Massachusetts' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New Hampshire

//       if (state == 'New Hampshire' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New Hampshire' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Maine

//       if (state == 'Maine' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Maine' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Connecticut

//       if (state == 'Connecticut' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Connecticut' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New Jersey

//       if (state == 'New Jersey' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New Jersey' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // New York

//       if (state == 'New York' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'New York' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // DC

//       if (state == 'District of Columbia' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'District of Columbia' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Maryland

//       if (state == 'Maryland' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Maryland' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Virginia

//       if (state == 'Virginia' && bathrooms <=9 && job != 'Distributor') {
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
//       }

//       if (state == 'Virginia' && bathrooms >9 && job != 'Distributor') {
//           $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
//           $('#for_over_10_bathrooms a').attr('href','');
//       }

//       // Logic that handles form submitted with Distributor as role
      
//       if (job === "Distributor" && bathrooms > 9) {
//           $(".qualified-above-10").show();
//           $('#for_over_10_bathrooms a').attr('href','https://meetings.hubspot.com/katie-bryant/distributor-round-robin-');
//       }

//       if (job === "Distributor" && bathrooms <= 9) {
//           $(".unqualified-under-10").show();
//           $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','https://meetings.hubspot.com/katie-bryant/distributor-round-robin-');
//       }
     
     
      
      
//     });

// });