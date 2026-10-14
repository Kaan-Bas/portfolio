import siemensOverview from '../media/optimized/siemens-overview.webp'
import siemensPricing from '../media/optimized/siemens-pricing.webp'
import idcpDashboard from '../media/optimized/idcp-dashboard.webp'
import idcpChatbot from '../media/optimized/idcp-chatbot.webp'
import loods5Homepage from '../media/optimized/loods5-homepage.webp'
import loods5Product from '../media/optimized/loods5-product.webp'

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

export const loods5Images: ProjectImage[] = [
  {
    src: loods5Homepage,
    alt: 'De Loods 5-webshop met hoofdnavigatie en een campagnebeeld voor Color House.',
    caption: 'Webshop homepage',
    width: 1893,
    height: 938,
  },
  {
    src: loods5Product,
    alt: 'Productdetailpagina van de Loods 5-webshop met productfoto, uitvoeringskeuze en bestelgegevens.',
    caption: 'Productpagina',
    width: 1894,
    height: 836,
  },
]
