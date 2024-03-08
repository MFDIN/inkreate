import HomePage from "../page/home-page/home-page"

interface IMenu {
    name: string,
    path: string,
    element: JSX.Element
}

export const MENU_LIST: IMenu[] = [
    {
        name: "Home",
        path: "/",
        element: <HomePage />
    }
]