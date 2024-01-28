import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-TJGECJ2MHV");
};

export const enum AnalyticsEvents {
  TrailparkCardExpanded = "TrailparkCardExpanded",
  TrailparkCardCollapsed = "TrailparkCardCollapsed",

  MenuBrandClicked = "MenuBrandClicked",
  MenuTrailparksClicked = "MenuTrailparksClicked",

  LanguageChanged = "LanguageChanged",
}

export const sendAnalyticsEvent = (
  eventName: AnalyticsEvents,
  eventPayload: { [eventParamName: string]: string | number }
) => {
  ReactGA.event(eventName, {
    ...eventPayload,
  });
};
