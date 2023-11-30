 // show sales buttons based on bathroom customize
 if (bathrooms > 9) {
    $(".qualified-above-10").show();
  } 
  
  if (bathrooms <= 9 && tax == 'true') {
    $(".unqualified-under-10").show();
    $(".need-help").show();
  }
  
  
  if (bathrooms <= 9 && tax == null) {
    $(".need-help").hide();
    $(".unqualified-under-10").hide();
    $(".qualified-above-10").hide();
    $(".fl-node-qk726h1gwzoa .fl-separator").hide();
  }
  
  
  if (job == 'Student') {
      $(".unqualified-under-10").hide();
      $(".qualified-above-10").hide();
      $(".need-help").hide();
      $(".unqualified-student").show();
  }
  
  
  if (job == 'Patron') {
      $(".unqualified-under-10").hide();
      $(".qualified-above-10").hide();
      $(".unqualified-student").show();
  }
  
  
  if (job == 'Parent') {
      $(".need-help").hide();
  }
  
  
  // Massachusetts

  if (state == 'Massachusetts' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'Massachusetts' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // New Hampshire

  if (state == 'New Hampshire' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'New Hampshire' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // Maine

  if (state == 'Maine' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'Maine' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // Connecticut

  if (state == 'Connecticut' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'Connecticut' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // New Jersey

  if (state == 'New Jersey' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'New Jersey' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // New York

  if (state == 'New York' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'New York' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // DC

  if (state == 'District of Columbia' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'District of Columbia' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // Maryland

  if (state == 'Maryland' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'Maryland' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }

  // Virginia

  if (state == 'Virginia' && bathrooms <=9) {
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id','citronPopup');
      $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href','');
  }

  if (state == 'Virginia' && bathrooms >9) {
      $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
      $('#for_over_10_bathrooms a').attr('href','');
  }