
const oData = {
    "center_id":"4651f37e-735a-4299-a21d-ef2f322f420a",
    "personal_info": {
        "first_name": "test",
        "last_name": "efgh",
        "mobile_phone":
            {
                "country_code":95,
                "number":"7777788888"
            }
        }
}

const dataTest = {
    "center_id":"4651f37e-735a-4299-a21d-ef2f322f420a",
    "personal_info": {
        "first_name": "abcd",
        "last_name": "efgh",
        "mobile_phone": {
            "country_code": 225,
            "number": "7777788888"
        },
        "email":"email@email.com"
    },
    "address_info": {
        "country_id": 225
    }
}

const firstName = document.querySelector('#mce-first_name');
const lastName = document.querySelector('#mce-last_name');
const phoneNumber = document.querySelector('#mce-phone_number');
const email = document.querySelector('#mce-EMAIL');
const subForm = document.querySelector('#subscribe-form');
const subBtn = document.querySelector('#subscribe-btn');

console.log(firstName.value, lastName.value, phoneNumber.value, email.value, subForm.value, subBtn.value);

const subEvent = (e) => {
    e.preventDefault();
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.zenoti.com/v1/guests?address_info=&preferences=&referral=&primary_employee=',
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'apikey <>'
        },
        processData: false,
        data: `{"center_id":"b5ed4fbb-4c05-4195-b313-1320b620224b","personal_info":{"first_name":"${firstName.value}","last_name":"efgh","mobile_phone":{"country_code":95,"number":"7777788888"}}}`
      };
    
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

subForm.addEventListener('submit', (e) => {
    subEvent(e);
})

