
function onWindowLoad() {
  var message = document.querySelector('#message');
  document.getElementById("qoo10Button").addEventListener("click", qoo10ButtonClicked);
}

function qoo10ButtonClicked(){
  console.log('qoo10ButtonClicked');
  openQCoinLinkTab();
}

function openQCoinLinkTab() {
  chrome.tabs.create({active: false, url: "https://www.qoo10.com/gmkt.inc/Goods/Goods.aspx?goodscode=705045258"}, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['assets/js/qoo10Control.js']
    })  
  });
}


chrome.runtime.onMessage.addListener(function(request, sender) {
  // if (request.action == "initSmartStoreSource") {
  //   handleSmartStoreData(request.source);
  // }
});
window.onload = onWindowLoad;