export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', (page) => {
        const checkAnalytics = checkIfCookiesAccepted()
        if (checkAnalytics) {
            addGoogleAnalytics()
            addMicrosoftClarity()
        }

        function checkIfCookiesAccepted() {
            const cookieAnalytics = useCookie('cookieAnalytics')
            return cookieAnalytics.value === 'true' || cookieAnalytics.value === true
        }
        function addGoogleAnalytics() {
            const { ID_GOOGLE_ANALYTICS } = useRuntimeConfig().public;

            function gtag() {
                window.dataLayer.push(arguments);
            }
            window.gtag = gtag;

            window.dataLayer = window.dataLayer || [];

            gtag("js", new Date());
            gtag("config", ID_GOOGLE_ANALYTICS,{
                send_page_view: true
            });

            useHead({
                script: [
                    {
                        src: `https://www.googletagmanager.com/gtag/js?id=${ID_GOOGLE_ANALYTICS}`,
                        async: true,
                    },
                ],
            });
        }
        function addMicrosoftClarity() {
            const { ID_MS_CLARITY } = useRuntimeConfig().public;
            const scriptTag = document.createElement('script')
            scriptTag.type = 'text/javascript'
            scriptTag.innerHTML = `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${ID_MS_CLARITY}");`

            window.clarity = window.clarity || function() {
                (window.clarity.q = window.clarity.q || []).push(arguments);
            };

            document.head.appendChild(scriptTag);
        }
    });
});
