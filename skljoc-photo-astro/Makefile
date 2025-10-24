# Škljoc Photo Astro - Makefile
# Development and build automation

# Variables
NODE_BIN := node_modules/.bin
PORT := 4321
HOST := localhost

# Colors for terminal output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[1;33m
RED := \033[0;31m
NC := \033[0m # No Color

# Default target
.DEFAULT_GOAL := help

# Phony targets
.PHONY: help install dev build preview clean test lint format check deploy setup update

## help: Display this help message
help:
	@echo "$(BLUE)Škljoc Photo Astro - Available Commands$(NC)"
	@echo ""
	@grep -E '^##' Makefile | sed 's/## //'
	@echo ""
	@echo "$(YELLOW)Usage:$(NC) make [command]"

## install: Install project dependencies
install:
	@echo "$(BLUE)Installing dependencies...$(NC)"
	npm install
	@echo "$(GREEN)✓ Dependencies installed successfully$(NC)"

## dev: Start development server
dev:
	@echo "$(BLUE)Starting development server...$(NC)"
	@echo "$(YELLOW)→ Server will run at http://$(HOST):$(PORT)$(NC)"
	npm run dev

## build: Build for production
build:
	@echo "$(BLUE)Building for production...$(NC)"
	npm run build
	@echo "$(GREEN)✓ Production build complete$(NC)"
	@echo "$(YELLOW)→ Output in ./dist directory$(NC)"

## preview: Preview production build
preview: build
	@echo "$(BLUE)Starting preview server...$(NC)"
	npm run preview

## clean: Clean build artifacts and dependencies
clean:
	@echo "$(BLUE)Cleaning project...$(NC)"
	rm -rf dist
	rm -rf node_modules
	rm -f package-lock.json
	@echo "$(GREEN)✓ Clean complete$(NC)"

## clean-cache: Clear Astro and npm caches
clean-cache:
	@echo "$(BLUE)Clearing caches...$(NC)"
	rm -rf .astro
	npm cache clean --force
	@echo "$(GREEN)✓ Caches cleared$(NC)"

## reinstall: Clean and reinstall dependencies
reinstall: clean install
	@echo "$(GREEN)✓ Project reinstalled successfully$(NC)"

## format: Format code with Prettier (if configured)
format:
	@echo "$(BLUE)Formatting code...$(NC)"
	@if [ -f "$(NODE_BIN)/prettier" ]; then \
		$(NODE_BIN)/prettier --write "src/**/*.{astro,js,ts,css,md}"; \
		echo "$(GREEN)✓ Code formatted$(NC)"; \
	else \
		echo "$(YELLOW)⚠ Prettier not installed. Run: npm install --save-dev prettier$(NC)"; \
	fi

## lint: Run linting checks
lint:
	@echo "$(BLUE)Running linting checks...$(NC)"
	npx astro check
	@echo "$(GREEN)✓ Linting complete$(NC)"

## type-check: Run TypeScript type checking
type-check:
	@echo "$(BLUE)Running TypeScript type check...$(NC)"
	npx astro check
	@echo "$(GREEN)✓ Type checking complete$(NC)"

## test: Run tests (placeholder for future test suite)
test:
	@echo "$(YELLOW)No tests configured yet$(NC)"
	@echo "Consider adding: Vitest, Playwright, or Cypress for testing"

## setup: Initial project setup
setup: install
	@echo "$(BLUE)Setting up project...$(NC)"
	@echo "$(GREEN)✓ Project setup complete$(NC)"
	@echo ""
	@echo "$(YELLOW)Next steps:$(NC)"
	@echo "  1. Run 'make dev' to start development server"
	@echo "  2. Open http://$(HOST):$(PORT) in your browser"

## update: Update Astro and dependencies
update:
	@echo "$(BLUE)Updating dependencies...$(NC)"
	npm update
	npx @astrojs/upgrade
	@echo "$(GREEN)✓ Dependencies updated$(NC)"

## analyze: Analyze bundle size
analyze: build
	@echo "$(BLUE)Analyzing bundle size...$(NC)"
	@if [ -d "dist" ]; then \
		echo "$(YELLOW)Bundle Analysis:$(NC)"; \
		du -sh dist/; \
		echo ""; \
		echo "$(YELLOW)Largest files:$(NC)"; \
		find dist -type f -exec du -h {} + | sort -rh | head -10; \
	else \
		echo "$(RED)✗ Build directory not found. Run 'make build' first$(NC)"; \
	fi

## serve: Serve the built site with Python (alternative to preview)
serve: build
	@echo "$(BLUE)Serving production build with Python...$(NC)"
	@echo "$(YELLOW)→ Server running at http://$(HOST):8000$(NC)"
	cd dist && python3 -m http.server 8000

## deploy-preview: Deploy to Netlify preview (requires Netlify CLI)
deploy-preview: build
	@echo "$(BLUE)Deploying to Netlify preview...$(NC)"
	@if command -v netlify >/dev/null 2>&1; then \
		netlify deploy --dir=dist; \
	else \
		echo "$(RED)✗ Netlify CLI not installed$(NC)"; \
		echo "$(YELLOW)Install with: npm install -g netlify-cli$(NC)"; \
	fi

## deploy-prod: Deploy to Netlify production (requires Netlify CLI)
deploy-prod: build
	@echo "$(BLUE)Deploying to Netlify production...$(NC)"
	@if command -v netlify >/dev/null 2>&1; then \
		netlify deploy --dir=dist --prod; \
	else \
		echo "$(RED)✗ Netlify CLI not installed$(NC)"; \
		echo "$(YELLOW)Install with: npm install -g netlify-cli$(NC)"; \
	fi

## lighthouse: Run Lighthouse audit (requires Chrome)
lighthouse: build serve
	@echo "$(BLUE)Running Lighthouse audit...$(NC)"
	@if command -v lighthouse >/dev/null 2>&1; then \
		lighthouse http://$(HOST):8000 --view; \
	else \
		echo "$(RED)✗ Lighthouse CLI not installed$(NC)"; \
		echo "$(YELLOW)Install with: npm install -g lighthouse$(NC)"; \
	fi

## check-links: Check for broken links
check-links: build
	@echo "$(BLUE)Checking for broken links...$(NC)"
	@if command -v linkchecker >/dev/null 2>&1; then \
		linkchecker dist/index.html; \
	else \
		echo "$(YELLOW)⚠ linkchecker not installed$(NC)"; \
		echo "Install with: pip install linkchecker"; \
	fi

## info: Display project information
info:
	@echo "$(BLUE)Project Information$(NC)"
	@echo "$(YELLOW)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo "Name:        Škljoc Photo Astro"
	@echo "Framework:   Astro $(shell npx astro --version 2>/dev/null | grep -o '[0-9.]*' || echo 'not installed')"
	@echo "Node:        $(shell node --version)"
	@echo "NPM:         $(shell npm --version)"
	@echo "Directory:   $(shell pwd)"
	@if [ -d "dist" ]; then \
		echo "Build Size:  $(shell du -sh dist/ | cut -f1)"; \
	fi
	@echo "$(YELLOW)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"

## watch: Watch for file changes and rebuild
watch:
	@echo "$(BLUE)Watching for changes...$(NC)"
	npm run dev

# Quick aliases
d: dev
b: build
p: preview
c: clean
i: install