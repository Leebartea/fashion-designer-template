# Local Editing & Git Commit Guide
# Elegant Fashion Palace — Fashion Designer Template

**Always edit locally, not on GitHub's website.**
This guide is specific to the `fashion-designer-template` repository.

---

## Your Repository Info

| Item | Value |
|------|-------|
| GitHub repo | https://github.com/Leebartea/fashion-designer-template |
| Live site | https://leebartea.github.io/fashion-designer-template/ |
| Local folder | `/Users/greystone/Downloads/All Templates/Fashion Designer` |
| Main config file | `js/config.js` |

---

## Why Edit Locally (Not on GitHub Website)

| Factor | Local editing | GitHub web editor |
|--------|--------------|-------------------|
| Edit multiple files at once | ✅ | ❌ One file at a time |
| See your changes in the browser | ✅ Open index.html live | ❌ Can't preview |
| Undo mistakes | ✅ Git history + Cmd+Z | ⚠️ Limited |
| Risk of broken site | Low — test first | High — goes live immediately |
| Commit multiple files together | ✅ One logical commit | ❌ One file per commit |

---

## One-Time Setup (Do This Once)

### Step 1 — Confirm Git is installed
```bash
git --version
# Should print: git version 2.x.x
```

### Step 2 — Open the project in VS Code
```bash
code "/Users/greystone/Downloads/All Templates/Fashion Designer"
```

### Step 3 — Confirm the repo is linked to GitHub
```bash
cd "/Users/greystone/Downloads/All Templates/Fashion Designer"
git remote -v
# Should show: origin  https://github.com/Leebartea/fashion-designer-template.git
```

---

## Daily Editing Workflow

```
1. Open VS Code → edit files
2. Open index.html in browser → check it looks right
3. git add [files]
4. git commit -m "your message"
5. git push
→ GitHub Actions auto-deploys the live site in ~45 seconds
```

---

## Step-by-Step: Making an Edit and Pushing

### 1. Navigate to the project
```bash
cd "/Users/greystone/Downloads/All Templates/Fashion Designer"
```

### 2. Check what has changed
```bash
git status
```
Red = unstaged. Green = staged (ready to commit).

### 3. See the exact changes (optional)
```bash
git diff
# Press Q to exit
```

### 4. Stage the files you want to commit

**Specific files (recommended — avoids mistakes):**
```bash
git add js/config.js
git add index.html
git add data/collections.js
# Add as many as you need
```

**All changed files at once:**
```bash
git add .
# Stages everything changed — double-check with git status first
```

### 5. Commit
```bash
git commit -m "update: describe what you changed"
```

### 6. Push (triggers live deploy ~45 seconds)
```bash
git push
```

---

## Common Scenarios

### Scenario A — Update WhatsApp number
```bash
# 1. Edit js/config.js → whatsappNumber: '234XXXXXXXXXX'
# 2. Save
git add js/config.js
git commit -m "update: change WhatsApp number"
git push
```

### Scenario B — Edit multiple files together (DON'T forget any!)
```bash
# Example: you edited config.js AND index.html AND data/collections.js
git add js/config.js index.html data/collections.js
git commit -m "update: update contact info and homepage content"
git push
```
> **Common mistake:** Running `git add js/config.js` and forgetting the HTML files.
> Always run `git status` first to see ALL modified files, then add them all.

### Scenario C — Add new products to the shop
```bash
# Edit data/collections.js — add your new item to the array
git add data/collections.js
git commit -m "add: 3 new products — bubu gown, kimono set, accessories"
git push
```

### Scenario D — Update the gallery
```bash
# Edit js/gallery-filter.js — update GALLERY_ITEMS array
git add js/gallery-filter.js
git commit -m "update: replace gallery images with new collection photos"
git push
```

### Scenario E — Add your own images
```bash
# 1. Copy images into: assets/images/
# 2. Update the image path in data/collections.js or js/gallery-filter.js
git add assets/images/ data/collections.js
git commit -m "update: add real product photos"
git push
```

### Scenario F — Update brand colors
```bash
# Edit the <style> block in each HTML file you want to update
# Change --color-primary, --color-accent etc.
git add index.html about.html shop.html gallery.html bespoke.html appointment.html faq.html wedding.html policy.html
git commit -m "update: change brand colors to new palette"
git push
```

### Scenario G — Full rebrand (all config + pages)
```bash
# Edit js/config.js (name, number, social, address)
# Edit about.html (founder story, team)
# Check all pages load correctly first, then:
git add .
git commit -m "update: full rebrand — [new business name]"
git push
```

---

## Pushing With Your Token (If git push asks for password)

Your token expires periodically. When it does, generate a new one at:
https://github.com/settings/tokens → Fine-grained tokens → New token
Scopes needed: `repo` + `workflow`

Then push using the token temporarily:
```bash
git remote set-url origin https://Leebartea:YOUR_TOKEN@github.com/Leebartea/fashion-designer-template.git
git push
git remote set-url origin https://github.com/Leebartea/fashion-designer-template.git
```
Always strip the token from the URL after pushing (the last line above).

---

## Check Deploy Status After Push

```bash
gh run list --repo Leebartea/fashion-designer-template --limit 3
# success ✅ = live | failure ❌ = check logs

gh run view --repo Leebartea/fashion-designer-template
# Live view of the running deploy
```

Or go to: https://github.com/Leebartea/fashion-designer-template/actions

---

## Fixing a Mistake After Pushing

```bash
# 1. Fix the file in VS Code
# 2. Save
git add [file]
git commit -m "fix: correct [what was wrong]"
git push
# Live site updates in ~45 seconds
```

---

## Files and What They Control

| File | What it controls |
|------|-----------------|
| `js/config.js` | Business name, WhatsApp, phone, address, social links, currency |
| `data/collections.js` | All shop products — names, prices, images, categories |
| `data/testimonials.js` | Customer reviews on the homepage |
| `data/faq.js` | FAQ questions and answers |
| `js/gallery-filter.js` | Gallery images and categories |
| `js/components.js` | Navbar, footer, WhatsApp float button (shared across all pages) |
| `about.html` | Founder story, team section, studio images |
| `index.html` | Homepage — hero, featured items, how it works |
| `shop.html` | Shop page (rendered from data/collections.js) |
| `bespoke.html` | Custom order process, measurement form |
| `wedding.html` | Wedding & bridal services |
| `appointment.html` | Booking consultation form |

---

## Git Cheat Sheet

```bash
git status                          # See what's changed
git diff                            # See exact line changes
git add js/config.js                # Stage one file
git add js/config.js index.html     # Stage multiple files
git add .                           # Stage all changed files
git commit -m "your message here"   # Save a snapshot
git push                            # Send to GitHub → auto-deploys live
git pull                            # Get latest from GitHub
git log --oneline -10               # View recent commit history
git reset --soft HEAD~1             # Undo last commit (keep file changes)
```

---

## Summary — The 3 Commands Every Time

```bash
git add .                                    # 1. Stage all changes
git commit -m "describe what you changed"    # 2. Save a snapshot
git push                                     # 3. Send to GitHub → auto-deploys live
```
