---
title: "DIPA: Distilled Preconditioned Algorithms for Solving Imaging Inverse Problems"
collection: publications
category: preprints
permalink: /publication/2026-05-14-dipa-distilled-preconditioned-algorithms
excerpt: 'Linear and non-linear preconditioning operators learned by teacher-guided distillation, validated on MRI, compressed sensing and super-resolution.'
date: 2026-05-14
venue: 'arXiv preprint arXiv:2605.15456'
paperurl: 'https://arxiv.org/abs/2605.15456'
citation: 'R. Gualdrón-Hurtado, R. Jacome, L. Suarez and H. Arguello. (2026). "DIPA: Distilled Preconditioned Algorithms for Solving Imaging Inverse Problems." <i>arXiv:2605.15456</i>.'
---

DIPA addresses ill-conditioned sensing matrices by optimizing a preconditioning operator under a teacher-guided distillation criterion. Unlike model-compression distillation, teacher and student here differ in the *sensing operator* available at reconstruction time: the teacher uses a simulated, better-conditioned and more informative sensing matrix, while the student is restricted to the physically feasible one.

Two variants are proposed. **L-DIPA** keeps the preconditioner linear, which preserves interpretability and allows the conditioning improvement to be analyzed directly. **N-DIPA** parametrizes it with a neural network, trading interpretability for scalability.

The framework is validated on magnetic resonance imaging, compressed sensing and super-resolution, improving both convergence speed and reconstruction quality.

---

[arXiv:2605.15456](https://arxiv.org/abs/2605.15456)
