---
title: "DICE: Diffusion Consensus Equilibrium for Sparse-View CT Reconstruction"
collection: publications
category: conferences
permalink: /publication/2025-12-14-dice-diffusion-consensus-equilibrium-sparse-view-ct
excerpt: 'Casting sparse-view CT reconstruction as a consensus equilibrium problem between a diffusion prior and the measurement model.'
date: 2025-12-14
venue: '2025 IEEE 10th International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP), Punta Cana, Dominican Republic'
paperurl: 'https://arxiv.org/abs/2509.14566'
citation: 'L. Suarez-Rodriguez, R. Jacome, R. Gualdrón-Hurtado, A. Mantilla-Dulcey and H. Arguello. (2025). "DICE: Diffusion Consensus Equilibrium for Sparse-view CT Reconstruction." <i>2025 IEEE 10th International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP)</i>, pp. 261-265. doi: 10.1109/CAMSAP66162.2025.11423960'
---

Sparse-view computed tomography is severely ill-posed: with few projection angles the measurement operator has a large null space and classical reconstructions are dominated by streaking artifacts.

DICE formulates the reconstruction as a **consensus equilibrium** problem whose agents are (i) a data-fidelity operator derived from the CT forward model and (ii) a pretrained diffusion model acting as a learned prior. Rather than treating the diffusion model as a plug-and-play denoiser inside a fixed iteration, the equilibrium formulation searches for a fixed point on which both agents agree, which stabilizes the sampling trajectory and keeps the reconstruction consistent with the acquired projections.

The method yields sharper structural detail than plug-and-play and diffusion-posterior-sampling baselines at aggressive view-subsampling factors.

---

[DOI](https://doi.org/10.1109/CAMSAP66162.2025.11423960) · [arXiv:2509.14566](https://arxiv.org/abs/2509.14566) · [Code](https://github.com/leonsuarez24/DICE)
