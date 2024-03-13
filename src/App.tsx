import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MENU_LIST } from './settings/menu-settings'
import MainTemplate from './templates/main-template'
import { ThemeProvider } from './context/theme/theme-context'
import { FontProvider } from './context/font/font-context'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <FontProvider>
            <MainTemplate>
              <Routes>
                {MENU_LIST.map((menu) =>
                  <Route key={menu.path} path={menu.path} element={menu.element} />
                )}
              </Routes>
            </MainTemplate>
          </FontProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
