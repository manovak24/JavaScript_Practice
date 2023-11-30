const job = 'test';
const state = 'Massachusetts';
const bathrooms = 5;
const tax = 'true';

// show sales buttons based on bathroom customize
if (bathrooms > 9 || job == 'Distributor') {
    // $(".qualified-above-10").show();
    console.log("meet with sales (10+ bathrooms OR distributor)")
}

if (bathrooms <= 9 && tax == 'true' && job != 'Distributor') {
    // $(".unqualified-under-10").show();
    // $(".need-help").show();
    console.log("meet with sales (Less than 10 bathrooms AND tax exempt)")
}


if (bathrooms <= 9 && tax == null && job != 'Distributor') {
    // $(".need-help").hide();
    // $(".unqualified-under-10").hide();
    // $(".qualified-above-10").hide();
    // $(".fl-node-qk726h1gwzoa .fl-separator").hide();
    console.log('Hide meet with sales')
}


if (job == 'Student') {
    //   $(".unqualified-under-10").hide();
    //   $(".qualified-above-10").hide();
    //   $(".need-help").hide();
    //   $(".unqualified-student").show();
    console.log('Advocate');
}


if (job == 'Patron') {
    //   $(".unqualified-under-10").hide();
    //   $(".qualified-above-10").hide();
    //   $(".unqualified-student").show();
    console.log('Advocate');
}


if (job == 'Parent') {
    //   $(".need-help").hide();
    console.log('Advocate');
}

// Massachusetts

if (state == 'Massachusetts' && bathrooms <= 9 && job != 'Distributor') {
    // $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('id', 'citronPopup');
    // $('#For_10_or_fewer_bathrooms_that_are_tax_exempt a').attr('href', '');
    console.log('10 or fewer Citron popup');
}

if (state == 'Massachusetts' && bathrooms > 9 && job != 'Distributor') {
    // $('#for_over_10_bathrooms a').attr('id', 'citronPopup');
    // $('#for_over_10_bathrooms a').attr('href', '');
    console.log('10 or more Citron popup');
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