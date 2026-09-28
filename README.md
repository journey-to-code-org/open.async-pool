# open.async-pool

Dependency-free concurrency-limited async mapping that preserves input order.

## Install

```bash
npm install @journey-to-code/open-async-pool
```

## Usage

```js
await asyncPool(urls, fetchPage, { concurrency: 4 });
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
