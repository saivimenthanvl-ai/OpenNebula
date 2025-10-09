# **OpenNebula**

# 1) Add OpenNebula APT repo & key (Ubuntu 22.04 example)
wget -qO- https://downloads.opennebula.io/repo/repo.key 
| sudo apt-key add -
echo "deb https://downloads.opennebula.io/repo/6.8/Ubuntu/22.04 stable opennebula" | 
\
  sudo tee /etc/apt/sources.list.d/opennebula.list

# (For Ubuntu 24.04, replace 22.04 with 24.04 in the line above.)

# 2) Install OpenNebula core + Sunstone UI
sudo apt update
sudo apt install -y opennebula opennebula-sunstone

# 3) Enable and start services
sudo systemctl enable --now opennebula opennebula-sunstone

# 4) (Optional) Allow Sunstone through firewall
sudo ufw allow 9869/tcp || true

# 5) Get admin credentials (format: oneadmin:password)
sudo cat /var/lib/one/.one/one_auth

# 6) Open the UI in your browser
#    http://&lt;server-ip&gt;:9869   (user: oneadmin, password from step 5)

# Next steps (high level):
# - Add a KVM host (Node) and enable virtualization in BIOS.
# - Create a datastore & virtual network.
# - Import/create an OS image; build a VM Template; Launch your first VM.
