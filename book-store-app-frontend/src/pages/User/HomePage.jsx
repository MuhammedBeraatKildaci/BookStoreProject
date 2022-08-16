import { Helmet } from 'react-helmet'
import BookCardList from '../../components/BookCardList'
import Footer from '../../components/Footer'
import HomeHeadSection from '../../components/HomeHeadSection'

const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>BTK-INNOVA BOOKSTORE</title>
    </Helmet>
      <HomeHeadSection/>
      <BookCardList/>
      <Footer/>
    </>
  )
}

export default HomePage