const SYSTEM_PAGE = 14133144;

export function systemFooter() {
    if (current_page_id === SYSTEM_PAGE) {
        $("#section-footer .section").append(`
            <footer class="footer">
                <div class="footer__gradient">
                    <div class="flex-container">
                        <div class="footer__top">
                            <div class="flex-row">
                                <div class="col">
                                    <div class="footer__logo">
                                        <img src="https://s3.amazonaws.com/files.enjin.com/632721/theme/images/rbp-logo.png">
                                    </div>
                                    <div class="footer__site-map">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <a href="/about">About</a>
                                            </li>
                                            <li>
                                                <a href="/forum">Forum</a>
                                            </li>
                                            <li>
                                                <a href="/apply">Apply</a>
                                            </li>
                                            <li>
                                                <a href="/roster">Roster</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer__bottom">
                        <div class="flex-container">
                            <div class="flex-row">
                                <div class="col">
                                    <span class="copyright">Copyright © 2018 Really Bad Players</span>
                                </div>
                                <div class="col">
                                    <span class="creator">Created by Duckie</span>
                                    <span class="enjin-platform">Powered by
                                        <a href="https://www.enjin.com/">Enjin</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>`);
    };
}