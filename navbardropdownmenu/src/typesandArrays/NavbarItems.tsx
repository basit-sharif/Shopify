import { SpringSummer2021, Backinbusiness, AloneWoman, background } from "@/assets"

export interface everysubMenuContentType {
    label?: string,
    dropdown: boolean,
    image?: any,
}

export interface everysubMenuType {
    heading?: string,
    content?: Array<everysubMenuContentType>,
}

export interface subMenuType {
    firstMenu?: Array<everysubMenuType>,
    secondMenu?: Array<everysubMenuType>,
    thirdMenu?: Array<everysubMenuType>,
    fourthMenu?: Array<everysubMenuType>,
    // [i: string]:Array<everysubMenuType>;             This can also be used to code in one line
}

export interface NavbarItemType {
    label: string,
    dropdown: boolean,
    href?: string,
    headinSubmenu?: string,
    child?: Array<subMenuType>,
    heightToDisplay?: number,
}

export const NavbarItems: Array<NavbarItemType> = [
    {
        label: "Men",
        dropdown: true,
        child: [
            {
                firstMenu: [
                    {
                        heading: "All men",
                        content: [
                            {
                                label: "Third level test",
                                dropdown: false,
                            },
                            {
                                label: "Another",
                                dropdown: false,
                            }
                        ]
                    }
                ],
                secondMenu: [
                    {
                        content: [
                            {
                                label: "Shirts",
                                dropdown: false,
                            },
                            {
                                label: "Shorts",
                                dropdown: false,
                            },
                            {
                                label: "Boardshorts",
                                dropdown: false,
                            },
                            {
                                label: "Jackets",
                                dropdown: false,
                            },
                            {
                                label: "Sale",
                                dropdown: false,
                            },
                        ]
                    }
                ],
                thirdMenu: [
                    {
                        content: [
                            {
                                image: SpringSummer2021,
                                dropdown: false,
                            },
                            {
                                label: "Spring/Summer 2021",
                                dropdown: false,
                            },
                        ],
                        heading: "View the collection",
                    },
                    {
                        content: [
                            {
                                image: Backinbusiness,
                                dropdown: false,
                            },

                            {
                                label: "Back in business",
                                dropdown: false,
                            },
                        ],
                        heading: "Visit our Brooklyn boutique",
                    }
                ]
            }
        ],
        heightToDisplay: 60,
    },
    {
        label: "Women",
        dropdown: true,
        child: [
            {
                secondMenu: [
                    {
                        content: [
                            {
                                label: "All women",
                                dropdown: false,
                            },
                            {
                                label: "Dresses",
                                dropdown: false,
                            },
                            {
                                label: "Jackets",
                                dropdown: false,
                            },
                            {
                                label: "Shirts",
                                dropdown: false,
                            },
                            {
                                label: "Pants",
                                dropdown: false,
                            },
                        ]
                    }
                ],
                thirdMenu: [
                    {
                        content: [
                            {
                                image: AloneWoman,
                                dropdown: false,
                            },
                            {
                                label: "Spring/Summer 2021",
                                dropdown: false,
                            },
                        ],
                        heading: "View the collection",
                    },
                    {
                        content: [
                            {
                                image: background,
                                dropdown: false,
                            },

                            {
                                label: "Off the beaten path",
                                dropdown: false,
                            },
                        ],
                        heading: "Read our travel journal",
                    }
                ]
            }
        ],
        heightToDisplay: 52,
    },
    {
        label: "About",
        dropdown: true,
        child: [
            {
                fourthMenu: [
                    {
                        content: [
                            {
                                label: "Our story",
                                dropdown: false,
                            },
                            {
                                label: "Journal",
                                dropdown: false,
                            },
                            {
                                label: "FAQ",
                                dropdown: false,
                            },
                        ]
                    }
                ],
            }
        ],
        heightToDisplay: 12,
    },
    {
        label: "Theme features",
        dropdown: false,
        heightToDisplay: 0,
    },
] 