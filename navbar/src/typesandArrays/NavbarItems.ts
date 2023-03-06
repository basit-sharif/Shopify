export interface NavbarItemType {
    label: string,
    dropdown: boolean,
}

export const NavbarItems: Array<NavbarItemType> = [
    {
        label: "Men",
        dropdown: true,
    },
    {
        label: "Women",
        dropdown: true,
    },
    {
        label: "About",
        dropdown: true,
    },
    {
        label: "Theme features",
        dropdown: false,
    },
] 