# Running Strudel in Google Colab

While Strudel is designed to run in a web browser, you might want to integrate it into a Google Colab notebook to combine it with other Python data science workflows or simply to keep your code in Drive.

## Method 1: The Embed Approach (Recommended)

The easiest way to run Strudel in Colab is to use the `%%html` magic command to embed the Strudel editor directly into a cell's output. This ensures the audio engine (which runs in the browser) works correctly.

1. Create a new code cell in Google Colab.
2. Paste the following code:

```python
%%html
<iframe
  src="https://strudel.cc/?embed=1"
  width="100%"
  height="600px"
  frameborder="0"
  allow="midi"
></iframe>
```

3. Run the cell. You will see the Strudel editor appear. You can type code and play it directly there!

## Method 2: Pre-loading Code

If you want to open Strudel with specific code already loaded (e.g., your Nujabes beat), you can encode the code in the URL.

```python
import urllib.parse

# Your Strudel Code
code = """
s("bd sd").fast(2)
"""

# Encode it
encoded_code = urllib.parse.quote(code)
url = f"https://strudel.cc/?embed=1#{encoded_code}"

# Generate HTML
html = f"""
<iframe
  src="{url}"
  width="100%"
  height="600px"
  frameborder="0"
  allow="midi"
></iframe>
"""

# Display it
from IPython.display import HTML
display(HTML(html))
```

## Why Free Tier?

Strudel runs **client-side** (in your browser). It does not rely on the Google Colab backend (GPU/TPU/CPU) to generate audio. Therefore, the **Free Tier of Colab is perfectly sufficient**. You are essentially using Colab as a hosting platform for the interface.

## Limitations

- **Audio Recording**: Recording the audio output directly to a file in Colab's file system is difficult because the audio is generated in your browser, not on the Python server. You would need to use Strudel's built-in recording feature to download the audio to your local machine.
