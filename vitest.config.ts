import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const isTestBuild = mode === 'test-build';

  return {
    resolve: {
      alias: {
        '@': isTestBuild ? './dist' : './src',
      },
    },
    test: {
      globals: true,
      coverage: {
        enabled: true,
        provider: 'v8',
        all: false,
      },
    },
  };
});
