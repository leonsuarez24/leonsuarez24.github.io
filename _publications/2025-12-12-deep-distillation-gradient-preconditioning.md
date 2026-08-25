---
title: "Deep Distillation Gradient Preconditioning for Inverse Problems"
collection: publications
category: conferences
permalink: /publication/2025-12-12-deep-distillation-gradient-preconditioning
excerpt: 'Learning a gradient preconditioner by distillation, so that a badly conditioned sensing operator behaves like a well-conditioned one during reconstruction.'
date: 2025-12-12
venue: '2025 IEEE 10th International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP), Punta Cana, Dominican Republic'
paperurl: 'https://arxiv.org/abs/2508.04832'
citation: 'R. Gualdrón-Hurtado, R. Jacome, L. Suarez, L. Galvis and H. Arguello. (2025). "Deep Distillation Gradient Preconditioning for Inverse Problems." <i>2025 IEEE 10th International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP)</i>, pp. 166-170. doi: 10.1109/CAMSAP66162.2025.11423951'
---

Ill-conditioned sensing matrices slow down and destabilize gradient-based reconstruction. Classical preconditioners are hand-designed and rarely match the structure of learned reconstruction pipelines.

This work learns the preconditioning operator instead. A teacher reconstruction that has access to a better-conditioned (but physically unavailable) sensing operator supervises the student, and the distillation loss shapes a preconditioner that makes the student's gradient steps behave like the teacher's. The learned preconditioner is dropped into standard first-order reconstruction algorithms.

It improves both convergence speed and final reconstruction quality across several imaging modalities, and is the direct predecessor of the DIPA framework.

---

[DOI](https://doi.org/10.1109/CAMSAP66162.2025.11423951) · [arXiv:2508.04832](https://arxiv.org/abs/2508.04832)
