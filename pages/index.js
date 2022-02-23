import {
  fetchNotionData,
  getLastSixMonths,
  isCurrentMonth,
  sumMonths
} from '../helpers'
import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  Hello,
  EmailWrapper,
  HeaderLinks,
  LeaderboardsMonth,
  LeaderboardsSixMonths,
  Banner,
  Winner,
  Promocode,
  Prize,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'

const Home = ({ data }) => {
  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner />
        <Promocode />
        <FooterContacts />
        <FooterLinks />
        <Footer />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export async function getStaticProps(context) {
  const data = []

  return {
    props: {
      data
    }
  }
}

export default Home
