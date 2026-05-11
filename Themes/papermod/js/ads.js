(function () {

    /*
    ==========================================
    GLOBAL ADS MANAGER
    READY FOR ADSTERRA / MONETAG / IFRAME ADS
    ==========================================
    */

    // ==========================================
    // CREATE AD UNIT
    // ==========================================
    function createAd() {

        const wrapper = document.createElement('div');
        wrapper.className = 'ad-wrapper';

        const box = document.createElement('div');
        box.className = 'ad-box';

        // CONFIG SCRIPT
        const configScript = document.createElement('script');

        configScript.innerHTML = `
            atOptions = {
                'key' : 'ISI_KEY_ADSTERRA',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };
        `;

        // INVOKE SCRIPT
        const invokeScript = document.createElement('script');

        invokeScript.src = 'https://YOUR-ADSTERRA-DOMAIN/invoke.js';
        invokeScript.async = true;

        // APPEND
        box.appendChild(configScript);
        box.appendChild(invokeScript);

        wrapper.appendChild(box);

        return wrapper;
    }


    // ==========================================
    // INSERT ADS INTO ARTICLE
    // ==========================================
    function insertAds() {

        const content = document.querySelector('.post-content');

        if (!content) return;

        const paragraphs = content.querySelectorAll('p');

        // artikel terlalu pendek
        if (paragraphs.length < 6) return;


        // Setelah paragraf ke-3
        if (paragraphs[2]) {
            paragraphs[2].after(createAd());
        }


        // Setelah paragraf ke-8
        if (paragraphs[7]) {
            paragraphs[7].after(createAd());
        }


        // Setelah paragraf ke-15
        if (paragraphs[14]) {
            paragraphs[14].after(createAd());
        }

    }


    // ==========================================
    // RUN
    // ==========================================
    window.addEventListener('load', function () {

        setTimeout(insertAds, 1000);

    });

})();