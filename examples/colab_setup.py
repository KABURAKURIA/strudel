# Kunguru Algo (Strudel) Colab Setup Script
# Usage: Copy and paste this script into a cell in Google Colab and run it.

import os
import subprocess
import time
import re
import sys

# --- Configuration ---
REPO_URL = "https://github.com/tidalcycles/strudel.git"
PORT = 3000
# ---------------------

def run_command(command, shell=True):
    try:
        subprocess.run(command, check=True, shell=shell)
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {command}")
        raise e

print("🚀 Starting Kunguru Algo Setup...")

# 1. Clone the Repository
if not os.path.exists("strudel"):
    print("📦 Cloning Strudel repository...")
    run_command(f"git clone {REPO_URL}")
else:
    print("📦 Repository already cloned.")

# 2. Install Dependencies
print("🛠️  Updating npm and installing dependencies...")
run_command("npm install -g npm@latest")

os.chdir("strudel")
run_command("npm install")

# 3. Apply Kunguru Algo Branding
print("🎨 Applying Kunguru Algo branding...")
# Use os.walk with pruning to avoid node_modules
for root, dirs, files in os.walk("."):
    if 'node_modules' in dirs:
        dirs.remove('node_modules') # Prune
    for file in files:
        if file == 'index.html':
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r') as f:
                    content = f.read()
                new_content = re.sub(r'<title>.*<\/title>', '<title>Kunguru Algo</title>', content)
                if content != new_content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
            except Exception as e:
                print(f"Error updating {filepath}: {e}")

# 4. Start the Server
print("🟢 Starting Development Server...")
server_log = open('server.log', 'w')
server_proc = subprocess.Popen(
    ["npm", "run", "dev", "--", "--port", str(PORT), "--host", "0.0.0.0"],
    stdout=server_log,
    stderr=subprocess.STDOUT
)

# Polling for server readiness
print("⏳ Waiting for server to launch...")
server_ready = False
for _ in range(60): # Wait up to 60 seconds
    time.sleep(1)
    if os.path.exists('server.log'):
        with open('server.log', 'r') as f:
            if "Network:" in f.read() or "Local:" in f.read(): # Vite outputs this when ready
                server_ready = True
                break
if not server_ready:
    print("⚠️ Server might not be ready, checking logs...")

# 5. Expose via Cloudflare Tunnel
print("🌐 Establishing Cloudflare Tunnel...")
if not os.path.exists("cloudflared-linux-amd64"):
    run_command("wget -q -nc https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64")
    run_command("chmod +x cloudflared-linux-amd64")

tunnel_log = open('tunnel.log', 'w')
tunnel_proc = subprocess.Popen(
    ["./cloudflared-linux-amd64", "tunnel", "--url", f"http://localhost:{PORT}"],
    stdout=tunnel_log,
    stderr=subprocess.STDOUT
)

print("⏳ Waiting for tunnel URL...")
tunnel_url = None
for _ in range(30): # Wait up to 30 seconds
    time.sleep(1)
    if os.path.exists('tunnel.log'):
        with open('tunnel.log', 'r') as f:
            content = f.read()
            match = re.search(r'https://.*\.trycloudflare.com', content)
            if match:
                tunnel_url = match.group(0)
                break

if tunnel_url:
    print("\n" + "="*40)
    print("🎉 KUNGURU ALGO IS READY!")
    print("="*40)
    print("Access your instance at the URL below:\n")
    print(tunnel_url)
    print("\n" + "="*40)
else:
    print("❌ Could not find tunnel URL. Check tunnel.log for details.")
