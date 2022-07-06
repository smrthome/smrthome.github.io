---
title: Contributing, a how-to
description: A discussion on how to get involved.
---

## Ways to contribute
We would love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Discussing the current state of the documentation
- Submitting a fix or correction
- Proposing new sections to the documentation or features to the documentation site
- Becoming a maintainer

### Discussion
Forum/Discord coming soon{%sup%}(tm){%/sup%}

### Submitting a changes
1. Discuss changes or proposed changes
2. Fork this repository
3. Checkout the develop branch
    ```shell
    git checkout develop
    ```
4. Create a feature branch off of develop
    ```shell
    git checkout -b feature/add-networking-section
    ```
5. Make your changes
6. Create a PR from your repo's feature branch to this repositories develop branch

{% callout type="note" title="A note on branch naming" %}
naming of branches should follow the convention of `fix/some-name`, `feature/some-name` where `fix` or `feature` designate the indended action and `some-name` is a descriptive name of the work being done.

If a branch addresses and open issue, branch naming should include the issue number it is addressing. For example `fix/1-improved-doc-search` would indicate that there is an open issue numbered 1, the issue describes a short coming in the search functionality of the documentation and your submission fixs that issue.
{% /callout %}

