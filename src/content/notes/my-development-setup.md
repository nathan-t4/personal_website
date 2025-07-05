---
title: "My Development Setup"
description: "A detailed overview of my current development environment, including tools, configurations, and workflows that help me stay productive."
date: "2024-01-08"
category: "Setup"
readTime: "8 min read"
active: false
---

# My Development Setup

After years of experimenting with different tools and configurations, I've settled on a development setup that works well for me. Here's a comprehensive overview of my current environment.

## Operating System

I recently switched from macOS to Linux (Ubuntu 22.04) and couldn't be happier. The performance improvements and customization options are incredible.

## Code Editor

**VS Code** is my primary editor. Here are my essential extensions:

- **GitLens** - Enhanced Git capabilities
- **ES7+ React/Redux/React-Native snippets** - React development
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **Auto Rename Tag** - HTML/JSX tag renaming
- **Bracket Pair Colorizer** - Visual bracket matching

## Terminal

I use **iTerm2** with **Oh My Zsh** and the **Powerlevel10k** theme. My shell configuration includes:

```bash
# .zshrc highlights
export PATH="/usr/local/bin:$PATH"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Aliases
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git push"
alias gl="git log --oneline"
```

## Package Managers

- **npm** for Node.js projects
- **yarn** for larger projects (better dependency resolution)
- **pnpm** for monorepos (faster and more efficient)

## Version Control

**Git** with **GitHub** for hosting. I use conventional commits and semantic versioning for all my projects.

## Development Tools

### Node.js
I use **nvm** to manage Node.js versions. Currently running Node.js 18 LTS.

### Database
- **PostgreSQL** for relational data
- **MongoDB** for document-based data
- **Redis** for caching

### API Testing
- **Postman** for API testing and documentation
- **Insomnia** for GraphQL queries

## Browser Extensions

- **React Developer Tools**
- **Redux DevTools**
- **JSON Viewer**
- **ColorZilla** for color picking
- **WhatFont** for font identification

## Productivity Tools

- **Notion** for note-taking and project management
- **Figma** for design and prototyping
- **Slack** for team communication
- **Discord** for community engagement

## Conclusion

This setup has evolved over time and continues to change as new tools emerge. The key is finding what works for your workflow and being willing to adapt when better solutions come along.

Remember, the best development setup is the one that makes you most productive and comfortable. 