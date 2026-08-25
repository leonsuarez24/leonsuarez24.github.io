---
title: "NPN: Non-Linear Projections of the Null-Space for Imaging Inverse Problems"
collection: publications
category: conferences
permalink: /publication/2025-12-01-npn-non-linear-projections-null-space
excerpt: 'Learning non-linear projections of the sensing operator''s null space, so that reconstruction networks only model what the measurements cannot see.'
date: 2025-12-01
venue: 'Advances in Neural Information Processing Systems (NeurIPS) 39, Thirty-ninth Annual Conference on Neural Information Processing Systems'
paperurl: 'https://arxiv.org/abs/2510.01608'
citation: 'R. Jacome, R. Gualdrón-Hurtado, L. Suárez-Rodríguez and H. Arguello. (2025). "NPN: Non-Linear Projections of the Null-Space for Imaging Inverse Problems." <i>Advances in Neural Information Processing Systems (NeurIPS)</i>.'
---

Every undersampled imaging operator splits the signal space into a range space, which the measurements determine, and a **null space**, which they say nothing about. Range–null-space decompositions exploit this by keeping the measured component fixed and letting a network hallucinate only the unmeasured one — but the classical decomposition is linear, and a linear projection is a poor description of the manifold that natural images actually live on.

NPN replaces that linear projection with a learned non-linear one. The network is trained to project onto a non-linear surrogate of the null space, which keeps data consistency exact while giving the prior far more expressive power over the unobserved component.

Published at NeurIPS 2025.

---

[arXiv:2510.01608](https://arxiv.org/abs/2510.01608)
