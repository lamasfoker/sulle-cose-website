document.addEventListener('DOMContentLoaded', async () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const $publicationDate = $('time');
    if ($publicationDate) {
        let options = {'day': '2-digit', 'month': 'long', 'year': 'numeric'};
        $publicationDate.innerText = new Date().toLocaleString($publicationDate.getAttribute('languageCode'), options);
    }

    const $articleLinks = $$('article a');
    if ($articleLinks) {
        $articleLinks.forEach(link => {
            if (link.hostname !== window.location.hostname) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    const $applauseButton = $('applause-button');
    const $applauseButtonLabel = $('applause-button > span');
    if ($applauseButton && $applauseButtonLabel) {
        async function initialClapCount() {
            $applauseButtonLabel.innerText = await $applauseButton.initialClapCount;
            $applauseButtonLabel.classList.remove('animate-spin');
        }
        await initialClapCount();

        $applauseButton.addEventListener('clapped', async function() {
            $applauseButtonLabel.innerText = await $applauseButton.initialClapCount + 1;
        });
    }

    const $copyToClipboardButton = $('[js-copy-to-clipboard]');
    if ($copyToClipboardButton) {
        $copyToClipboardButton.addEventListener('click', async function() {
            let canonical = $('[rel="canonical"]');
            if (canonical) {
                await navigator.clipboard.writeText(canonical.getAttribute('href'));
            }
        });
    }

    const $progressBar = $('[js-progress-bar]');
    const $navBar = $('nav');
    if ($progressBar && $navBar) {
        document.addEventListener('scroll', function() {
            let h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight',
                scroll,
                scrollPos;

            scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            $progressBar.style.setProperty('--scroll', scroll + '%');
            scrollPos = window.scrollY;

            if (scrollPos > 10) {
                $navBar.classList.remove('bg-gray-100');
                $navBar.classList.add('bg-white');
                $navBar.classList.add('shadow');
            } else {
                $navBar.classList.remove('bg-white');
                $navBar.classList.remove('shadow');
                $navBar.classList.add('bg-gray-100');
            }
        });
    }
});
