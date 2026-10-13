import siemensOverview from '../media/optimized/siemens-overview.webp'
import siemensPricing from '../media/optimized/siemens-pricing.webp'
import idcpDashboard from '../media/optimized/idcp-dashboard.webp'
import idcpChatbot from '../media/optimized/idcp-chatbot.webp'

export interface ProjectImage {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export const siemensImages: ProjectImage[] = [
  {
    src: siemensOverview,
    alt: 'Siemens-prototype met bestandsupload, een artikeloverzicht en validatiestatussen.',
    caption: 'Offerteverwerking',
    width: 1610,
    height: 977,
  },
  {
    src: siemensPricing,
    alt: 'Siemens-prototype met totaalprijs, kortingsvelden en een knop voor Excel-export.',
    caption: 'Prijsberekening',
    width: 1482,
    height: 1062,
  },
]

export const idcpImages: ProjectImage[] = [
  {
    src: idcpDashboard,
    alt: 'IDCP-dashboard met overzichten van bedrijven, contactpersonen en interesses.',
    caption: 'Dashboard',
    width: 1900,
    height: 904,
  },
  {
    src: idcpChatbot,
    alt: 'IDCP-chatbot geopend boven het dashboard, met een gesprek over het zoeken naar bedrijven.',
    caption: 'Chatbot',
    width: 1895,
    height: 896,
  },
]
