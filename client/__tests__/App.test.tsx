import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../src/App'
import React from 'react'

test('App.tsx Render', async () => {
  const { getByText, getByRole } = render(<App/>)

  expect(getByText('Hello Kafkalytics x1!'))
  await getByRole('button', { name: 'Increment '}).click()

  expect((getByText('Hello Kafkalytics x2!')))
})
