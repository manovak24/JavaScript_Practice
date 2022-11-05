const faqArr = ['all orders are final once they have been processed…order, combining orders or cancelling your order.', 'your order will be shipped the same, or next, busi…olidays, there may be a slightly longer duration.', 'all options are outlined on the product page, so look out for customization options there.', 'yes! all functions are self-explanatory. . but if … regards to install please reach out to us today!', 'no, tools are not provided but these are common tools such as a screw driver and tape measurer.', 'can i change or cancel my order?', 'what delivery times?', 'can i get my product personalized?', 'is the projector easy to install?', 'are tools required or are they provided with the product?']


let searchTerm = 'look';

for(faq in faqArr) {
    if(faqArr[faq].includes(searchTerm)) {
        console.log(faqArr[faq])
    }
}