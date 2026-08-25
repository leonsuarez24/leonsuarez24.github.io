---
title: "GAN-Supervised Seismic Data Reconstruction: An Enhanced Learning for Improved Generalization"
collection: publications
category: manuscripts
permalink: /publication/2024-07-29-gan-supervised-seismic-data-reconstruction
excerpt: 'A GAN-supervised training strategy that reconstructs irregularly missing seismic traces and generalizes to surveys never seen during training.'
date: 2024-07-29
venue: 'IEEE Transactions on Geoscience and Remote Sensing, vol. 62, Art. no. 5921910'
paperurl: 'https://arxiv.org/abs/2311.10910'
citation: 'P. Goyes-Peñafiel, L. Suárez-Rodríguez, C. V. Correa and H. Arguello. (2024). "GAN Supervised Seismic Data Reconstruction: An Enhanced Learning for Improved Generalization." <i>IEEE Transactions on Geoscience and Remote Sensing</i>, vol. 62, pp. 1-10, Art. no. 5921910. doi: 10.1109/TGRS.2024.3434474'
---

Seismic data interpolation of irregularly missing traces is a key step of the subsurface imaging workflow: gaps in the acquisition geometry propagate into every downstream processing and interpretation stage.

Purely supervised interpolation networks tend to overfit the acquisition geometry and noise statistics of the survey they were trained on. This work introduces a GAN-supervised learning scheme in which a generative model provides an additional supervisory signal during training, enriching the effective training distribution. The result is a reconstruction network whose performance degrades far more gracefully when it is applied to field data from different surveys and sampling patterns.

Experiments on synthetic and real seismic datasets show improved generalization over standard supervised baselines.

---

[DOI](https://doi.org/10.1109/TGRS.2024.3434474) · [arXiv:2311.10910](https://arxiv.org/abs/2311.10910)
