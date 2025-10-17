# **OpenNebula**

A single‑page static site describing OpenNebula vs. OpenStack, key resources, skills learned, and a cloud project learning path. Designed for instant deploys on Vercel.

## ✨ Features
- Clean, responsive HTML/CSS (no build step)
- Sections: Overview, Resources, Skills, Quick Start, Summary Table
- Copy‑paste **Quick Start** commands for Ubuntu (OpenNebula + Sunstone)
- Ready for **Vercel**: push to GitHub and import

## 🚀 Deploy

Option 1 — One‑click (generic)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

> Choose your GitHub repo when prompted. Vercel will auto‑detect a static site.

 Option 2 — Manual steps
1. Create a GitHub repo and add `index.html` at repo root.
2. Push your code:
   ```bash
   git init && git add . && git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/&lt;you&gt;/opennebula-hub.git
   git push -u origin main
   ```
3. Go to Vercel → **Add New Project** → Import your repo → **Deploy**.
4. (Optional) Add a custom domain in Project → Settings → Domains.

## 🛠️ Quick Start — OpenNebula (Ubuntu)
See the **Quick Start** section on the website for copy‑paste commands.

## 🧩 Customization
- Update texts in `index.html`
- Replace link placeholders with your own blog, docs, or demos
- Add analytics (e.g., simple &lt;script&gt; tag) if needed

 1) Add OpenNebula APT repo & key (Ubuntu 22.04 example)
wget -qO- https://downloads.opennebula.io/repo/repo.key 

| sudo apt-key add -

echo "deb https://downloads.opennebula.io/repo/6.8/Ubuntu/22.04 stable opennebula" | 
\

  sudo tee /etc/apt/sources.list.d/opennebula.list

(For Ubuntu 24.04, replace 22.04 with 24.04 in the line above.)

2) Install OpenNebula core + Sunstone UI
sudo apt update

sudo apt install -y opennebula opennebula-sunstone

3) Enable and start services
sudo systemctl enable --now opennebula opennebula-sunstone

4) (Optional) Allow Sunstone through firewall

sudo ufw allow 9869/tcp || true

5) Get admin credentials (format: oneadmin:password)

sudo cat /var/lib/one/.one/one_auth

6) Open the UI in your browser

    http://&lt;server-ip&gt;:9869   (user: oneadmin, password from step 5)

Next steps (high level):
- Add a KVM host (Node) and enable virtualization in BIOS.
- Create a datastore & virtual network.
- Import/create an OS image; build a VM Template; Launch your first VM.

## 📄 License
MIT — do whatever, but no warranty.
