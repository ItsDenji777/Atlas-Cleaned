<div align="center">
  <img src="assets/atlas.png" alt="Atlas Logo" width="64">
  <h1>Atlas</h1>
  <p>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" />
    <img src="https://img.shields.io/badge/License-LGPL_v3-blue?style=for-the-badge" alt="LGPLv3" />
  </p>
</div>

---

## The next generation of Unblocked Games and Proxies!

Atlas brings browsing, shortcuts, and customization together in one place. Open multiple tabs, browse side by side with Split View, and make Atlas your own!

Many of our tools and features are requested through issues and pull requests. Have an idea or found something broken? We recommend opening an issue or making a PR to help out and contribute!

---

## Features

- Multiple tabs and Split View
- Wisp-powered browsing
- Search suggestions and customizable shortcuts
- Browsing history
- Custom site titles and favicons
- Customizable settings and keyboard shortcuts
- Responsive layouts for different screen sizes

> [!CAUTION]
> Although this is an "internet hub", we do **not** include illegal, pirated, or copyright-infringing tools or apps.
> Please respect your school, workplace, and network policies.

> ⭐ Star this repository if you are forking it, or find it useful!

---

Thanks to these libraries for making the project possible:

- [MercuryWorkshop/wisp-server-node](https://github.com/MercuryWorkshop/wisp-server-node)
- [MercuryWorkshop/scramjet](https://github.com/MercuryWorkshop/scramjet)
- [titaniumnetwork-dev/Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet)
- [lucide-icons/lucide](https://github.com/lucide-icons/lucide)
- [pmndrs/zustand](https://github.com/pmndrs/zustand)
- [Stuk/jszip](https://github.com/Stuk/jszip)

---

## License

This source is distributed under the **LGPLv3** license.
See the [LICENSE](LICENSE) file for more details.

---

## Deploy your own Atlas

Atlas comes with its **own Wisp server**! The website and relay run together, so you do not need a separate relay, API key, or connection to a maintainer-hosted server. You host your own instance and its traffic on your own machine or hosting account.

### 1. Get Atlas

Install [Docker with Docker Compose](https://docs.docker.com/compose/install/), then run:

```bash
git clone https://github.com/NuzProjects/Atlas.git
cd Atlas
cp .env.example .env
docker compose up -d --build
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp` if needed.

Open **http://localhost:8080**. Atlas and its built-in Wisp relay are ready! The local port is bound to your machine only.

### 2. Put it on your own domain

Use a server that supports Docker and incoming connections on ports **80** and **443**. Create an **A record** pointing your chosen hostname to **your server's public IPv4 address**. Start with DNS-only mode if your DNS provider offers proxying.

Edit these two values in `.env`, replacing the example hostname with your own:

```dotenv
PUBLIC_ORIGIN=https://atlas.example.com
ATLAS_DOMAIN=atlas.example.com
```

Then enable automatic HTTPS:

```bash
docker compose --profile https up -d --build
```

Open your new HTTPS address. Caddy obtains and renews the certificate, and the bundled Wisp relay uses **`wss://your-hostname/wisp/`** automatically. Leave **Wisp Config** blank in Atlas settings to use it.

> [!NOTE]
> Use your own domain and server IP. No public deployment uses the maintainer's VPS or relay. Hosting and bandwidth are provided by your chosen host. Static-only hosts such as GitHub Pages cannot run Atlas's Node server or Wisp connections.

### 3. Update or stop Atlas

```bash
# Update your instance
git pull --ff-only
docker compose --profile https up -d --build

# View logs
docker compose logs --tail=100 atlas caddy

# Stop your instance
docker compose --profile https down
```

For local-only use, leave out `--profile https`. Named Docker volumes retain the server's URL-encryption keys, cache, and HTTPS certificates between updates. Back up those volumes before moving servers; avoid `down -v` unless you intend to erase them. Browser history and settings remain in each user's browser.

### Prefer Node.js?

Install **Node.js 24**, clone the repository, and run:

```bash
cp .env.example .env
npm ci
npm run build:prod
npm start
```

Open **http://localhost:8080**. For public access, set `PUBLIC_ORIGIN` to your HTTPS origin and put a WebSocket-capable HTTPS reverse proxy in front of port **8080**. Keep `.cache` writable and persistent. The Node server includes Wisp at **`/wisp/`**; no separate Wisp process is needed.
