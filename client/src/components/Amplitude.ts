import amplitude from "amplitude-js";

// Initiating Amplitude inside this helper file seems to work better with the Create React App framework than
// adding a script tag to our index.html file.
//
// See https://javascript.plainenglish.io/adding-analytics-to-your-react-application-b584265f9fae for more details

const API_KEY = process.env.REACT_APP_AMPLITUDE_API_KEY;
if (!API_KEY) throw new Error("No Amplitude API key defined!");

amplitude.getInstance().init(API_KEY);

type AmplitudeEvent =
  | "closeFeatureCalloutWidget"
  | "openFeatureCalloutWidget"
  | "viewPreviousEntryOnFeatureCalloutWidget"
  | "viewNextEntryOnFeatureCalloutWidget";

const logAmplitudeEvent = (e: AmplitudeEvent) => amplitude.getInstance().logEvent(e);

export { amplitude, logAmplitudeEvent };
