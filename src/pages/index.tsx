import Logo from './components/logo';
import LanguagePicker from './components/languages';
import Columns from './components/columns';
import Instagram from './components/instagram';
import Footer from './components/footer';
import Container from './components/container'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

export default function Home() {
  return (
    <Container>
      <Logo />
      <LanguagePicker />
      <Columns />
      <Instagram />
      <Footer />
    </Container>
  )
}
