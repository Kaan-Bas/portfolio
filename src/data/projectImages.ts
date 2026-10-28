import siemensOverview from '../media/optimized/siemens-overview.webp'
import siemensPricing from '../media/optimized/siemens-pricing.webp'
import idcpDashboard from '../media/optimized/idcp-dashboard.webp'
import idcpChatbot from '../media/optimized/idcp-chatbot.webp'
import loods5Homepage from '../media/optimized/loods5-homepage.webp'
import loods5Products from '../media/optimized/loods5-products.webp'
import loods5Product from '../media/optimized/loods5-product.webp'
import folioDocumentChat from '../media/folio-1.png'
import folioAgentLibrary from '../media/folio-2.png'
import folioInvoice from '../media/folio-3.png'
import folioComparison from '../media/folio-4.png'

export interface ProjectImage {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export const folioImages: ProjectImage[] = [
  {
    src: folioDocumentChat,
    alt: 'Folio-startscherm voor Document Chat met PDF-upload, chatinterface en navigatie naar de AI-agents.',
    caption: 'Document Chat',
    width: 1573,
    height: 885,
  },
  {
    src: folioAgentLibrary,
    alt: 'Folio-agentbibliotheek met categorieën en kaarten voor documentvergelijking, retourbeoordeling en klantenservice.',
    caption: 'AI-agentbibliotheek',
    width: 1571,
    height: 884,
  },
  {
    src: folioInvoice,
    alt: 'Folio-factuurverwerking met een fictieve testfactuur en een conclusie over gevonden afwijkingen in het totaalbedrag.',
    caption: 'Factuurverwerking',
    width: 1567,
    height: 885,
  },
  {
    src: folioComparison,
    alt: 'Folio-documentvergelijking met twee PDF-versies, een vergelijkingsrapport en bevindingen met bronverwijzingen.',
    caption: 'Documentvergelijking',
    width: 1573,
    height: 885,
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
    width: 1573,
    height: 890,
  },
  {
    src: loods5Products,
    alt: 'Productoverzicht van de Loods 5-webshop met banken, categoriefilters en sorteermogelijkheden.',
    caption: 'Productoverzicht',
    width: 1575,
    height: 888,
  },
  {
    src: loods5Product,
    alt: 'Productdetailpagina van de Loods 5-webshop met productfoto, uitvoeringskeuze en bestelgegevens.',
    caption: 'Productpagina',
    width: 1571,
    height: 887,
  },
]
