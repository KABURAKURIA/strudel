# Kunguru Algo (Strudel) Colab Setup Script
# Usage: Copy and paste this script into a cell in Google Colab and run it.

import os
import subprocess
import time

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
# We need to update npm to handle workspaces correctly
print("🛠️  Updating npm and installing dependencies...")
run_command("npm install -g npm@latest")

os.chdir("strudel")
run_command("npm install")

# 3. Apply Kunguru Algo Branding
print("🎨 Applying Kunguru Algo branding...")
# Change the title in index.html
run_command("find . -name 'index.html' -exec sed -i 's/<title>.*<\\/title>/<title>Kunguru Algo<\\/title>/g' {} +")

# 4. Start the Server
print("🟢 Starting Development Server...")
# Run in background, listening on all interfaces (0.0.0.0)
# We redirect output to server.log for debugging
subprocess.Popen(
    ["npm", "run", "dev", "--", "--port", str(PORT), "--host", "0.0.0.0"],
    stdout=open('server.log', 'w'),
    stderr=subprocess.STDOUT
)

# Wait a moment for the server to initialize
print("⏳ Waiting for server to launch...")
time.sleep(15)

# 5. Expose via Cloudflare Tunnel
print("🌐 Establishing Cloudflare Tunnel...")
# Download cloudflared
if not os.path.exists("cloudflared-linux-amd64"):
    run_command("wget -q -nc https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64")
    run_command("chmod +x cloudflared-linux-amd64")

# Start tunnel
subprocess.Popen(
    ["./cloudflared-linux-amd64", "tunnel", "--url", f"http://localhost:{PORT}"],
    stdout=open('tunnel.log', 'w'),
    stderr=subprocess.STDOUT
)

print("⏳ Waiting for tunnel URL...")
time.sleep(10)

# Extract and print the URL
print("\n" + "="*40)
print("🎉 KUNGURU ALGO IS READY!")
print("="*40)
print("Access your instance at the URL below:\n")
run_command("grep -o 'https://.*\\.trycloudflare.com' tunnel.log | head -n 1")
print("\n" + "="*40)
