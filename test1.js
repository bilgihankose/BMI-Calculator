const omidClient = new VerificationClient();
console.log("hello")
if (omidClient.isSupported()) {
startMonitoring(omidClient);
}


// Verification code from company.com registers for session events:
omidClient.registerSessionObserver(observer, 'company.com-omid');
// When OMID code invokes the "company.com-omid" observer for the
// sessionStart event, it includes the matching verification
// parameters in the event data.
const compmanyDotComSessionStartEvent = {
'adSessionId': 'ABC-123',
'type': 'sessionStart',
'timestamp': 123456,
'data': {
'context': {...},
'verificationParameters': "{'id': 1234, 'option': true}"
},
};
observer(companyDotComSessionStartEventData);


omidClient.addEventListener('volumeChange', function(evt) {
console.log(
'Session ' + evt.adSessionId +
' changed volume to ' + evt.data.videoPlayerVolume +
' at ' + evt.timestamp);
});
