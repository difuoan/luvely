import type { Preview } from '@storybook/vue3'
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize()

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
}

export default preview
