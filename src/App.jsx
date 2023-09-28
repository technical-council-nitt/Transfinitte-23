import Router from './Router'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';


function App() {

  return (
    <>
        <MantineProvider>
        <NotificationsProvider>
        <Router />

        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}

export default App
