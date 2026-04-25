export const ROUTES = {
  home: {
    href: "/",
    title: {
      default: 'Главная',
    },
    icon: {
      standard: {
        default: HomeOutlinedIcon,
        selected: HomeIcon,
      },
    }
  },
  cases: {
    href: "/portfolio",
    title: {
      default: 'Портфолио',
    },
    icon: {
      standard: {
        default: SourceOutlinedIcon,
        active: SourceIcon,
      },
    }
  },
  about: {
    href: "/o-nas",
    title: {
      default: 'О нас',
    },
    icon: {
      standard: {
        default: DomainOutlinedIcon,
        active: DomainIcon,
      },
    }
  },
  personalDataAgreement: {
    href: "/pd-soglasheniye",
    title: {
      default: "Соглашение на обработку ПД",
    },
  },
}