import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

Sentry.init({
  dsn: 'https://f176df88de324ac88dd21f3c7910aa2e@o417012.ingest.sentry.io/5314843',
  integrations: [new VueIntegration({ Vue, attachProps: true, logErrors: true })]
})
