export function sendEventToAnalytics(eventName, eventParams) {
    if (window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
}
