import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import DomainIcon from '@mui/icons-material/Domain';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import SourceIcon from '@mui/icons-material/Source';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

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