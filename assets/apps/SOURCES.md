# Atlas app icon sources

The catalog now prefers official site favicons recorded in [official-sites.json](../official-sites.json). That audit records the source URL, checked time, exact page title and any retrieval limitation. The older brand assets below remain as fallbacks where official retrieval failed. Run `node scripts/icons/audit-official-sites.mjs` explicitly to refresh; builds and page visits never crawl these sites.

Brand SVGs: Simple Icons 11.15.0 (CC0). Site favicons are used where a brand SVG is unavailable.

- Amazon: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/amazon.svg
- Canva: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/canva.svg
- Chess.com: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/chessdotcom.svg
- CodePen: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/codepen.svg
- CoolMathGames: site favicon via https://icons.duckduckgo.com/ip3/www.coolmathgames.com.ico
- CrazyGames: site favicon via https://icons.duckduckgo.com/ip3/www.crazygames.com.ico
- Desmos: site favicon via https://icons.duckduckgo.com/ip3/www.desmos.com.ico
- Discord: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/discord.svg
- Disney+: site favicon via https://icons.duckduckgo.com/ip3/www.disneyplus.com.ico
- Duolingo: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/duolingo.svg
- ESPN: site favicon via https://www.espn.com/favicon.ico
- FMHY.net: site favicon via https://icons.duckduckgo.com/ip3/fmhy.net.ico
- Facebook: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/facebook.svg
- Figma: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/figma.svg
- GeForce NOW: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/nvidia.svg
- GitHub: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/github.svg
- Gmail: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/gmail.svg
- Google Docs: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/googledocs.svg
- Google Drive: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/googledrive.svg
- Google Maps: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/googlemaps.svg
- Google: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/google.svg
- HBO Max: site favicon via https://icons.duckduckgo.com/ip3/www.hbomax.com.ico
- Hulu: site favicon via https://icons.duckduckgo.com/ip3/www.hulu.com.ico
- Instagram: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/instagram.svg
- Internet Archive: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/internetarchive.svg
- Khan Academy: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/khanacademy.svg
- MDN Web Docs: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/mdnwebdocs.svg
- Neal.fun: site favicon via https://icons.duckduckgo.com/ip3/neal.fun.ico
- Netflix: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/netflix.svg
- Notion: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/notion.svg
- Outlook: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/microsoftoutlook.svg
- Paramount+: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/paramountplus.svg
- Photopea: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/photopea.svg
- Pinterest: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/pinterest.svg
- Proton Mail: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/protonmail.svg
- Reddit: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/reddit.svg
- Replit: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/replit.svg
- SoundCloud: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/soundcloud.svg
- Spotify: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/spotify.svg
- Stack Overflow: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/stackoverflow.svg
- Telegram: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/telegram.svg
- TikTok: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/tiktok.svg
- Twitch: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/twitch.svg
- WhatsApp: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/whatsapp.svg
- Wikipedia: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/wikipedia.svg
- X: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/x.svg
- YouTube: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/youtube.svg
- Zoom: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/zoom.svg
- eBay: https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/ebay.svg

- max (sharp replacement): https://www.hbomax.com/dotcom/img/hbomax/logo_nav_bar.png

- crazygames (sharp replacement): https://imgs.crazygames.com/favicons/safari-pinned-tab.svg


- hulu (sharp replacement): https://cdn.jsdelivr.net/npm/simple-icons@7.21.0/icons/hulu.svg

Requested icon overrides are saved locally by scripts/icons/fetch-requested-icons.mjs. Hulu and CrazyGames use user-supplied attachments. Duolingo uses a square SVG viewport around the supplied PNG.
- nowgg.fun: user-specified Prism icon URL in assets/apps.json.
