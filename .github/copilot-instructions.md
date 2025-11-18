<!--
  Auto-generated template for AI coding assistants.
  NOTE: repository scan (2025-11-14) found no existing agent guidance files.
  Please review and populate the placeholders below with project-specific commands and files.
-->

# Copilot / AI assistant instructions (project-specific)

Purpose
- Help an AI coding agent be immediately productive in this repository by documenting the
  project's architecture, developer workflows, and project-specific conventions.

Repository status (scan performed 2025-11-14)
- No existing `.github/copilot-instructions.md`, `AGENT.md`, or rule files were found.

How to use this file
- When you (an AI assistant) open the repo, update the sections below with concrete
  commands and examples discovered in code (package manifests, CI workflows, Makefile).

Quick checklist for discovery (automated or manual)
- Look for: `package.json`, `pyproject.toml`, `requirements.txt`, `Pipfile`, `Makefile`, `Dockerfile`, `README.md`, `CHANGELOG.md`.
- Inspect `.github/workflows/` to find CI steps and test commands.
- Scan `src/`, `services/`, `cmd/`, `internal/`, `pkg/`, `tests/` to map major components.

What to document here (minimal, actionable)
- Big picture: list top-level components and service boundaries (example: `frontend/`, `api/`, `worker/`).
- Build & test commands: exact shell commands for dev and CI (example: `npm ci && npm test`, `pip install -r requirements.txt && pytest`).
- How to run locally: containers, dev servers, env vars, sample `.env` expectations.
- Where configuration lives: `config/`, `env` files, Kubernetes/terraform folders.
- Non-obvious workflows: database migrations, seeding, schema generation, codegen steps.
- Integration points: external APIs, cloud services, required credentials, 3rd-party webhooks.

Examples (fill these with real commands found in the repo)
- Node: If `package.json` exists, run:
  - `npm ci`
  - `npm run build` (if `build` script exists)
  - `npm test`
- Python: If `pyproject.toml` or `requirements.txt` exists, run:
  - `python -m venv .venv`
  - `.venv/bin/pip install -r requirements.txt`
  - `pytest -q`
- Docker: If `Dockerfile` exists, build with:
  - `docker build -t project:dev .`

Patterns & conventions to preserve
- Preserve file/module boundaries in `src/` and `services/`—this repo prefers small focused packages over a single monolith (if present).
- Keep existing public APIs and OpenAPI/contract files in sync when changing handlers (look for `openapi`, `api.yaml`, `swagger`).

What I couldn't discover automatically
- The repository had no files matched during the initial scan. To make these instructions concrete,
  please provide or point me to:
  - the primary language/runtime (Node/Python/Go/Rust)
  - the build and test commands used by developers
  - the main services or components and where their code lives
  - any non-obvious dev setup (db migrations, external APIs, secrets setup)

How to update this file
- Edit this file and replace the checklist/examples with concrete commands and file paths.
- When merging an existing file, preserve any sections marked `KEEP:` or `DO NOT OVERWRITE`.

Next steps for the human maintainer
- Paste common dev commands and the names/paths of the main components into this file.
- Optionally add a short diagram or list of endpoints in `README.md` that the AI can reference.

Questions for you
- What are the exact build/test commands and the primary language/runtime? Where are the main services located?

-- End of template
