# Contributing to SUDO

```
> system: accepting contributions
> access: community-driven
> protocol: open-source
```

Thank you for your interest in contributing to SUDO! This document provides guidelines for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. Create a new issue with a clear title and description
3. Include steps to reproduce the bug
4. Add screenshots if applicable
5. Specify your browser and OS version

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue with the `enhancement` label
3. Clearly describe the feature and its benefits
4. Explain how it fits with the retro terminal aesthetic

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Test thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork
7. Open a Pull Request with a detailed description

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow existing code formatting
- Use meaningful variable and function names
- Comment complex logic
- Keep functions small and focused

### Aesthetic Guidelines

- Maintain the 1980s terminal aesthetic
- Use monospace fonts only
- Stick to green/amber terminal colors
- Keep CRT effects authentic
- Preserve the retro computing feel

### Testing

- Test in multiple browsers (Chrome, Firefox, Safari)
- Verify mobile responsiveness
- Check terminal functionality
- Ensure smooth animations
- Validate command execution

### Commit Messages

Follow conventional commit format:

```
feat: add new terminal command
fix: resolve boot sequence glitch
docs: update README with new commands
style: adjust CRT effect intensity
refactor: optimize terminal rendering
test: add command parser tests
```

## Project Structure

```
src/
├── Terminal.tsx       # Main terminal component
├── commands.ts        # Command definitions
├── types.ts          # TypeScript types
├── BlinkingText.tsx  # Animation component
└── index.css         # Styles and effects
```

## Adding New Commands

1. Open `src/commands.ts`
2. Add command logic to `executeCommand` function
3. Update help text
4. Test the command thoroughly
5. Document in README

Example:
```typescript
if (cmd === 'newcommand') {
  return {
    output: ['Command output here'],
    type: 'output'
  };
}
```

## Questions?

Feel free to open an issue for any questions or clarifications.

---

```
> contribution_protocol: active
> sudo: elevating community code
```
