---
title: "Reasoning Diffusion Models"
description: "gpt-4o moment for diffusion models?"
date: "2025-08-17"
category: "General"
readTime: "3 min read"
active: false
---

Notes

Z-Image adopts reasoning in only the text-space. This means that, given a user input prompt and perhaps an input image, Z-Image is trained to:

1. Align the Z-Image latent space with a pretrained VLM $f_{\phi}(\cdot)$, and
2. the reasoning VLM produces reasoning chains to ultimately product the final text prompt for Z-Image

(text prompt, image prompt) --> VLM(text prompt, image prompt) = final prompt --> Z-Image(final prompt) = final image.