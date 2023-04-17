
// const oData = {
//     "center_id":"4651f37e-735a-4299-a21d-ef2f322f420a",
//     "personal_info": {
//         "first_name": "test",
//         "last_name": "efgh",
//         "mobile_phone":
//             {
//                 "country_code":95,
//                 "number":"7777788888"
//             }
//         }
// }

// const dataTest = {
//     "center_id":"4651f37e-735a-4299-a21d-ef2f322f420a",
//     "personal_info": {
//         "first_name": "abcd",
//         "last_name": "efgh",
//         "mobile_phone": {
//             "country_code": 225,
//             "number": "7777788888"
//         },
//         "email":"email@email.com"
//     },
//     "address_info": {
//         "country_id": 225
//     }
// }

// const firstName = document.querySelector('#mce-first_name');
// const lastName = document.querySelector('#mce-last_name');
// const phoneNumber = document.querySelector('#mce-phone_number');
// const email = document.querySelector('#mce-EMAIL');
// const subForm = document.querySelector('#subscribe-form');
// const subBtn = document.querySelector('#subscribe-btn');

// console.log(firstName.value, lastName.value, phoneNumber.value, email.value, subForm.value, subBtn.value);

// const subEvent = (e) => {
//     e.preventDefault();
//     const settings = {
//         async: true,
//         crossDomain: true,
//         url: 'https://api.zenoti.com/v1/guests?address_info=&preferences=&referral=&primary_employee=',
//         method: 'POST',
//         headers: {
//           accept: 'application/json',
//           'content-type': 'application/json',
//           Authorization: 'apikey <>'
//         },
//         processData: false,
//         data: `{"center_id":"b5ed4fbb-4c05-4195-b313-1320b620224b","personal_info":{"first_name":"${firstName.value}","last_name":"efgh","mobile_phone":{"country_code":95,"number":"7777788888"}}}`
//       };
    
//       $.ajax(settings).done(function (response) {
//         console.log(response);
//       });
// }

// subForm.addEventListener('submit', (e) => {
//     subEvent(e);
// })



let centerObj = {
  "centers": [
    {
      "id": "e9fc5ef6-49dc-4ade-8dba-416d197ca9d2",
      "code": "14128016",
      "name": "The W Nail Bar Bridge Park",
      "display_name": "The W Nail Bar Bridge Park",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 40.102163492088,
        "longitude": -83.1140519924465,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "98 N Hight Street",
        "address_2": "",
        "city": "Dublin",
        "zip_code": "43017"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102719",
          "display_number": "(380) 210-2719"
        },
        "phone_2": null,
        "email": ""
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "85eada7d-2eb1-4d2a-830d-cd2190405bdc",
      "code": "14111600",
      "name": "The W Nail Bar Bottleworks",
      "display_name": "The W Nail Bar Bottleworks",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 49,
        "code": "US18",
        "name": "Indiana",
        "short_name": "IN"
      },
      "location": {
        "lattitude": 39.7790882360516,
        "longitude": -86.1434072617456,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "850 Massachusetts Ave",
        "address_2": "Suite 105",
        "city": "Indianapolis",
        "zip_code": "46204"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3177494892",
          "display_number": "(317) 749-4892"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2000",
          "offline_start_time": "800",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "46ef4010-dff6-4596-9ed8-a22127fd964c",
      "code": "14125635",
      "name": "The W Nail Bar DSW Dublin",
      "display_name": "The W Nail Bar DSW Dublin",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 40.1005677860563,
        "longitude": -83.0888491029062,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "3704 W Dublin Grandville Road",
        "address_2": "",
        "city": "Columbus",
        "zip_code": "43235"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102521",
          "display_number": "(380) 210-2521"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "1100",
          "end_time": "1900",
          "offline_start_time": "1100",
          "offline_end_time": "1900",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "48023944-3de2-49ef-b1f0-1e42ef2bd452",
      "code": "14125627",
      "name": "The W Nail Bar DSW Easton",
      "display_name": "The W Nail Bar DSW Easton",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 40.0517877794143,
        "longitude": -82.9246573740726,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "370 Easton Market",
        "address_2": "",
        "city": "Columbus",
        "zip_code": "43219"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102524",
          "display_number": "(380) 210-2524"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "1100",
          "end_time": "1900",
          "offline_start_time": "1100",
          "offline_end_time": "1900",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "c5cda680-c130-4790-bea9-e7ff8a8b8841",
      "code": "14125310",
      "name": "The W Nail Bar Fishers",
      "display_name": "The W Nail Bar Fishers",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 49,
        "code": "US18",
        "name": "Indiana",
        "short_name": "IN"
      },
      "location": {
        "lattitude": 39.9591707995522,
        "longitude": -86.0128320437012,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "11680 Commerical Drive",
        "address_2": "Suite 700",
        "city": "Fishers",
        "zip_code": "46038"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102374",
          "display_number": "(380) 210-2374"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2000",
          "offline_start_time": "800",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "94487019-dde4-4bda-a0b1-6df324c9c734",
      "code": "14125624",
      "name": "The W Nail Bar German Village",
      "display_name": "The W Nail Bar German Village",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 39.9397523612109,
        "longitude": -82.9902726850409,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "216 Thurman Ave",
        "address_2": "",
        "city": "Columbus",
        "zip_code": "43206"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "6149283488",
          "display_number": "(614) 928-3488"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "570bffac-8c01-4d9b-967b-191c79980871",
      "code": "14111602",
      "name": "The W Nail Bar New Albany",
      "display_name": "The W Nail Bar New Albany",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 40.0807315556816,
        "longitude": -82.8134205761484,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "160 W Main St",
        "address_2": "Suite E",
        "city": "New Albany",
        "zip_code": "43054"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102535",
          "display_number": "(380) 210-2535"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "b6c509f5-7b8e-45e9-9cc4-5a65f10b52b7",
      "code": "14125625",
      "name": "The W Nail Bar DSW Polaris",
      "display_name": "The W Nail Bar DSW Polaris",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 40.1431328613376,
        "longitude": -82.9878860838681,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "1200 Polaris Pkwy",
        "address_2": "",
        "city": "Columbus",
        "zip_code": "43240"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102436",
          "display_number": "(380) 210-2436"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "1100",
          "end_time": "1800",
          "offline_start_time": "1100",
          "offline_end_time": "1900",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "0e6951b2-36ab-4447-a637-2a0b3ef92345",
      "code": "14124855",
      "name": "The W Nail Bar Powell",
      "display_name": "The W Nail Bar Powell",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 40.1579274508293,
        "longitude": -83.0786489291916,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "16 Crossing Street",
        "address_2": "Unit D",
        "city": "Powell",
        "zip_code": "43065"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102433",
          "display_number": "(380) 210-2433"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "547b3be3-0ff5-4bab-8829-ea3f603d0356",
      "code": "14131617",
      "name": "The W Nail Bar Rivers Edge",
      "display_name": "The W Nail Bar Rivers Edge",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 49,
        "code": "US18",
        "name": "Indiana",
        "short_name": "IN"
      },
      "location": {
        "lattitude": 39.9084897931092,
        "longitude": -86.097611473933,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "4026 E 82nd Street",
        "address_2": "Suite A7",
        "city": "Indianapolis",
        "zip_code": "46250"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802103079",
          "display_number": "(380) 210-3079"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2000",
          "offline_start_time": "800",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "1000",
          "end_time": "2000",
          "offline_start_time": "1000",
          "offline_end_time": "2000",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "68810b93-1343-49dd-a9f8-e6b8617e2276",
      "code": "14125629",
      "name": "The W Nail Bar Short North",
      "display_name": "The W Nail Bar Short North",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 39.9817277926629,
        "longitude": -83.0042583493973,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "946 N Hight Street",
        "address_2": "",
        "city": "Columbus",
        "zip_code": "43201"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102719",
          "display_number": "(380) 210-2719"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    },
    {
      "id": "4651f37e-735a-4299-a21d-ef2f322f420a",
      "code": "14128031",
      "name": "The W Nail Bar Westgate",
      "display_name": "The W Nail Bar Westgate",
      "description": "",
      "online_booking_start_date": "2022-12-23T00:00:00",
      "enable_parallel_services_at_center": true,
      "country": {
        "id": 225,
        "code": "US",
        "name": "United States",
        "phone_code": 1,
        "nationality": "American"
      },
      "state": {
        "id": 70,
        "code": "US39",
        "name": "Ohio",
        "short_name": "OH"
      },
      "location": {
        "lattitude": 41.4612461822748,
        "longitude": -81.8496837353503,
        "time_zone": {
          "id": 15,
          "name": "(UTC-05:00) Eastern Time (US & Canada)",
          "standard_name": "Eastern Standard Time",
          "symbol": "Eastern Standard Time"
        }
      },
      "currency": {
        "id": 148,
        "name": "United States Dollar",
        "code": "USD",
        "symbol": "0024"
      },
      "address_info": {
        "address_1": "3131 Westgate Mall",
        "address_2": "",
        "city": "Fairview",
        "zip_code": "44126"
      },
      "settings": null,
      "contact_info": {
        "phone_1": {
          "country_id": 225,
          "number": "3802102414",
          "display_number": "(380) 210-2414"
        },
        "phone_2": null,
        "email": "info@thewnailbar.com"
      },
      "working_hours": [
        {
          "day_of_week": "Monday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Tuesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Wednesday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Thursday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Friday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "1000",
          "off_peak_end_time": "1700"
        },
        {
          "day_of_week": "Saturday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        },
        {
          "day_of_week": "Sunday",
          "start_time": "800",
          "end_time": "2100",
          "offline_start_time": "800",
          "offline_end_time": "2100",
          "off_peak_start_time": "0",
          "off_peak_end_time": "0"
        }
      ],
      "additional_info": {
        "service_tax_no": null,
        "tin": null,
        "vat": null,
        "cst": null,
        "can_book": false,
        "collect_feedback": null,
        "services_available": false,
        "available_services": null,
        "unavailable_services": null,
        "is_add_ons_available": false,
        "feedback_link": null,
        "feedback_label": null,
        "is_global_tokenization_supported": false,
        "is_auto_pay_enabled_at_center": false,
        "cancellation_fee_duration": 24,
        "is_center_amenities_enabled": false,
        "center_amenities": "{\"centerAmenitiesSection\":[],\"order\":[]}"
      },
      "culture_code_at_center": "en-US",
      "is_fbe_enabled": false
    }
  ]
}

// console.log(centerObj.centers[0].id);

let arr = [];

for(let item in centerObj.centers) {
    let obj = {};
    obj['center_name'] = centerObj.centers[item].name;
    obj['center_id'] = centerObj.centers[item].id;
    obj['location'] = centerObj.centers[item].address_info;
    arr.push(obj)
    // console.log(centerObj.centers[item])
}

// console.log(arr);


const consolidateArr = [
    {
      center_name: 'The W Nail Bar Bridge Park',
      center_id: 'e9fc5ef6-49dc-4ade-8dba-416d197ca9d2',
      location: {
        address_1: '98 N Hight Street',
        address_2: '',
        city: 'Dublin',
        zip_code: '43017'
      }
    },
    {
      center_name: 'The W Nail Bar Bottleworks',
      center_id: '85eada7d-2eb1-4d2a-830d-cd2190405bdc',
      location: {
        address_1: '850 Massachusetts Ave',
        address_2: 'Suite 105',
        city: 'Indianapolis',
        zip_code: '46204'
      }
    },
    {
      center_name: 'The W Nail Bar DSW Dublin',
      center_id: '46ef4010-dff6-4596-9ed8-a22127fd964c',
      location: {
        address_1: '3704 W Dublin Grandville Road',
        address_2: '',
        city: 'Columbus',
        zip_code: '43235'
      }
    },
    {
      center_name: 'The W Nail Bar DSW Easton',
      center_id: '48023944-3de2-49ef-b1f0-1e42ef2bd452',
      location: {
        address_1: '370 Easton Market',
        address_2: '',
        city: 'Columbus',
        zip_code: '43219'
      }
    },
    {
      center_name: 'The W Nail Bar Fishers',
      center_id: 'c5cda680-c130-4790-bea9-e7ff8a8b8841',
      location: {
        address_1: '11680 Commerical Drive',
        address_2: 'Suite 700',
        city: 'Fishers',
        zip_code: '46038'
      }
    },
    {
      center_name: 'The W Nail Bar German Village',
      center_id: '94487019-dde4-4bda-a0b1-6df324c9c734',
      location: {
        address_1: '216 Thurman Ave',
        address_2: '',
        city: 'Columbus',
        zip_code: '43206'
      }
    },
    {
      center_name: 'The W Nail Bar New Albany',
      center_id: '570bffac-8c01-4d9b-967b-191c79980871',
      location: {
        address_1: '160 W Main St',
        address_2: 'Suite E',
        city: 'New Albany',
        zip_code: '43054'
      }
    },
    {
      center_name: 'The W Nail Bar DSW Polaris',
      center_id: 'b6c509f5-7b8e-45e9-9cc4-5a65f10b52b7',
      location: {
        address_1: '1200 Polaris Pkwy',
        address_2: '',
        city: 'Columbus',
        zip_code: '43240'
      }
    },
    {
      center_name: 'The W Nail Bar Powell',
      center_id: '0e6951b2-36ab-4447-a637-2a0b3ef92345',
      location: {
        address_1: '16 Crossing Street',
        address_2: 'Unit D',
        city: 'Powell',
        zip_code: '43065'
      }
    },
    {
      center_name: 'The W Nail Bar Rivers Edge',
      center_id: '547b3be3-0ff5-4bab-8829-ea3f603d0356',
      location: {
        address_1: '4026 E 82nd Street',
        address_2: 'Suite A7',
        city: 'Indianapolis',
        zip_code: '46250'
      }
    },
    {
      center_name: 'The W Nail Bar Short North',
      center_id: '68810b93-1343-49dd-a9f8-e6b8617e2276',
      location: {
        address_1: '946 N Hight Street',
        address_2: '',
        city: 'Columbus',
        zip_code: '43201'
      }
    },
    {
      center_name: 'The W Nail Bar Westgate',
      center_id: '4651f37e-735a-4299-a21d-ef2f322f420a',
      location: {
        address_1: '3131 Westgate Mall',
        address_2: '',
        city: 'Fairview',
        zip_code: '44126'
      }
    }
  ]

  console.log(consolidateArr.length)