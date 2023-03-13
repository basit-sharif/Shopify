import { SpringSummer2021, Backinbusiness, AloneWoman, background } from "@/assets"

export interface everysubMenuContentType {
    label?: string,
    dropdown: boolean,
    underLineWidth?:string,
    image?: any,
}

export interface everysubMenuType {
    heading?: string,
    underLineWidth?:string,
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
                        underLineWidth:"4.5rem",
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
                                underLineWidth:"3.4rem",
                            },
                            {
                                label: "Shorts",
                                dropdown: false,
                                underLineWidth:"3.4rem",
                            },
                            {
                                label: "Boardshorts",
                                dropdown: false,
                                underLineWidth:"6.6rem",
                            },
                            {
                                label: "Jackets",
                                dropdown: false,
                                underLineWidth:"3.7rem",
                            },
                            {
                                label: "Sale",
                                dropdown: false,
                                underLineWidth:"2.4rem",
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
                                underLineWidth:"6.6rem",
                            },
                            {
                                label: "Dresses",
                                dropdown: false,
                                underLineWidth:"3.7rem",
                            },
                            {
                                label: "Jackets",
                                dropdown: false,
                                underLineWidth:"3.7rem",
                            },
                            {
                                label: "Shirts",
                                dropdown: false,
                                underLineWidth:"3.4rem",
                            },
                            {
                                label: "Pants",
                                dropdown: false,
                                underLineWidth:"3.4rem",
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