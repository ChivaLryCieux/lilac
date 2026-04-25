# Lilac migration plan from claude-code-custom

This plan ports the reusable product shape of `claude-code-custom` into Lilac without copying private Anthropic service bindings or native/platform shims that do not fit Lilac's OpenAI-compatible runtime.

## Target: 80% user-facing parity

The migration focuses on the features a CLI agent user touches most often:

1. Interactive REPL shell with slash commands, streaming answers, clear status, and keyboard exits.
2. Local configuration, model selection, permission mode, and session persistence.
3. Workspace-aware tools for reading files, listing files, searching text, and running shell commands.
4. Skills as portable agent behaviors, including listing and switching skills.
5. Claude-Code-like commands: `/help`, `/status`, `/model`, `/skills`, `/clear`, `/compact`, `/files`, `/permissions`, `/doctor`, `/exit`.
6. Better terminal presentation for system/tool/user/assistant messages.
7. Clear extension boundaries for future MCP, plugin, remote session, IDE, and voice features.

## Non-goals for this migration pass

- Anthropic-only auth, billing, rate-limit, Claude remote bridge, and official plugin marketplace internals.
- Native shims for url-handler, modifiers, audio capture, image processor, or computer-use packages.
- Full custom Ink renderer replacement. Lilac stays on upstream Ink.

## Implementation phases

### Phase 1: Command and session foundation

- Done. Added command registry and parser.
- Done. Added persistent config and session storage under `.lilac/`.
- Done. Wired slash commands into `App`.
- Commit: `feat: add slash commands and local session state`.

### Phase 2: Workspace tools and permission mode

- Done. Added list/read/search/write workspace tools with workspace path guards.
- Done. Added shell command execution gated by `ask|auto|deny` permission mode.
- Done. Exposed tool capabilities to the harness runtime.
- Commit: `feat: add workspace tools and guarded shell`.

### Phase 3: Claude-Code-like UI surface

- Done. Added compact status header, command help, system/tool messages, and empty-state hints.
- Done. Added `/doctor`, `/files`, `/search`, `/compact`, and `/clear` interactions.
- Done. Added non-interactive `lilac "prompt"` path with `--help` and `--version`.
- Commit: `feat: add noninteractive cli entrypoint`.

### Phase 4: Documentation and parity report

- Done. README updated with migrated command surface and environment/config details.
- Done. Parity checklist added below.

## Extension map

| claude-code-custom area | Lilac equivalent |
| --- | --- |
| `commands/*` | `src/commands/*` command registry |
| `skills/*` | `skills/*.md` and `src/core/skills.ts` |
| `utils/permissions/*` | lightweight `src/core/settings.ts` permission mode |
| `query/*` and tool runtime | `src/harness/*` and `src/harness/tools.ts` |
| `components/*` | `src/components/*` Ink UI |
| session/history utilities | `src/core/session.ts` |
| doctor/status commands | `/doctor` and `/status` |

## Parity checklist

Implemented in Lilac:

- Interactive TUI with streaming messages.
- Slash command system and command help.
- Persistent local settings and latest-session restore under `.lilac/`.
- Skill listing and switching.
- Model override command.
- Permission mode command.
- Status and doctor commands.
- Local conversation clear and compact commands.
- Workspace file listing and ripgrep search commands.
- Harness tools for time, token estimation, skills, file read/list/search/write, and guarded shell execution.
- Non-interactive prompt mode.
- CLI help and version output.

Deferred behind extension boundaries:

- Anthropic auth, billing, rate-limit, and remote bridge services.
- MCP/plugin marketplace internals.
- IDE, voice, browser, native screenshot, native modifier, and URL handler shims.
- Custom Ink renderer replacement.

Practical parity estimate: more than 80% of the daily local-agent workflow is now represented in Lilac, while the remaining surface is intentionally limited to vendor/platform-specific integrations.
