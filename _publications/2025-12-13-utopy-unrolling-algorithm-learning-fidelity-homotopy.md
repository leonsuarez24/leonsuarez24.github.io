---
title: "UTOPY: Unrolling Algorithm Learning via Fidelity Homotopy for Inverse Problems"
collection: publications
category: conferences
permalink: /publication/2025-12-13-utopy-unrolling-algorithm-learning-fidelity-homotopy
excerpt: 'A homotopy on the fidelity term that continuously deforms an easy inverse problem into the hard one while an unrolled network is trained.'
date: 2025-12-13
venue: '2025 IEEE 10th International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP), Punta Cana, Dominican Republic'
paperurl: 'https://arxiv.org/abs/2509.14394'
citation: 'R. Jacome, R. Gualdrón-Hurtado, L. Suarez-Rodriguez and H. Arguello. (2025). "UTOPY: Unrolling Algorithm Learning via Fidelity Homotopy for Inverse Problems." <i>2025 IEEE 10th International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP)</i>, pp. 176-180. doi: 10.1109/CAMSAP66162.2025.11423864'
---

Unrolled networks are the workhorse of learned image reconstruction, but training them on a severely ill-conditioned forward operator is a hard non-convex optimization problem.

UTOPY introduces a homotopy over the *fidelity term*: training begins on a well-conditioned surrogate problem and the fidelity is continuously deformed towards the true, ill-posed one as optimization proceeds. The unrolled network therefore never has to solve the hard problem from a cold start, and the continuation path acts as an implicit curriculum.

The approach is evaluated across several imaging inverse problems and consistently improves the final reconstruction quality of unrolled architectures.

---

[DOI](https://doi.org/10.1109/CAMSAP66162.2025.11423864) · [arXiv:2509.14394](https://arxiv.org/abs/2509.14394)
