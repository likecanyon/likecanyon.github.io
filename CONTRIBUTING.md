# Contributing to HugoBlox

[![Get Pro](https://img.shields.io/badge/Support-Get%20Pro-2ea44f?logo=heart)](https://hugoblox.com/pricing)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-GitHub%20Sponsors-ea4aaa?logo=github)](https://github.com/sponsors/gcushen)
[![Star us](https://img.shields.io/github/stars/HugoBlox/kit?style=social)](https://github.com/HugoBlox/kit)
[![Discord](https://img.shields.io/discord/722225264733716590?logo=discord)](https://discord.gg/z8wNYzb)

---

**HugoBlox exists to make academic publishing free, beautiful, and effortless — for every researcher on earth.**

We power **100,000+ researcher websites**, research lab sites, and university project pages worldwide. Behind each one is a scientist, student, or lab trying to share their work. Behind HugoBlox is a community of contributors who made that possible.

> [!NOTE]
> **Love HugoBlox?** If it's helped you publish your research, launch your lab site, or build your academic presence — every contribution you make passes that forward to the next researcher who needs it. You're not just improving a tool. You're advancing open research.

---

## Why Contribute?

### 🌍 Join the Movement
- **Advance open research** — keep essential academic tools free and accessible worldwide
- **Shape what millions of researchers use** — your changes land in sites across hundreds of universities
- **Be part of something bigger** — HugoBlox is infrastructure for open science, not just a website builder

### 🎓 Grow Your Career
- **Add it to your CV** — open source contributions signal collaboration, craft, and initiative
- **Build your public reputation** — every contribution is permanently credited and visible
- **Level up with modern tech** — Hugo, Tailwind CSS v4, Preact, Go, and more
- **Network globally** — connect with researchers, developers, and academics worldwide

---

## ⚡ Quick Wins — Pick One!

Not every contribution requires code. Pick whatever fits your time:

| Time | Action |
|------|--------|
| 30 sec | ⭐ [Star the repo](https://github.com/HugoBlox/kit) — helps more researchers discover HugoBlox |
| 30 sec | 👍 [Upvote a feature](https://github.com/HugoBlox/kit/issues) you need |
| 5 min | 🐛 [Report a bug](https://github.com/HugoBlox/kit/issues) with clear steps to reproduce |
| 5 min | 💬 [Answer a question](https://discord.gg/z8wNYzb) in Discord |
| 5 min | ✏️ Fix a documentation typo — hit **Edit** on any docs page |
| 1 hr | 🔧 Pick a [help wanted issue](https://github.com/HugoBlox/kit/labels/help%20wanted) |
| few hrs | 🧩 Contribute a significant feature or new block |
| ongoing | 🎥 Create YouTube tutorials or blog posts |

---

## 🛠️ Technical Setup

> [!IMPORTANT]
> All technical documentation — commands, architecture, code conventions, commit message standards, and how to build blocks — lives in **[AGENTS.md](AGENTS.md)**. That file is the single source of truth for both human contributors and AI agents working in this repo.

**TL;DR:**
```bash
# 1. Install: Hugo Extended, Node.js, pnpm
# 2. Clone and install deps
pnpm install

# 3. Start the dev server for a starter site
pnpm dev academic-cv      # opens at http://localhost:8081
```

See [AGENTS.md](AGENTS.md) for the full guide: architecture, all commands, code standards, commit conventions, block creation, and schemas.

---

## 🤝 Types of Contributions

### Code & Blocks
- **Fix a bug** — see [open issues](https://github.com/HugoBlox/kit/issues)
- **Build a new block** — see the block guide in [AGENTS.md](AGENTS.md)

### Content & Community
- **[Contribute a shortcode](https://github.com/HugoBlox/create-shortcode)**
- **[Contribute a language pack](https://docs.hugoblox.com/reference/language/#create-or-modify-a-language-pack)** — place in `modules/blox/i18n/` and add metadata to `modules/blox/data/languages.yaml`
- **[Contribute a theme pack](https://docs.hugoblox.com/getting-started/customize/#appearance)** — color and font themes
- **Contribute a template** — duplicate the [Link In Bio](https://github.com/HugoBlox/kit/tree/main/templates/link-in-bio) template as a starting point, then reach out on Discord

> [!NOTE]
> To contribute to a template, make changes inside `templates/` in this monorepo. **Do not submit PRs to the dedicated template repositories** — they are read-only and changes propagate there automatically.

### Docs & Education
- Improve the [documentation](https://docs.hugoblox.com/) — open a GitHub Issue with your suggested changes
- Write tutorials or blog posts
- Create YouTube walkthroughs

---

## 🔄 PR Process

1. **Search first** — check [issues](https://github.com/HugoBlox/kit/issues) and [PRs](https://github.com/HugoBlox/kit/pulls) to avoid duplicate work
2. **Open an issue first** for significant new features — discuss design before building
3. **Test locally** — `pnpm dev academic-cv` before submitting
4. **Run quality checks** — `pnpm code:fix && pnpm style:fix && pnpm format`
5. **Write a clear commit message** — see commit conventions in [AGENTS.md](AGENTS.md)

> [!TIP]
> For a simple bug fix or typo? Just open a PR directly — no issue needed.

---

## 💬 Getting Help

- **[Discord #contributing](https://discord.gg/z8wNYzb)** — real-time help
- **[GitHub Discussions](https://github.com/HugoBlox/kit/discussions)** — async Q&A and show-and-tell
- **[GitHub Issues](https://github.com/HugoBlox/kit/issues)** — bugs and feature requests

**When reporting a bug, include:** Hugo version, HugoBlox version (from `go.mod`), OS, and browser — plus the smallest example that reproduces it.

---

## 🏆 Recognition

Contributors are:
- **Named in release notes**
- **Featured on our social media**
- **Visible on the [contributors page](https://github.com/HugoBlox/kit/graphs/contributors)**

---

## 💚 Can't Contribute Code?

- **[Get Pro](https://hugoblox.com/pricing)** — enhance your productivity with automations whilst supporting HugoBlox
- **[GitHub Sponsors](https://github.com/sponsors/gcushen)** — monthly support for open source development
- **☕ [Buy a coffee](https://github.com/sponsors/gcushen?frequency=one-time)**
- **📢 Share your site** on X/LinkedIn/Reddit with `#HugoBlox`

---

## ⚖️ Contributor License Agreement

By submitting a Pull Request, you agree to our [CLA](.github/CLA.md). In short: you keep ownership of your code; we get a permanent license to use it as part of HugoBlox. This is standard practice in professional open source and protects both you and the project.

---

_Questions? Join our [Discord](https://discord.gg/z8wNYzb) or start a [Discussion](https://github.com/HugoBlox/kit/discussions)._

_This project follows the [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md)._
