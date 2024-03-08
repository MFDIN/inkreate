import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MENU_LIST } from './settings/menu-settings'
import MainTemplate from './templates/main-template'
import { ThemeProvider } from './context/theme/theme-context'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
          <MainTemplate>
            <Routes>
              {MENU_LIST.map((menu) =>
                <Route key={menu.path} path={menu.path} element={menu.element} />
              )}
            </Routes>
          </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
