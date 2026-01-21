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
}
.retro-iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 5px;
  display: block;
}
</style>
<div class="retro-container">
  <div class="retro-header">STRUDEL // REPL</div>
  <div class="glass-panel">
    <iframe class="retro-iframe"
      src="https://strudel.cc/?embed=1"
      allow="midi"
    ></iframe>
  </div>
</div>
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
}
.retro-iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 5px;
  display: block;
}
</style>
"""

# Generate HTML
html = f"""
{style}
<div class="retro-container">
  <div class="retro-header">STRUDEL // REPL</div>
  <div class="glass-panel">
    <iframe class="retro-iframe"
      src="{url}"
      allow="midi"
    ></iframe>
  </div>
</div>
"""

# Display it
display(HTML(html))
```

## Why Free Tier?

Strudel runs **client-side** (in your browser). It does not rely on the Google Colab backend (GPU/TPU/CPU) to generate audio. Therefore, the **Free Tier of Colab is perfectly sufficient**. You are essentially using Colab as a hosting platform for the interface.

**Note on Runtime:** Since Strudel runs in the browser, you don't even need to "Connect" to a runtime for the iframe to load, but for the `%%html` magic to execute, you just need the basic CPU runtime which is free.

## Limitations

- **Audio Recording**: Recording the audio output directly to a file in Colab's file system is difficult because the audio is generated in your browser, not on the Python server. You would need to use Strudel's built-in recording feature to download the audio to your local machine.
