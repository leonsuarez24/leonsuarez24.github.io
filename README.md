# leonsuarez24.github.io

Personal academic website of **León Suárez-Rodríguez** — PhD student in Computer Science at the
Universidad Industrial de Santander (Bucaramanga, Colombia), HDSP group.

Live at <https://leonsuarez24.github.io>.

Built with [Jekyll](https://jekyllrb.com) using the
[AcademicPages](https://github.com/academicpages/academicpages.github.io) template
(a fork of [Minimal Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/)),
hosted on GitHub Pages.

## Structure

| Path | What it holds |
| --- | --- |
| `_config.yml` | Site-wide settings: title, theme (`mint`), sidebar profile and social links |
| `_data/navigation.yml` | Top navigation bar |
| `_pages/about.md` | Home page |
| `_pages/cv.md` | CV page, including the publication list grouped by category |
| `_publications/` | One Markdown file per paper; each also gets its own page |
| `files/CV_Leon.pdf` | Downloadable CV |
| `images/profile.jpg` | Sidebar photo |

## Adding a publication

Create `_publications/YYYY-MM-DD-slug.md`. The date in the filename must match the `date:` field.

```markdown
---
title: "Paper Title"
collection: publications
category: conferences      # manuscripts | conferences | preprints | books
permalink: /publication/YYYY-MM-DD-slug
excerpt: 'One-sentence summary shown in the list.'
date: YYYY-MM-DD
venue: 'Conference or journal, volume, pages'
paperurl: 'https://arxiv.org/abs/XXXX.XXXXX'
citation: 'Authors. (Year). &quot;Title.&quot; <i>Venue</i>. doi: ...'
---

Longer description rendered on the paper's own page.
```

Section headings and their order on the CV come from `publication_category` in `_config.yml`.
A category with no entries is skipped.

## Running locally

Requires Ruby with development headers (`sudo apt install ruby-dev build-essential` on Debian/Ubuntu):

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

Then open <http://localhost:4000>.

A Docker path is also available if you prefer not to install Ruby locally:

```bash
docker compose up
```

## License

Site content © León Suárez-Rodríguez. Template code under the [MIT License](LICENSE).
