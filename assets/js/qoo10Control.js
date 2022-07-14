function checkCountAndPurchase() {
  let currentTimeMillis = Date.now()
  var myHeaders = new Headers();
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch("https://themorehelp.com/qoo10_rate.json?_=" + currentTimeMillis, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      var parsedResult = JSON.parse(result)
      
      parsedResult.forEach(item => {
        if(item.currency == "USD") {
          console.log(item)
          purchase(item.cnt)
        }
      })
    })
    .catch(error => console.log('error', error));
}   

function purchase(cnt) {
  document.querySelector('input[name="order_cnt"]').value = cnt
  document.querySelector('a[id="a_subOptionAddDirect"]').click()
}

checkCountAndPurchase()

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "isQoo10ControlLoaded") {
    console.log("isQoo10ControlLoaded received");    
    sendResponse(true);
  }
});