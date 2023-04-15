document.addEventListener('DOMContentLoaded', async () => {
    document.querySelectorAll('article a').forEach(function(link) {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    async function initialClapCount() {
        const $applauseButtonLabel = document.querySelector('applause-button > span');
        $applauseButtonLabel.innerText = await document.querySelector('applause-button').initialClapCount;
        $applauseButtonLabel.classList.remove('animate-spin');
    }
    initialClapCount();

    document.querySelector('applause-button').addEventListener('clapped', async function() {
        let clapCount = await document.querySelector('applause-button').initialClapCount;
        document.querySelector('applause-button > span').innerText = clapCount + 1;
    });

    document.querySelector('[js-copy-to-clipboard]').addEventListener('click', async function() {
        let canonical = document.querySelector('[rel="canonical"]')
        if (canonical) {
            await navigator.clipboard.writeText(canonical.getAttribute('href'));
        }
    });

    document.addEventListener('scroll', function() {
        let h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight',
            progress = document.querySelector('[js-progress-bar]'),
            navContent = document.querySelector("nav"),
            scroll,
            scrollPos;

        scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        progress.style.setProperty('--scroll', scroll + '%');
        scrollPos = window.scrollY;

        if (scrollPos > 10) {
            navContent.classList.remove("bg-gray-100");
            navContent.classList.add("bg-white");
            navContent.classList.add("shadow");
        } else {
            navContent.classList.remove("bg-white");
            navContent.classList.remove("shadow");
            navContent.classList.add("bg-gray-100");
        }
    });
});
