// document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
//     var adobeDCView = 
//         new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
//     adobeDCView.previewFile({
//       content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
//       metaData:{fileName: "Bodea Brochure.pdf"}
//     }, {embedMode: "SIZED_CONTAINER"});
//   });

// PDFObject.embed("./assets/Documents/rsonter_resume.pdf", "#example1");

// eModal.iframe("./assets/Documents/rsonter_resume.pdf", 'This is a tile for iframe');

$('.modal').on('shown.bs.modal', function() {
    $(this).find('iframe').attr('src','./assets/Documents/rsonter_resume.pdf')
})  