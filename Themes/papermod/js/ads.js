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

        configScript.text = `
            atOptions = {
                'key' : 'cb6963aa0134b893b0f6c6b264ede149',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };
        `;

        // INVOKE SCRIPT
        const invokeScript = document.createElement('script');

        invokeScript.src = 'https://motorsnag.com/cb6963aa0134b893b0f6c6b264ede149/invoke.js';
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

    // prevent duplicate
    if (content.dataset.adsLoaded) return;

    content.dataset.adsLoaded = "true";

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
    document.addEventListener('DOMContentLoaded', function () {

        setTimeout(insertAds, 1500);

    });

})();

/*
==========================================
HOME INLINE ADS
==========================================
*/

(function () {

    // ==========================================
    // CREATE INLINE HOME AD
    // ==========================================
    function createHomeInlineAd() {

        const wrapper = document.createElement('div');
        wrapper.className = 'ad-wrapper';

        const box = document.createElement('div');
        box.className = 'ad-box';

        /*
        ==========================================
        CONFIG SCRIPT
        ==========================================
        */

        const configScript = document.createElement('script');

        configScript.text = `
            atOptions = {
                'key' : 'cb6963aa0134b893b0f6c6b264ede149',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };
        `;

        /*
        ==========================================
        INVOKE SCRIPT
        ==========================================
        */

        const invokeScript = document.createElement('script');

        invokeScript.src = 'https://motorsnag.com/cb6963aa0134b893b0f6c6b264ede149/invoke.js';

        invokeScript.async = true;

        /*
        ==========================================
        APPEND
        ==========================================
        */

        box.appendChild(configScript);

        box.appendChild(invokeScript);

        wrapper.appendChild(box);

        return wrapper;

    }


    // ==========================================
    // INSERT HOME ADS
    // ==========================================
    function insertHomeAds() {

        const posts = document.querySelectorAll('.main-content .post-entry');

        if (!posts.length) return;

        posts.forEach(function(post, index){

            /*
            setiap 5 post
            mulai setelah post ke-3
            */

            if(index > 1 && (index + 1) % 5 === 0){

                // prevent duplicate
                if(post.nextElementSibling &&
                   post.nextElementSibling.classList.contains('home-inline-ad')){
                    return;
                }

                const adContainer = document.createElement('div');

                adContainer.className = 'home-inline-ad';

                adContainer.appendChild(createHomeInlineAd());

                post.after(adContainer);

            }

        });

    }


    // ==========================================
    // RUN
    // ==========================================
    document.addEventListener('DOMContentLoaded', function () {

        setTimeout(insertHomeAds, 1500);

    });

})();