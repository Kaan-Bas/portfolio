import siemensOverview from '../media/optimized/siemens-overview.webp'
import siemensPricing from '../media/optimized/siemens-pricing.webp'
import idcpDashboard from '../media/optimized/idcp-dashboard.webp'
import idcpChatbot from '../media/optimized/idcp-chatbot.webp'
import loods5Homepage from '../media/optimized/loods5-homepage.webp'
import loods5Product from '../media/optimized/loods5-product.webp'
import folioUpload from '../media/folio-1.png'
import folioAnswer from '../media/folio-2.png'
import folioSources from '../media/folio-3.png'

export interface ProjectImage {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export const folioImages: ProjectImage[] = [
  {
    src: folioUpload,
    alt: 'Folio-startscherm met PDF-upload en een chatinterface om vragen over een document te stellen.',
    caption: 'PDF uploaden',
    width: 1895,
    height: 933,
  },
  {
    src: folioAnswer,
    alt: 'Folio-chat met een geüploade PDF, een antwoord op een vraag en bronverwijzingen naar PDF-pagina’s.',
    caption: 'Antwoord met bronverwijzingen',
    width: 1890,
    height: 935,
  },
  {
    src: folioSources,
    alt: 'Folio-antwoord met een uitgeklapt bronfragment en verwijzingen naar de oorspronkelijke PDF-pagina’s.',
    caption: 'Bronfragment bekijken',
    width: 1889,
    height: 931,
  },
]

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
