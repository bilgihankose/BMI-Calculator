const OmidSessionClient = OmidSessionClient && OmidSessionClient['default'];

const OMSDK_SERVICE_WINDOW = window.top;
const VIDEO_ELEMENT = document.getElementById('contentElement');

// Assuming you have an `ad` object roughly following VAST 4.1 schema.
const resources = ad.adVerifications.map((verification) => {
  const scriptUrl = verification.javaScriptResource.cdata;
  const accessMode = 'full';
  return new VerificationScriptResource(scriptUrl, verification.vendor,
      verification.verificationParameters, accessMode);
});

const context = new Context(partner, resources, CONTENT_URL);
context.setVideoElement(VIDEO_ELEMENT);
context.setServiceWindow(OMSDK_SERVICE_WINDOW);

let sessionClient;
try {
  sessionClient = OmidSessionClient['default'];
} catch (e) { /* Can't use OM SDK :( */ return; }
if (!sessionClient) { /* Can't use OM SDK :( */ return; }

const AdSession = sessionClient.AdSession;
const Partner = sessionClient.Partner;
const Context = sessionClient.Context;
const VerificationScriptResource = sessionClient.VerificationScriptResource;
const AdEvents = sessionClient.AdEvents;
const MediaEvents = sessionClient.MediaEvents;

const CONTENT_URL = 'https://example.com/articles/2019/lottery-winner';
const PARTNER_NAME = 'ExamplePartnerName';
const PARTNER_VERSION = '1.0.4';

const partner = new Partner(PARTNER_NAME, PARTNER_VERSION);
const adSession = new AdSession(context);
adSession.setCreativeType('video');

// See impression type documentation to determine which type you should use.
adSession.setImpressionType('beginToRender');

if (!adSession.isSupported()) {
  return;
}

adSession.start();

// this should be within the same callback as the load event from the previous step
adSession.registerSessionObserver((event) => {
  if (event.type === "sessionStart") {
    ...
    adEvents.impressionOccurred();
    ...
  } else if (event.type === "sessionError") {
    // handle error
  } else if (event.type === "sessionFinish") {
    // clean up
  }
})
