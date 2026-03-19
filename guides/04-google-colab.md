# Setting Up Strudel (Kunguru Algo) in Google Colab Free Tier

> **Note:** This guide is specifically designed for the **Kunguru Algo** edition of Strudel on Google Colab Free Tier.

This guide explains how to set up a full, persistent, and publicly accessible instance of Strudel—branded as **Kunguru Algo**—on Google Colab's Free Tier.

This method allows you to run the full Strudel development environment, giving you access to the latest features and a stable environment without relying on external iframes.

## The Kunguru Algo Edition

We will use a Python script to:
1.  Clone the official Strudel repository.
2.  Install the necessary dependencies.
3.  Rebrand the application to "Kunguru Algo".
4.  Launch the server and expose it to the internet via a Cloudflare Tunnel.

### Step-by-Step Instructions

1.  Open a new notebook in [Google Colab](https://colab.research.google.com/).
2.  Create a code cell.
3.  Paste the following code into the cell.
4.  Run the cell.

```python
import os
import subprocess
import time
import re

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
# Use os.walk with pruning to avoid node_modules
title_regex = re.compile(r'<title>.*?</title>')
for root, dirs, files in os.walk("."):
    if 'node_modules' in dirs:
        dirs.remove('node_modules') # Prune
    for file in files:
        if file == 'index.html':
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r') as f:
                    content = f.read()
                new_content = title_regex.sub('<title>Kunguru Algo</title>', content)
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
            content = f.read()
            if "Network:" in content or "Local:" in content: # Vite outputs this when ready
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
url_regex = re.compile(r'https://.*?\.trycloudflare\.com')
for _ in range(30): # Wait up to 30 seconds
    time.sleep(1)
    if os.path.exists('tunnel.log'):
        with open('tunnel.log', 'r') as f:
            content = f.read()
            match = url_regex.search(content)
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
```

## How It Works

- **Cloning**: We grab the source code directly from GitHub. This ensures you have the latest version.
- **Dependencies**: `npm install` sets up the JavaScript environment. Strudel uses a "monorepo" structure, so updating `npm` is crucial.
- **Branding**: The `sed` command modifies the HTML to change the tab title to "Kunguru Algo", giving it a custom feel.
- **Server**: `npm run dev` starts the Vite development server. We use `--host 0.0.0.0` so it accepts connections from the outside world (like our tunnel).
- **Cloudflare Tunnel**: This creates a secure, public link to the server running inside Colab. It's more stable than other tunneling methods and doesn't require account setup for the temporary "trycloudflare" links.

## Troubleshooting

- **502 Bad Gateway**: This usually means the server hasn't finished starting yet. Refresh the page after a few seconds.
- **Tunnel URL not showing**: Check the `tunnel.log` file in the Colab file browser (on the left) to see if there were connection errors.

## Free Tier Limitations

Since we are using the Free Tier of Google Colab, keep the following in mind:

1.  **Runtime Disconnects**: Google will disconnect your runtime if it is idle for too long (usually 90 minutes) or after a maximum duration (usually 12 hours). You will need to re-run the setup script if this happens.
2.  **Resource Limits**: While Strudel is lightweight, running very complex generative scripts *might* hit CPU limits, though this is rare for audio synthesis.
3.  **No GPU Needed**: Strudel runs on the CPU, so you don't need to select a GPU runtime. This saves resources for others!
