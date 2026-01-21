# Running Strudel in Google Colab

While Strudel is designed to run in a web browser, you might want to integrate it into a Google Colab notebook to combine it with other Python data science workflows or simply to keep your code in Drive.

## Method 1: The Embed Approach (Recommended)

The easiest way to run Strudel in Colab is to use the `%%html` magic command to embed the Strudel editor directly into a cell's output. This ensures the audio engine (which runs in the browser) works correctly.

1. Create a new code cell in Google Colab.
2. Paste the following code:

```python
%%html
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
.retro-container {
  background: linear-gradient(135deg, #120458, #000000);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px #ff00de, inset 0 0 20px #00eaff;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  overflow: hidden;
  animation: border-pulse 4s infinite alternate;
}
@keyframes border-pulse {
  0% { box-shadow: 0 0 20px #ff00de, inset 0 0 20px #00eaff; }
  100% { box-shadow: 0 0 40px #ff00de, inset 0 0 40px #00eaff; }
}
.retro-container::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image:
    linear-gradient(rgba(255, 0, 222, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 234, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 0;
}
.retro-container::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 10px;
  position: relative;
  z-index: 1;
}
.retro-header {
  color: #00eaff;
  text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff;
  margin-bottom: 15px;
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
  animation: text-flicker 3s infinite alternate;
}
@keyframes text-flicker {
  0% { text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff; opacity: 1; }
  95% { text-shadow: 0 0 20px #00eaff, 0 0 40px #00eaff; opacity: 1; }
  96% { opacity: 0.8; }
  97% { opacity: 1; }
  98% { opacity: 0.5; }
  99% { opacity: 1; }
  100% { text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff; opacity: 1; }
}
.retro-iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 5px;
  display: block;
}
.fullscreen-btn {
  display: block;
  margin: 0 auto 15px;
  padding: 10px 20px;
  background: rgba(0, 234, 255, 0.1);
  border: 1px solid #00eaff;
  color: #00eaff;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 700;
  letter-spacing: 1px;
}
.fullscreen-btn:hover {
  background: rgba(0, 234, 255, 0.3);
  box-shadow: 0 0 15px #00eaff;
  text-shadow: 0 0 5px #00eaff;
}
</style>
<div class="retro-container">
  <div class="retro-header">KUNGURU ALGO // REPL</div>
  <button class="fullscreen-btn" onclick="toggleFullScreen()">Full Screen</button>
  <div class="glass-panel">
    <iframe class="retro-iframe"
      src="https://strudel.cc/?embed=1"
      allow="midi; fullscreen"
    ></iframe>
  </div>
</div>
<script>
function toggleFullScreen() {
  const elem = document.querySelector('.retro-iframe');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
</script>
```

3. Run the cell. You will see the Strudel editor appear. You can type code and play it directly there!

## Method 2: Pre-loading Code

If you want to open Strudel with specific code already loaded (e.g., your Nujabes beat), you can encode the code in the URL.

```python
import urllib.parse
from IPython.display import HTML

# Your Strudel Code
code = """
s("bd sd").fast(2)
"""

# Encode it
encoded_code = urllib.parse.quote(code)
url = f"https://strudel.cc/?embed=1#{encoded_code}"

print(f"Generated Kunguru Algo URL: {url}")

# CSS for Retrofuturist Glassmorphism
style = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
.retro-container {
  background: linear-gradient(135deg, #120458, #000000);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px #ff00de, inset 0 0 20px #00eaff;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  overflow: hidden;
  animation: border-pulse 4s infinite alternate;
}
@keyframes border-pulse {
  0% { box-shadow: 0 0 20px #ff00de, inset 0 0 20px #00eaff; }
  100% { box-shadow: 0 0 40px #ff00de, inset 0 0 40px #00eaff; }
}
.retro-container::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image:
    linear-gradient(rgba(255, 0, 222, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 234, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 0;
}
.retro-container::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 10px;
  position: relative;
  z-index: 1;
}
.retro-header {
  color: #00eaff;
  text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff;
  margin-bottom: 15px;
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
  animation: text-flicker 3s infinite alternate;
}
@keyframes text-flicker {
  0% { text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff; opacity: 1; }
  95% { text-shadow: 0 0 20px #00eaff, 0 0 40px #00eaff; opacity: 1; }
  96% { opacity: 0.8; }
  97% { opacity: 1; }
  98% { opacity: 0.5; }
  99% { opacity: 1; }
  100% { text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff; opacity: 1; }
}
.retro-iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 5px;
  display: block;
}
.fullscreen-btn {
  display: block;
  margin: 0 auto 15px;
  padding: 10px 20px;
  background: rgba(0, 234, 255, 0.1);
  border: 1px solid #00eaff;
  color: #00eaff;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 700;
  letter-spacing: 1px;
}
.fullscreen-btn:hover {
  background: rgba(0, 234, 255, 0.3);
  box-shadow: 0 0 15px #00eaff;
  text-shadow: 0 0 5px #00eaff;
}
</style>
<script>
function toggleFullScreen() {
  const elem = document.querySelector('.retro-iframe');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
</script>
"""

# Generate HTML
html = f"""
{style}
<div class="retro-container">
  <div class="retro-header">KUNGURU ALGO // REPL</div>
  <button class="fullscreen-btn" onclick="toggleFullScreen()">Full Screen</button>
  <div class="glass-panel">
    <iframe class="retro-iframe"
      src="{url}"
      allow="midi; fullscreen"
    ></iframe>
  </div>
</div>
"""

# Display it
display(HTML(html))
```

## Method 3: Native Colab Hosting (For Full Screen URL)

If you want a **dedicated URL** to view your Kunguru Algo interface in full screen (branded correctly in the browser tab) and have it hosted directly from your Colab instance (without using Ngrok or Cloudflare), you can use Colab's built-in proxy.

1.  This method creates a local HTML file with your Kunguru Algo branding.
2.  It starts a simple Python web server in the background.
3.  It generates a proxy URL that points to this server.

```python
import urllib.parse
from google.colab import output
import subprocess
import time

# 1. Prepare your Strudel code
code = """
s("bd sd").fast(2)
"""
encoded_code = urllib.parse.quote(code)
strudel_url = f"https://strudel.cc/?embed=1#{encoded_code}"

# 2. Create the HTML file locally
html_content = f"""
<!DOCTYPE html>
<html>
<head>
<title>Kunguru Algo</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
body, html {{ margin: 0; padding: 0; height: 100%; overflow: hidden; background: #000; }}
.retro-container {{
  background: linear-gradient(135deg, #120458, #000000);
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
  position: relative;
}}
.retro-container::before {{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image:
    linear-gradient(rgba(255, 0, 222, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 234, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 0;
}}
.retro-header {{
  color: #00eaff;
  text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff;
  padding: 15px;
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 234, 255, 0.3);
}}
.retro-iframe {{
  flex-grow: 1;
  width: 100%;
  border: none;
  position: relative;
  z-index: 1;
}}
</style>
</head>
<body>
<div class="retro-container">
  <div class="retro-header">KUNGURU ALGO // REPL</div>
  <iframe class="retro-iframe" src="{strudel_url}" allow="midi; fullscreen"></iframe>
</div>
</body>
</html>
"""

with open("kunguru.html", "w") as f:
    f.write(html_content)

# 3. Start the server (if not already running)
# We use a specific port, e.g., 8000
PORT = 8000
subprocess.Popen(["python3", "-m", "http.server", str(PORT)])
time.sleep(1) # Wait for server to start

# 4. Serve it!
# This function opens the port in a new tab using Colab's proxy
output.serve_kernel_port_as_window(PORT, path="/kunguru.html")

# 5. Get the URL explicitly
proxy_url = output.eval_js(f"google.colab.kernel.proxyPort({PORT})") + "kunguru.html"
print(f"Your Kunguru Algo is hosted at: {proxy_url}")
```

## Why Free Tier?

Strudel runs **client-side** (in your browser). It does not rely on the Google Colab backend (GPU/TPU/CPU) to generate audio. Therefore, the **Free Tier of Colab is perfectly sufficient**. You are essentially using Colab as a hosting platform for the interface.

**Note on Runtime:** Since Strudel runs in the browser, you don't even need to "Connect" to a runtime for the iframe to load, but for the `%%html` magic to execute, you just need the basic CPU runtime which is free.

## Limitations

- **Audio Recording**: Recording the audio output directly to a file in Colab's file system is difficult because the audio is generated in your browser, not on the Python server. You would need to use Strudel's built-in recording feature to download the audio to your local machine.
